import reverseString from '../functions/reverseString';

describe('Testing the string reversing function:', () => {
    test('Is defined', () => {
        expect(reverseString).toBeDefined();
    });

    test('Reverses string', () => {
        expect(reverseString('jest')).toBe('tsej');
    });

    test('Works with empty strings', () => {
        expect(reverseString('')).toBe('');
    });

    test('Works with single character strings', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('Works with white space only strings', () => {
        expect(reverseString(' ')).toBe(' ');
    });

    test('Works with non-letter strings', () => {
        expect(reverseString('123@456')).toBe('654@321');
    });

    test('Works with multi-word strings', () => {
        expect(reverseString('Reverse this string.')).toBe(
            '.gnirts siht esreveR',
        );
    });
});
