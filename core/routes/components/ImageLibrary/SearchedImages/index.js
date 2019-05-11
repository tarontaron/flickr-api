/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {getPhotots} from '../../../../selectors'

import SingleImage from '../SingleImage'

import './index.scss'

const mapStateToProps = (state) => ({
  photos: getPhotots(state)
})

class SearchedImages extends Component {
  render() {
    const {photos} = this.props
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="images-container">
          {photos && photos.map((photo, i) => (
              <SingleImage key={i} photo={photo} />
          ))}
        </div>
        <div className='baskets-wrapper'>
          <div className="basket">Cat</div>
          <div className="basket">Dog</div>
        </div>
      </DragDropContextProvider>
    )
  }
}

export default connect(mapStateToProps, null)(SearchedImages)
