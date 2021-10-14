const min = 20;
const max = 30;
const input = 31;

const makeInputVerifier = (minimum, maximum) => {
    const verify = (inputValue) => {
        if (inputValue < minimum) {
            return `Value must be more than ${minimum}!`;
        } else if (inputValue >= minimum && inputValue <= maximum) {
            return `${inputValue} is in range`;
        } else if (inputValue > maximum) {
            return `Value must be less than ${maximum}!`
        }
    }
    return verify;
}

const verify = makeInputVerifier(min, max);
const result = verify(input);

console.log(result)