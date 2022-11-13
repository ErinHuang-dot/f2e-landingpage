import React from 'react';
import './award.scss';

export default function Award(props) {
  return (
    <section className='award'>
      <div className='award-container'>
        <p className='award-subtitle'>區區修煉已經無法滿足了嗎？</p>
        <h2 className='award-title'>還有比賽等著你！</h2>
        <div className='award-top'>
          <div className='award-header'>
            <img src='/images/arrow-right-grey.png' alt='' className='award-header-img'/>
            <h3 className='award-header-title'>評審機制</h3>
            <img src='/images/arrow-left-grey.png' alt='' className='award-header-img'/>
          </div>
          <div className='award-top-body border-e-black'>
            <h4>初選</h4>
            <p>將由六角學院前端、UI 評審進行第一波篩選。</p>
          </div>
          <div className='award-top-body'>
            <h4>決選</h4>
            <p>由六角學院與贊助廠商討論，進行最後篩選，並12/30(五) 由評審進行直播公布名單！</p>
          </div>
        </div>
        <div className='award-bottom'>
          <div className='award-header'>
            <img src='/images/arrow-right-grey.png' alt='' className='award-header-img'/>
            <h3 className='award-header-title'>獎項</h3>
            <img src='/images/arrow-left-grey.png' alt='' className='award-header-img'/>
          </div>
          { props.data ? props.data.map(item => {
            return (
              <div 
                className='award-bottom-body border-e-black' 
                style={{backgroundColor: item.background}}
                key={item.id}>
                <div className='award-bottom-body-content'>
                  <h3>{item.title}</h3>
                  <img src='/images/KV-4.png' alt=''/>
                  <p>{item.prize}
                  { item.unit && <span>/ {item.unit}</span>}
                  </p>
                </div>
                <p className='award-bottom-body-footer'>{item.amount}</p>
              </div>
            )})
          : 'loading'}
        </div>
        <p>以上皆提供完賽數位獎狀</p>
      </div>
    </section>
  )
}