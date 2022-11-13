import React from 'react';
import './header.scss';

export default function Header() {
  const url = process.env.PUBLIC_URL
  return (
    <header className='header'>
      <h3 className='logo'>The F2E</h3>
      <ul className='nav'>
        <li className='nav-item'>
          關卡資訊
          <img src={url + '/images/star-nav.svg'} className='nav-break' alt=''/>
        </li>
        <li className='nav-item'>攻略資源
          <img src={url + '/images/star-nav.svg'} className='nav-break' alt=''/>
        </li>
        <li className='nav-item'>求職專區</li>
      </ul>
      <div className='btn-group'>
        <button className='btn btn-primary'>註冊報名</button>
        <button className='btn'>登入</button>
      </div>
    </header>
  )
}