// Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
const divByThree = (num) => {
  if(num % 3 === 0) {
    return `${num} is divisible by three`
  } else{
    return `${num} not divisible by three`
  }
}
console.log(divByThree(18));

// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
var helloMe = {first_name: 'Chris', last_name: 'Norton', age: 30, hair_color: 'brown'}
const describeMe = (arr) =>{
  return `This is ${arr.first_name} ${arr.last_name}. They are ${arr.age} years old and have ${arr.hair_color} hair.`
}

console.log(describeMe(helloMe));




// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
const groceries = ['eggs', 'butter', 'bread', 'ham', 'juice']
var everyOther =(arr)=> {
  let oddGroceries = []
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0){
      oddGroceries.push(arr[i])
  }
  }
  return oddGroceries
}
console.log(everyOther(groceries))
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.

var alphabet = "antidisestablishmentarianism"
const sorter = (str) => {
  let sortArr = str.split('')
  return sortArr.sort().join('')
}
console.log(sorter(alphabet));


// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

var nums = [9, 5, 88, 2, 5, 42, 57]

var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]

const animalNums = (arr1, arr2) => {

  let joined = []
  for(let i = 0; i < arr1.length; i++) {
    let toString = arr2
    joined.push(arr1[i]+arr2[i])
}return joined

  }
console.log(animalNums(nums, nouns));
// output should be: "9 ducks", etc

//6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.

fiveNums = [2, 3, 5, 9, 11]
const timesFive = fiveNums.map(value => value * 5)
console.log(timesFive);
