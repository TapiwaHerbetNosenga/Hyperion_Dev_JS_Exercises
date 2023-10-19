/*The point of this exercise is to use logical operators to determine what type of quadrilateral we are working with using the information given to us from the hard coded variable values */

//these values represent the length of each side of a quadrilaterals//
let side1= 20;
let side2= 100;
let side3= 20;
let side4= 100;

//these values represent the values of the angles in each corner of a quadrilateral//

let corner1=80;
let corner2=100;
let corner3=80;
let corner4=100;


//The folloing if statement is supposed to determine from the variable values given if the quadrilateral is a square, a rectangle, a rhombus or a parallelogram//

if (side1==side2 && side3==side1 && side4==side2 && corner1==corner2 && corner3==corner1 && corner2==corner4){
 console.log("the quad is a square");
}

else if (side1==side3 && side2==side4 && side1 != side2 && side3 != side4 && corner1==corner2 && corner3==corner1 && corner2==corner4 ){
    console.log("the quad is a rectangle");
} 

else if(side1==side2 && side3==side1 && side4==side2){

    if (corner1<90 && corner3<90){
        console.log("the quad is a rhombus");
    }

    else if(corner2<90 && corner4<90){
        console.log("the quad is a rhombus");
    }
}
else if(side1==side3 && side2==side4){
    if(corner1<90 && corner3<90){
        console.log("the quad is a parralelogram");
    }
    else if(corner2<90 && corner4<90){
        console.log("the quad is a parralelogram");
    }
}


