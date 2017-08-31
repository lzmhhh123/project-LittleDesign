import React, {Component} from 'react'
import {Animation} from 'styled-animation'
import { SectionsContainer, Section } from 'react-fullpage'
//
// class Page1 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{
//         height: '70%',
//         marginTop: 150,
//         width: '100%',
//         backgroundImage: 'url(/image/number.png)',
//         backgroundSize: '70% 50%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: '40% 60%'
//       }}>
//         <div style={{fontSize: 20 * document.body.clientWidth / 1679, fontFamily: 'Helvetica', width: '100%', color: 'white', display: 'table'}}>
//           <div style={{marginLeft: '15%', display: 'inline-block'}}>—OFFICE</div>
//           <div style={{marginLeft: '15%', display: 'inline-block'}}>—PEOPLE</div>
//           <div style={{marginLeft: '20%', display: 'inline-block'}}>—PROJECT</div>
//         </div>
//       </div>
//     )
//   }
// }
//
// class Page2 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     const rowStyle= {width: '100%', display: 'table', height: '33.3%'}
//     return (
//       <div style={{height: '70%', marginTop: 150}}>
//         <div style={{
//           fontSize: 60 * document.body.clientWidth / 1679,
//           color: 'white',
//           textAlign: 'center',
//           fontFamily: 'Helvetica'
//         }}>
//           <div style={{height: 55 * document.body.clientWidth / 1679, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
//             The brand we’ve work along with
//           </div>
//           <div style={{height: 15 * document.body.clientWidth / 1679, width: 1075 * document.body.clientWidth / 1679, backgroundColor: '#FFE300', marginLeft: 'auto', marginRight: 'auto'}} />
//         </div>
//         <div style={{width: '70%', height: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '5%'}}>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-1.png)', backgroundSize: '55.40% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-2.png)', backgroundSize: '80% 33.33%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/104.png)', backgroundSize: '80% 30.80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-9.png)', backgroundSize: '80% 62.39%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-7.png)', backgroundSize: '80% 36.11%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-5.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-6.png)', backgroundSize: '80% 24.63%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-8.png)', backgroundSize: '73.3% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-3.png)', backgroundSize: '80% 70.18%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/5-01.png)', backgroundSize: '160% 160%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//           <div style={rowStyle}>
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-10.png)', backgroundSize: '80% 29.64%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-11.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-12.png)', backgroundSize: '100% 100%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-4.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//             <div style={{width: '20%', height: '100%', backgroundImage: 'url(/image/1-13.png)', backgroundSize: '80% 80%', display: 'inline-block', backgroundRepeat: 'no-repeat', backgroundPosition: '50% 50%'}} />
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
//
// class Page3 extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <div style={{marginTop: '150px', height: '55%', width: '100%', paddingTop: '5%'}}>
//         <div style={{
//           marginLeft: '10%',
//           fontSize: 50,
//           fontFamily: 'Helvetica',
//           width: 'fit-content', width: '-webkit-fit-content'
//         }}>
//           <div style={{width: 'fit-content', width: '-webkit-fit-content', height: 30}}>This is what we do</div>
//           <div style={{width: '100%', height: 15, background: '#FFE300'}}></div>
//         </div>
//         <div style={{
//           marginLeft: '10%',
//           marginTop: '3%',
//           fontSize: 14,
//           fontFamily: 'Helvetica'
//         }}>
//           一家小，而美的品牌策划公司。<br />
//           专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
//           运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
//         </div>
//         <div style={{
//           marginLeft: '10%',
//           marginTop: '3%',
//           fontSize: 14,
//           fontFamily: 'Helvetica'
//         }}>
//           一家小，而美的品牌策划公司。<br />
//           专业领域包括:消费者洞察、市场分析、品牌战略、品牌策划、视觉设计、活动策划、广告创意、<br />
//           运营推广以咨询、品牌、设计、广告、投资的多方复合背景，为客户提供「有创意」且「有实效」的专业服务。<br />
//         </div>
//       </div>
//     )
//   }
// }


class Page5 extends Component {
  constructor() {
    super()
    this.state = {
      height: 0
    }
  }

