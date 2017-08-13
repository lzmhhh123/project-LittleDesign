import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
import {browserHistory, Link} from 'react-router'

class Footer extends Component {
  constructor() {
    super()
  }
  render() {
    let { isAddress } = this.props
    if(isAddress) {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: 14}}>
          media@xiaodeqihua.com<br />
          上海市 静安区 威海路696号<br />
          No.696 Weihai Road, Jing An District ,Shanghai
        </div>
      )
    }
    else {
      return (
        <div style={{textAlign: 'center', fontFamily: 'Helvetica', fontSize: 14}}>
          有想法?我们有兴趣。联系我们!<br />
          GET A PROJECT? We’d love to hear about it. Get in touch.
        </div>
      )
    }
  }
}

class Page2 extends Component {
  constructor() {
    super()
    this.state = {
      p: [false, false, false, false, false, false, false, false, false]
    }
    this.view = this.view.bind(this)
  }
  view(event) {
    event.preventDefault()
    window.location.pathname = '/pdf/page.pdf'
  }
  changeImage(index) {
    let { p } = this.state
    for(let i = 0; i < 9; ++i)
      p[i] = false;
    p[index] = true;
    this.setState({ p })
  }
  renderStyle() {
    let {p} = this.state
    let s = {
      marginTop: 150,
      height: '80%'
    }
    if(p[0]) {
      s['backgroundImage'] = 'url(/image/7.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '100% 70%'
      s['backgroundPosition'] = '0% 70%'
    }
    else if(p[2]) {
      s['backgroundImage'] = 'url(/image/head.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 70%'
      s['backgroundPosition'] = '20% 20%'
    }
    else if(p[7]) {
      s['backgroundImage'] = 'url(/image/圆环-01.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '50% 45%'
      s['backgroundPosition'] = '50% 65%'
    }
    else if(p[1]) {
      s['backgroundImage'] = 'url(/image/1-2.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '60% 70%'
      s['backgroundPosition'] = '50% 25%'
    }
    else if(p[4]) {
      s['backgroundImage'] = 'url(/image/computer.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 55%'
      s['backgroundPosition'] = '50% 70%'
    }
    else if(p[8]) {
      s['backgroundImage'] = 'url(/image/2027060392.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '85% 130%'
      s['backgroundPosition'] = '50% -200px'
    }
    else if(p[3]) {
      s['backgroundImage'] = 'url(/image/蛋糕品牌设计-02.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '45% 60%'
      s['backgroundPosition'] = '90% 20%'
    }
    else if(p[5]) {
      s['backgroundImage'] = 'url(/image/eye.png)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '30% 60%'
      s['backgroundPosition'] = '50% 70%'
    }
    else if(p[6]) {
      s['backgroundImage'] = 'url(/image/Cardboard.jpg)'
      s['backgroundRepeat'] = 'no-repeat'
      s['backgroundSize'] = '45% 65%'
      s['backgroundPosition'] = '90% 20%'
    }
    return s
  }
  render() {
    let styleLineTrue = {
      height: 20,
      width: '100%',
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let styleLineFalse = {
      height: 20,
      width: 0,
      background: '#FFE300',
      transition: 'all 0.5s linear'
    }
    let containStyle = this.renderStyle()
    return (
      <div style={containStyle}>
        <div style={{textAlign: 'center', fontSize: 14, fontFamily: 'Helvetica', marginBottom: 50}}>Made by 小的企划</div>
        <div style={{textAlign: 'center', fontSize: 40, fontFamily: 'Helvetica', height: '70%'}}>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(0)}>
                AWW
              </div>
              <div style={this.state.p[0] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(1)}>
                Zai Mei Jian在梅间
              </div>
              <div style={this.state.p[1] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(2)}>
                Mei Xiao Cong梅小聪
              </div>
              <div style={this.state.p[2] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(3)}>
                muse de patisserie
              </div>
              <div style={this.state.p[3] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(4)}>
                Lara Bohinc
              </div>
              <div style={this.state.p[4] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(5)}>
                Something Market 有眼
              </div>
              <div style={this.state.p[5] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
          <div style={{
            height: 50,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content', width: '-webkit-fit-content',
            display: 'table'
          }}>
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(6)}>
                Bayr
              </div>
              <div style={this.state.p[6] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(7)}>
                Roundabout
              </div>
              <div style={this.state.p[7] ? styleLineTrue : styleLineFalse}/>
            </div>
            &nbsp;/&nbsp;
            <div style={{display: 'inline-table', width: 'fit-content', width: '-webkit-fit-content'}}>
              <div style={{height: 30, width: 'fit-content', width: '-webkit-fit-content'}} onMouseOver={() => this.changeImage(8)}>
                Tabao maker festival 造物节
              </div>
              <div style={this.state.p[8] ? styleLineTrue : styleLineFalse}/>
            </div>
          </div>
        </div>
        <div style={{
          margin: 'auto',
          height: 24,
          width: 'fit-content', width: '-webkit-fit-content',
          backgroundColor: '#FFE300',
          textAlign: 'center',
          fontFamily: 'Helvetica',
          fontSize: 20,
        }} onClick={this.view}>VIEW PROJECT</div>
        <Footer isAddress={false} />
      </div>
    )
  }
}

export default class extends Component {
  constructor() {
    super()
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              ['section'],
      arrowNavigation:      true,
      className:            'SectionContainer',
      delay:                1000,
      navigation:           false,
      scrollBar:            false,
      sectionClassName:     'Section',
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      verticalAlign:        false
    }
    return (
      <Animation name="slideInUp" duration="2s">
        <SectionsContainer {...options} >
          <Section><Page2 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
