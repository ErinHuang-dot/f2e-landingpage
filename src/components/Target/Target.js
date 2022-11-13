import React from 'react';
import './target.scss';

export default function Target() {
  const url = process.env.PUBLIC_URL
  return (
    <section className='target'>
      <div className='target-subtitle'>
        <p>TOGETHER</p>
        <p>WE CAN</p>
        <p>GO FAR</p>
      </div>
      <h2 className='target-title'>
        UI設計師
          <span className='target-title-deco'>X</span>
        前端工程師
      </h2>
      <div className='target-kv'>
        <img src={url + '/images/image-solution-outside.png'} alt='' className='target-kv-outside'/>
        <img src={url + '/images/image-solution-inside.png'} alt='' className='target-kv-inside'/>
      </div>
    </section>
  )
}