import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ButtonUI extends Component {
  static propTypes = {
    label: PropTypes.string
  }

  render() {
    const {
      label
    } = this.props

    return (
      <button onClick={() => console.log('click')}>{label}</button>
    )
  }
}
