const cars=["Toyota", "Suzuki", "RollsRoyce", "Mercedes", "BMW"];

let favCar= "RollsRoyce";

for(let i = 0; i<cars.length; i++ ){
if(cars[i]==favCar){
    alert(`${cars[i]} is my favorite car.`);
}
else{
    alert(`${cars[i]} is not my favorite car`);
}

}