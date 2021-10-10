let obj = {
  number: 1,
  string: 'abc',
  array: [1, 2, 3],
};

const clone = obj => {
  let newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[key] = value;
  }
  return newObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false