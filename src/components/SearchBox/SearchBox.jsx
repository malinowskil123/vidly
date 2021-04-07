import React from 'react'

export default function SearchBox({ type = 'text', ...rest }) {
  return (
    <div className='form-group'>
      <input className='form-control my-3' type={type} {...rest} />
    </div>
  )
}
