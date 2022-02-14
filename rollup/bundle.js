class initBall {
    constructor(w, h, ctx, distance, ballOptions) {
        this.w = 0;
        this.h = 0;
        this.w = w;
        this.h = h;
        this.x = this.random(0, w);
        this.y = this.random(0, h);
        this.r = ballOptions.radius;
        this.vx = this.random(-1, 1);
        this.vy = this.random(-1, 1);
        this.color = ballOptions.color;
        this.ctx = ctx;
        this.distance = distance;
    }
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
    draw() {
        const { x, y, r, color } = this;
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x - this.r <= 0 || this.x + this.r >= this.w) {
            this.vx = -this.vx;
        }
        if (this.y - this.r <= 0 || this.y + this.r >= this.h) {
            this.vy = -this.vy;
        }
    }
}
class Animate {
    constructor(ball, ctx, w, h) {
        this.ani = () => {
            const { ctx, ball, w, h, mouseX, mouseY } = this;
            if (ctx) {
                ctx.clearRect(0, 0, w, h);
                ball.forEach((v) => {
                    // const { x: x1, y: y1, distance } = v;
                    v.update();
                    v.draw();
                    if (mouseX && mouseY) {
                        this.strokeLine(v, { x2: mouseX, y2: mouseY }, true);
                    }
                    ball.forEach(v2 => {
                        // const { x: x2, y: y2 } = v2;
                        this.strokeLine(v, v2);
                    });
                });
            }
            window.requestAnimationFrame(this.ani);
        };
        this.strokeLine = (clientOne, clientTwo, 
        // distance: number,
        isBall = false) => {
            const { ctx, lineColor } = this;
            const [r, g, b] = lineColor;
            const { x: x1, y: y1, distance } = clientOne;
            let x2, y2;
            if (clientTwo instanceof initBall) {
                x2 = clientTwo.x;
                y2 = clientTwo.y;
            }
            else {
                x2 = clientTwo.x2;
                y2 = clientTwo.y2;
            }
            const x = Math.abs(Math.pow(Math.max(x1, x2) - Math.min(x1, x2), 2));
            const y = Math.abs(Math.pow(Math.max(y1, y2) - Math.min(y1, y2), 2));
            const dis = Math.sqrt(x + y);
            let a = isBall ? 1 : 1 - (dis / distance);
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
            ctx.lineWidth = 0.4;
            const scope = distance / 2;
            // * 如果是鼠标滑动。
            if (isBall) {
                if (dis <= distance + scope) {
                    clientOne.x += (x2 - x1) * 0.02;
                    clientOne.y += (y2 - y1) * 0.02;
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
            else if (dis <= distance) {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        };
        this.ball = ball;
        this.ctx = ctx;
        this.w = w;
        this.h = h;
        this.lineColor = [255, 154, 0];
        this.ani();
    }
}
function initCanvas(CanvasElement, options) {
    if (!CanvasElement) {
        throw new Error("Canvas element is not defined");
    }
    // * 函数默认值
    const defaultBallOptions = {
        radius: 3,
        color: 'red',
        lineColor: [255, 154, 0]
    };
    const defaultOptions = {
        number: 200,
        distance: 80,
        ballOptions: defaultBallOptions
    };
    options = Object.assign(Object.assign(Object.assign({}, defaultOptions), options), { ballOptions: Object.assign(Object.assign({}, defaultBallOptions), options.ballOptions) });
    let w = window.innerWidth, h = window.innerHeight;
    CanvasElement.width = w;
    CanvasElement.height = h;
    const ballArr = [];
    let ctx = CanvasElement.getContext("2d");
    let animateInstance;
    console.log('拉了');
    // * 用来设置canvas的大小
    const resizeFn = (delay = 0) => {
        let time = null;
        return () => {
            if (time) {
                clearTimeout(time);
                time = null;
            }
            time = window.setTimeout(() => {
                w = window.innerWidth;
                h = window.innerHeight;
                CanvasElement.width = w;
                CanvasElement.height = h;
                ballArr.forEach(v => {
                    v.w = w;
                    v.h = h;
                });
                animateInstance.w = w;
                animateInstance.h = h;
            }, delay);
        };
    };
    window.onresize = resizeFn(300);
    if (ctx) {
        console.log(options.ballOptions);
        const { number, distance, ballOptions } = options;
        for (let i = 0; i < number; i++) {
            let ball = new initBall(w, h, ctx, distance, ballOptions);
            ball.draw();
            ballArr.push(ball);
        }
        const { lineColor } = ballOptions;
        console.log(lineColor);
        animateInstance = new Animate(ballArr, ctx, w, h);
        animateInstance.lineColor = [...lineColor];
        // * 事件注册
        CanvasElement.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            animateInstance.mouseX = clientX;
            animateInstance.mouseY = clientY;
        });
        CanvasElement.addEventListener('mouseleave', () => {
            animateInstance.mouseX = undefined;
            animateInstance.mouseY = undefined;
        });
    }
}

export { initCanvas as default };
