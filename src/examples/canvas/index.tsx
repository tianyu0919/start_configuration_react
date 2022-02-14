import React, { useEffect, useRef } from 'react';
import style from './index.scss';

import initCanvas from '@utils/canvas';
import particleLinse from '@utils/canvas/particleLine.js'

export default function Canvas() {

  const canvas = useRef(null);
  const canvas1 = useRef(null);

  useEffect(() => {
    const { current } = canvas;
    if (current) {

      initCanvas(current, {
        number: 120,
        distance: 80,
        ballOptions: {
          radius: 1.4,
          color: '#1890ff',
          lineColor: [0, 111, 123]
        }
      });

      let lizi = new particleLinse({
        canvas: canvas1.current, // canvas
        num: 120, // 粒子数
        isBg: true // true: 第一种效果 false: 第二种效果
      });
      lizi.play(); // 执行
    }
  }, [canvas])

  return (
    <div className={style.canvasBox}>
      <canvas className={style.canvas} ref={canvas} />
      <canvas className={style.canvas} ref={canvas1} />
    </div>
  );
}
