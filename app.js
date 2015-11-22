/**
 * Created by AntonioGiordano on 21/11/15.
 */

import React from 'react'
import ReactDOM from 'react-dom'
import ReactProductTour from './index.js'

var ReactProductTourDemo = React.createClass({
  startTour () {
    this.refs['rpt'].startTour()
  },
  render () {
    var steps = [
      {
        selector: '[data-rpt=title]',
        message: 'Let\'s point here!'
      },
      {
        selector: '[data-rpt=text]',
        message: 'Let\'s point to this text now!'
      }
    ]
    return (
      <div>
        <ReactProductTour ref='rpt' steps={steps} />
        <button onClick={this.startTour}>Start Tour</button>
      </div>
    )
  }
})

ReactDOM.render(<ReactProductTourDemo />, document.getElementById('rpt'))
