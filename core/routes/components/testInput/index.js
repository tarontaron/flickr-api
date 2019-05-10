import React from 'react'

export default class InputPreview extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.props.setMessage(e.target.value)}
        />
        <span>{this.props.message}</span>
      </div>
    )
  }
}
