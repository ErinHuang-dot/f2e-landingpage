import React from 'react';
import './sponsors.scss';

export default function Sponsors(props) {
  const url = process.env.PUBLIC_URL
  return (
    <section className='sponsor'>
      <div className='sponsor-container'>
        <div className='sponsor-title-body'>
          <img src={url + '/images//sponsor-star.png'} alt='' />
          <h2 className='sponsor-title'>贊助單位</h2>
          <img src={url + '/images//sponsor-star.png'} alt='' />
        </div>
        <ul className='sponsor-list'>
          { props.data ? props.data.map(item => (
            <li key={item.id}>
              <img src={url + item.image} alt={item.name} />
            </li>
            ))
          : 'loading'}
        </ul>
      </div>
    </section>
  )
}