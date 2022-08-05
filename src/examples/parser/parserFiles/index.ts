/*
 * @Author: 归宿
 * @Date: 2022-07-25 14:49:20
 * @Description: 解析器的本体
 */
import { SchemaTypes, Types, DifferentPathProps, MethodBodysProps, PathObjProps } from './types';

// * 递归找到所有类型并分析
/**
 * @description: 递归找到所有类型并分析
 * @param {*} propertiesItem - 需要拿到类型的key
 * @param {*} propertiesVal - 需要拿到类型的value
 * @param {*} allSchema - 根据接口拿到的所有 Schema json，需要从这里面拿到对应的 schema
 * @param {*} requiredItems - 判断哪些字段是必填项
 * @param {*} formatPropertiesObj - 传入整理好的对象。这个对象肯定是子集需要用到的，运用对象引用的关系。这样就会一直添加结构。
 */
function recursionFindRefs(
  { propertiesItem, propertiesVal, allSchema, requiredItems }: any,
  formatPropertiesObj: any
): void {
  const { type, $ref, enum: enumable } = propertiesVal;
  if (type === 'object') {
    // * 如果是 object 类型。
    const { additionalProperties } = propertiesVal;
    formatPropertiesObj[propertiesItem] = {
      type: 'object',
    };
    if (additionalProperties?.$ref) {
      // * 有 $ref 说明是一个 schema 继续递归
      formatPropertiesObj[propertiesItem] = {
        ...formatPropertiesObj[propertiesItem],
        props: {},
      };
      const childRefSchema = allSchema[additionalProperties?.$ref.split('/').at(-1)] || {};
      for (const [childrenItem, childrenVal] of Object.entries(childRefSchema.properties)) {
        recursionFindRefs(
          {
            propertiesItem: childrenItem,
            propertiesVal: childrenVal,
            allSchema,
            requiredItems: childRefSchema.required,
          },
          formatPropertiesObj[propertiesItem].props
        );
      }
    }
  } else if (type === 'array') {
    // * 如果是 数组 的话
    const { items } = propertiesVal;
    formatPropertiesObj[propertiesItem] = { type: 'array' };
    // * 如果有引用的情况下
    if (items && items?.$ref) {
      // * 有 $ref 说明是一个 schema 继续递归
      formatPropertiesObj[propertiesItem] = {
        ...formatPropertiesObj[propertiesItem],
        itemsType: {},
      };
      const childRefSchema = allSchema[items?.$ref.split('/').at(-1)] || {};
      for (const [childrenItem, childrenVal] of Object.entries(childRefSchema?.properties)) {
        recursionFindRefs(
          {
            propertiesItem: childrenItem,
            propertiesVal: childrenVal,
            allSchema,
            requiredItems: childRefSchema.required,
          },
          formatPropertiesObj[propertiesItem].itemsType
        );
      }
    } else if (items && items?.type) {
      // * 当有内容指定类型的时候。
      // formatPropertiesObj[propertiesItem] = { type: items.type || 'any' };
      formatPropertiesObj[propertiesItem] = { type: 'array', itemsType: items.type };
    } else if (items && !items?.type) {
      // * 表示有 items 选项 但是没有属性，则代表是一个 空对象
      formatPropertiesObj[propertiesItem] = { type: 'array', itemsType: 'object' };
    }
  } else if ($ref) {
    // ! 错误，也有是 object 类型的 例如 access 的 AccessAccessInfo
    // * 如果没有 type 并且直接有 $ref 表示是 schema 继续深入
    const refsSchema = allSchema[$ref.split('/').at(-1)] || {};
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const { type, properties, required, enum: enumable } = refsSchema;
    if (enumable) {
      formatPropertiesObj[propertiesItem] = {
        type: 'enum',
        value: refsSchema?.enum || [],
      };
    } else if (properties) {
      formatPropertiesObj[propertiesItem] = {
        type,
        props: {},
      };
      for (const [childrenItem, childrenVal] of Object.entries(properties)) {
        recursionFindRefs(
          {
            propertiesItem: childrenItem,
            propertiesVal: childrenVal,
            allSchema,
            requiredItems: required,
          },
          formatPropertiesObj[propertiesItem].props
        );
      }
    }
  } else if (enumable) {
    // * 如果是枚举类型
    formatPropertiesObj[propertiesItem] = {
      type: 'enum',
      value: enumable,
    };
  } else {
    // * 如果是普通的类型
    formatPropertiesObj[propertiesItem] = { type };
  }
  // * 添加是否是必填项
  if (requiredItems.includes(propertiesItem)) {
    formatPropertiesObj[propertiesItem] = { ...formatPropertiesObj[propertiesItem], requiredField: true };
  }
}

