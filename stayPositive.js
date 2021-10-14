let arr = [-5, 4, -2, 3, 1, -1, -6, -1, 0, 5];
// let arr = [3, -6, 5, -2, 1];
// let arr = [-5, 4, 3, -2, 1];
// let arr = [-4, 3, 2, 1];

const minStart = (ar) => {
    let min = 0;
    let sum = 0;

    ar.forEach(val => {
        sum += val;
        // console.log(sum, 'sum')
        // console.log(min, 'min')
        min = min < sum ? min : sum;
    });
    return min = 1 - min;
}

console.log(minStart(arr));