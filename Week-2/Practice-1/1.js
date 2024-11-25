// How To Calculate The Grading System Using Javascript:

var result = 50;

if (result < 0) {
    console.log("Fail");
} else if (result >= 0 && result < 40) {
    console.log("C Grde");
} else if (result >= 40 && result < 60) {
    console.log("B Grade");
} else if (result >= 60 && result < 70) {
    console.log("A- Grade");
} else if (result >= 70 && result < 80) {
    console.log("A Grade");
} else if (result >= 80 && result < 100) {
    console.log("A+ Grade");
} else {
    console.log("Invalid");
}

