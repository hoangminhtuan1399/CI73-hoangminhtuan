findValue = (...arr) => {
    let value = arr[0], max_count = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                count++;
            }
            if(count > max_count) {
                max_count = count;
                value = arr[i];
            }
        }
    }
    return {
        value: value,
        count: max_count,
    }
}
//test
console.log(findValue(1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3, 5, 5)); // => {value: 5, count: 4}