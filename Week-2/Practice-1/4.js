// Check if the year is Leapyear or not:

function leapYear(yr){
    if((yr % 4 === 0 && yr % 100 != 0) || yr % 400 === 0){
        return ("It is Leapyear");
    } else {
        return ("It's not Leapyear");
    }
}

console.log(leapYear(2023));
console.log(leapYear(2024));