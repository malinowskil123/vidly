import React from 'react'

export default function Input({ id, label, error, ...rest }) {
  return (
    <div className='form-group'>
      <label htmlFor={id}>{label}</label>
      <input {...rest} name={id} id={id} className='form-control' />
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  )
}
