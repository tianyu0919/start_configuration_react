/*
 * @Author: 归宿
 * @Date: 2022-09-22 15:14:58
 * @Description: 
 */
import React from 'react';

type P = {

};

type S = {

};

class ClassProvider extends React.Component<P, S> {
  state = {}
  render() {
    return (
      <div>
        <h2>我是 ClassProvider。使用的是 Context.Provider 来传递值。</h2>
        <div>当前的值是{this.context}</div>
      </div>
    );
  }
}

export default ClassProvider;