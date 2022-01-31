declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

// declare module '@utils/Throttle' {
//   export default function Throttle(callback: any, delay: number): void;
// } 