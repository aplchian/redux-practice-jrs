import React from 'react'
import {connector} from '../store'
import {Link} from 'react-router'

module.exports = connector((props) => (
  <div>
    <h1>Home</h1>
    <Link to="/about">About</Link>
    <br/>
    <input
      type="text"
      value={props.name}
      onChange={e => props.setName(e.target.value)}
    />
  </div>
))
