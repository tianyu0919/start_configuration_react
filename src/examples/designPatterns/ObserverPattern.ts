// * 观察者模式：定义了对象间一种一对多的依赖关系，当目标对象 Subject 的状态发生改变时，所有依赖它的对象 Observer 都会得到通知。
// * 简单点：女神有了男朋友了，朋友圈晒个图，甜蜜宣言：“老娘成功脱单，希望你们欢喜”。各位潜藏备胎纷纷失恋，只能安慰自己你不是唯一一个。
/* 
  * 模式特征：
  *   1.1个目标对象Subject，拥有方法：添加、删除、通知 Observer。
  *   2.多个观察者对象Observer，拥有方法：接受 Subject 状态变更通知并处理。
  *   3.目标对象 Subject 状态变更时，通知所有 Observer。
  * 优点：
  *   1.目标者与观察者，功能耦合度降低，专注自身功能逻辑。
  *   2.观察者被动接受更新，时间上解耦，实时接收目标者更新状态。
  * 缺点：
  *   不能筛选通知，发布通知后，其他所有目标都会执行操作。
  * 解决：
  *   发布订阅模式，完美解决这个问题。
*/

// * 目标者类
class Subject {
  obServers: ObServer[];
  constructor() {
    this.obServers = [];
  }
  // * 添加
  add(obServer: ObServer) {
    this.obServers.push(obServer);
  }
  // * 删除
  remove(obServer: ObServer) {
    let idx = this.obServers.findIndex(v => v === obServer);
    if (idx !== -1) {
      this.obServers.splice(idx, 1);
    }
  }
  // * 通知
  notify() {
    for (let observer of this.obServers) {
      observer.update();
    }
  }
}

// * 观察者
class ObServer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  update() {
    console.log(`我是：${this.name}，我更新了！`)
  }
}

export { Subject, ObServer };