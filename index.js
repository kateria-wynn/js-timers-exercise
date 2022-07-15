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
