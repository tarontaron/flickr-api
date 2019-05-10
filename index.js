import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './core/redux/store'
import AppRoutes from './core/routes'

const store = configureStore()

// main app
import App from './containers/App'

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
)
