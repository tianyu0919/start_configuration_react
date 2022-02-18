import React, { useEffect } from 'react'
import { Subject, ObServer } from './ObserverPattern';
import pubsub from './publishSubscribeModel';

function DesignPatterns() {

  // * 观察者模式
  useEffect(() => {
    let ob1 = new ObServer('前端');
    let ob2 = new ObServer('后端');
    const subject = new Subject();
    subject.add(ob1);
    subject.add(ob2);
    // subject.notify();
  }, []);

  // * 发布订阅模式
  useEffect(() => {
    let pubInstance = new pubsub();
    pubInstance.subscribe('on', function () {
      console.log('我是on1', arguments)
    })

    pubInstance.subscribe('on', function () {
      console.log('我是on2', arguments)
    })

    pubInstance.publish('on', '');
  }, []);

  return (
    <div>我是设计模式</div>
  )
}

export default DesignPatterns;