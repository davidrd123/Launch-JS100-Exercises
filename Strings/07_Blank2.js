const isBlank = s => s.trim().length === 0;

console.log(isBlank(""));
console.log(isBlank(" "));
console.log(isBlank("  "));
console.log(isBlank(" a "));