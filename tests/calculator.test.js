import calculator from '../functions/calculator';

describe('Testing the calculator object:', () => {
    test('Is defined', () => {
        expect(calculator).toBeDefined();
    });

    test('Able to perform addition', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('Addition works with negative numbers', () => {
        expect(calculator.add(-1, -2)).toBe(-3);
    });

    test('Addition works with floats', () => {
        expect(calculator.add(23.45, 57.38)).toBeCloseTo(80.83);
    });

    test('Able to perform subtraction', () => {
        expect(calculator.subtract(1, 2)).toBe(-1);
    });

    test('Subtraction works with negative numbers', () => {
        expect(calculator.subtract(-1, -3)).toBe(2);
    });

    test('Subtraction works with floats', () => {
        expect(calculator.subtract(76.58, 32.81)).toBeCloseTo(43.77);
    });

    test('Able to perform multiplication', () => {
        expect(calculator.multiply(5, 4)).toBe(20);
    });

    test('Multiplication works with negative numbers', () => {
        expect(calculator.multiply(-3, 6)).toBe(-18);
    });

    test('Multiplication works floats', () => {
        expect(calculator.multiply(14.28, 7.52)).toBeCloseTo(107.3856);
    });

    test('Multiplication works with zeros', () => {
        expect(calculator.multiply(0, 10)).toBe(0);
    });

    test('Able to perform division', () => {
        expect(calculator.divide(12, 2)).toBe(6);
    });

    test('Division works with negative numbers', () => {
        expect(calculator.divide(100, -50)).toBe(-2);
    });

    test('Division works with floats', () => {
        expect(calculator.divide(8.64, 3.27)).toBeCloseTo(2.642);
    });

    test('Division handles zero as the dividend', () => {
        expect(calculator.divide(0, 10)).toBe(0);
    });

    test('Division handles zero as the divisor', () => {
        expect(calculator.divide(20, 0)).toBe(NaN);
    });
});
