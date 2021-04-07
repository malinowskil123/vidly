import React from 'react'
import Joi from 'joi-browser'
import Form from '../Form/Form'

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: '',
    },
    errors: {},
  }

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  }

  doSubmit = () => {
    // call the server
    console.log('submitted')
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.handeleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
