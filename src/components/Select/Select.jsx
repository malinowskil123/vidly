import React from 'react'

export default function Select({ id, label, options, error, ...rest }) {
  return (
    <div className='from-group'>
      <label htmlFor={id}>{label}</label>
      <select {...rest} id={id} className='form-control'>
        <option value=''>{label}</option>
        {options.map((option) => {
          return (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          )
        })}
      </select>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}
