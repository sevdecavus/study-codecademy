let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = true;

let age = 85 ;

if( age > 18 && registerEarly ){
console.log(raceNumber += 1000);
}else{
console.log(raceNumber);
}
if(age > 18 && registerEarly){
  console.log('they will race at 9:30 am.');
}else if(age > 18 && !registerEarly){
  console.log('they will race at 11:00 am.')
}else if(age < 18 ){
  console.log('they will race at 12:30 am.')
}
