// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Input: prices = [1,2,3,4,5]
// Output: 4



const getDirection = (yesterdayPrice, todayPrice) => {
  if (todayPrice > yesterdayPrice) return 'asc'
  if (todayPrice < yesterdayPrice) return 'desc'
  return 'none'
}

var maxProfit = function(prices) {
  let globalTrend = getDirection(prices[0], prices[1])
  let extremum =  prices[0]
  let profit = 0
  let todayIdx = 1
  while (todayIdx <= prices.length) {
    const localTrend = getDirection(prices[todayIdx-1], prices[todayIdx])
    if (todayIdx === prices.length && globalTrend === 'asc') { // конец грфика
      const localProfit = prices[todayIdx - 1] - extremum
      return profit + localProfit
    }
    if (localTrend === globalTrend) {
      todayIdx +=1
      continue
    }
    if (localTrend !== 'asc' && globalTrend === 'asc') { //local max, take profit
      const localProfit = prices[todayIdx - 1] - extremum
      profit += localProfit
    }
    extremum = prices[todayIdx - 1]
    globalTrend = localTrend
    todayIdx +=1
  }
  return profit
};
function maxProfit2(prices) {
  // попробовать подход с поиском интервала

}



const s1 = [5, 4, 2, 1, 2, 3, 8, 7, 6] //7
const s2 = [1,2,3,4,5] //4
const s3 = [7,6,4,3,1] //0
const s4 = [2,1,4] // 3
const s5 = [5,2,3,2,6,6,2,9,1,0,7,4,5,0]
const s51 = [5,2,3,2,6,6,2]

maxProfit(s1) //?
maxProfit(s2) //?
maxProfit(s3) //?
maxProfit(s4) //?
maxProfit(s5) //?
