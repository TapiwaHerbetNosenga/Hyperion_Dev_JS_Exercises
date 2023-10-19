/*s:
● Note: For this task you will need to create an HTML file to get input from a
user. If you need a refresher on how to do this, go back to the example.js
and index.html files in your Task 2 folder.
● Create a JavaScript file called characters.js in this folder.
● Ask the user to input an uppercase letter, a lowercase letter or a number.
● If the character is an uppercase letter, output their character and “is an
uppercase letter.” E.g. “R is an uppercase letter.”
● If the character is a lowercase letter, output their character and “is a
lowercase letter.” E.g. “g is a lowercase letter.”
● If the character is a number, output their character and “is a number.” E.g.
“6 is a number.”
● If the character is none of these, output their character and “is not a letter
or number”. E.g. “? is not a letter or number.”
● Hint 1 : you may want to research the functions toUpperCase(),
toLowerCase() and Number.isInteger()
● Hint 2 : A Special character to upper case is equal a special character to
lower case
 */

alert (`Type an uppercase letter or a lowercase letter or a number`);
let input=  prompt("Type here:");
let check1= input.toUpperCase();
let check2= input.toLowerCase();
let check3= Number(input);

if (check2 != input){
    alert(`${input} is an upperrcase character`);
}
else if(check1 != input){
    alert(`${input} is a lowercase character`);
}
else if(Number.isInteger(check3)){
    alert(`${input} is a number`);
}
else{
    alert(`${input} is not a letter or number`);
}

else if (side1==side3 && side2==side4 && corner1==corner2==corner3==corner4){
    console.log("the quad is a rectangle");
}
else if(side1==side2==side3==side4){

if (corner1<90 && corner3<90){
    console.log("the quad is a rhombus");
}
else if(corner2<90 && corner4<90){
    console.log("the quad is a rhombus");
}
}






