const arr = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

const newArr = arr.filter((elem) => {
    return !isNaN(parseInt(elem));
});

console.log(newArr);
