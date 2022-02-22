
let month;
switch (new Date().getDay()) {
  case 0:
    month = "January";
     
    break;
  case 1:
    month = "February";

    break;
  case 2:
    month = "March";

    break;
  case 3:
    month = "April";
    
    break;
  case 4:
    month = "May";
}
console.log('the month is:' + month);