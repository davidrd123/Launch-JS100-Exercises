let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

// newList = groceryList.reverse()
// while (newList.length > 0) {
//   console.log(newList.pop());
// }

while (groceryList.length > 0) {
  console.log(groceryList.shift());
}

groceryList; // []