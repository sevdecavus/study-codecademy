const getSleepHours = day => {
  if( day === 'monday'){
    return 8;
  }else if( day === 'monday'){
    return 5;
  }else if( day === 'tuesday'){
    return 7;
  }else if( day === 'wednesday'){
    return 1;
  }else if( day === 'thursday'){
    return 3;
  }else if( day === 'friday'){
    return 5;
  }else if( day === 'saturday'){
    return 6;
  }else if( day === 'sunday'){
    return 7;
  }
}
// console.log(getSleepHours('sunday'));

const getActualSleepHours = () => 
getSleepHours('monday')+
getSleepHours('tuesday')+
getSleepHours('wednesday')+
getSleepHours('thursday')+
getSleepHours('friday')+
getSleepHours('saturday')+
getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours*7;
}


console.log('Actual Sleep Hours= ' + getActualSleepHours());
console.log('Ideal Sleep Hours= ' + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('Perfect ampunt of sleep');
} else if (actualSleepHours > idealSleepHours) {
  console.log('More sleep than needed');
} else {
  console.log('Get some sleep');
}
}


calculateSleepDebt();

























