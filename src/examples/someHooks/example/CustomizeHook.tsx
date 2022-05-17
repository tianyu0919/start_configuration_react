/* eslint-disable no-unused-vars */
/*
 * @Author: 归宿
 * @Date: 2022-05-17 21:46:04
 * @Description: 自定义hooks
 */
import React, { memo } from 'react'

const smallStr: string = "hello word";

// * 此处的表示 参数 word 为一个 无返回值的方法。
interface useSmallWordToUpperCaseProps {
  (word: () => void): void
}

// * 表示 定义了一个 string 类型的 word 并且返回 string
interface Func {
  (word: string): string;
}

type xx = (word: string) => string

const useSmallWordToUpperCase: Func | xx = (word: string): string => {
  return word.toUpperCase();
}

const CustomizeHook = memo(() => {

  const word = useSmallWordToUpperCase(smallStr);
  console.log('重新渲染了')
  return (
    <>
      <h3>CustomizeHook</h3>
      <div>
        <span>小写的:{smallStr}</span>
        <span>大写的:{word}</span>
      </div>
    </>
  )
})

export default CustomizeHook;
