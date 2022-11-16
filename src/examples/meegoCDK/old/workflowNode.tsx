/*
 * @Author: 归宿
 * @Date: 2022-10-27 15:40:07
 * @Description: 
 */
import React from 'react';
import { SampleWorkflowNodeProps, SampleNodeBaseProps } from './types/interface'
import * as Pingere from "@byted-meego/pingere";

// export default function Node(){
//   console.log('xx');
//   return (
//     <Pingere.Fragment>
//       <Pingere.Text>你好</Pingere.Text>
//     </Pingere.Fragment>
//   )
// }

class Node extends React.Component<SampleWorkflowNodeProps> {
  render() {
    return (
      <Pingere.Fragment>
        <Pingere.Text>你好</Pingere.Text>
      </Pingere.Fragment >
    )
  }
}

export const createJSXWorkflowNodeSample = (props: any) => {
  const cdkComponentInstance = Pingere.default.build(
    <Node {...props} />
  )
  return cdkComponentInstance;
}