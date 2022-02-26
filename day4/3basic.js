 myDisplayer = (data) => {
     console.log(data)
 }

function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  //myFirst();
  //mySecond();


  myDisplayer = (abc) => {
     console.log(abc)
  }

  function myFirst() {
    myDisplayer('Good Morning');
  }

  function mySecond() {
    myDisplayer('Everyone');
  }
  function myThird() {
    myDisplayer('Have a nice day');
  }

  myFirst();
  mySecond();
  myThird();