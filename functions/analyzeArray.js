function decimalCount(num) {
    const stringNum = String(num);

    if (stringNum.includes('.')) {
        return stringNum.split('.')[1].length;
    }

    return 0;
}

export default function analyzeArray(array) {
    if (array.length === 0) {
        return { length: 0, average: null, min: null, max: null };
    }

    const analysis = array.reduce(
        (obj, num, index) => {
            if (index !== 0) {
                obj.min = num < obj.min ? num : obj.min;
                obj.max = num > obj.max ? num : obj.max;
                obj.average += num;
            }
            return obj;
        },
        {
            average: array[0],
            min: array[0],
            max: array[0],
            length: array.length,
        },
    );

    // Allows for rounding to 3 digits after the decimal

    analysis.average = analysis.average / analysis.length;

    analysis.average =
        decimalCount(analysis.average) <= 3
            ? analysis.average
            : Number(analysis.average.toFixed(3));

    return analysis;
}
