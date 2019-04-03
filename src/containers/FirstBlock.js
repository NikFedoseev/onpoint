import React, { Component } from 'react';
import './FirstBlock.css';

import PulseCirlce from '../components/PulceCircle';
import NextPage from '../components/NextPage';

class FirstBlock extends Component {


  render () {
    //Parallax//
    const translate = (this.props.current > 0) ? 'translate3d(0,-70px, 1px)' : 'translate3d(0, 0px, 1px)'
    const styleTranslate = {
      transform: translate,
      transition: '0.5s'
    }

    return (
      <div className='first-block'>
        <div style={styleTranslate} className='headline-text'>Всегда ли цели терапии СД2<br/>на поверхности?</div>
        <PulseCirlce style={styleTranslate} dia='52' text='Цель по HbA1c' left='562' top='262' textTop ='14' textLeft='64'/>
        <PulseCirlce style={styleTranslate} dia='27' text='Гипогликемия' left='274' top='428' textTop ='-35' textLeft='-50'/>
        <PulseCirlce style={styleTranslate} dia='16' text='Осложнения СД' left='480' top='539' textTop ='-34' textLeft='-110'/>
        <PulseCirlce style={styleTranslate} dia='16' text='СС риски' left='823' top='517' textTop ='-32' textLeft='-31'/>
        <NextPage/>
      </div>
    )
  }
}

export default FirstBlock;