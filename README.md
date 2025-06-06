# Testing Practice Project

## Testing Practice - Overview

This is the eleventh project of the "JavaScript" course within "The Odin Project".

The main goal of this project is to serve as an introduction to TDD (Test-Driven Development).

In particular, this project aims to create tests for various algorithms following TDD principles.

The TDD approach used in this project is "Red, Green, Refactor".
Due to the "Refactor" part of the approach, some of the test that were previously implemented are no longer available as they were refactored (e.g., duplicate tests were removed).

## Additional Information

Here is a quick rundown of the functions used in this project:

- `capitalize.js`: takes a string and returns it with the first character capitalized.
<br/>

- `reverse.js`: takes a string and returns it reversed.
<br/>

- `calculator.js`: an object that contains functions for the basic operations: add, subtract, divide, and multiply.
<br/>

- `caesarCipher.js`: takes a string and a shift factor and returns it with each character “shifted”.
Read more about Caesar cipher [here](https://crypto.interactive-maths.com/caesar-shift-cipher.html).
<br/>

- `analyzeArray.js`: takes an array of numbers and returns an object with the following properties: average, min, max, and length.
<br/>

**For information regarding the tests used for each function and their purpose please seek the `test` directory as it contains all the tests used in this project.**

*Note:* Input validation (to a certain extent) is out-of-scope for this project.
Therefore, each of the aforementioned functions assume that the given input is valid (i.e., a string is a valid string, a number is a valid number, etc.).

## Usage

This project is a CLI-based project (i.e., there is no GUI component), you will need to run this project in the command line via `jest`.

### Prerequisites

To run this project you will need to use the npm package `jest`.

**`Babel` is used within this project to allow the usage of ES6 modules.**

*You can use CommonJS modules as an alternative by using `module.exports = <function name>` instead of `export default <function name>` and `const <function name> = require('./path/to/module')` instead of `import <function name> from './path/to/module'`.*

### Installation

Clone the repository via:

`git clone https://github.com/Dur4nt3/recursion_project`

Install the packages used in this project via:

`npm install`

Run:

`npm test`

The output should include various test suites including their description.

## Skills Demonstrated

- Jest

- Unit testing

- Test-Driven Development

- "Red, Green, Refactor" approach
