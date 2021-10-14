const steps = 10;

const path = "DUUDUDUDDU";

function countingValleys(steps, path) {
    // Write your code here
    const min = 2;
    const max = 1000000;
    let valleys = 0;
    let isInValley = false;

    // change path to array 
    let parhArr = path = (typeof path === "string") ? path.split('') : s;

    if (parhArr.length >= min
        && parhArr.length <= max
        && steps === parseInt(steps, 0)
        && steps >= min
        && steps <= max
        && steps === parhArr.length) {

        parhArr.map(steps => ((steps === "U") ? 1 : -1))
            .reduce((prev, next) => {
                if (prev < 0 && !isInValley) {
                    isInValley = true;
                }
                if ((prev + next) === 0 && isInValley) {
                    valleys++;
                    isInValley = false;
                }
                // continue incrementing by adding
                return prev + next;
            });
    }

    return valleys;
}

const result = countingValleys(steps, path);
console.log(result);

    
//   /\/\/\  
// \/      \/ 