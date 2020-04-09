function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun()

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

mondayWork()

function wrapAdjective(flair = '*') {
  return function(adj = 'a hard worker') { 
    return `You are ${flair}${adj}${flair}!`
  }
}

wrapAdjective()

let Calculator =  { 
  add: function(num1, num2) {
    return num1 + num2
  },
  subtract: function(num1, num2) {
    return num1 - num2
  },
  multiply: function(num1, num2) {
    return num1 * num2
  },
  divide: function(num1, num2) {
    return num1/num2
  }
}

function actionApplyer (startingPoint, functionArray) {
  let start = startingPoint;
  // for (let i = 0; i < functionArray.length; i++) {
  //   start = (functionArray[i])(start);
  // }
  start.forEach(function(){console.log('hi')});

  return start;
}
