import React, { useEffect, useRef } from 'react';
import style from './index.scss';

import initCanvas from '@utils/canvas';
import particleLinse from '@utils/canvas/particleLine.js'
// import suanfa from '../suanfa/1';
import fillNumber from '../suanfa/2';

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

      // suanfa([1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 6, 7, 8, 132, 545, 65, 123, 53, 3, 5, 6, 7, 5, 3, 1, 123, 4, 2, 12]);
      // suanfa([1, 2, 3, 4, 5, 6, 7, 8]);
      // suanfa([1, 2]); // * 6
      // suanfa([1, 2, 3, 4])
      // suanfa([-1, -12, -3, -24, 0, -0, -5, 6, 9, 5, -4]);
      // suanfa([]) // * 传入 4，
      fillNumber('f3d2gx2');
      // fillNumber('c10f');
    }
  }, [canvas])

  return (
    <div className={style.canvasBox}>
      <canvas className={style.canvas} ref={canvas} />
      <canvas className={style.canvas} ref={canvas1} />
    </div>
  );
}
