// Code your solution in this file!
const returnFirstTwoDrivers = function(array){ return [...array.slice(0,2)]}

const returnLastTwoDrivers = function(array){ return [...array.slice(2,4)]}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(){
        return fare * 5
    }
}

function fareDoubler(fare2){
    return fare2 * 2
}

function fareTripler(fare3){
    return fare3 * 3
}
const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers)
    
}

const part1 = "hello";

function demoChain(name) {
  let part2 = "hi";
  return function inner1() {
    let part3 = "there";
    return function inner2() {
      // what variables are accessible here?
    };
  };
}

demoChain("Dr. Stephen Strange")()();