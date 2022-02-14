class particleLine {
  constructor(data) {
    this.data = data || {};
    this.canvas = data.canvas || document.createElement('canvas');
    this.canvas.width = data.width || window.innerWidth;
    this.canvas.height = data.height || window.innerHeight;
    this.ctx = this.canvas.getContext('2d');
    this.mons = {
      // 鼠标点
      x: -100,
      y: -100,
    };
    this.num = this.data.num || 40; // 粒子数量
    this.isBg = this.data.isBg || true;
    this.points = []; // 粒子数组
    let that = this;

    // * 粒子
    this.Point = class Point {
      constructor(x, y, max, name) {
        this.x = x; // x坐标
        this.y = y; // y坐标
        this.r = 1;
        this.max = max;
        this.name = name;
        this.sx = Math.random() * 2 - 1; // 速度
        this.sy = Math.random() * 2 - 1; // 速度
        this.hue = 0;
        this.brightness = this.random(0, 250);
      }

      // 随机移动
      move(x, y) {
        this.x += this.sx;
        this.y += this.sy;
        this.hue += 1;

        if (that.isBg && this.name) {
          this.x = x;
          this.y = y;
        }

        if (this.x > that.canvas.width || this.x < 0) {
          this.sx = -this.sx;
        }
        if (this.y > that.canvas.height || this.y < 0) {
          this.sy = -this.sy;
        }
      }

      // 画圆
      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = 'red';
        ctx.fill();
      }

      // 画线
      drawLine(ctx, p) {
        let dx = this.x - p.x;
        let dy = this.y - p.y;
        let d = that.isBg ? dx * dx + dy * dy : Math.sqrt(dx * dx + dy * dy); // * 勾股定理，获得当前的粒子距离
        let max = that.isBg ? p.max : 100;
        if (d < max) {
          // * 判断是不是当前鼠标粒子。
          // * 吸附效果。p 传过来的粒子 that.mos.lizi 定义的跟随鼠标粒子
          // if (d > p.max / 2) {
          if (p === that.mons.lizi && d > p.max / 2) {
            // console.log(dx * 0.03);
            this.x -= dx * 0.01;
            this.y -= dy * 0.01;
          }
          let alpha = that.isBg ? (p.max - d) / p.max : (100 - d) / 100;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(p.x, p.y);
          ctx.closePath();
          ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${alpha})`;
          ctx.strokeWidth = 1;
          ctx.stroke();
        }
      }

      random(min, max) {
        return Math.random() * (max - min) + min;
      }
    };
  }

  play() {
    this.isPC();
    // 微信禁止下滑
    document.body.addEventListener(
      'touchmove',
      function (e) {
        const event = e || window.event;
        const className = event.target.getAttribute('class');
        if (/permit-scroll/.test(className) === false) {
          event.preventDefault();
        }
      },
      { passive: false }
    );

    let liziNum = this.isBg ? this.num : this.num < 80 ? this.num : 80;
    for (let i = 0; i < liziNum; i++) {
      this.points.push(new this.Point(Math.random() * this.canvas.width, Math.random() * this.canvas.height, 6000));
    }
    this.mons.lizi = new this.Point(
      Math.random() * this.canvas.width,
      Math.random() * this.canvas.height,
      20000,
      'touch'
    );
    this.points.push(this.mons.lizi);

    const paint = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].move();
        this.points[i].draw(this.ctx);
        if (this.isBg && this.points[i].name) {
          this.points[i].move(this.mons.x, this.mons.y);
          this.points[i].draw(this.ctx);
        }
        for (let j = i + 1; j < this.points.length; j++) {
          if (this.isBg && this.points[j] === this.mons.lizi) {
            this.points[i].drawLine(this.ctx, this.points[j], true);
          }
          this.points[i].drawLine(this.ctx, this.points[j]);
        }
      }
    };

    function loop() {
      requestAnimationFrame(loop);
      paint();
    }
    loop();
    this.bindEvent(liziNum);
  }

  bindEvent(liziNum) {
    this.canvas.addEventListener('mousemove', e => {
      if (this.isBg) {
        this.mons.x = e.clientX;
        this.mons.y = e.clientY;
      } else {
        this.points.push(new this.Point(e.clientX, e.clientY));
        if (this.points.length > liziNum) {
          this.points.shift();
        }
      }
    });

    this.canvas.addEventListener('mouseout', () => {
      this.mons.x = -100;
      this.mons.y = -100;
    });

    this.canvas.addEventListener('touchmove', () => {
      this.isBg = false;
      this.points.push(new this.Point(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
      if (this.points.length > liziNum) {
        this.points.shift();
      }
    });

    this.canvas.addEventListener('touchend', () => {
      this.mons.x = -100;
      this.mons.y = -100;
    });
  }

  isPC() {
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      /* window.location.href="你的手机版地址";*/
      this.isBg = false;
      console.log(1);
    }
  }
}

export default particleLine;
