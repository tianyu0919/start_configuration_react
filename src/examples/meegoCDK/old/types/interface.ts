/*
 * @Author: 归宿
 * @Date: 2022-10-27 16:28:59
 * @Description: 
 */
import { WorkflowElementProps } from "@byted-meego/cdk-workflow/lib/src/CDKWorkflow/type";
import { WorkflowNodeProps } from '@byted-meego/cdk-workflow';

export interface SampleNodeBaseProps {
  id: string;
  name: string;
  status: string;
}

export interface SampleWorkflowNodeProps extends WorkflowElementProps {
  node: WorkflowNodeProps<SampleNodeBaseProps>
}

// export { SampleNodeBaseProps, SampleWorkflowNodeProps }