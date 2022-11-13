import React from 'react';
import './process.scss';

export default function Process(props) {
  return (
    <section className='process'>
      <h2 className='section-title'>挑戰流程</h2>
      <ul className='process-element-list'>
        { props.data ? props.data.map(item => {
          return (
            <li className='process-element' key={item.id}>
            <div className='process-element-header'>
              <div>
                <h3 className='process-element-header-title'>{item.title}</h3>
                <span>{item.time}</span>
                <p className='process-element-header-subtitle'>{item.subtitle}</p>
              </div>
              <div className='process-element-header-bottom'>
                <p>挑戰人員</p>
                <ul className='process-element-header-tag-list'>
                  { item.participants ? item.participants.map((participant, i) => 
                  <li className='process-element-header-tag' key={i}>{participant}</li>
                  ) : 'loading'}
                </ul>
              </div>
            </div>
            <img src={item.image} alt=''/>
            <p className='process-element-text'>每個挑戰主題提供 <strong>一週開發時間</strong><br/>
            未在 <strong>各週一中午 12:00</strong> 前登錄作品者<br/>
            當週即為挑戰失敗！</p>
          </li>
          )})
        : 'loading'}        
      </ul>
    </section>
  )
}
