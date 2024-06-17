// Cursor Park (anyone not typing put your cursor here)

// Write a pure function that multiplies two numbers together and returns the result.
const multiplyNumbers = (num1:number , num2:number) => num1 * num2; 
// Then console log the result.



const result = multiplyNumbers(3, 2)
// TODO log it
console.log("Result = ", result);

// Write a pure function that concatenates firstName and lastName to say hello.
// Then console log the result.

const concatNames = (firstName: string, lastName: string): string => `${firstName} ${lastName}`;

const nameResult = concatNames('Alice', 'Bloggs');
console.log("nameResult = ",nameResult);
