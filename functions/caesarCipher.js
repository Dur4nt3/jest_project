// Handles character wrapping
function wrapCharacter(charCode, type) {
    if (type === 'upperCase') {
        return charCode > 90 ? 65 + (charCode - 91) : 91 - (65 - charCode);
    }
    if (type === 'lowerCase') {
        return charCode > 122 ? 97 + (charCode - 123) : 123 - (97 - charCode);
    }
}

// Utility function that returns the new ascii code of a given character after shifting it via the key
function createNewCharCode(currentCode, shiftFactor) {
    // Only need to shift letters
    let newCode =
        (currentCode >= 65 && currentCode <= 90) ||
        (currentCode >= 97 && currentCode <= 122)
            ? currentCode + shiftFactor
            : currentCode;

    // An uppercase letter that requires wrapping
    if (currentCode >= 65 && currentCode <= 90) {
        // Handles multiple wrappings for large keys
        while (newCode > 90 || newCode < 65) {
            newCode = wrapCharacter(newCode, 'upperCase');
        }
    }
    // A lowercase letter that requires wrapping
    else if (currentCode >= 97 && currentCode <= 122) {
        // Handles multiple wrappings for large keys
        while (newCode > 122 || newCode < 97) {
            newCode = wrapCharacter(newCode, 'lowerCase');
        }
    }

    return newCode;
}

export default function caesarCipher(string, shiftFactor) {
    return string.split('').reduce((cipher, char) => {
        const currentCode = char.charCodeAt(0);
        let newCode = createNewCharCode(currentCode, shiftFactor);

        cipher += String.fromCharCode(newCode);
        return cipher;
    }, '');
}