// * 在 schemas 中找到 properties 和 requireField
function getProperties(schemas: any, allSchema: any): any {
  const properties = schemas?.properties || {};
  const requiredItems = schemas?.required || [];
  const formatProperties = {};
  for (const [propertiesItem, propertiesVal] of Object.entries(properties)) {
    recursionFindRefs({ propertiesItem, propertiesVal, allSchema, requiredItems }, formatProperties);
  }
  return formatProperties;
}

/**
 * @description: 将不同方法的获取值schema方式传递下去来获取对应的schema
 * @param {Object} differentPathObj - 传入不同方法的解析路径
 * @param {Object} pathObj - 传入的方法里的schema
 * @param {Object} schema - 拿到的所有schema
 * @param {Object} methodBody - 用来接受解析好的schema的对象。也是最后返回的对象。
 * @param {Object} methodsSchema - 临时储存，用来判断是否已经有解析了的方法。
 * @return {methodBody} 返回解析好的schema
 */
function getDifferentMethods(
  differentPathObj: DifferentPathProps,
  pathObj: PathObjProps,
  schema: any,
  methodBody: MethodBodysProps,
  methodsSchema: PathObjProps
): void {
  const requestMethods = Object.keys(pathObj) as (keyof PathObjProps)[];
  // * 循环的是传进来的方法中的path，拿到方法下的请求方式。
  requestMethods.forEach(requestMethod => {
    const requestParse = differentPathObj[requestMethod] as (keyof PathObjProps)[];
    // * 需要加上是不是已经处理过的判断 methodBody 上是否拥有
    if (requestParse && !methodsSchema[requestMethod]) {
      methodsSchema[requestMethod] = null;
      requestParse.forEach(parseItem => {
        methodsSchema[requestMethod] = methodsSchema[requestMethod] ?
          methodsSchema[requestMethod][parseItem] :
          pathObj[parseItem];
      });

      methodsSchema[requestMethod] = getProperties(
        schema[methodsSchema[requestMethod]?.split('/')?.at(-1)] || [],
        schema
      );
    }

    // * 根据不同的方法，判断最终的赋值
    switch (requestMethod) {
      case 'get': {
        methodBody.responses = methodsSchema[requestMethod];
        break;
      }
      case 'post': {
        methodBody.requestBody.post = methodsSchema[requestMethod];
        break;
      }
      case 'put': {
        methodBody.requestBody.put = methodsSchema[requestMethod];
        break;
      }
      default:
        return;
    }
  });
}

export { getDifferentMethods, SchemaTypes, Types, PathObjProps };

// * 所有类型 的描述
// * 普通类型不用解释.
// * -----------------分割线------------------
// * 如果是 object 类型：
// *    1. 有 props 字段，表示只能根据 props 中的字段进行填写。
// *    2. 没 props 字段，表示 随便输入 json。
// * -----------------分割线------------------
// * 如果是 array 类型：
// *    1. 有 itemsType 字段：
// *       1.1 itemsType 字段是一个对象：
// *         表示添加的数据根据这个 itemsType 来添加。
// *       1.2 itemsType 是一个字符串：
// *         表示添加的数据是字符串中的类型。
// *    2. 没 itemsType 字段：暂时没遇到
// * -----------------分割线------------------
// * 如果是 enum 类型：
// *    则掉膘的是 select 下拉框，内容根据 value 字段来渲染。