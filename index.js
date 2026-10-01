/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

const result = `${part1[0]}${part1[1]}${part1[2]}${part1[3].toUpperCase()}${part2[0]}${part2[1]}${part2[2]}${part2[3]}${part2[4]}${part2[5].toUpperCase()}`

// Print the cameLtaiL-formatted string

console.log(result)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal/15

// Print out the tipAmount

console.log(`${tipAmount}$`)

/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomInteger = (Math.random() * 10 - 1) + 1

// Print the generated random number

console.log(randomInteger)

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// El resultado es la b por lo que daría false
const expression2 = a || b;
// El resultado es la a por lo que daría true
const expression3 = !a && b;
// El resultado es la !a por lo que daría false
const expression4 = !(a && b);
// El resultado es la b pero como se invierte después daría true
const expression5 = !a || !b;
// El resultado es la !b por lo que daría true
const expression6 = !(a || b);
// El resultado es la a pero como se invierte después daría false
const expression7 = a && a;
// El resultado es la a pero porque no ha encontrado ningún false y te devuelve el último valor que es a y que es true

console.log(expression1)
console.log(expression2)
console.log(expression3)
console.log(expression4)
console.log(expression5)
console.log(expression6)
console.log(expression7)