function fibs(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];

    let result = [0, 1];

    while (result.length < num) {
        let lastNuumber = result[result.length - 1];
        let secondLastNumber = result[result.length - 2];

        let nextNumber = lastNuumber + secondLastNumber;

        result.push(nextNumber);
    }
    return result;
}

console.log(fibs(8));

function fibsRec(num) {
    if (num <= 0) return [];
    if (num === 1) return [0];
    if (num === 2) return [0, 1];

    let sequence = fibsRec(num - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

console.log(fibsRec(8));