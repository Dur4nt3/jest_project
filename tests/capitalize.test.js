import capitalize from '../functions/capitalize';

describe('Testing the capitalization function:', () => {
    test('Is defined', () => {
        expect(capitalize).toBeDefined();
    });

    test('Capitalizes a string', () => {
        expect(capitalize('jest')).toBe('Jest');
    });

    test('Works with empty strings', () => {
        expect(capitalize('')).toBe('');
    });

    test('Works with single character strings', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('Works with white space only strings', () => {
        expect(capitalize(' ')).toBe(' ');
    });

    test('Works with multiple words', () => {
        expect(capitalize('capitalize this string')).toBe(
            'Capitalize this string',
        );
    });

    test('Works with numbers as the first character', () => {
        expect(capitalize('7est')).toBe('7est');
    });

    test('Works with symbols as the first character', () => {
        expect(capitalize('@est')).toBe('@est');
    });
});
