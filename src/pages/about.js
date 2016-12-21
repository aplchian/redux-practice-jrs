import React from 'react'
import {connector} from '../store'
import {Link} from 'react-router'

module.exports = connector((props) => (
  <div>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </div>
))
