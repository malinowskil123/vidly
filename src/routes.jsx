import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Movies from './components/Movies/Movies'
import Rentals from './components/Rentals/Rentals'
import Customers from './components/Customers/Customer'
import NotFound from './components/NotFound/NotFound'
import MovieForm from './components/MovieForm/MovieForm'
import LoginForm from './components/LoginForm/LoginForm'
import RegisterForm from './components/RegisterForm/RegisterFrom'

// path use in ROUTE and to REDIRECT or LINK or NAVLINK **********
export default (
  <Switch>
    <Route path='/login' component={LoginForm} />
    <Route path='/register' component={RegisterForm} />
    <Route path='/movies/new' component={MovieForm} />
    <Route path='/movies/:id' component={MovieForm} />
    <Route path='/movies' component={Movies} />
    <Route path='/customers' component={Customers} />
    <Route path='/rentals' component={Rentals} />
    <Route path='/not-found' component={NotFound} />
    <Redirect exact from='/' to='/movies' />
    <Redirect to='/not-found' />
  </Switch>
)
