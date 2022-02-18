// * 递归属于【自上而下】
// * dynamicProgramming(dp) 动态规划 属于【自底而上】。
function dynamicProgramming(num: number): number {
  let dp = [0];
  dp[1] = dp[2] = 1;

  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  console.log(dp, dp[num]);
  return dp[num];
}

export default dynamicProgramming;