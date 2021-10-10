let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

nestedArray = [];

for (const prop in person) {
  nestedArray.push([prop, person[prop]]);
}

console.log(nestedArray);