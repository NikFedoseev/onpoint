import React, { Component } from 'react';
import './ThirdBlock.css';

import FirstSLide from './FirstSlide';
import SecondSlide from './SecondSlide';
import ThirdSlide from './ThirdSlide';

import horizontalScroll from '../utils/horizontalScroll';
import Scroller from '../components/Scroller';

class ThirdBlock extends Component {
  state = {
    activeSlide: 0,
    prevSlide: 0
  }

  componentDidMount() {
    this.scroller = horizontalScroll();
    //this.scroller.moveLeft();
  }

  onSlideChande(active) {
    if (active == this.state.activeSlide) return
    if(this.state.activeSlide < active) {
      this.scroller.moveRight(this.state.activeSlide, active);
    } else {
      this.scroller.moveLeft(this.state.activeSlide, active);
    }
    this.setState({
      activeSlide: active
    })
    
  }
  
  render() {
    return (
      <div className='third-block'>
        <div className='slides-wrapper'>
          <FirstSLide/>
          <SecondSlide/>
          <ThirdSlide/>
        </div>
        <Scroller changeSlide={this.onSlideChande.bind(this)}/>
      </div>
    )
  }
}

export default ThirdBlock;