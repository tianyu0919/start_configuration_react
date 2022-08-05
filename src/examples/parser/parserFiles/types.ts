/*
 * @Author: 归宿
 * @Date: 2022-07-25 14:48:12
 * @Description: 解析器的类型定义
 */


type SchemaTypes = {
  post: any;
  get: any;
  put: any;
  delete: any;
};

type Types = {
  [propName: string]: {
    responses: any;
    requestBody: any;
  };
};

type DifferentPathProps = {
  [P in keyof SchemaTypes]?: string[];
};

type MethodBodysProps = { responses?: any; requestBody: { post?: any; put?: any } };

type PathObjProps = {
  get?: any;
  post?: any;
  put?: any;
  delete?: any;
};

export { SchemaTypes, Types, DifferentPathProps, MethodBodysProps, PathObjProps };
