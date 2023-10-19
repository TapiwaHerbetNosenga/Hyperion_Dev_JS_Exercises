/*The goal of this code is to create a tempreture converter that outputs the user input as a value converted  */
alert(`Do you want me to convert the tempreture for you?`);

//this variable is for the to be converted values measurement type//
let measurement1 = Number(prompt("What measurement do you want to convert from. Type 1 for Celcius, type 2 for Kelvin and type 3 for Fahrenheight"));

//This variable is for the converted values measurement type//
let measurement2 = Number(prompt("What measurement do you want me to convert to. Type 1 for Celcius, Type 2 for Kelvin and type 3 for Fahrenheight"));

//This variable is for the input of the actual tempreture value that is to be converted//
let input = Number(prompt("What tempreture do you want converted(Numbers Only)"));

//This variable is for the output of the the converted tempreture//
let output = 0;


// this if statement is for converting the possible tempreture measurement types and their values into other possible tempreture measurement types and their values//

if (measurement1==1 && measurement2==2){
    output = input + 273.15;
    alert(`${input}C is converted to ${output}K`);
}
else if(measurement1==1 && measurement2==3){
    output = (input*(9/5)+32);
    alert(`${input}C is converted to ${output}F`);
}
else if(measurement1==1 && measurement2==1){
    output = input;
    alert(`${input}C is converted to ${output}C`);
}
else if(measurement1==2 && measurement2==1){
    output = input - 273.15;
    alert(`${input}K is converted to ${output}C`);
}
else if(measurement1==2 && measurement2==2){
    output = input;
    alert(`${input}K is converted to ${output}K`);
}
else if(measurement1==2 && measurement2==3){
    output = Math.round((((input - 273.15)*(9/5) + 32)) * 100) / 100;
    alert(`${input}K is converted to ${output}F`);
}
else if(measurement1==3 && measurement2==1){
    output = (input - 32) * (5/9);
    alert(`${input}F is converted to ${output}C`);
}
else if(measurement1==3 && measurement2==2){
    output = Math.round((((input - 32)*(5/9) + 273.15))*100)/100;
    alert(`${input}F is converted to ${output}K`);
}
else if(measurement1==3 && measurement2==3){
    output = input;
    alert(`${input}F is converted to ${output}F`);
}
else{
    alert(`Data Not Valid`);
}
