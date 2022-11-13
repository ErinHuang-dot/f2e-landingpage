import React from 'react';
import './cta.scss';

export default function Cta() {
  return (
    <section className='cta'>
      <div className='cta-container'>
        <div className='cta-img'>
          <img src='/images/final-CTA-image.png' alt='' />
        </div>
        <div className='cta-content'>
          <div>
            <h3 className='cta-title'>最強練功修煉合作</h3>
            <p>Together we can go far</p>
          </div>
          <img src='/images/cta-star.png' alt='' />
          <button className='cta-btn'>註冊報名</button>
        </div>
      </div>
    </section>
  )
}