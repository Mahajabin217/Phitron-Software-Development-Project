// Check Which name is highest word:

const friend = (array) => {
    let bigName = array[0];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.length > bigName.length) {
            bigName = element;
        }
    }
    return bigName;
}

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const bigFrnd = friend(friends);

console.log(bigFrnd);