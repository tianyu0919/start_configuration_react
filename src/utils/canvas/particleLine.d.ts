declare module "@utils/canvas/particleLine.js" {
  declare class particleLine {

    constructor(params: {
      canvas: CanvasElement;
      num: number;
      isBg: boolean;
    })
    play: Function;
    
  }
  export default particleLine;
}