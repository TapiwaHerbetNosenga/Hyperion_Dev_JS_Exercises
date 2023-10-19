alert(`Can I calculate your water costs?`);
let ind = Number(prompt("If you are indigent type '1' if you are not type '2' "));
let amount = Number(prompt("How amny Kilolitres of water did you use this month?"));
let cost = 0;
if(ind==1){
    if(amount<=10.5){
        alert(`Your water is free`);
    }
    else if(amount<=35){
        let cost = ((amount-10.5)*31.77);
        alert(`Your water costs R${cost}`);
    }
    else {
        cost=(((amount-35)*69.75)+778.37);
        alert(`Your water costs R${cost}`);
    }

}
else{
   if(amount<=6){
   cost = (amount*15.73);
   alert(`Your water costs R${cost}`);
   }
   else if(amount<=10.5){
    let cost = (((amount-6)*22.38)+94.38);
    alert(`Your water costs R${cost}`);
   }
   else if(amount<=35){
    cost=(((amount-10.5)*31.77)+237.35);
        alert(`Your water costs R${cost}`);
   }
   else if(amount>35){
    cost=(((amount-35)*69.75)+1015.72);
    alert(`Your water costs R${cost}`);
   }

}

let day = new Date().getDay();
console.log(day);
