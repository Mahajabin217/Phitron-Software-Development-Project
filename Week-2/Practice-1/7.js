// Find out the Unique value:

function uniqueNum(num){
    return [...new Set(num)];
}

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
console.log(uniqueNum(numbers));

