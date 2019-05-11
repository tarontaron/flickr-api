/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'

import {getPhotots, getBaskets, getStoreMessageKey} from '../../../../selectors'

import {storeToBasket, clearMessage} from '../../../../redux/actions'

import SingleImage from '../SingleImage'
import Basket from '../Basket'
import { bindActionCreators } from 'redux'

import './index.scss'

const mapStateToProps = (state) => ({
  photos: getPhotots(state),
  baskets: getBaskets(state),
  storeMessageKey: getStoreMessageKey(state)
})

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
      {
        storeToBasket,
        clearMessage
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
    const {photos, storeToBasket, baskets, storeMessageKey, clearMessage} = this.props
    return (
        <React.Fragment>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={!!storeMessageKey}
            autoHideDuration={2000}
            message={<span>{storeMessageKey && storeMessageKey !== 'wrong' ? `your image has been moved to ${storeMessageKey} basket` : 'Wrong Basket'} </span>}
            action={[
            <Button key="ok thanks" color="secondary" size="small" onClick={clearMessage}>
              ok thanks
            </Button>
          ]}

          />
          <div className="images-container">
            {photos && photos.map((photo, i) => (
                <SingleImage showStoringMessage={this.showStoringMessage} key={i} photo={photo} storeToBasket={storeToBasket} />
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
