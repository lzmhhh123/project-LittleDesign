import React, {Component} from 'react'
import {
  Animate,
  Transition,
} from 'react-move'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      s: 0
    }
  }

  render() {
    let bar = this.state.s === 0 ? [
      {
        rotate: 0,
        translate: 0,
        opacity: 1
      },
      {
        rotate: 0,
        translate: 0,
        opacity: 1
      },
      {
        rotate: 0,
        translate: 0,
        opacity: 1
      }
    ] : [
      {
        rotate: -45,
        translate: -8.522,
        opacity: 1
      },
      {
        rotate: 0,
        translate: -35,
        opacity: 0
      },
      {
        rotate: 45,
        translate: -8.522,
        opacity: 1
      }
    ]
    let color = this.props.about === 1 ? 'white' : 'black'
    return (
      <div style={{height: 23, width: 28}} onClick={this.props.onClick}>
      {bar.map((val, k) =>
          <Animate data={val} key={k}>
            {
              data => {
                return <div style={{
                  width: '25px',
                  marginTop: '3px',
                  marginBottom: '3px',
                  height: '3px',
                  background: color,
                  borderRadius: '1px',
                  opacity: `${data.opacity}`,
                  transform: `rotate(${data.rotate}deg) translate(${data.translate}px)`
                }} />
              }
            }
          </Animate>
        )
      }
      </div>
    )
  }
}
