let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

const checkIsIn = (destination, destinations) => {
  for (let d of destinations) {
    if (d === destination) {
      return true;
    }
  }
  return false;
}

console.log(checkIsIn('Barcelona', destinations)); // true
console.log(checkIsIn('Nashville', destinations)); // false