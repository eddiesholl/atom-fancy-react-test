import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ClassBased extends Component {
  static propTypes = {
    f: PropTypes.func.isRequired,
    s: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <Nested a={'a'} b={'b'}>
          <div />
        </Nested>
        <AnotherComponent c={'c'} />
      </div>
    )
  }
}

// ClassBased.propTypes = {
//   f: PropTypes.func.isRequired,
//   s: PropTypes.string.isRequired
// }