  handleResize(event) {
    event.preventDefault();
    this.setState({
      height: window.screen.availHeight * 0.7 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.setState({
      height: window.screen.availHeight * 0.7 * document.body.clientWidth / window.screen.availWidth
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    const rowStyle= {width: '100%', display: 'table', height: '33.3%'}
    return (
      <div style={{height: this.state.height, marginTop: 170}}>
        <div style={{
          fontSize: 36 * document.body.clientWidth / window.screen.width,
          textAlign: 'center',
          color: '#333333',
          fontFamily: "PingFangSC-Light"
        }}>
          <div style={{height: 30 * document.body.clientWidth / window.screen.width, width: 'fit-content', width: '-webkit-fit-content', marginLeft: 'auto', marginRight: 'auto'}}>
            The brand we’ve worked along with
          </div>
          <div style={{height: 16 * document.body.clientWidth / window.screen.width, width: 600 * document.body.clientWidth / window.screen.width, backgroundColor: '#FFE300', marginLeft: 'auto', marginRight: 'auto'}} />
        </div>
        <div style={{
          width: '70%',
          height: '70%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '5%',
          backgroundImage: 'url(/image/4-021.png)',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }} />
      </div>
    )
  }
}

export class Page1 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -400
    }
  }

  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -400 : -400 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -400 : -400 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  render() {
    return (
      <div style={{overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <div className='gifp1' style={{
          height: `${this.state.height}px`, maxWidth: `${this.state.maxWidth}px`, marginBottom: `${this.state.marginBottom}px`}}
          ref='gifp1' />
        <br />
        <div style={{color: '#333333',
                  fontFamily: 'PingFangSC-Light',
                  fontSize: 16,
                  textAlign: 'right',
                  position: 'relative',
                  right: '5%',
                  width: '35%',
                  marginLeft: '60%'
                }}>
          <br />
          基于广告、战略、金融、创业的复合背景
          <br />
          <br />
          我们为品牌创立、品牌转型、品牌升级
          <br />
          <br />
          提供既科学又有创造力的
          <br />
          完美解决方案
          <br />
          <br />
          <div style={{float: 'right', width: 345}}>
            <img src="/image/title_SB_cn.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-15px'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: 425, marginTop: 8}}>
            <img src="/image/title_SB_en.png"
              onMouseMove={() => {this.setState({ line1: 345, line2: 425})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-25px'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export class Page2 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -430
    }
  }

  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -430 : -430 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -430 : -430 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }


  render() {
    return (
      <div className="right" style={{overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <div className='gifp2'
          style={{height: `${this.state.height}px` , maxWidth: `${this.state.maxWidth}px`, marginBottom: `${this.state.marginBottom}px`}}
          ref='gifp2' />
        <br />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Light",
                  fontSize: 16,
                  textAlign: 'left',
                  position: 'relative',
                  marginLeft: '84px',
                  width: '40%'
                }}>
          依靠精心策划的品牌策略
          <br />
          以及对消费市场的洞察
          <br />
          <br />
          我们致力于创造既让人惊叹、
          <br />
          又逼人买单的杰出作品
          <br />
          <br />
          我们擅长的不多，
          <br />
          也就全案、活动、视频、平面等等
          <br />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_CPD_cn.png"
            onMouseMove={() => {this.setState({ line1: 340, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_CPD_en.png"
            onMouseMove={() => {this.setState({ line1: 345, line2: 600})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
        </div>
      </div>
    )
  }
}

export class Page3 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -430
    }
  }

  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -430 : -430 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.65;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -430 : -430 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }


  render() {
    return (
      <div style={{overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <div className='gifp3'
          style={{height: `${this.state.height}px`, maxWidth: `${this.state.maxWidth}px`, marginBottom: `${this.state.marginBottom}px`}}
          ref='gifp3' />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Light",
                  fontSize: 16,
                  textAlign: 'right',
                  position: 'relative',
                  right: '50px',
                  width: '43%',
                  marginLeft: '54%'
                }}>
          我们坚信
          <br />
          有趣就是生产力的一部分
          <br />
          <br />
          另一部分
          <br />
          是不可描述的精耕细作
          <br />
          <br />
          我们与客户深入合作
          <br />
          将一切好的立意变成实在的效益
          <br />
          <br />
          并且共同承担风险收益
          <br />
          <br />
          <div style={{float: 'right', width: 390}}>
            <img src="/image/title_SMS_cn.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line1 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-15px'
            }} />
          </div>
          <br />
          <div style={{float: 'right', width: 600, marginTop: 8}}>
            <img src="/image/title_SMS_en.png"
              onMouseMove={() => {this.setState({ line1: 390, line2: 600})}}
              onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
              style={{opacity: 0.9}}
            />
            <div style={{
              backgroundColor: '#FFE300',
              height: '15px',
              width: this.state.line2 + 'px',
              transition: "all 0.5s linear",
              marginTop: '-25px'
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export class Page4 extends Component {
  constructor() {
    super()
    this.state = {
      line1: 0,
      line2: 0,
      maxWidth: 0,
      height: 0,
      marginBottom: -472
    }
  }

  handleResize(event) {
    event.preventDefault();
    let width = document.body.clientWidth * 0.6;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -472 : -472 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    let width = document.body.clientWidth * 0.6;
    this.setState({
      maxWidth: 1040 * window.screen.height * 0.8 / 832,
      height: width >= 1040 * window.screen.height * 0.8 / 832 ? window.screen.height * 0.8 : window.screen.height * 0.8 * width / (1040 * window.screen.height * 0.8 / 832),
      marginBottom: width >= 1040 * window.screen.height * 0.8 / 832 ? -472 : -472 * width / (1040 * window.screen.height * 0.8 / 832)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }


  render() {
    return (
      <div className="right" style={{overflow: 'hidden', height: '100%', minWidth: 'fit-content', minWidth: '-webkit-fit-content', width: '100%'}}>
        <div className="gifp4"
          style={{height: `${this.state.height}px`, maxWidth: `${this.state.maxWidth}px`, marginBottom: `${this.state.marginBottom}px`}}
          ref='gifp4' />
        <br />
        <div style={{color: '#333333',
                  fontFamily: "PingFangSC-Light",
                  fontSize: 16,
                  textAlign: 'left',
                  position: 'relative',
                  left: '84px',
                  width: '40%'
                }}>
          “文案日成堆，愁眉展不开……”
          <br />
          小编抱怨道，顺便想卖弄一波文才
          <br />
          <br />
          我们却回答：“成堆是谁？”
          <br />
          <br />
          有个资历颇深的砖家说过：
          <br />
          “抓住年轻人，才能抓住新市场；
          <br />
          懂得骚浪贱，才能抓住年轻人”
          <br />
          <br />
          大概说的，就是我司。
          <br />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line1 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_SM_cn.png"
            onMouseMove={() => {this.setState({ line1: 290, line2: 280})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
          <br />
          <div style={{
            backgroundColor: '#FFE300',
            height: '15px',
            width: this.state.line2 + 'px',
            transition: "all 0.5s linear",
            position: 'relative',
            bottom: '-45px',
          }} />
          <img src="/image/title_SM_en.png"
            onMouseMove={() => {this.setState({ line1: 290, line2: 280})}}
            onMouseOut={() => {this.setState({ line1: 0, line2: 0})}}
            style={{opacity: 0.9}}
          />
        </div>
      </div>
    )
  }
}

export default class extends Component {
  constructor() {
    super()
  }
  mapAnchors() {
    let r = []
    for(let i = 1; i <= 5; ++i) {
      r = r.concat(['section' + i])
    }
    return r
  }
  render() {
    let options = {
      activeClass:          'active',
      anchors:              this.mapAnchors(),
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
    console.log(window.location);
    return (
      <Animation name="slideInUp" duration="2s">
        <SectionsContainer {...options} >
          <Section><Page1 /></Section>
          <Section><Page2 /></Section>
          <Section><Page3 /></Section>
          <Section><Page4 /></Section>
          <Section><Page5 /></Section>
        </SectionsContainer>
      </Animation>
    )
  }
}
