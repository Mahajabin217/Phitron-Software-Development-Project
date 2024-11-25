// Check which number is divisible by both 3 and 5:

function divisible() {
    const num = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            num.push(i);
        }
    }
    console.log(num);
}

divisible();