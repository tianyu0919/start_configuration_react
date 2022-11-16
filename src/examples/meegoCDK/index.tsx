// @ts-nocheck
import CDKWorkflow, {
  ConnectionType,
  DashType,
  measureText,
  WorkflowLayout
} from "@byted-meego/cdk-workflow";
import * as React from "react";
import {
  WorkflowNodeSample,
  createJSXWorkflowNodeSample,
  createTheJSXWorkflowNodeSample
} from "./workflowNode";
import "antd/dist/antd.css";

const states = [
  {
    id: "started",
    name: "开始",
    status: "2"
  },
  {
    id: "state_1",
    name: "合伙人确定",
    status: "3"
  },
  {
    id: "doing",
    name: "寻找店铺位置",
    status: "3"
  },
  {
    id: "state_2",
    name: "股东注资签合同",
    status: "3"
  },
  {
    id: "state_3",
    name: "新店财务预估",
    status: "1"
  },
  {
    id: "state_6",
    name: "产品线规划",
    status: "3"
  },
  {
    id: "state_7",
    name: "核心团队招募",
    status: "3"
  },
  {
    id: "state_8",
    name: "工商行政手续",
    status: "1"
  },
  {
    id: "state_11",
    name: "营销方案策划",
    status: "2"
  },
  {
    id: "end",
    name: "店铺合同签约",
    status: "1"
  },
  {
    id: "state_4",
    name: "确定装修队和装修周期",
    status: "2"
  },
  {
    id: "state_5",
    name: "设备采购",
    status: "3"
  },
  {
    id: "state_9",
    name: "店员招聘",
    status: "3"
  },
  {
    id: "state_13",
    name: "食药/卫生/环评/消防等手续",
    status: "2"
  },
  {
    id: "state_14",
    name: "装修验收",
    status: "2"
  },
  {
    id: "state_15",
    name: "设备进场",
    status: "2"
  },
  {
    id: "state_16",
    name: "首批物料购买",
    status: "2"
  },
  {
    id: "state_17",
    name: "人员培训",
    status: "3"
  },
  {
    id: "state_19",
    name: "产品调试",
    status: "1"
  },
  {
    id: "state_18",
    name: "试营业",
    status: "3"
  },
  {
    id: "state_20",
    name: "产品验收",
    status: "1"
  },
  {
    id: "state_21",
    name: "网络平台上架",
    status: "3"
  },
  {
    id: "state_22",
    name: "开业促销方案",
    status: "2"
  },
  {
    id: "state_23",
    name: "正式开业",
    status: "1"
  }
];

const connections = [
  {
    start: "doing",
    end: "end"
  },
  {
    start: "started",
    end: "state_1"
  },
  {
    start: "state_1",
    end: "doing"
  },
  {
    start: "state_1",
    end: "state_2"
  },
  {
    start: "state_1",
    end: "state_3"
  },
  {
    start: "end",
    end: "state_4"
  },
  {
    start: "end",
    end: "state_5"
  },
  {
    start: "state_1",
    end: "state_6"
  },
  {
    start: "state_1",
    end: "state_7"
  },
  {
    start: "state_3",
    end: "state_8"
  },
  {
    start: "state_2",
    end: "state_8"
  },
  {
    start: "state_8",
    end: "end"
  },
  {
    start: "end",
    end: "state_9"
  },
  {
    start: "state_6",
    end: "state_11"
  },
  {
    start: "end",
    end: "state_13"
  },
  {
    start: "state_4",
    end: "state_14"
  },
  {
    start: "state_14",
    end: "state_15"
  },
  {
    start: "state_14",
    end: "state_16"
  },
  {
    start: "state_14",
    end: "state_17"
  },
  {
    start: "state_9",
    end: "state_17"
  },
  {
    start: "state_16",
    end: "state_18"
  },
  {
    start: "state_15",
    end: "state_18"
  },
  {
    start: "state_17",
    end: "state_18"
  },
  {
    start: "state_14",
    end: "state_19"
  },
  {
    start: "state_18",
    end: "state_20"
  },
  {
    start: "state_18",
    end: "state_21"
  },
  {
    start: "state_18",
    end: "state_22"
  },
  {
    start: "state_13",
    end: "state_18"
  },
  {
    start: "state_11",
    end: "state_18"
  },
  {
    start: "state_21",
    end: "state_23"
  },
  {
    start: "state_20",
    end: "state_23"
  },
  {
    start: "state_22",
    end: "state_23"
  }
];

export const workflowDataSimple = {
  states: states,
  connections: connections
};

const containerWidth = 1000;
const containerHeight = 500;

export const getNodeWidth = (node: any) =>
  measureText(node.name, "PingFang SC", 14, 400).width + 25;

export default function App() {
  const [workflowData, setWorkflowData] = React.useState(workflowDataSimple);
  const layout = React.useMemo(() => {
    const wfLayout = new WorkflowLayout({
      states: workflowData.states,
      connections: workflowData.connections
    });
    const layout = wfLayout.layoutMain({
      style: {
        containerHeight: containerHeight,
        containerWidth: containerWidth,
        padding: { left: 24, right: 24, top: 16, bottom: 16 },
        nodeHeight: 28,
        gap: { horizontal: 64, vertical: 54 },
        centered: true
      },
      getNodeWidth
    });
    return layout;
  }, [workflowData]);

  const connections = React.useMemo(() => {
    return layout.connections.map((c) => ({
      from: { key: c.from },
      to: { key: c.to },
      type: ConnectionType.bezierCurve,
      lineStyle: {
        width: 1,
        color: "#C6C7CD",
        dash: DashType.solid
      }
    }));
  }, [layout]);
  console.log("===", layout.states, connections);

  return (
    <CDKWorkflow
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      layout={layout}
      connectionProps={{
        connections
      }}
      nodeProps={{
        nodes: layout.states,
        nodeComponent: createJSXWorkflowNodeSample,
        props: {
          callbacks: {
            click: (node: any) => {
              console.log("===node", node);
            },
            hover: (stateKey: string, isHovered: boolean) => {
              console.log("hover", stateKey, isHovered);
              const prevStates =
                layout.graphEngine.relations.prevMap?.[stateKey];
              const nextStates =
                layout.graphEngine.relations.nextMap?.[stateKey];
              const associatedConnections = connections.filter(
                (c) =>
                  (prevStates?.includes(c.from.key) && c.to.key === stateKey) ||
                  (c.from.key === stateKey && nextStates?.includes(c.to.key))
              );
              console.log("associatedConnections", associatedConnections);
              associatedConnections.forEach((c) => {
                if (c.lineStyle) {
                  c.lineStyle.color = isHovered ? "#6b7075" : "#C6C7CD";
                }
              });
            }
          }
        }
      }}
      style={{
        backgroundColor: "transparent",
        width: Math.max(layout.contentSize.width, containerWidth),
        height: Math.max(layout.contentSize.height, containerHeight)
      }}
    />
  );
}
