import React from 'react'
import Form from '../Form/Form'
import Joi from 'joi-browser'

class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
      name: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().email().label('Username'),
    password: Joi.string().required().min(5).label('Password'),
    name: Joi.string().required().label('Name'),
  }

  doSubmit = () => {
    // call the server
    console.log('submitted')
  }

  render() {
    return (
      <div>
        <h1>Register Form</h1>
        <form onSubmit={this.handeleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    )
  }
}

export default RegisterForm
