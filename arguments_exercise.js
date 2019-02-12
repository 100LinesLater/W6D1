function sum (...args) {
    // const arr = Array.from(arguments);
    // let res = 0;
    // arr.forEach(el => res += el);
    // return res;
    let res = 0;
    args.forEach(el => res+=el);
    return res;
};

console.log(sum(1, 2, 3, 4));

function curriedSum(numArgs) {
    let numbers = [];
    const _curriedSum = (num) => {
        numbers.push(num);
        if (numbers.length === numArgs) {
            let sum = 0;
            numbers.forEach(n => sum += n);
            return sum;
        } else {
            return _curriedSum;
        }
    };
    return _curriedSum;
}

const summ = curriedSum(4);
console.log(summ(5)(30)(20)(1)); // => 56

// Function.prototype.curry = function (numArgs) {
//     let args = 0;

//     if (args >= numArgs) {
//         return 
//     }
// };




