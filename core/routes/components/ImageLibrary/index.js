/* @flow */

import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchedImages from './SearchedImages'
import Baskets from './Baskets'
import './index.scss'

import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class ImageLibrary extends Component {
  render() {
    return (
      <div className="image-library-wrapper">
        <SearchInput/>
        <DragDropContextProvider backend={HTML5Backend}>
            <SearchedImages/>
        </DragDropContextProvider>
      </div>
    )
  }
}

export default ImageLibrary
