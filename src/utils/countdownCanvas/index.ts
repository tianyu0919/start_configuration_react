/*
 * @Author: 归宿
 * @Date: 2022-09-28 14:48:13
 * @Description: 
 */
class countdownCanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  particles: any[]; // * 用来存放粒子数组
  numbers: any[]; // * 用来存放数字坐标
  count: number; // * 判断在动画函数的状态
  idx: number; // * 数字数组的索引值
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.particles = [];
    this.numbers = [];
    this.count = 0;
    this.idx = 0;
  }

  Init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}