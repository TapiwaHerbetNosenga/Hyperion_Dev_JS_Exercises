/*the purpose of this exercise is to get a user input of a number and check if that number is divisible by 7, 11, both or none and allert the user of such. The new concept applied is logical operators */

alert('Give me a number.');

let input = Number(prompt("type number here: "));

//the following variables will be used to check if the input is divisisble by 7 or 11//

let check7 = input%7;
let check11 = input%11;

if (check7==0 && check11==0){
    alert(`${input} is divisible by both 7 and 11.`);
}
else if(check7==0){
    alert(`${input} is divisible by 7.`);
}
else if(check11==0){
    alert(`${input} is divisible by 11.`);
}
else{
    alert(`${input} is not divisible by 7 or 11`);
}