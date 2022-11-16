// @ts-nocheck
import React from "react";
import { WorkflowElementProps } from "@byted-meego/cdk-workflow/lib/src/CDKWorkflow/type";
import { Popover } from "antd";
import { ElementType, WorkflowNodeProps } from "@byted-meego/cdk-workflow";
import * as Pingere from "@byted-meego/pingere";

export const NODE_COLOR_MAP = {
  3: {
    border: "#29A335",
    background: "rgba(51, 195, 63, 1)"
  },
  2: {
    border: "#D58B00",
    background: "rgba(255, 180, 0, 1)"
  },
  1: {
    border: "#A7A8B0",
    background: "rgba(198, 199, 205, 1)"
  },
  4: {
    border: "rgba(219, 18, 2, 1)",
    background: "rgba(255, 36, 10, 1)"
  }
};

export interface SampleNodeBaseProps {
  id: string;
  name: string;
  status: string;
}

interface SampleWorkflowNodeProps extends WorkflowElementProps {
  node: WorkflowNodeProps<SampleNodeBaseProps>;
}

// 可以直接用 React JSX 写
class Counter extends React.Component<SampleWorkflowNodeProps> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  addCount() {
    this.setState({
      count: this.state.count + 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <Pingere.Fragment
        dom={
          <Popover
            content={
              <div>
                {this.state.count < 10 ? (
                  "点击计数"
                ) : (
                  <button onClick={() => this.reset()}>重置</button>
                )}
              </div>
            }
          >
            <div
              style={{
                flex: 1,
                height: "100%"
              }}
            />
          </Popover>
        }
        style={{
          cursor: "pointer",
          padding: 2,
          borderColor: "blue",
          borderWidth: 1
          // marginTop: '19px'
        }}
        onClick={() => this.addCount()}
      >
        <Pingere.Text>{this.state.count}</Pingere.Text>
      </Pingere.Fragment>
    );
  }
}

// 可以直接用 React JSX 写
class JSXWorkflowNodeSample extends React.Component<SampleWorkflowNodeProps> {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  setActive() {
    console.log("active");
    this.setState({ active: true });
  }

  setInactive() {
    this.setState({ active: false });
  }

  render() {
    const status = NODE_COLOR_MAP[this.props.node.data.status]
      ? this.props.node.data.status
      : 1;
    return (
      <Pingere.Fragment
        onOn={() => this.setActive()}
        onLeave={() => this.setInactive()}
        style={{
          alignItems: "center",
          flexDirection: "column",
          borderWidth: 1,
          borderColor: "#c1c5c8",
          borderRadius: 3,
          padding: {
            left: 7,
            right: 6,
            top: 4,
            bottom: 4
          }
        }}
      >
        {!this.state.active ? (
          <Pingere.Fragment
            style={{
              width: 16,
              height: 16,
              backgroundColor: NODE_COLOR_MAP[status].background,
              borderColor: NODE_COLOR_MAP[status].border,
              borderRadius: 8
            }}
          />
        ) : (
          <Pingere.Image
            url={"https://cdn-icons-png.flaticon.com/512/1804/1804486.png"}
            style={{
              width: 16,
              height: 16,
              backgroundColor: "grey"
            }}
          />
        )}
        <Pingere.Text
          style={{
            fontSize: 12,
            fontFamily: "PingFang SC",
            fontWeight: 400,
            color: "#1C1F23",
            margin: { left: 4, right: 4, top: 12 }
          }}
        >
          {this.props.node.data.name}
        </Pingere.Text>
        <Counter />
      </Pingere.Fragment>
    );
  }
}

// 这里会 build 一下 React JSX 转换为 CDK 物料
export const createJSXWorkflowNodeSample = (props: SampleNodeBaseProps) => {
  const cdkComponentInstance = Pingere.default.build(
    <JSXWorkflowNodeSample {...props} />
  );
  cdkComponentInstance.props.key = props.node.data.id;
  cdkComponentInstance.props.type = ElementType.node;
  return cdkComponentInstance;
};