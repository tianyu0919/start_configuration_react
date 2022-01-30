const Throttle = (callback, delay = 300) => {
  let timer= null;
  return () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(callback, delay);
  };
};

export default Throttle;