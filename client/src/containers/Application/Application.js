import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const mapStateToProps = ({ a, b }) => {
  expect(a).to.deepEqual(b)
  return {
    c: a,
    d: b
  };
}

export const App = () => (
  <div>
    hello
  </div>
)

App.propTypes = {
  func: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}

export const randoFunc = (a) => a

export default connect(mapStateToProps)(App)
