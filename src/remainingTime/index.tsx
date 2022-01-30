import React, { useEffect, useState, useRef } from 'react';
import style from './index.scss';
import { Input } from 'antd';
import throttle from '@utils/throttle';

export default function Index() {
  const [age, setAge] = useState('');
  const bodyContainer = useRef<HTMLDivElement>(null);

  const setStyle = (div: HTMLDivElement) => {
    let w = div.getBoundingClientRect().width;
    let width = (w - 40) / 10 - 10;
    div.style.setProperty('--w', `${width}px`);
    console.log('走到了防抖');
  }

  useEffect(() => {
    const { current } = bodyContainer;
    if (current) {
      const listener = throttle(() => setStyle(current));
      setStyle(current);
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      }
    }
  }, [bodyContainer]);

  return (<div className={style.container}>
    <div className={style.title}>
      时间记录📝
    </div>
    <div className={style.bodyOuterBox}>
      <div className={style.bodyTitle}>
        <Input onChange={(e) => {
          const { value } = e.target;
          setAge(value)
        }} value={age} />
      </div>
      <div className={style.bodyContainer} ref={bodyContainer}>
        {new Array(100).fill(1).map((v, i) => {
          return <div key={i} className={style.items} />
        })}
      </div>
    </div>
  </div>);
}
