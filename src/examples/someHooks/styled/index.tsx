/*
 * @Author: 归宿
 * @Date: 2022-08-25 15:52:06
 * @Description: 
 */
import React from 'react';



class Styled {
  constructor() {

  }

  static button = (arg: any, ...args: any[]) => {
    console.log('button');
    console.log(arg, args);
    const style = {};

    return function Button(props: any) {
      console.log(props);
      return <button style={props.style}>{props.children}</button>
    }
  }
}

export default Styled;