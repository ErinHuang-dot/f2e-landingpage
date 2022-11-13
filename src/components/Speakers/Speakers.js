import React from 'react';
import './speakers.scss';

export default function Speakers(props) {
  return (
    <section className='speakers'>
      <h2 className='section-title'>各界大神接力分享</h2>
      <ul className='speakers-card-list'>
        { props.data ? props.data.map(item => {
          return (
          <li className='speakers-card' key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className='speakers-card-body'>
              <div className='speakers-card-body-header'>
                <span className='speakers-card-tag'>{item.tag}</span>
                <h3 className='speakers-card-title'>{item.topic}</h3>
                <p className='speakers-card-subtitle'>{item.date}</p>
              </div>
              <div className='speakers-card-body-center'>
                <img src='/images/arrow-right-small.png' alt='' />
                <h4>{item.name}</h4>
              </div>
              <p className='speakers-card-body-footer'>{item.position}</p>
            </div>
          </li>
          )})
        : 'loading'}
        
      </ul>
    </section>
  )
}