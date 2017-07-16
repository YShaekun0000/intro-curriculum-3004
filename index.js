'use strict';
function add(numbers) {
    let result = 0;
    for (let num of numbers) {
        result = result + num;
    }
    return result;
};

function multi(mulnums) {
    let result2 = 1;
    for (let num2 of mulnums) {
        result2 = result2 * num2;
    }
    return result2;
};

module.exports = {
    add: add,
    multi: multi
};
