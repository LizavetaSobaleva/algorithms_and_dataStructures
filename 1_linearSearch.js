const array = [1,6,4,8,3,1,9,13,5,2,7,15]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count +=1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 7))
console.log('count = ' + count)