const num = [1, 3, 8, 10, 11, 16, 18, 20, 4, 7, 2, 5, 6, 9, 12, 15, 19, 13, 17, 14];

num.sort((a, b) => a - b); // Ascending order
num.sort((a, b) => b - a); // Descending order

console.log(num);