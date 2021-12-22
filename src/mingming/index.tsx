import React from 'react';
import style from './index.scss';
import box1 from '@assets/box1.png';
import box2 from '@assets/box2.png';
import box3 from '@assets/box3.png';
import box4 from '@assets/box4.png';
import box5 from '@assets/box5.png';

export default function Layout() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.item}>
          <img className={style.img} src={box1} />
          <div className={style.title}>
            <span>空间幻影盒</span>
            <span>XBOX-32A1</span>
          </div>
        </div>
        <div className={style.item}>
          <img className={style.img} src={box2} />
          <div className={style.title}>
            <span>空间幻影球</span>
            <span>XSPHERE-27</span>
          </div>
        </div>
        <div className={style.item}>
          <img className={style.img} src={box3} />
          <div className={style.title}>
            <span>空间幻影球</span>
            <span>XSPHRE-40</span>
          </div>
        </div>
        <div className={style.item}>
          <img className={style.img} src={box4} />
          <div className={style.title}>
            <span>空间幻影墙</span>
            <span>XWALL-32A1</span>
          </div>
        </div>
        <div className={style.item}>
          <img className={style.img} src={box5} />
          <div className={style.title}>
            <span>空间幻影盒</span>
            <span>XBOX-75B1</span>
          </div>
        </div>
      </div>
    </div>
  )
}
