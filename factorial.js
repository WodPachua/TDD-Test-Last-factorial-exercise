export function factorial(num) {
  let factorial = 1;

  if (num < 0 || num > 150) {
    return -1;
  }

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

// PAIR PARTNER
// Sarah Agemo
