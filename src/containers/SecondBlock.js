import React, { Component } from 'react';
import './SecondBlock.css';

import IceBrick from '../components/IceBrick';

class SecondBlock extends Component {
  render () {
    let translate = (this.props.current > 1) ? 'translate3d(0,-70px, 1px)' 
    : (this.props.current < 1) ? 'translate3d(0,70px, 1px)' : 'translate3d(0, 0px, 1px)';
    const styleTranslate = {
      transform: translate,
      transition: '0.5s'
    }
    return (
      <div className='second-block'>
        <div className='second-block-title'>Основа терапии —<br/>патогенез СД2</div>
        <IceBrick style={styleTranslate} id='1' top='33' left='877'/>
        <IceBrick style={styleTranslate} id='2' top='161' left='82'/>
        <IceBrick style={styleTranslate} id='3' top='442' left='232'/>
        <IceBrick style={styleTranslate} id='4' top='585' left='713'/>
      </div>
    )
  }
}

export default SecondBlock;