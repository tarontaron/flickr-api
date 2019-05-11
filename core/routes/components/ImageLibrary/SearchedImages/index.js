/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getPhotots, getBaskets} from '../../../../selectors'

import {storeToBasket} from '../../../../redux/actions'

import SingleImage from '../SingleImage'
import Basket from '../Basket'
import { bindActionCreators } from 'redux'

import './index.scss'

const mapStateToProps = (state) => ({
  photos: getPhotots(state),
  baskets: getBaskets(state)
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        storeToBasket
      },
      dispatch
    )


class SearchedImages extends Component {
  state={
    type: 'cat'
  }

  openBasket = (type) => {
    this.setState({type})
  }
  render() {
    const {photos, storeToBasket, baskets} = this.props
    return (
        <React.Fragment>
          <div className="images-container">
            {photos && photos.map((photo, i) => (
                <SingleImage key={i} photo={photo} storeToBasket={storeToBasket} />
            ))}
          </div>
          <div className='baskets-wrapper'>
            <Basket onClick={this.openBasket} name='cat'/>
            <Basket onClick={this.openBasket} name='dog'/>
          </div>
          <div className='images-container'>
            {baskets[this.state.type].map((item, i) => (
              <img key={i} src={item.url_z}/>
              ))}
          </div>
        </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedImages)
