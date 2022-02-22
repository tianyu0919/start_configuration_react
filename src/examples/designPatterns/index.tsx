import React, { useEffect, useState } from 'react'
import { Button, Input } from 'antd';
import { Subject, ObServer } from './ObserverPattern';
import pubsub from './publishSubscribeModel';
import style from './index.scss';

interface ElementProps {
  name: string;
  pub: pubsub | undefined
}

// * 组件1
function Element1(props: ElementProps) {
  const { pub } = props;
  let [val, setVal] = useState('');
  let [talk, setTalk] = useState('');
  useEffect(() => {
    // * 发布订阅1
    pub?.subscribe('Element1', function () {
      setTalk('xx');
      console.log(arguments);
    })
  }, [pub]);

  return (
    <div className={style.Element}>
      我是Element1组件
      <span>我接收到的消息{talk}</span>
      <Input value={val} onChange={(e) => {
        const { value } = e.target;
        setVal(value);
      }} />
      <Button onClick={() => {
        console.log(pub);
        pub?.publish('Element2', '我是从 Element1 发送过来的');
      }}>发送消息</Button>
    </div>
  )
}

// * 组件2
function Element2(props: ElementProps) {
  const { pub } = props;
  let [val, setVal] = useState('');
  let [talk, setTalk] = useState('');

  useEffect(() => {
    pub?.subscribe('Element2', function () {
      setTalk('xx');
      console.log(arguments);
    })
  }, [pub]);

  return (
    <div className={style.Element}>
      我是Element2组件
      <span>我接收到的消息{talk}</span>
      <Input value={val} onChange={(e) => {
        const { value } = e.target;
        setVal(value);
      }} />
      <Button onClick={() => {
        pub?.publish('Element1', '我是从 Element2 发送过来的');
      }}>发送消息</Button>
    </div>
  )
}

// * 父组件
function DesignPatterns() {

  let [pubInstance, setPubInstance] = useState<pubsub | undefined>();

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
    setPubInstance(pubInstance);
    // pubInstance.subscribe('on', function () {
    //   console.log('我是on1', arguments)
    // })

    // pubInstance.subscribe('on', function () {
    //   console.log('我是on2', arguments)
    // })

    // pubInstance.publish('on', '');
  }, []);

  return (
    <>
      <div>我是设计模式</div>
      <div>
        <p>组件通信</p>
        <div className={style.content}>
          <Element1 name="组件1" pub={pubInstance} />
          <Element2 name="组件2" pub={pubInstance} />
        </div>
      </div>
    </>
  )
}

export default DesignPatterns;