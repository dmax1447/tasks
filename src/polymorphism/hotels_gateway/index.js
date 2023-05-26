import findAllMatching from './gateway.js';

const findTheCheapestService = (predicates = {}) => {
  const matchedHotels = findAllMatching(predicates)
  if (!matchedHotels.length) return null

  const {service, ...hotel} = matchedHotels.reduce((min, entry) => {
    return entry.cost < min.cost ? entry : min
  }, matchedHotels[0])
  return {hotel, service}
};

findTheCheapestService({min: 600, max: 600}) //?

export default findTheCheapestService;
