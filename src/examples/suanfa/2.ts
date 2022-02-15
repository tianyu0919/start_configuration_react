function algorithm(str: string): string {
  let result: string = "";
  // let reg = /[\d.]/g;
  let reg = /[a-zA-Z]/g;
  let regStr = str.replace(reg, (val) => `-${val}.`);
  console.log(regStr);
  regStr = regStr.slice(1);
  console.log(regStr);
  let numbs = regStr.split('-');
  numbs.forEach(v => {
    if (v) {
      let [s, n] = v.split('.');
      result += s.padEnd(parseInt(n), s);
    }
  })
  console.log(result);
  return result;
}

export default algorithm;