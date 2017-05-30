import React from 'react'
import { connect } from 'react-redux'

export const mapStateToProps = (b) => b;

export const App = () => (
  <div>
    hello
  </div>
)

export const randoFunc = (a) => a

export default connect(mapStateToProps)(App)
