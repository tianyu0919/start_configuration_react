const Throttle = (callback: Function, delay = 300) => {
  let timer: number | null = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(callback, delay);
  };
};

export default Throttle;