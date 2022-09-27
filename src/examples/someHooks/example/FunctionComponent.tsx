/*
 * @Author: 归宿
 * @Date: 2022-09-27 15:25:32
 * @Description: 
 */
import React, { useContext } from 'react';
import { Button } from 'antd';

export default function FunctionProvider(props: any) {
  const { value, add, decrease } = props.context || {};
  return (
    <div>
      <h2>我是 FunctionProvider。使用的是 Context.Consumer 来传递值。</h2>
      <div>当前的值是{value}</div>
      <div>
        <Button size="small" onClick={add}>增加</Button>
        <Button style={{ marginLeft: 3 }} size="small" onClick={decrease}>减少</Button>
      </div>
    </div>
  )
}
