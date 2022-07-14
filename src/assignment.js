// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/**
 * Challenge - 1
 * 
 * Calculate and return the sum of the numbers in an array.
 * If you did Challenge - 1, remove the comment in the line just after this function
 * 
 * @param {Array} arrayOfNumbers the array of numbers to sum
 * @returns number the sum of the numbers
 */
function sumOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
}
// assignment.sumOfNumbers = sumOfNumbers;


//  * Challenge - 2
//  * 
//  * Count all even numbers within an array of numbers.
const arrayOfNumbers = [2,4,9,7,4,2,2,2,2]
let count = 0

function countEvenNumbers(arrayOfNumbers){
    arrayOfNumbers.forEach((num) =>{
        if(num % 2 === 0){
            count+= 1
        }else{
            return
        }
    })
    // console.log(`The total number of even numbers is ${count}`)
}
countEvenNumbers(arrayOfNumbers)
assignment.countEvenNumbers = countEvenNumbers;


//  * Challenge - 3
//  * 
//  * Given an array of numbers representing temperatures in Celsius,
//  * convert each number to Fahrenheit and return a new array containing the converted
//  * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
//  * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)

const arrayOfTemperatures = [0,56,32]

let newArray = []
function celsiusToFahrenheit(arrayOfTemperatures){
    arrayOfTemperatures.forEach((num)=>{
       let conversion =Math.trunc((num * 1.8) + 32)
        newArray.push(conversion)
    })

    // console.log(newArray)
}
celsiusToFahrenheit(arrayOfTemperatures)

assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

