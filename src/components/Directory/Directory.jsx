import React, { Component } from 'react'
import MenuItem from '../Menu-Item/MenuItem'
import './Directory.scss'

const sections = require('../../sections')

export default class Directory extends Component {
  constructor() {
    super()
    this.state = {
      sections: sections
    }
  }
  render() {
    return (
      <div className = 'directory-menu'>
        {this.state.sections.map(({id, ...otherSectionProps}) =>
          <MenuItem key={id} {...otherSectionProps}/>)}
      </div>
    )
  }
}

