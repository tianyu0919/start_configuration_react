// * 发布订阅模式
/*
  * 发布订阅模式：
  *   基于一个事件（主题）通道，希望接受通知的对象 Subscriber 通过自定义事件订阅主题，被激活事件的对象 Publisher 通过发布主题事件的方式通知各个订阅改主题的 Subscriber 对象。
  * 与观察者模式的区别：
  *   发布订阅模式与观察者模式的不同，“第三者”（事件中心）出现。目标对象并不直接通知观察者，而是通过事件中心来派发通知。
  * 小知识：
  *   DOM 事件也是“发布订阅模式”的应用
  *   document.addEventListener('eventType', callback);
  * 发布通知的顺序：
  *   1.先订阅后发布时才通知（常规）。
  *   2.订阅后可获取过往以后的发布通知（QQ离线消息，上线后获取之前的信息）。
*/

// * 事件中心
class pubSub {
  list: { [content: string]: Function[] };
  // subscribe: () => void;
  constructor() {
    // * 存储所有事件
    this.list = {};
  }
  // * 订阅
  subscribe(key: string, fn: Function) {
    if (!this.list[key]) {
      this.list[key] = [];
    };
    this.list[key].push(fn);
  }
  // * 发布
  publish(key: string, ...arg: any[]) {
    let { list } = this;
    list[key]?.forEach(fn => {
      fn.call(this, ...arg);
    })
  }
  // * 取消订阅
  unSubscribe(key: string, fn: Function) {
    let { list } = this;
    if (!list[key]) {
      return false;
    }
    if (!fn) {
      // * 如果不传入指定取消的方法，则清空所有key下的订阅。
      list[key] && (list[key].length = 0);
    } else {
      list[key].forEach((item, idx) => {
        if (item === fn) {
          list[key].splice(idx, 1);
        }
      })
    }
  }
}

export default pubSub;



