const calculateBMI = (weight, heightInCM) => {
  bmi = weight / (heightInCM / 100) ** 2;

  return bmi.toFixed(2);
}

console.log(calculateBMI(177/2.2, 182.88));