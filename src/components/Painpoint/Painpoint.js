import React from 'react';
import './painpoint.scss';

export default function Painpoint() {
  const url = process.env.PUBLIC_URL
  return (
    <section className='painpoint'>
      <h3 className='section-title'>你是否也有以下困擾？</h3>
      <ul className='pain-list'>
        <li>
          <div className='image-painpoint-g'>
            <img src={url + '/images/image-painpoint-1.png'} alt=''className='image-painpoint1' />
            <img src={url + '/images/image-painpoint-1-inside.png'} alt='' className='image-painpoint1-inside'/>
          </div>
          <div className='pain-item-text'>
            <p>羨慕別人的</p>
            <p>酷酷網頁動畫？</p>
          </div>                  
        </li>
        <li>
          <div className='image-painpoint-g'>
            <img src={url + '/images/image-painpoint-2.png'} alt=''className='image-painpoint2' />
            <img src={url + '/images/image-painpoint-2-inside.png'} alt='' className='image-painpoint2-inside'/>
          </div>
          <div>
            <p>滿足不了</p>
            <p>同事的許願？</p>
          </div>                  
        </li>
        <li>
          <div className='image-painpoint-g'>
            <img src={url + '/images/image-painpoint-3.png'} alt=''className='image-painpoint3' />
            <img src={url + '/images/image-painpoint-3-inside.png'} alt='' className='image-painpoint3-inside'/>
          </div>
          <div className='pain-item-text'>
            <p>動畫技能樹太雜</p>
            <p>無從下手？</p>
          </div>                  
        </li>
      </ul>
    </section>
  )
}