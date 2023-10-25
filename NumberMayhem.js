//The point of this loop is to count down from 20 to 0//
let i=20;

while(i>=0){
    
    alert(`${i}`);
    
    i--;
}

//the point of this loop is to display all even numbers from 20 to 0//
i=20;
while(i>=0){
    if(i%2 == 0){
        alert(`${i} is an even number.`);
    }
    i--;
}

//the point of this loop is to display a pattern of * with one added each iteration until it outputs 5 stars//

let star = "";
for(let i = 1; i < 6; i++){

    star=star+"*";

    alert(`${star}`);
}


