import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CustomButton from 'atoms/button'
import Icon from 'atoms/icon'

// demo component

export default class About extends Component {
  onHandleClick = () => {
    console.log('sdfd')
  }

  render() {
    return (
      <div>
        About
        <Link to="/">
          <CustomButton
            onClick={this.onHandleClick}
            label="go home"
            variant="contained"
            size="large"
            color="secondary"
            className="class-name"
            icon={
              <Icon
                size="20px"
                color="#000"
                name="android"
                customClassName="custom-class"
              />
            }
          />
        </Link>
      </div>
    )
  }
}
