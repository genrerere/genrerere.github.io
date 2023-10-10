import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

function Footer() {
  return (
    <div className="footer-full">

      <div className="bottom">
        <div className="left">
          <span>2023 Студенческое образование</span>
          <div className="list">
            <a>Приватная подписка</a>
            <a>Тема сайта</a>
            <a>Обратная связь</a>
          </div>
        </div>
        <div className="right">
          <InstagramOutlined className='icon'/>
          <FacebookOutlined className='icon'/>
          <TwitterOutlined className='icon'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
