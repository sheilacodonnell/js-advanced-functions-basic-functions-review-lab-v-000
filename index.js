function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

saturdayFun()

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

mondayWork()

function wrapAdjective(adj = 'special', flair = '*') {
  return function() { 
    `You are ${adj}`
  }
}

wrapAdjective('a hard worker')