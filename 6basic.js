let day;
switch ((day = 5)) {
  case 0:
    day = 'Sunday';
    console.log(' Case 1');

    break;
  case 1:
    day = 'Monday';
    console.log(' Case 2');

    break;
  case 2:
    day = 'Tuesday';
    console.log(' Case 3');

    break;
  case 3:
    day = 'Wednesday';
    console.log(' Case 4');

    break;
  case 4:
    day = 'Thursday';

    console.log(' Case 5');

    break;
  case 5:
    day = 'Friday';
    console.log(' Case 6');

    break;
  case 6:
    console.log(' Case 7');

    day = 'Saturday';
}

console.log(day);

// let abc = new Date().getDay();

// console.log(abc);
