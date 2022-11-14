import React from 'react';
import './header.scss';

export default function Header() {
  const url = process.env.PUBLIC_URL
  return (
    <header className='header'>
      <h3 className='logo'>The F2E</h3>
      <ul className='nav'>
        <li className='nav-item'>
          <a href='#challenge'>關卡資訊</a>
          <img src={url + '/images/star-nav.svg'} className='nav-break' alt=''/>
        </li>
        <li className='nav-item'>
          <a href='/'>攻略資源</a>
          <img src={url + '/images/star-nav.svg'} className='nav-break' alt=''/>
        </li>
        <li className='nav-item'>
          <a href='/'>求職專區</a>
        </li>
      </ul>
      <div className='btn-group'>
        <button className='btn btn-primary'>註冊報名</button>
        <button className='btn'>登入</button>
      </div>
    </header>
  )
}