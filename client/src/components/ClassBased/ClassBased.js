import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Nested from 'src/components/Nested/Nested'
import AnotherComponent from 'src/components/AnotherComponent/AnotherComponent'

// This file is a good candidate to try out the 'tests' action'
export default class ClassBased extends Component {

  static propTypes = {
    f: PropTypes.func.isRequired,
    s: PropTypes.string.isRequired
  }

  /* The Nested and AnotherComponent snippets are great candidates to
     try out the 'generate' action */
  render() {
    return (
      <div>
        <Nested a={ {} } b={ {} }>
          <div />
        </Nested>
        <AnotherComponent c={'c'} />
      </div>
    )
  }
}
