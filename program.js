/* Primitive Type
Number - Any numberical value from Positive, Negative, Decimal, Fractional belongs to Number Category

String - Text value which is type inside single quote or double quote 

Boolean - true or false 

Variable Creation (Temp Storage)
syntax 
var variabale_name = value;
var -> javascript keyword 
variabale_name -> Should be a proper and meaninful English workd, It Should only A-Z, a-z, 0-9, _, &
value -> Input data 
*/

//To pass number input
var phoneNumber = 987847545;

//To pass text input
var emailId = "kathick145@gmail.com";

//To pass boolean input 
var result = true;

//To print a vaiable or message in console 
console.log("Good Evening!");  // text message
console.log(emailId); // varaible


// Null - Non Exisit Value

// Undefined - A variable has been created but it does not have value 

var futureReferenece = undefined;
var futureReferenece;

var firstName = "mr.abc";
var lastName = "xyz";
var rollNumber = "45A755";
var fathersName = "dec";
var address = "zyx";

/*Object - It is a Collection of key value pair
synax 
var variabale_name = {
  key : value,
  key : value,
  key : value
}
key -> similar to variabale_name
value -> Data type */

var studentInformation = {
  firstName : "mr.abc",
  lastName : "bce",
  rollNumber : 4578555,
  address : "chenai"
}


console.log(studentInformation)

/*Array -> It is a List of Data, It should have Similar data type 
synax 
var variabale_name = [value1, value2, ... valueN];
value1 -> Data type */

var numberList = [71, 55, 9988, 645, 245];
var nameList = ["abcs", "sdf", "rwe", "erter"];

var studentInfoList = [
  {
    name : "sad",
    age: 25,
  },
  {
    name : "acb",
    age: 25
  },
  {
    location : "sadf"
  }
];

console.log(numberList);
console.log(nameList);
console.log(studentInfoList);

/*Function -> It is Block of Code 
syntax 
function functionName(){
  we should code inside here
}
function -> JavaScript keyword
functionName -> Same as variable_name
*/

function printWelcomeMessage(){
  var message = "Good Evening Everyone!";
  alert(message);
};

/*
Opertors 
1. Arithmetic Opertor +, -, *, /, %, ++, --
2. Assignment Opertor =
3. Comparision Opertor < (less than), <= (less than or equal to), >, >=, ==, !=, ===, !==
4. Logical Operator &&, ||, !

AND - &&
true && true - true
false && false - false 
true && false - false 
false && false - false 

OR - ||
true || true - true
false || true - true 
true || false - true
false || false - false 

NOT - !
! true - false
! false - true 
*/

/*Syntax of If Else Condition 
if(Condition){
  If block - true 
}
else{
  Else block - false
}*/

/*
Problem Statement:
Find whether a given user age can eligible for Vote in India

Solution Statement
1. To pass user age (number) as input to program 
2. To find the given age is greater then or equal to 18 --> The given user age is eligible for Vote 
3. If the user age is less then 18 --> The given user age is NOT eligible for Vote 
*/

function checkVoitingEligibility(){
  var age = prompt("Enter the user age");
  if(age >= 18){
    alert("The given user age is Eligible for Vote");
  }
  else{
    alert("The given user age is NOT eligible for Vote");
  }
}

/*Syntax of Multiple If Else Condition 
if(condition){

}
else if(condition){

}
else{

}

Problem Statement:
Find whether a given user age belong which Age Category 
1. Minor - User age less then 18
2. Major - User age greater than or equal to 18 and less than 60
3. Senior - User age greater then 60
*/

function checkAgeCategory(){
  var age = prompt("Enter User Age");
  if(age < 18){
    alert("The user age belong to Minor Category");
  }
  else if(age >= 18 && age < 60){
    alert("The user age belong to Major Category");
  }
  else{
    alert("The user age belong to Senior");
  }
}

/*Syntax for Loop

for(initialization; condition; increment/decrement operator){
  code 
}

initialization - To deaclare a variable with Loop Starting number 
condition - Comparison operator to check the Loop count 
increment/decrement operator - To increase the loop count 
*/

for(var count = 1; count <= 20; count++){
  console.log(count);
}

/*
Problem Statement:
To find all the even numbers for the given N number of Limit 
1. To pass End number as Input 
2. To print all the even number from 1 to End number 
3. Number % 2 === 0 --> Even number 
*/

function findEvenNumbers(){
  var endNumber = prompt("Enter a Number");
  for(var count = 1; count <= endNumber; count++){
    if(count % 2 === 0){
      console.log(count, "is a Even Number");
    }
  }
}


/*Syntax Switch Case 
switch(expression){
  case value :
    code block
    break;

  case value :
    code block
    break;

  default:
    code block
}*/

/*
Problem Statement
To perfom Calculator Basic Arithmetic Operation 
3 Input -> Number1, Number2, Operator
*/

function performCalculation(){
  try{
    var firstNumber = prompt("Enter First Number");
    var secondNumber = prompt("Enter Second Number");
    var operator = prompt("Enter your Operator");
    var result; 

    switch(operator){
      case "+":
        result = parseInt(firstNumber) + parseInt(secondNumber);
        alert("The addition of 2 number is " + result);

        break;
      case "-":
        result = firstNumber - secondNumber;
        alert("The subraction of 2 number is " + result);

        break;
      case "*":
        result = firstNumber * secondNumber;
        alert("The multiply of 2 number is " + result);

        break;
      case "/":
        result = firstNumber / secondNumber;
        alert("The division of 2 number is " + result);

        break;
      default:
        alert("Please enter only basic arthihmetic operator");
    }
  }
  catch(error){
    console.error(error);
    alert("Something went wrong, pls try again later");
  }
  

}