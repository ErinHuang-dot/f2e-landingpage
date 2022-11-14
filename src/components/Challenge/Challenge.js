import React from 'react';
import './challenge.scss';

export default function Challenge(props) {
  const url = process.env.PUBLIC_URL
  return (
    <section className='challenge' id='challenge'>
      <h2 className='section-title'>年度最強合作</h2>
      <h2 className='section-title challenge-title'>三大主題來襲</h2>
      <p className='challenge-subtitle'>各路廠商強強聯手，共同設計出接地氣的網頁互動挑戰關卡</p>
      <ul className='challenge-card-list'>
        { props.data ? props.data.map(item => {
          return (
            <li 
              className='challenge-card' 
              key={item.id}>
              <p className='challenge-card-tag'><span>Week</span>{item.id}</p>
              <div className='challenge-card-body'>
                <div className='challenge-card-header'>
                  <h3 className='challenge-card-title'>{item.title1}<br/>{item.title2}</h3>
                  <span className='challenge-card-subtitle'># {item.tag}</span>
                  <img 
                    src={url + item.firstImage} 
                    alt='' 
                    className='challenge-card-img'/>
                </div>
                <div className='challenge-card-footer'>
                  <div className='challenge-card-footer-s'>
                    <img src={url + item.logoImage} alt=''/>
                    <p><small>贊助商</small><br/>{item.sponsor}</p>
                  </div>
                  <div className='challenge-card-footer-e'>
                    <span>關卡細節</span>
                    <img src={url + '/images/arrow-right.png'} alt='' />
                  </div>
                </div>
              </div>
            </li>
          )})
        : 'loading'}
      </ul>
    </section>
  )
}