const paths = (n) => {

    let total = 1;

    for (let i = 1; i <= n; i++) {

        //multiply for factorial
        total *= i;

    }

    return total;
}

console.log(paths(5));
console.log(paths(4));
console.log(paths(3));
console.log(paths(2));
console.log(paths(1));

