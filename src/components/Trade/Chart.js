import React, { Component, Fragment } from "react"
import { inject, observer } from "mobx-react"
import { compose } from "recompose"

class Chart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Fragment />
  }
}

export default compose(
  inject("marketStore"),
  observer
)(Chart)