/* 
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

countDown(4);
// 3
// 2
// 1
// "DONE!"
*/

// setInterval --> bc every 1000 milliseconds decrement the value
// setInterval --> set to variable to recieve the intervalId
// anonymous func bc will clear timer after it's done
// countDown is the main func
// setInverval within countDown
// if num === 0, clearInterval() --> console.log("DONE");

function countDown(num) {
  let timer = setInterval(() => {
    if (num === 1) {
      clearInterval(timer);
      console.log('DONE!');
    } else {
      num--;
      console.log(num);
    }
  }, 1000);
}

countDown(4);

/* 
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
*/

// let counter = 0;
// let timer = setInterval(() =>{}) w/ anon func inside
// { select a random number between 0 and 1 Math.random() does this automatically } --> this code runs in setInterval
// if num is greater than .75 --> clearInterval(timer)
// console.log(counter);
// else --> means .75 not reached --> add 1 to counter --> counter++

function getRandom() {
  return Number(Math.random().toFixed(2));
}

function randomGame() {
  let counter = 0;
  let timer = setInterval(() => {
    let number = getRandom();
    if (number > 0.75) {
      clearInterval(timer);
      counter++;
      console.log(counter);
    } else {
      counter++;
    }
  }, 1000);
}

randomGame();
