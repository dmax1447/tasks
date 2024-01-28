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
      return profit + (prices[todayIdx - 1] - extremum)
    }

    if (localTrend === globalTrend) {
      todayIdx +=1

      continue
    }
    if (localTrend === 'desc') { //local max, take profit
      profit += (prices[todayIdx - 1] - extremum)
    }
    extremum = prices[todayIdx - 1]
    globalTrend = localTrend
    todayIdx +=1
  }
  return profit
};

const s1 = [5, 4, 2, 1, 2, 3, 8, 7, 6] //7
const s2 = [1,2,3,4,5] //4
const s3 = [7,6,4,3,1] //0
const s4 = [2,1,4] // 3

maxProfit(s1) //?
maxProfit(s2) //?
maxProfit(s3) //?
maxProfit(s4) //?
