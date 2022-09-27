/*
 * @Author: 归宿
 * @Date: 2022-09-22 15:14:58
 * @Description: 
 */
import React from 'react';
import { Button } from 'antd';

type P = {

};

type S = {

};

class ClassProvider extends React.Component<P, S> {
  state = {}
  constructor(props: any) {
    super(props);
    console.log(this);
  }
  render() {
    const { value, add, decrease } = this.context;
    return (
      <div>
        <h2>我是 ClassProvider。使用的是 Context.Provider 来传递值。</h2>
        <div>当前的值是{value}</div>
        <div>
          <Button size="small" onClick={add}>增加</Button>
          <Button style={{ marginLeft: 3 }} size="small" onClick={decrease}>减少</Button>
        </div>
      </div>
    );
  }
}

export default ClassProvider;