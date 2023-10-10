import React, { useState } from 'react';
import Carousel from './Carousel';
import Carous from './Carousel';

// <Carous />

function Main() {

    return (
        <div className="main">

            <section className='section-one'>
                <span>Проект в котором каждый может <br />внести свой вклад.</span>
                <p> UNDeRWAY - это эксперементальный проект,
                    коорый <br /> дает возможность каждому предложить свое решение проблемы проекта.
                </p>
                <div className="block">
                    <a>Стать частью проекта!</a>
                </div>
            </section>

            <section className='section-two'>
                <div className="img-block">
                    <img className='img-left' src='imgs_2/fase_3.png'/>
                    <img className="img-right" src='imgs_2/ass_2.png'/>
                </div>

            </section>
            <section className="section-three">
                <span>Безопасный подземный беспилотный <br />общественный транспорт.</span>
                <p>Представляет из себя сеть подземных тунэлей, в которых будует<br /> реализовано движение беспилотных автобусов.
                </p>
                <div className="block">
                    <div className="block-item">
                        <span>Техническое развитие</span>
                        <p>Проектирование и создание беспилотных транспортных средств,
                            способных работать в условиях подземных тоннелей.
                        </p>
                    </div>
                    <div className="block-item">
                        <span>Безопасность</span>
                        <p>Обеспечение максимальной безопасности пассажиров,
                            включая системы мониторинга состояния техники.
                        </p>
                    </div>
                    <div className="block-item">
                        <span>Устойчивость эксплуатации</span>
                        <p>Разработка устойчивых моделей управления,
                            обеспечивающих непрерывную работу системы.
                        </p>
                    </div>
                </div>
            </section>
            <section className='section-vour'>
                <div className="footer">
                    <div className="top">
                        <div className="top-left">
                            <div className="title">
                                <span>Вступить,</span>
                                <p>в группу.</p>
                            </div>
                            <div className="input-block">
                                <input placeholder="Ваш email" />
                            </div>
                            <div className="text">
                                <p>Ваше вступление в нашу группу будет отличным двигателем прогресса,
                                    читай блог, чтобы узнать больше.
                                </p>
                            </div>
                        </div>
                        <div className="top-right">
                            <div className="company">
                                <span>Компания</span>
                                <p>О Нас</p>
                                <p>Подробнее</p>
                            </div>
                            <div className="support">
                                <span>Поддержка</span>
                                <p>Помощь и ссылкиs</p>
                                <p>skorohodroman921@gmail.com</p>
                                <p>Мобильный: (918) 522 96-65</p>
                                <p>Стать спонсором</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Main
