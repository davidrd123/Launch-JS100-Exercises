const catAge = humanYears => {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      return (humanYears - 2) * 4 + 24; 
  }

}

for (let i = 0; i < 5; i++) {
  console.log(catAge(i));
}