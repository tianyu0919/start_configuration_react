/*
 * @Author: 归宿
 * @Date: 2022-04-15 21:40:32
 * @Description: 视频轮播图
 */
import React from 'react';

interface Props {
  // items: Array<{ url: string, title: string, text: string }>
  items: { url: string; title: string; text: string; }[], // * 传入的数组
  mode?: 'fade' | 'scale' | 'none' // * 传入的显示类型
}

export default function VideoCarousel(props: Props) {
  const { items } = props;
  console.log(items);
  return (
    <div className="video-carousel">
      <div className="video-container">
        {
          items.map(v =>
          (<div className="video-item">
            {v.title}
          </div>
          ))
        }
      </div>
    </div>
  )
}
