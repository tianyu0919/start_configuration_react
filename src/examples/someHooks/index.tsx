/*
 * @Author: 归宿
 * @Date: 2022-05-17 20:22:37
 * @Description: 
 */
import React, { FC, useState, memo, useCallback, useMemo } from 'react';
import styles from './index.scss';
import { Button } from 'antd';

import CustomizeHook from './example/CustomizeHook';
import FunctionProvider from './example/FunctionProvider';
import ClassProvider from './example/ClassProvider';

import ContextDemo from './example/ContextDemo';

import Styled from './styled';

const StyledButton = Styled.button`
  color: red;
  background: ${(props: any) => props.primary ? 'primary' : ''};
`;

// * Provider 测试
// * 当无法从 Provider 中获取到 value 的时候才会用这个 defaultValue
const defaultValue = {
  name: 'xx'
};

const MyContext = React.createContext<any>(defaultValue);
MyContext.displayName = 'someContext';

// * 在这里给 provider 设置值
ClassProvider.contextType = MyContext;

console.log(StyledButton);

interface childProps {
  onSetNum: () => void;
  val?: any;
}

// * memo 只会在props发生变化的时候重新渲染。如果props不发生变化则不会重新渲染
// * 普通缓存的子组件，没有任何属性
const Child = memo(() => {
  // * 当组件状态不会发生改变的时候，也就是写死的状态。直接用 memo 括起来。这样不会重新渲染。
  console.log('我是子组件1')
  return <div>
    我是子组件
  </div>
});

// * 缓存了的子组件，有需要的属性
const ChildMemo = memo(({ onSetNum }: childProps) => {
  // * 但是当有数据传入的时候。依然会发生改变。
  // * 这个例子是子组件调用父组件的方法。
  // * 那么父组件的方法，需要使用 useCallback 来缓存起来
  console.log('我是子组件2')
  return <div>
    我是子组件
    <Button onClick={onSetNum}>增加</Button>
  </div>
})

// * 父组件
const SomeHooks: FC = () => {
  const [num, setNum] = useState<number>(0);


  // * 使用 useCallback 来传递给子组件
  const onSetNum = useCallback(() => {
    setNum(num => num + 1)
  }, []);

  // * 使用 useMemo 来传递给子组件
  const onSetNum1 = useMemo(() => {
    return () => setNum(num => num + 1);
  }, [])

  return (
    <div className={styles.container}>
      <h2>我是父组件当前数字：{num}</h2>
      <Button onClick={onSetNum}>父组件增加</Button>
      <div className={styles.childBox}>
        <span>没有任何参数的子组件</span>
        <Child />
      </div>
      <div className={styles.childBox}>
        <span>有参数的，使用useCallback</span>
        <ChildMemo onSetNum={onSetNum} />
      </div>
      <div className={styles.childBox}>
        <span>有参数的，使用useMemo</span>
        <ChildMemo onSetNum={onSetNum1} />
      </div>
      <div className={styles.childBox}>
        <CustomizeHook />
      </div>
      <div className={styles.box}>
        <h2>Styled组件</h2>
        <StyledButton primary>你好吗</StyledButton>
        {/* {StyledButton} */}
      </div>

      <div>
        <h2>Provider</h2>
        <div className={styles.box}>
          <MyContext.Provider value={2}>
            <ClassProvider />
          </MyContext.Provider>
        </div>
        <div className={styles.box}>
          <MyContext.Provider value={num}>
            <MyContext.Consumer>
              {value => <FunctionProvider context={value} />}
            </MyContext.Consumer>
          </MyContext.Provider>
        </div>
        <div className={styles.box}>
          <ContextDemo />
        </div>
      </div>
    </div>
  )
}

export default SomeHooks;