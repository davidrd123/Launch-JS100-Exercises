let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let city of cities) {
  if (city === null) continue;
  console.log(city);
}