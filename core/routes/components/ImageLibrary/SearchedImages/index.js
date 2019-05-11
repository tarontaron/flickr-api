/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getPhotots} from '../../../../selectors'

import SingleImage from '../SingleImage'
import Basket from '../Basket'

import './index.scss'

const mapStateToProps = (state) => ({
  photos: getPhotots(state)
})

class SearchedImages extends Component {
  render() {
    const {photos} = this.props
    return (
        <React.Fragment>
          <div className="images-container">
            {photos && photos.map((photo, i) => (
                <SingleImage key={i} photo={photo} />
            ))}
          </div>
          <div className='baskets-wrapper'>
            <Basket name='cat'/>
            <Basket name='dog'/>
          </div>
        </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, null)(SearchedImages)
