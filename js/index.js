$(document).ready(function() {

  // Collection of FCC-Provided sounds
var sound1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var sound2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var sound3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var sound4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  // Shortcuts for getelement by id
var green = $("#green");
var red = $("#red");
var yellow = $("#yellow");
var blue = $("#blue");
  // Functions to play the sounds and "light" each button when pressed, etc
function lightGreen(){  
  green.css("opacity", "0.65");
  sound1.play();
  setTimeout(
  function() {
      green.css("opacity", "1.0");
    }, 200);
 };

function lightRed(){
  red.css("opacity", "0.65");
  sound2.play()
  setTimeout(
  function() {
    red.css("opacity", "1.0");
  }, 200);
};

function lightYellow(){
  yellow.css("opacity", "0.65");
  sound3.play()
  setTimeout(
  function() {
    yellow.css("opacity", "1.0");
  }, 200)
};

function lightBlue(){
  blue.css("opacity", "0.65");
  sound4.play()
  setTimeout(
  function() {
    blue.css("opacity", "1.0")
  }, 200)
};
  // Placeholder vars for the game
  var counter = 0;
  var gameArr = [];
  var seqInterval;
  var seqCounter = 0;
  var powerOn = false;
  var hasPowered = false;
  var strictOn = false;
  
  function checkCounter() {   
      if (counter === gameArr.length) {
      if (gameArr.length < 20){
      setTimeout(function() {counter = 0;
      seqAdd();
      playSequence();}, 200)
      } 
     else {
       setTimeout(function(){
     alert("Congratulations! You won!")
       }, 500)
    }
   }
  }
   
  // Functions for button presses
  green.on('click', function() {
    lightGreen();
    if (powerOn === true) {
    if (gameArr[counter] === "green") {
      counter = counter + 1;
      checkCounter();
      } else {
       if (strictOn === false) {
          $("#countDisp").html("Try again!");
          setTimeout(function(){
          counter = 0;
        playSequence();
          }, 400);
        } else {
          $("#countDisp").html("Game over!");
          setTimeout(function(){
          counter = 0;
          gameArr = [];
          seqAdd();
          playSequence();
          }, 400);
        }
      }
    }
  });  
  red.on('click', function() {
    lightRed();
    if (powerOn === true) {
    if (gameArr[counter] === "red") {
      counter = counter + 1;
      checkCounter();
      } else {
       if (strictOn === false) {
          $("#countDisp").html("Try again!");
          setTimeout(function(){
          counter = 0;
        playSequence();
          }, 400);
        } else {
          $("#countDisp").html("Game over!");
          setTimeout(function(){
          counter = 0;
          gameArr = [];
          seqAdd();
          playSequence();
          }, 400);
        }
      }
    }
  });    
  yellow.on('click', function() {
    lightYellow();
    if (powerOn === true) {
    if (gameArr[counter] === "yellow") {
      counter = counter + 1;
      checkCounter();
      } else {
       if (strictOn === false) {
          $("#countDisp").html("Try again!");
          setTimeout(function(){
          counter = 0;
        playSequence();
          }, 400);
        } else {
          $("#countDisp").html("Game over!");
          setTimeout(function(){
          counter = 0;
          gameArr = [];
          seqAdd();
          playSequence();
          }, 400);
        }
      }
    }
  });   
  blue.on('click', function() {
    lightBlue();
    if (powerOn === true) {
    if (gameArr[counter] === "blue") {
      counter = counter + 1;
      checkCounter();
      } else {
       if (strictOn === false) {
          $("#countDisp").html("Try again!");
          setTimeout(function(){
          counter = 0;
        playSequence();
          }, 400);
        } else {
          $("#countDisp").html("Game over!");
          setTimeout(function(){
          counter = 0;
          gameArr = [];
          seqAdd();
          playSequence();
          }, 400);
        }
      }
    }
  });  
  
  //A function to add a new random item to the sequence
  function seqAdd() {
  var num = (Math.random() * 3).toFixed();
  if(num === "0") {
    gameArr.push("green");
  } else if (num === "1") {
    gameArr.push("red");
  } else if (num === "2") {
    gameArr.push("yellow");
  } else if (num === "3") {
    gameArr.push("blue");
  } $("#countDisp").html(gameArr.length);
}
    
  // A function to play through the light functions for each case. It will also clear the interval if the counter reaches the length of the game array.
  function sequence() {
  if (seqCounter === gameArr.length) {
    clearInterval(seqInterval);
  } else {
  if (gameArr[seqCounter] === "green") {
    lightGreen();
  }  else if (gameArr[seqCounter] === "red") {
    lightRed();
  } else if (gameArr[seqCounter] === "yellow") {
    lightYellow();
  } else if (gameArr[seqCounter] === "blue") {
    lightBlue();
  } 
  seqCounter++;
}
}; 
  
  function playSequence() {
    seqCounter = 0;
    seqInterval = setInterval(sequence, 1500);
  }
  
  //Functions for the toggle buttons
  function powerToggle() {
    if (powerOn === false) {
      powerOn = true;
    }  else {
      powerOn = false;
      counter = 0;
      gameArr = [];
      clearInterval(seqInterval);
      $("#countDisp").html("0");
    }
  }
  
  function strictToggle() {
    if (strictOn === false) {
      strictOn = true;
    } else {
      strictOn = false;
    }
  }
  
   $("#start").on("click", function(){
  if (powerOn === true) {
  seqAdd();
  playSequence();
  seqCounter = 0;
    }  
  });
  
   $("#strict").on("click", function() {
    strictToggle();
    this.classList.toggle("btn-secondary");
    this.classList.toggle("btn-danger");
  })
   
 
  // When you click "Start Game" this function starts an interval to run the sequence function every 1.5s 
  $("#power").on("click", function() {
    if (hasPowered === false) {
    lightGreen();
    lightRed();
    lightYellow();
    lightBlue();
    hasPowered = true;
    }
    powerToggle();
    this.classList.toggle("btn-success");
    this.classList.toggle("btn-secondary");
  });
  
  //  Sets counter to 0 and empties gameArr, so you can start the game over
  $("#reset").on('click', function(){
    counter = 0;
    gameArr = [];
    $("#countDisp").html("0");
  });
  
  
  //end of code
});


//Things to do:
//fix sound on mobile (wtf?):
//The sound will play after each button is pressed, maybe we can find a way to make it work better
//create a funciton to test if button being pressed is correct item in sequence
//create a function to completely reset game
//add a functional "strict" button
//restyle to look better
//create a method to play the sequence when the user is done attempting the sequence