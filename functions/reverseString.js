export default function reverseString(string) {
    return string
        .split('')
        .reduce(
            (result, char, index) =>
                (result = result + string.charAt(string.length - 1 - index)),
            '',
        );
}
