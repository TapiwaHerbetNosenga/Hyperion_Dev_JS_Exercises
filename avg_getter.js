
//the point of this exercise is to request an input of numbers from the user and only stop requesting once the user inputs -1, once this happens the program needs to figure out the avaerage of all the numbers given and tell it to the user//

alert(`Give me Numbers!`);

//input stores the number input from the user//
let input="";

//This variable stores the cummilitive number of number inputs from the user//
let total=0;

//This variable stores the total number of numbers inputted//
let count=0;

//This while loop is meant to ask for a number Input and add it to the total value, it stops when the number given is -1//
while(input !=-1){
    input=Number(prompt("Type Number Here"));
    total=total+input;
    count++
}

//The variable avg is meant to store the average of the number inputs from teh user//
let avg= total/count;

alert(`The average of the numbers given is: ${avg}`);



