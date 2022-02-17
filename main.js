const add = (firstNumber, secondNumber) => {
    const result = firstNumber + secondNumber

    return result
}
const subtract = (firstNumber, secondNumber) => {
    const result = firstNumber - secondNumber

    return result
}
const multiply = (firstNumber, secondNumber) => {
    const result = firstNumber * secondNumber

    return result          
}
const divide = (firstNumber, secondNumber) => {
    const result = firstNumber / secondNumber

    return result
}
const square = (number) => {
    const result = number * number
    
    return result
}

const doMath = (numOne, numTwo=0, operation) =>{
    let result
    let operator

    if(typeof numOne === 'string'){
        return "Invalid entry."
    }else if(typeof numTwo === 'string'){
        operator = numTwo
    }else{
        operator = operation
    }
    switch(operator){
        case "add":
            result = add(numOne, numTwo)
            return result
        case "subtract":
            result = subtract(numOne, numTwo)
            return result
        case "multiply":
            result = multiply(numOne, numTwo)
            return result
        case "divide":
            result = divide(numOne, numTwo)
            return result
        case "square":
            result = square(numOne)
            return result
        default:
            return "Invalid entry."
    }

}
console.log(`Adding 4 to 7: ${doMath(4, 7, "add")}`)
console.log(`Subtracting 20 from 82: ${doMath(82, 20, "subtract")}` )
console.log(`Multiplying 12 by 12: ${doMath(12, 12, "multiply")}`)
console.log(`Dividing 144 by 12: ${doMath(144, 12, "divide")}`)
console.log(`Squaring 4: ${doMath(4,"square")}`)
console.log()

console.log("bonus challenge:\n A quarter of the animals on a farm have four legs.\n The remaining three quarters of the animals have two legs.\n If there are 60 legs overall, how many animals are there on the farm?\n")

const fourLegs = (doMath(doMath(60, .25, "multiply"), 4, "divide"))
const twoLegs = (doMath(doMath(60, .75, "multiply"), 2, "divide"))

console.log(`The number of four-legged animals is ${fourLegs}`)
console.log(`The number of two-legged animals is ${twoLegs}`)

console.log(`The total number of animals on the farm is ${add(fourLegs, twoLegs)}`)
console.log("My math is wrong, but my calculator works. Turns out calculators don't solve all of your math problems, after all!")

