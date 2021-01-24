const countTrue = (arr) => {
    let counter = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == true)
            counter++;
    }
    return counter;
}

// Expected outputs: 3, 0, 4, 5
console.log(countTrue([true, false, true, true]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([true, true, true, true]));
console.log(countTrue([true, false, true, true, false, false, true, true]));

