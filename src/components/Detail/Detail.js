import React from 'react';
import './detail.scss';

export default function Detail(props) {
  const url = process.env.PUBLIC_URL
  return (
    <section className='detail'>
      <h2 className='section-title'>活動說明</h2>
      <ul className='detail-card-list'>
        { props.data ? props.data.map(item => {
          return (
            <li className='detail-card' key={item.id}>
              <div className='detail-card-header'>
                <img src={url + item.headerImage} alt=''/>
                <h4>{item.title}</h4>
              </div>
              <div className='detail-card-body'>
                <img src={url + item.bodyImage} alt=''/>
                <ul className='detail-card-text'>
                  {item.content ? item.content.map((content, i) => {
                    return (
                      <li key={i}>{content}</li>
                    )})
                  : 'loading'}
                </ul>
              </div>
            </li>
          )})
        : 'loading'}        
      </ul>
      <div className='detail-bottom'>
        <img src={url + '/images/detail-start-image.png'} alt='' className="detail-bottom-img"/>
        <div className='detail-bottom-header'>
          <h4 className='detail-bottom-title'>開賽時間</h4>
          <div className='detail-bottom-subtitle border-e-white'>
            <p>UI、團體組開賽</p>
            <img src={url + '/images/arrow-down.png'} alt='' className='arrow-down'/>
            <p>10/31  MON</p>  
          </div>
          <div className='detail-bottom-subtitle'>
            <p>前端組開賽</p>
            <img src={url + '/images/arrow-down.png'} alt='' className='arrow-down'/>
            <p>11/07  MON</p>
          </div>       
        </div>
        <p className='detail-bottom-text'>活動採用 UI、前端接力合作形式，前端工程師可採用 UI 設計師的設計稿，一同產出完整作品。</p>
      </div>
    </section>
  )
}