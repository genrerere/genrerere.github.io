import { useState } from 'react';

function Header() {
    const [hover, setHover] = useState(false);
    const toggleHover = () => {
        setHover(!hover);
    }
  return (
    <div className="header">
        <nav className="nav-main">
            <span className="header__logo">
                <p>U</p>
                <p>N</p>
                <p>D</p>
                <p className='e-color'>e</p>
                <p>R</p>
                <p>W</p> 
                <p>A</p> 
                <p>Y</p> 
            </span>
            <ul className="nav-main__list">
                <li className="nav-main__item"><a href="#">Спонсорство</a></li>
                <li className="nav-main__item"><a href="#">Стадия разработки</a></li>
                <li className="nav-main__item"><a href="#">Блог</a></li>
                <li className="nav-main__item"><a href="#">Статьи участников</a></li>
                <li className="nav-main__item_btn"><a onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={hover ? 'active' : 'noActive'} href="#">Регистрация</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header