import analyzeArray from '../functions/analyzeArray';

describe('Testing the array analysis function:', () => {
    test('Is defined', () => {
        expect(analyzeArray).toBeDefined();
    });

    test('Returns required properties', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test('Works with positive real numbers', () => {
        expect(analyzeArray([1.35, 14.72, 72.83, 6.78])).toEqual({
            average: 23.92,
            min: 1.35,
            max: 72.83,
            length: 4,
        });
    });

    test('Works with all real numbers', () => {
        expect(analyzeArray([0, -900, 135.42, 85.32])).toEqual({
            average: -169.815,
            min: -900,
            max: 135.42,
            length: 4,
        });
    });

    test('Handles duplicate values', () => {
        expect(analyzeArray([1, 1, 1])).toEqual({
            average: 1,
            min: 1,
            max: 1,
            length: 3,
        });
    });

    test('Handles arrays with 1 element', () => {
        expect(analyzeArray([10])).toEqual({
            average: 10,
            min: 10,
            max: 10,
            length: 1,
        });
    });

    test('Handles empty arrays', () => {
        expect(analyzeArray([])).toEqual({
            average: null,
            min: null,
            max: null,
            length: 0,
        });
    });

    test('Handles rounding the average to 3 digits after the decimal (rounding up)', () => {
        expect(analyzeArray([13.52123, -76.2123, 54.12, 7])).toEqual({
            average: expect.closeTo(-0.393),
            min: -76.2123,
            max: 54.12,
            length: 4,
        });
    });
});
