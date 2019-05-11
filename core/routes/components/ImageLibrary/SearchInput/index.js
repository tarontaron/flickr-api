/* @flow */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './index.scss'
import {storeImages} from '../../../../redux/actions'

import axios from 'axios'

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
      {
        storeImages
      },
      dispatch
    )

class SearchInput extends Component {
  state = {
    searchValue: ''
  }

  onChageInputValue = (searchValue) => {
    this.setState({searchValue})
  }

  onSearchClick = () => {
    const {storeImages} = this.props
    const api = axios.create({
      withCredentials: false
    })
    api.get(`https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z&per_page=5&page=2&lang=en-US&text=${this.state.searchValue}&method=flickr.photos.search&csrf=1557536841%3A0wiwkwze9i6%3A95b034f5a3b498f6cc87d81216ea8672&api_key=f416e40ea6c38b702f518bb6c00f1fe6&format=json&hermes=1&hermesClient=1&reqId=e51e88e6&nojsoncallback=1`)
    .then((res) => {
      storeImages(res.data.photos)
    })
  }

  render() {
    return (
      <div className="search-wrapper">
        <TextField
          label="Search here"
          value={this.state.searchValue}
          onChange={(e) => this.onChageInputValue(e.target.value)}
        />
        <button onClick={this.onSearchClick}>
          Search
        </button>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchInput)
