"use strict";
function myfilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i += 1) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
const filterNumber = myfilter([1, 2, 3], (item) => item < 3);
console.log(filterNumber);
const filterString = myfilter(['a', 'b', 'c'], (item) => item !== 'a');
console.log(filterString);
