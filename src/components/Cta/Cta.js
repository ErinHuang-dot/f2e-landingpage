import React from 'react';
import './cta.scss';

export default function Cta() {
  const url = process.env.PUBLIC_URL
  return (
    <section className='cta'>
      <div className='cta-container'>
        <div className='cta-img'>
          <img src={url + '/images/final-CTA-image.png'} alt='' />
        </div>
        <div className='cta-content'>
          <div>
            <h3 className='cta-title'>最強練功修煉合作</h3>
            <p>Together we can go far</p>
          </div>
          <img src={url + '/images/cta-star.png'} alt='' />
          <button className='cta-btn'>註冊報名</button>
        </div>
      </div>
    </section>
  )
}