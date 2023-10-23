/* The point of this exercise is to get a string input from a user and check to see if the word is a palindrome(a word thats the same spelt backwards)*/

alert (`Type a word and I'll tell you if it's a palindrome.`);

let input= String(prompt("Type your word here:"));

//loopReps is used to store the length of the word and thus its max value so the program knows  how many times to iterate the loop that will reverse the word//

let loopReps= Number(input.length);

//by converting input into an array it allows to convert a primitive data type to a non-primitive data type and therefore mutate it to get the reverse of the word//
let palindromeArr= Array.from(input); 

//this checkPalindrome is the array used to store the reversed word input to check if the word is a palidrome//
const checkPalindrome =[];




//the while loop is used to push a single decreasing element from the palindromeArr array to get the reveresed word of the input until loopReps reches 1//
while (loopReps >=1) {
    loopReps=loopReps-1;
    
    checkPalindrome.push ((palindromeArr[loopReps]));
   
}

//the empty checking variable will be used to store the string value of the new reversed word from the while loop and the checkPalindrome array//
let checking = "";

//conversion of the array checkPalindrome to a string so we can compare its values to the original array//
checking= checkPalindrome.toString();


//conversion of the palindromeArr array to a string so we can compare its value to the new reveresed word from the checkPalindrome array//
palindromeArr= palindromeArr.toString();


//the if statement compares the reversed word we recieved from the while loop and the original word to check if the initial input is in fact a palindrome//
if(palindromeArr==checking){
    alert(`${input} is a palindrome.`);
}
else{
    alert(`${input} is not a palindrome`);
}






