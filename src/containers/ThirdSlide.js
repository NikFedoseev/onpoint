import React from 'react';
import './ThirdSlide.css'

import IceBrick from '../components/IceBrick';

const ThirdSLide = props => {
  return (
    <div className='third-slide horizontal-slide'>
      <div className='third-slide-title'>Звенья патогенеза СД2</div>
      <div className='third-slide-box'></div>
      <IceBrick id='11' top='109' left='-5'/>
      <IceBrick id='12' top='212' left='936'/>
      <IceBrick id='13' top='588' left='153'/>
    </div>
  )
}

export default ThirdSLide;