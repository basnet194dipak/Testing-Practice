function analyzeArray(numbers) {
  const length = numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const average = numbers.reduce((sum, num) => sum + num, 0) / length;

  return {
    "average":average,
    "min":min,
    "max":max,
    "length":length
  };
}

export {analyzeArray}