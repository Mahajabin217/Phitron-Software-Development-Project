// How to find out the max number from an array:

function maxNum(arr){
    return Math.max(...arr);
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(maxNum(numbers));