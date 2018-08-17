
// DOM elements
//display which question is being answered
const questionNumber = document.querySelector('.question-count-number');
//select question element
const questionToGuessElement = document.querySelector('.selected-question');
//select boxes
const countryOptionsElements = document.querySelectorAll('.answer-box');
//element where the answer is displayed
const evaluateRightAnswer = document.querySelector('.display-answer');


let europeQuestions = [
  { question: 'If you were to visit the town of Sintra, which country would you go?', answer: 'Portugal' },
  { question: 'While on a boat, you must dock at the Piraeus, which country should you be?', answer: 'Greece' },
  { question: 'Your flight you drop you at the Schiphol Airport. Which country will you land?', answer: 'The Netherlands' },
  { question: 'You will explore some of the Basque provinces. Which of these countries will you go?', answer: 'Spain' },
  { question: 'You will visit a country famous for its banks and watches? Which country will you go?', answer: 'Switzerland' },
  { question: 'You will taste the original Budweiser Budvar in its brewery. Which country will you go?', answer: 'Czech Republic' },
  { question: 'You may be able to see for yourself Mr. Dracula in Transylvania. Which country will you go?', answer: 'Romania' },
  { question: 'Why dont you visit the largest city in Europe – that spans to Asia too. Where should you go?', answer: 'Turkey' },
  { question: 'You can go to the birthplace of french-fries and have good beer too. Which country will you go?', answer: 'Belgium' },
  { question: 'You can get to see the remains of the most famous wall of the modern age. Where will you go?', answer: 'Germany' },
  { question: 'You visit the place where the tie was invented (maybe to regret the fact).Where would you go?', answer: 'Croatia' },
  { question: 'You may greet the original Santa Klaus there in his homeland. Where will you go?', answer: 'Finland' },
  { question: 'You can try some of the world\'s most renowned meatballs. Where will you go?', answer: 'Sweden' },
  { question: 'You can visit the country that is the home of the world\'s most famous queen. Where will you go?', answer: 'United Kindgom' },
];

const europeanCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croacia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'The Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United Kingdom', 'Turkey', 'Ukraine'];
let randomQuestionIndex = 0;
let currentQuestion = {};
let possibleAnswers = ['Austria', 'Belgium', 'Bulgaria', 'Croacia'];
let round = 1;
let score = 0;

function populateAnswers() {
  unshuffledPossibleAnswers = [];
  console.log(currentQuestion.answer);

  unshuffledPossibleAnswers.push(currentQuestion.answer);

  while (unshuffledPossibleAnswers.length < 4) {
    const randomCountry = europeanCountries[randomIntergerUpto(europeanCountries.length - 1)];
    let isAlreadyInArray = false;

    for (let i = 0; i < unshuffledPossibleAnswers.length; i++) {
      if (randomCountry === unshuffledPossibleAnswers[i]) isAlreadyInArray = true;
    }

    if (!isAlreadyInArray) unshuffledPossibleAnswers.push(randomCountry);
  }

  possibleAnswers = shuffle(unshuffledPossibleAnswers)
}

function startRound() {
  // get one random question from europe questions by splicing it out of the Array. 
  // splice random one:
  randomQuestionIndex = randomIntergerUpto(europeQuestions.length - 1);
  currentQuestion = europeQuestions.splice(randomQuestionIndex, 1)[0];

  populateAnswers();

  const selectedQuestion = currentQuestion.question;
  //display selected question
  questionToGuessElement.innerHTML = selectedQuestion;
  //display random country's names in the boxes
  for (let i = 0; i < countryOptionsElements.length; i++) {
    const country = possibleAnswers[i];
    const countryOptionsElement = countryOptionsElements[i];
    countryOptionsElement.innerHTML = country;
  }

}
//check if clicked element corresponds to the right answer
function answerClick(event) {
  const button = event.target;
  const clickedIndex = Number(button.getAttribute('data-index'));
  console.log(clickedIndex);
  
  if (possibleAnswers[clickedIndex] === currentQuestion.answer) {
    evaluateRightAnswer.innerHTML = 'Cooool. You have conquered it!';
    score +=1;
  } else {
    evaluateRightAnswer.innerHTML = 'You should travel around more';
  }

  evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
  round +=1
  // if round < 10
  if (round <11){
  setTimeout(newQuestion, 2000);
  setTimeout(function (){
    questionNumber.innerHTML = `${round}`;
  }, 2000);
  console.log(`the score is ${score}`);
  } else {
  setTimeout(rank, 2000);
  }
  // else some notification of score or total reset

  // removeAnsweredQuestion();
}
for (let i = 0; i < countryOptionsElements.length; i++) {
  const countryOptionsElement = countryOptionsElements[i];
  countryOptionsElement.addEventListener('click',
    answerClick
  );
}

//Restart game next question
function newQuestion() {
  //remove selected question
  questionToGuessElement.innerHTML = '';
  //remove feedback box
  evaluateRightAnswer.innerHTML = '';
  evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.1)';
  // //remove countries from boxes
  for (let i = 0; i < countryOptionsElements.length; i++) {
    countryOptionsElements[i].innerHTML = '';
  }
  startRound();
}

function rank(){
  
  if (score < 4) {
    evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. Go on and get that old backpack for a ride. You deserve some travelling!`
  } else if (score < 7){
    evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. Good on you! We\'ve seen that you\'ve been around!!`
  } else {
    evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. WOW! You have been doing some serious traveling`
  }
}


startRound()

// helper functions

function randomIntergerUpto(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Fisher-Yates (aka Knuth) Shuffle. Taken from
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

