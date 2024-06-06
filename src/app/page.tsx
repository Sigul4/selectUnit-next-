'use client'

import Image from 'next/image';
import MySvg from '../../public/copy.svg';
import { MouseEvent, useState } from 'react';
import TextAnimationComponent from './shared/text animation/text-animation.component';

export default function Home() {

  const PHONE_NUMBER = '+380635981741';
  const LINKED_IN = 'https://www.linkedin.com/in/roman-tsigulov-20754b22b/';
  const EMAIL = 'romannamor637@gmail.com';
  const TELEGRAM = '@Tsigulov';

  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleIconClick = (e:  MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    // Логика копирования текста (здесь ваш код)

    // Получаем координаты клика
    const clickX = e.clientX;
    const clickY = e.clientY;

    // Устанавливаем координаты для попапа
    setPopupPosition({ x: clickX, y: clickY });

    // Показываем попап
    setPopupVisible(true);

    // Закрываем попап через 2 секунды
    setTimeout(() => {
      setPopupVisible(false);
    }, 4000);
  };

  return (
    <body>


      <div className="background"></div>
      <div className="text top-left">Screewwwn Magic: Frontend Magician's Portfolio with 3 Amazing Projects</div>
      <div className="text bottom-left">

      <div className="copy-popup">
        <div className="popup" style={{ top: `${popupPosition.y}px`, left: `${popupPosition.x + 20}px`, visibility:isPopupVisible ? "visible": "hidden" }}>
          Copied!
        </div>
      </div>
        <div className="main-content">
          <TextAnimationComponent></TextAnimationComponent>
        </div>
        <div className="contact-section">        

          <div className='contact-block telegram'>
            <button onClick={(event) => {
                handleIconClick(event);
                navigator.clipboard.writeText(TELEGRAM);
              }
            }>
              <Image priority src={MySvg} alt="SVG Image" ></Image>
            </button>
            <span>Telegram: 
              <a href="https://t.me/Tsigulov" target="_blank">{TELEGRAM}</a> 
            </span>
          </div>

          <div className='contact-block linkedIn'>
            <button onClick={(event) => {
                handleIconClick(event);
                navigator.clipboard.writeText(LINKED_IN);
              }
            }>
              <Image priority src={MySvg} alt={LINKED_IN} ></Image>
            </button>
            <span>LinkedIn: 
              <a href={LINKED_IN} target="_blank">Roman Tsigulov</a> 
            </span>
          </div>

          <div className='contact-block phone'>
            <button onClick={(event) => {
                handleIconClick(event);
                navigator.clipboard.writeText(PHONE_NUMBER);
              }
            }>
              <Image priority src={MySvg} alt={PHONE_NUMBER} ></Image>
            </button>
            <span>Phone: 
              <a href={"tel:" + PHONE_NUMBER}>+380 (063) 598 17 41</a> 
            </span>
          </div>

          <div className='contact-block email'>
            <button onClick={(event) => {
                handleIconClick(event);
                navigator.clipboard.writeText(EMAIL);
              }
            }>
              <Image priority src={MySvg} alt={EMAIL} ></Image>
            </button>
            <span>Email: 
              <a href={"mailto:" + EMAIL}>{EMAIL}</a> 
            </span>
          </div>
        </div>
      </div>
    </body>
  )
}
