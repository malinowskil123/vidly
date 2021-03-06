import React, { Component } from 'react'
import Joi from 'joi-browser'
import Input from '../Input/Input'
import Select from '../Select/Select'

class Form extends Component {
  state = {
    data: {},
    errors: {},
  }

  validate = () => {
    const { data: account } = this.state
    const options = { abortEarly: false }
    const { error } = Joi.validate(account, this.schema, options)
    if (!error) return null
    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }

  validateProperty = ({ id, value }) => {
    const obj = { [id]: value }
    const schema = { [id]: this.schema[id] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handeleSubmit = (e) => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
    this.doSubmit()
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)
    if (errorMessage) errors[input.id] = errorMessage
    else delete errors[input.id]
    const data = { ...this.state.data }
    data[input.id] = input.value
    this.setState({ data, errors: errors || {} })
  }

  renderButton = (label) => {
    return (
      <button disabled={this.validate()} className='btn btn-primary'>
        {label}
      </button>
    )
  }

  renderDropDown = (id, label, options) => {
    const { data, errors } = this.state
    return (
      <Select
        id={id}
        label={label}
        options={options}
        value={data[id]}
        errors={errors}
        onChange={this.handleChange}
      />
    )
  }

  renderInput = (id, label, type = 'text') => {
    const { data, errors } = this.state
    return (
      <Input
        type={type}
        id={id}
        label={label}
        value={data[id]}
        onChange={this.handleChange}
        error={errors[id]}
      />
    )
  }
}

export default Form
