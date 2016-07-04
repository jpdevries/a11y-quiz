var bank = require('./bank');

function calculateScore(userInput,bank) {
  var score = 0;
  var checkAll = 0;
  for(var keyvalue of userInput) {
    if((keyvalue[0] == "seo" || keyvalue[0] == "performance" || keyvalue[0] == "optimization" || keyvalue[0] == "usability" || keyvalue[0] == "ux") && keyvalue[1] == "1") {
        checkAll++;
    }
    else if(bank[keyvalue[0]] == keyvalue[1]) score++;
  }
  if(checkAll >= 5) score++;

  return score;
}

function scoreMessage(score,numQuestions,playAgainLink) {
  var playAgainLink = (playAgainLink === undefined) ? "/" : playAgainLink;
  return ("You got " + score + " out of " + numQuestions + " correct. That is a " + Math.round((score / numQuestions) * 100) + '% score. <a href="' + playAgainLink + '">Play again</a>.')
}

module.exports = {
  bank: bank,
  calculateScore:calculateScore,
  scoreMessage:scoreMessage
};
