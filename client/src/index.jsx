import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import fancyApp from './redux/reducers'
import App from './containers/App/App'

let store = createStore(fancyApp)

render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.getElementById('root')
)
