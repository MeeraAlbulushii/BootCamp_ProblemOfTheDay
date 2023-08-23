//Problem of the day 13

function distinctSum(numbers) {
    const n = numbers.length;
    const dsum = new Set();
  
    for (let mask = 0; mask < (1 << n); mask++) {
      let subsetSum = 0;
      for (let i = 0; i < n; i++) {
        if (mask & (1 << i)) {
          subsetSum += numbers[i];
        }
      }
      dsum.add(subsetSum);
    }
  
    return Array.from(dsum);
  }
  
  const inputNums = [1, 2];
  const result = distinctSum(inputNums);
  console.log(result); 