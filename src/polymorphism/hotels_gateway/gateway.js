import hotelsByService from './data.js';

// BEGIN (write your solution here)
const DIGITS_COUNT_AFTER_COMMA = 1
const round = num => Math.round( num * (10 * DIGITS_COUNT_AFTER_COMMA) ) / (10 * DIGITS_COUNT_AFTER_COMMA)
// const round = num => Math.round( num * 1e2 ) / 1e2;
round(605.1235) //?

const findAllMatching =  (params = {}) => {
  const mappingGetCostByService = {
    'ostrovok': (hotelData) => round(hotelData.cost * 1.12),
    'booking': (hotelData) => hotelData.cost * 75,
    'kayak': (hotelData) => hotelData.cost,
  }

  const mappingPredicatesFnByKey = {
    min: minValParam => val => val > minValParam,
    max: maxValParam => val => val < maxValParam
  }

  const mapHotelEntry = (hotel, service) => ({ service, ...hotel, cost: mappingGetCostByService[service](hotel)})

  const predicates = Object.entries(params)
    .map(([filterKey, filterParam]) => mappingPredicatesFnByKey[filterKey](filterParam))


  const hotels = hotelsByService.map(({service, hotels}) => hotels.map(hotel => mapHotelEntry(hotel, service))).flat()
  return predicates.length ? hotels.filter(hotel => predicates.every(predicate => predicate(hotel.cost))) : hotels
}

export default findAllMatching
// END
findAllMatching() //?
