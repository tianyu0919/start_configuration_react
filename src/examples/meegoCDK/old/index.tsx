/*
 * @Author: 归宿
 * @Date: 2022-10-26 15:39:13
 * @Description:
 */
// /*
//  * @Author: 归宿
//  * @Date: 2022-10-26 15:39:13
//  * @Description: 
//  */
// import React, { useMemo } from 'react';
// import CDKWorkflow, { WorkflowLayout, measureText, ConnectionType, DashType } from '@byted-meego/cdk-workflow';
// import { createJSXWorkflowNodeSample } from './workflowNode';
// function MeegoCdk() {

//   const layout = useMemo(() => {
//     const wfLayout = new WorkflowLayout({
//       states: [],
//       connections: []
//     });
//     const layout = wfLayout.layoutMain({
//       style: {
//         containerWidth: 1000,
//         containerHeight: 500,
//         nodeHeight: 26,
//         gap: {
//           horizontal: 64,
//           vertical: 54
//         }
//       },
//       getNodeWidth: (node: any) => measureText('xx', "PingFang SC", 14, 400).width + 25
//     })

//     return layout;
//   }, []);

//   const connections = React.useMemo(() => {
//     return layout.connections.map((c) => ({
//       from: { key: c.from },
//       to: { key: c.to },
//       type: ConnectionType.bezierCurve,
//       lineStyle: {
//         width: 1,
//         color: "#C6C7CD",
//         dash: DashType.solid
//       }
//     }));
//   }, [layout]);

//   return <div>
//     我是meego

//     <CDKWorkflow
//       containerWidth={1000}
//       containerHeight={500}
//       layout={layout}
//       connectionProps={{ connections, props: {} }}
//       nodeProps={{
//         nodes: [{
//           id: "started",
//           name: "开始",
//           status: "2"
//         },
//         {
//           id: "state_1",
//           name: "合伙人确定",
//           status: "3"
//         }],
//         nodeComponent: createJSXWorkflowNodeSample,
//       }}
//       style={{
//         backgroundColor: "transparent",
//         width: 1000,
//         height: 500
//       }}
//     />

//   </div>
// }

// export default MeegoCdk;