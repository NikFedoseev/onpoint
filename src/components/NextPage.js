import React from 'react';

import './NextPage.css'

const NextPage = props => {
  return (
    <div className='next-page'>
      <div className='move-down'>
        <div>Листайте вниз</div>
        <span className='arrow-down'></span>
      </div>
      <div className='move-down-bg'></div>
    </div>
  )
}

export default NextPage;