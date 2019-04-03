import React from 'react';
import './FirstSlide.css'

import IceBrick from '../components/IceBrick';

const FirstSLide = props => {
  return (
    <div className='first-slide horizontal-slide'>
      <div className='first-slide-title'>Звенья патогенеза СД2</div>
      <div className='first-slide-box'></div>
      <IceBrick id='5' top='112' left='911'/>
      <IceBrick id='6' top='227' left='666'/>
      <IceBrick id='7' top='554' left='21'/>
    </div>
  )
}

export default FirstSLide;