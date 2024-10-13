const rentContainers = require("./algorithm");

function runTests() {
  const tests = [
    {
      neededContainer: 3,
      listings: [
        { name: "Container renter A", container: 1, totalCost: 1 },
        { name: "Container renter B", container: 2, totalCost: 1 },
        { name: "Container renter C", container: 3, totalCost: 3 },
      ],
      expected: `[Contract with] Container renter B 2 container, price: 1\n[Contract with] Container renter A 1 container, price: 1\n[Summary] total cost 2`,
    },
    {
      neededContainer: 10,
      listings: [
        { name: "Container renter A", container: 5, totalCost: 5 },
        { name: "Container renter B", container: 2, totalCost: 10 },
        { name: "Container renter C", container: 2, totalCost: 3 },
      ],
      expected: `[Contract with] Container renter A 5 container, price: 5\n[Contract with] Container renter C 2 container, price: 3\n[Contract with] Container renter B 2 container, price: 10\nNot enough containers\n[Summary] total cost 18`,
    },
    {
      neededContainer: 10,
      listings: [
        { name: "Container renter A", container: 5, totalCost: 5 },
        { name: "Container renter B", container: 2, totalCost: 10 },
        { name: "Container renter C", container: 10, totalCost: 3 },
      ],
      expected: `[Contract with] Container renter C 10 container, price: 3\n[Summary] total cost 3`,
    },
    {
      neededContainer: 5,
      listings: [
        { name: "Container renter A", container: 3, totalCost: 3 },
        { name: "Container renter B", container: 2, totalCost: 1 },
        { name: "Container renter C", container: 4, totalCost: 6 },
      ],
      expected: `[Contract with] Container renter B 2 container, price: 1\n[Contract with] Container renter A 3 container, price: 3\n[Summary] total cost 4`,
    },
    {
      neededContainer: 4,
      listings: [
        { name: "Container renter A", container: 2, totalCost: 2 },
        { name: "Container renter B", container: 2, totalCost: 2 },
        { name: "Container renter C", container: 2, totalCost: 2 },
      ],
      expected: `[Contract with] Container renter A 2 container, price: 2\n[Contract with] Container renter B 2 container, price: 2\n[Summary] total cost 4`,
    },
    {
      neededContainer: -1,
      listings: [
        { name: "Container renter A", container: 2, totalCost: 2 },
        { name: "Container renter B", container: 2, totalCost: 2 },
      ],
      expected: "Invalid input",
    },
    {
      neededContainer: 1,
      listings: [],
      expected: "Invalid input",
    },
    {
      neededContainer: 1,
      listings: "Not an array",
      expected: "Invalid input",
    },
    {
      neededContainer: 10,
      listings: [
        { name: "Container renter A", container: 5, totalCost: 5 },
        { name: "Container renter B", container: 2, totalCost: 10 },
        { name: "Container renter C", container: 4, totalCost: 2 },
      ],
      expected: `[Contract with] Container renter C 4 container, price: 2\n[Contract with] Container renter A 5 container, price: 5\n[Contract with] Container renter B 1 container, price: 5\n[Summary] total cost 12`,
    },
    {
      neededContainer: 10,
      listings: [
        { name: "Container renter A", container: 5, totalCost: 5 },
        { name: "Container renter B", container: 2, totalCost: 9.1 },
        { name: "Container renter C", container: 4, totalCost: 2 },
      ],
      expected: `[Contract with] Container renter C 4 container, price: 2\n[Contract with] Container renter A 5 container, price: 5\n[Contract with] Container renter B 1 container, price: 4.55\n[Summary] total cost 11.55`,
    },
  ];

  tests.forEach((test, index) => {
    const result = rentContainers(test.neededContainer, test.listings);
    console.log(
      `Test case ${index + 1}: ${
        result === test.expected ? "Passed" : "Failed"
      }`
    );
    if (result !== test.expected) {
      console.log(`  Expected: ${test.expected}`);
      console.log(`  Received: ${result}`);
    }
  });
}

runTests();
