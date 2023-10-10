import React from 'react';
import { Carousel } from 'antd';

function Carous() {

  const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  //https://avatars.mds.yandex.net/i?id=130f2d48a20f7a3ed968538d2a58d30f6a4c3e29-10122207-images-thumbs&n=13
  return (
    <Carousel autoplay className='carousel'>
      <div className='carous-block'>
        <div className='carous-div__first'></div>
      </div>
      <div className='carous-block'>
        <div className='carous-div__second'></div>
      </div>
      <div className='carous-block'>
        <div className='carous-div__third'></div>
      </div>
    </Carousel>
  )
}

export default Carous
