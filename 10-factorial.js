// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get argument and cast to integer
const num = parseInt(process.argv[2], 10);

console.log(factorial(num));
