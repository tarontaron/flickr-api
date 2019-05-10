/* @flow */

import React, { Component } from 'react'
import SearchInput from './SearchInput'
import SearchedImages from './SearchedImages'
import Baskets from './Baskets'
import './index.scss'

class ImageLibrary extends Component {
  render() {
    return (
      <div className="image-library-wrapper">
        <SearchInput/>
        <SearchedImages/>
        <Baskets/>
      </div>
    )
  }
}

export default ImageLibrary
