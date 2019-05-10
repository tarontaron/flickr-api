/* @flow */

import React, { Component } from 'react'
import InputPreview from './testInput'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setMessage } from '../../redux/actions'
import { getMessage } from '../../selectors'

import { Link } from 'react-router-dom'

const mapStateToProps = state => {
  return {
    message: getMessage(state)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setMessage
    },
    dispatch
  )

class Main extends Component {
  render() {
    return (
      <div>
        <InputPreview
          message={this.props.message}
          setMessage={this.props.setMessage}
        />
        <Link to="/about">
          <button>go to about us</button>
        </Link>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
