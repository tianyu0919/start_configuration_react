// * 双指针
// * 传入一个数组，返回不重复的值。且位置不发生改变。
function pointer(nums: number[]): number {
  let l = 0;
  let arr = [...nums];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[l] !== arr[i]) {
      arr[++l] = arr[i];
    }
  }
  console.log(arr);
  console.log(...nums)
  return arr.slice(0, l).length;
}

export default pointer;