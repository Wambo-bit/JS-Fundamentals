// Function that adds two integers
function add(a, b) {
  return a + b;
}

// Get arguments
const a = parseInt(process.argv[2], 10);
const b = parseInt(process.argv[3], 10);

console.log(add(a, b));
