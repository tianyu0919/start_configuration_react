/*
 * @Author: 归宿
 * @Date: 2022-04-15 21:41:46
 * @Description: 视频轮播图的主页
 */

import React, { useState } from 'react';
import VideoCarousel from '@src/components/VideoCarousel';
import './index.scss';

export default function Index() {
  let [items] = useState([{
    url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/banner_video1.93a5840b.mp4',
    title: '抖音美好奇妙日与夜，每个人都是某个人的光',
    text: '2021创作者嘉年华，超百位达人和明星创作者，出现在这个舞台上，为大家展现抖音创作者的风采。创作让我们相遇，致每一位不停创造的创作者',
  },
  {
    url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/banner_video2.811097fa.mp4',
    title: '字节跳动公益平台正式，在抖音上线',
    text: '2021年11月19日，字节跳动公益平台在抖音正式上线。公益机构、创作者及用户均可在抖音高效参与公益项目',
  },
  {
    url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/banner_video3.ae1a18d7.mp4',
    title: '960万平方公里的美好现场',
    text: '四年来，抖音直播将五湖四海的人们连接在一起，时空的隔阂被打破，共同见证、分享、传递生活中的美好',
  },
  {
    url: 'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_home_web/medias/banner_video4.84ec15b2.mp4',
    title: '抖音热点记忆2021，重温宝藏记忆',
    text: '在2021完结之际，抖音和大家一起重温2021的闪光时刻，与2021温暖告别，让每一个“发生”，都有意义',
  }])
  return (
    <div className="container">
      <VideoCarousel items={items} mode={'fade'} />
    </div>
  )
}
