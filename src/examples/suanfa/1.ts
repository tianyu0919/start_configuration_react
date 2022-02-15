function suanfa(params: number[]): number {
  console.log('传入的数组：', params);
  let set = Array.from(new Set<number>(params)).sort((v1, v2) => v1 - v2);
  let data: number[] = [];
  for (let v of set) {
    for (let i = 0; i < 4; i++) {
      data.push(v);
    }
  }
  console.log('整理完的数组：', data)
  const length: number = data.length;
  if (length === 0) { // * 如果长度是 0 传入4
    return resultFn(4);
  } else if (length % 2 === 0) { // * 偶数
    let num = 0;
    let arr = [];
    if (length > 4) {
      let index = length / 2 - 2;
      arr = data.slice(index, index + 4);
      console.log('裁剪的数组：', arr);
      num = arr.reduce((pre, curr) => pre + curr);
    } else {
      num = data.reduce((pre, curr) => pre + curr);
    }
    return resultFn(num);
  } else { // * 奇数
    let num = 0;
    let arr = [];
    if (length > 5) {
      let index = Math.floor(length / 2) - 2;
      arr = data.slice(index, index + 5);
      console.log('裁剪的数组：', arr);
      num = arr.reduce((pre, curr) => pre + curr);
    } else {
      num = data.reduce((pre, curr) => pre + curr);
    }
    return resultFn(num);
  }
}

function resultFn(number: number): number {
  console.log('传进来的number:', number);
  number = Math.abs(number);
  let result = 1;
  let arr: number[] = [];
  for (let i = 0; i < number; i++) {
    result *= (i + 1);
  }
  console.log('阶乘的结果：', result);
  for (let i = 1; i <= result; i++) {
    if (arr.length === 9) {
      break;
    }
    if (result % i === 0) {
      arr.push(i);
    }
  }
  console.log("最终结果：", arr);
  return result;
}

export default suanfa;