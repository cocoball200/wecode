const testList = function (num) {
    const result = [];
    for (let i = 1; i < num + 1; i++) {
        i % 2 === 0 && result.push(i)
    }
    return result;
}
testList(50);
