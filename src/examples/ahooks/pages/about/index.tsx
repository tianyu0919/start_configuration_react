import React, { useEffect, useState } from 'react'


import { Button } from 'antd';

class myTimeManager {
  callback: Function;
  time: number;
  executions: number;
  constructor(callback: Function, time: number) {
    this.callback = callback;
    this.time = time;
    this.executions = 0;
  };

  start() {
    this.loop(this.time);
  }

  loop = (time: number) => {
    this.callback();
    this.executions = window.setTimeout(() => {
      this.loop(time);
    }, time);
  }

  end = () => {
    if (this.executions) {
      window.clearTimeout(this.executions);
    }
  }
}

export default function About() {
  const [timeManager, setTimeManager] = useState<null | myTimeManager>(null);

  useEffect(() => {

    let manager = new myTimeManager(() => {
      console.log('xixi')
    }, 1000);


    let manager1 = new myTimeManager(() => {
      console.log('哈哈')
    }, 1000);
    manager1.start();
    setTimeout(() => { manager1.end() }, 4000)

    setTimeManager(manager);
  }, [])

  useEffect(() => {
    if (timeManager) {
      timeManager.start();
    }
  }, [timeManager])
  return (
    <div>About

      <Button onClick={() => {
        if (timeManager) {
          timeManager.end();
        }
      }}>取消</Button>
    </div>
  )
}
