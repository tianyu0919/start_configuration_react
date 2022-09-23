/*
 * @Author: 归宿
 * @Date: 2022-09-22 15:57:37
 * @Description: 
 */
import React, { useContext } from 'react'

export default function FunctionProvider(props: any) {
  console.log(props);
  // const context = useContext()
  return (
    <div>
      <h2>我是 FunctionProvider。使用的是 Context.Consumer 来传递值。</h2>
      <div>当前的值是{props.context}</div>
    </div>
  )
}
