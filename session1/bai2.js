removeNumber = (...arr) => {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        while(arr.includes(item, i+1)) {
            arr.splice(arr.indexOf(item, i+1), 1)
        }
    }
    return arr;
}
//test
console.log(removeNumber(1,2,3,4,5,1,1,1,2,2,2,3,3,3,6,3,8,9,2,6,4,1,9));   // => [1,2,3,4,5,6,8,9,]