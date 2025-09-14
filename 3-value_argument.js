#!/usr/bin/node
// Get the first argument (ignoring the first two items: node and script path)
const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
