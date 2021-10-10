const removeLastChar = s => {
  // return s.split('').reverse().slice(1).reverse().join('');
  return s.slice(0, 1);
}

console.log(removeLastChar('hello'));