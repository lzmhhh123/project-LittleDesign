import React, { Component } from 'react'
import Nav from './Nav'
import {browserHistory} from 'react-router'
import {Header} from 'react-fullpage'

export default class extends Component {
  constructor() {
    super()
    this.state = {
      about: 0,
      portfolio: 0,
      contact: 0,
      home: 1
    }
    this.clickAbout = this.clickAbout.bind(this)
    this.clickPortfolio = this.clickPortfolio.bind(this)
    this.clickContact = this.clickContact.bind(this)
    this.clickHome = this.clickHome.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      let about = 0, portfolio = 0, contact = 0, home = 0;
      if (window.location.pathname === '/') home = 1;
      if (window.location.pathname === '/about') about = 1;
      if (window.location.pathname === '/contact') contact = 1;
      if (window.location.pathname === '/portfolio') portfolio = 1;
      this.setState({about, home, portfolio, contact});
    }, 0)
  }

  clickAbout(event) {
    event.preventDefault()
    this.setState({
      about: 1,
      portfolio: 0,
      contact: 0,
      home: 0
    })
    browserHistory.push('/about')
  }

  clickPortfolio(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 1,
      contact: 0,
      home: 0
    })
    browserHistory.push('/portfolio')
  }

  clickContact(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 1,
      home: 0
    })
    browserHistory.push('/contact')
  }

  clickHome(event) {
    event.preventDefault()
    this.setState({
      about: 0,
      portfolio: 0,
      contact: 0,
      home: 1
    })
    browserHistory.push('/')
  }

  render() {
    let color = this.state.about === 1 && window.location.hash !== '#section2' ? 'black' : 'white'
    return (
      <div style={{backgroundColor: color}}>
        <Header>
          { this.state.about === 0 || window.location.hash === '#section2' ?
            <div style={{height: 50, width: '100%', backgroundImage: 'url(/image/banner_mobile@2x.png)'}} /> :
            <div style={{height: 50, width: '100%', backgroundColor: 'black'}} />
          }
          <Nav
            clickAbout={this.clickAbout}
            clickPortfolio={this.clickPortfolio}
            clickContact={this.clickContact}
            clickHome={this.clickHome}
            home={this.state.home}
            about={this.state.about}
            portfolio={this.state.portfolio}
            contact={this.state.contact}
          />
        </Header>
        {this.props.children}
      </div>
    )
  }
}
