import React from 'react';
import './hero.scss';

export default function Hero() {
  const url = process.env.PUBLIC_URL
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='hero-top'>
          <div className='hero-top-start'>
            <img src={url + '/images/KV-1.png'} alt=''/>
          </div>
          <div className='hero-top-end'>
            <span className='tag'>4th</span>
            <h1>The F2E</h1>
            <img src={url + '/images/KV-2.png'} alt='' className='kv-eye'/>
          </div>
        </div>
        <div className='hero-middle'>
          <div>
            <img src={url + '/images/KV-7.png'} alt=''/>
          </div>
          <div className='hero-middle-center'>
            <h2>互動式<span className='hero-middle-center-title'>網頁設計</span></h2>
            <div className='hero-middle-center-kv'>
              <img src={url + '/images/KV-4.png'} alt='' className='kv-star'/>
              <img src={url + '/images/KV-5.png'} alt=''/>
            </div>            
            <p className='hero-middle-center-sub'>HexSchool</p>
          </div>
          <div>
            <img src={url + '/images/KV-3.png'} alt=''/>
          </div>
        </div>
        <div className='hero-bottom'>
          <p className='board-count'>Total:<span className='board-number-l'>1088</span></p>
          <p className='board-count'>Personal:<span className='board-number-l'>376</span></p>
          <p className='board-count'>Team:<span className='board-number-l'>122</span></p>
          <p className='board-time'>報名倒數
            <span className='board-number-s'>6</span>
            <span className='board-unit'>天</span>
            <span className='board-number-s'>8</span>
            <span className='board-unit'>時</span>
            <span className='board-number-s'>0</span>
            <span className='board-unit'>分</span>
            <span className='board-number-s'>56</span>
            <span className='board-unit'>秒</span>
          </p>
        </div>     
      </div>
      <div className='scroll-down'>
          <p>Scroll down</p>
          <img src={url + '/images/scroll-down.png'} alt='' className='arrow-scroll-down'/>
        </div> 
    </section>
  )
}