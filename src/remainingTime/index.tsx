import React, { useEffect, useState, useRef, SyntheticEvent } from 'react';
import style from './index.scss';
import { Input, message } from 'antd';
import throttle from '@utils/throttle';

export default function Index() {
  const [age, setAge] = useState<string | number>('');
  const bodyContainer = useRef<HTMLDivElement>(null);
  const [divItems, setDivItems] = useState<NodeListOf<Element> | []>([]);
  const [timerArr, setTimerArr] = useState<number[]>([]);

  const setStyle = (div: HTMLDivElement) => {
    let w = div.getBoundingClientRect().width;
    let width = (w - 40) / 10 - 10;
    div.style.setProperty('--w', `${width}px`);
  }

  const inputChange = (e: SyntheticEvent) => {
    let value = ((e.target) as HTMLInputElement).value as unknown as number;
    if (isNaN(value)) {
      message.error('只能输入0-100的数字', 2);
      return;
    }
    if (value >= 100) {
      value = 100;
    } else if (value && value <= 0) {
      value = 0;
    }
    setAge(value)
  }

  useEffect(() => {
    const { current } = bodyContainer;
    if (current) {
      const listener = throttle(() => setStyle(current));
      setStyle(current);
      window.addEventListener('resize', listener);
      let items = current.querySelectorAll(`.${style.items}`);
      setDivItems(items);

      return () => {
        window.removeEventListener('resize', listener);
      }
    }
  }, [bodyContainer]);

  useEffect(() => {
    if (timerArr.length > 0) {
      for (let i = 0; i < timerArr.length; i++) {
        clearTimeout(timerArr[i]);
      }
      setTimerArr([]);
    }

    for (let i = 0; i < divItems.length; i++) {
      divItems[i].classList.remove(style.active);
    }

    if (divItems && divItems.length > 0) {
      let arr = [];
      for (let i = 0; i < age; i++) {
        arr.push(window.setTimeout(() => {
          divItems[i].classList.add(style.active);
        }, i * 10));
      }
      setTimerArr(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age, divItems]);

  return (<div className={style.container}>
    <div className={style.title}>
      时间记录📝
    </div>
    <div className={style.bodyOuterBox}>
      <div className={style.bodyTitle}>
        <Input onChange={inputChange} value={age} />
      </div>
      <div className={style.bodyContainer} ref={bodyContainer}>
        {new Array(100).fill(1).map((v, i) => {
          return <div key={i} className={style.items} onClick={(e) => {
            const target = e.target as HTMLElement;
            const { clientX, offsetX } = e.nativeEvent;
            console.log(clientX, offsetX, target.getBoundingClientRect().left)
          }} />
        })}
      </div>
    </div>
  </div>);
}
