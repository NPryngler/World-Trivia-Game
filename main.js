

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
  { question: 'You can try some of the world\'s most renowned meatballs', answer: 'Sweden' },
  { question: 'You can visit the country that is the home of the world\'s most famous queen. Where will you go?', answer: 'United Kindgom' },
];
//const europeanCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croacia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'The Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United Kingdom'];
function randomIntergerUpto(max) {
  return Math.floor(Math.random() * (max + 1));
}

let numberOfQuestions;
let questionIndexes = [];
function getRandomQuestions(numberOfQuestions) {
  
  while (questionIndexes.length < numberOfQuestions) {
    const randomIndex = randomIntergerUpto(europeQuestions.length - 1)
    if (!questionIndexes.includes(randomIndex)) {
      questionIndexes.push(randomIndex);
    }
  }
  console.log(questionIndexes);
  let randomQuestions = [];
  for (let i = 0; i < questionIndexes.length; i++) {
    randomQuestions.push(
      europeQuestions[questionIndexes[i]]
    );
  }
  return randomQuestions;
}



//element that display which question is being answered
const questionNumber = document.querySelector('.question-count-number');
//Question element
const questionToGuessElement = document.querySelector('.selected-question');
//Answer boxes
const countryOptionsElements = document.querySelectorAll('.answer-box');

let correctCountryIndex;

let chosenAnswerIndex;

//select 10 questions for the round
let randomQuestions = getRandomQuestions(10);
function startRound() {
  while(randomQuestions.length<10){
  getRandomQuestions(10);
  let correctCountryIndex = questionsLoop();
  
  chosenAnswerIndex = questionIndexes[correctCountryIndex]
  
  console.log(correctCountryIndex);
  console.log(chosenAnswerIndex);
  console.log(europeQuestions);

  const questionNumber = displayQuestionNumber;
  

  //randomly select one of the selected questions
  const selectedQuestion = randomQuestions[correctCountryIndex].question;
  //display selected question
  questionToGuessElement.innerHTML = selectedQuestion;
  //display random country's names in the boxes
  for (let i = 0; i < countryOptionsElements.length; i++) {
    const country = randomQuestions[i];
    const countryOptionsElement = countryOptionsElements[i];
    countryOptionsElement.innerHTML = country.answer;
  }
  //take out selected question of the array
  // europeQuestions.splice(randomQuestions[correctCountryIndex], 1);

}
}
startRound();

//check if clicked element corresponds to the right answer
const evaluateRightAnswer = document.querySelector('.display-answer');

function answerClick(event) {
  const button = event.target;
  const clickedIndex = Number(button.getAttribute('data-index'));
  if (clickedIndex === correctCountryIndex) {
    evaluateRightAnswer.innerHTML = 'Cooool. You have conquered it!';
    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    setTimeout(newRound, 2000);

  } else {
    evaluateRightAnswer.innerHTML = 'You should travel around more';
    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    setTimeout(newRound, 2000);
  }
  // outAnsweredQuestion();
}
for (let i = 0; i < countryOptionsElements.length; i++) {
  const countryOptionsElement = countryOptionsElements[i];
  countryOptionsElement.addEventListener('click',
    answerClick
  );
}



//Restart game next question
function newRound() {
  //take out object selected
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

//next question - not working
function questionsLoop(){
  for (let i=0; i<10; i++){
    return randomQuestions[i];
  }
}

// function displayQuestionNumber() {
//   let number = 1;
//   const questionNumber = document.querySelector('.question-count-number');
//   while (number < 10) {
//     questionNumber.innnerHTML = `${number}`;
//     number++;
//   }
// }
//run game until round 10 and score
let score = 0;


// take out answered question
function outAnsweredQuestion() {
  let answered = europeQuestions.find(function (element) {
    return element === randomQuestions[correctCountryIndex];
  })
  console.log(answered);
  let index;
  for (let x = 0; x < europeQuestions.length; x++) {
    if (europeQuestions[x] === answered) {
      index = europeQuestions.indexOf(europeQuestions[x]);
      europeQuestions.splice(index, 1);
    }
  }
  console.log(index);
  console.log(europeQuestions);
}


// europeQuestions.splice(randomQuestions[correctCountryIndex], 1);