import React, { useState, useEffect, useMemo } from 'react';
import style from './index.scss';

export default function DraggableElement() {
  const [list] = useState(new Array(100).fill(1));
  const [currentDom, setCurrentDom] = useState<string | null>(null);
  const [clickDom, setClickDom] = useState<string | null>(null);
  useEffect(() => {
    document.addEventListener('dragstart', (e) => {
      console.log(e);
    })
  }, [])

  // * 进入
  const enter = (key: string) => {
    setCurrentDom(key);
  }

  // * 退出
  const leave = () => {
    setCurrentDom(null);
  }

  // * 添加
  const add = (key: string) => {
    setClickDom(key);
  }

  const memoized = useMemo(() => {
    return (
      <div className={style.outBox}>
        <div className={style.container}>
          {
            list.map((v, i) => (
              <div className={style.row} key={i}>
                {
                  list.map((v1, i1) => (
                    <div
                      key={`${i}-${i1}`}
                      className={[
                        style.column,
                        currentDom === `${i}-${i1}` ? style.current : '',
                        clickDom === `${i}-${i1}` ? style.add : ''
                      ].join(' ')}
                      onClick={() => add(`${i}-${i1}`)}
                      onMouseEnter={() => enter(`${i}-${i1}`)}
                      onMouseLeave={leave}
                    >
                      <div className={style.item}>{`${i + 1}-${i1 + 1}`}</div>
                    </div>
                  )
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }, [clickDom, currentDom, list])

  console.log(memoized);

  return (
    <div className={style.outBox}>
      <div className={style.container}>
        {
          list.map((v, i) => (
            <div className={style.row} key={i}>
              {
                list.map((v1, i1) => (
                  <div
                    key={`${i}-${i1}`}
                    className={[
                      style.column,
                      currentDom === `${i}-${i1}` ? style.current : '',
                      clickDom === `${i}-${i1}` ? style.add : ''
                    ].join(' ')}
                    onClick={() => add(`${i}-${i1}`)}
                    onMouseEnter={() => enter(`${i}-${i1}`)}
                    onMouseLeave={leave}
                  >
                    <div className={style.item}>{`${i + 1}-${i1 + 1}`}</div>
                  </div>
                )
                )
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
