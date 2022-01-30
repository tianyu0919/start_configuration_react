declare module '@utils/throttle' {
  declare const content: (callback: Function, delay = 100) => () => void;
  export default content;
}