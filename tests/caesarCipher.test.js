import caesarCipher from '../functions/caesarCipher';

describe('Testing the Caesar cipher function:', () => {
    test('Is defined', () => {
        expect(caesarCipher).toBeDefined();
    });

    test('Able to create a cipher', () => {
        expect(caesarCipher('jest', 3)).toBe('mhvw');
    });

    test('Able to handle a shift factor of 0', () => {
        expect(caesarCipher('same', 0)).toBe('same');
    });

    test('Works with upper case', () => {
        expect(caesarCipher('Jest', 5)).toBe('Ojxy');
    });

    test('Able to handle punctuation, white spaces, and other special characters', () => {
        expect(caesarCipher('Hello, World!', 7)).toBe('Olssv, Dvysk!');
    });

    test('Able to handle wrapping from z to a', () => {
        expect(caesarCipher('wxyz', 3)).toBe('zabc');
    });

    test('Able to handle wrapping from Z to A (preserves uppercase letters)', () => {
        expect(caesarCipher('WXYZ', 3)).toBe('ZABC');
    });

    test('Able to handle wrapping from both z to a and Z to A', () => {
        expect(caesarCipher('xyzXYZ', 6)).toBe('defDEF');
    });

    test('Able to handle large shift factors that can cause multiple wrappings', () => {
        expect(caesarCipher('This shift factor is pretty big.', 74)).toBe(
            'Pdeo odebp bwypkn eo lnappu xec.',
        );
    });

    test('Able to handle negative shift factors', () => {
        expect(caesarCipher('bcd', -1)).toBe('abc');
    });

    test('Able to handle wrapping with negative shift factors', () => {
        expect(caesarCipher('Negative factors WORK!', -8)).toBe(
            'Fwyslanw xsulgjk OGJC!',
        );
    });

    test('Able to handle large negative shift factors that can cause multiple wrappings', () => {
        expect(caesarCipher('Big and Negative!', -67)).toBe(
            'Mtr lyo Yprletgp!',
        );
    });
});
