
// DOM elements
//display which question is being answered
const questionNumber = document.querySelector('.question-count-number');
//
const countDisplay = document.querySelector('.count-display');
//select question element
const questionToGuessElement = document.querySelector('.selected-question');
//select boxes
const countryOptionsElements = document.querySelectorAll('.answer-box');
//element where the answer is displayed
const evaluateRightAnswer = document.querySelector('.display-answer');
//element that contains the boxes
const answersContainer = document.querySelector('.answer-containers');
//element that contains cheer audio
const rightAnswerAudio = document.querySelector('.cheers');
//element that contains wrong answer audio
const wrongAnswerAudio = document.querySelector('.wrong');
//end-of-play audio element
const holidayAudio = document.querySelector('.end-of-play');
//element to change 
const bodyBackground = document.getElementsByTagName('body');
//element that contains the continent name
const headerTitle = document.querySelector('.continent-name');
//element that contains the continents options
const continentContainer = document.querySelector('.continents-container');
//element that contains the continents buttons
const continentOptions = document.querySelectorAll('.continent-option');
//add button
const addButton = document.querySelector('.add-button');
//play-again button
const playAgain = document.querySelector('.play-again')

headerTitle.innerHTML = 'Welcome to the world </br> traveler challenge!';
questionToGuessElement.innerHTML = 'Are you a traveler soul and dream about going to new places and visiting the world\'s 5 continents? </br> Let\'s see how good you are at this! </br> Just choose a continent and answer some traveler\'s quiz about the continent\'s countries.'
questionToGuessElement.style.height = '140px';
questionToGuessElement.style.padding = '30px';

for (let i = 0; i < countryOptionsElements.length; i++) {
  answersContainer.removeChild(countryOptionsElements[i]);
}
function startGame() {
  console.log('starting game;');

  countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
  countDisplay.style.color = 'rgba(255,255,255, 0.1)';

  function playAgain(){
  evaluateRightAnswer.classList.toggle('hidden');
  }
  function selectContinent(event) {
    const button = event.target;
    const clickedContinent = Number(button.getAttribute('data-type'));
    console.log(clickedContinent);
    if (clickedContinent === 0) {
      setTimeout(europe, 1000);
    }
    else if (clickedContinent === 1) {
      setTimeout(america, 1000);
    }
    else if (clickedContinent === 2) {
      setTimeout(asia, 1000);
    }
    else if (clickedContinent === 3) {
      setTimeout(africa, 1000);
    } else {
      setTimeout(oceania, 1000);
    }
  }

  for (let i = 0; i < continentOptions.length; i++) {
    const continentOptionsElement = continentOptions[i];
    continentOptionsElement.addEventListener('click',
      selectContinent);
  }
}

//play again 



function europe() {
  let europeQuestions = [
    { question: 'If you were to visit the town of Sintra, which country would you go?', answer: 'Portugal' },
    { question: 'While on a boat, you must dock at the Piraeus, which country should you be?', answer: 'Greece' },
    { question: 'Your flight will you drop you at the Schiphol Airport. Which country will you land?', answer: 'The Netherlands' },
    { question: 'You can explore some of the Basque provinces and visit a Guggenheim Museum. Which of these countries will you go?', answer: 'Spain' },
    { question: 'You will visit a country famous for its banks and watches? Which country will you go?', answer: 'Switzerland' },
    { question: 'You will taste the original Budweiser Budvar in its brewery. Which country will you go?', answer: 'Czech Republic' },
    { question: 'You may be able to see for yourself Mr. Dracula in Transylvania. Which country will you go?', answer: 'Romania' },
    { question: 'You can visit the pope\'s palace that was not in Rome. Where should you go?', answer: 'France' },
    { question: 'You can go to the birthplace of french-fries and have good beer too. Which country will you go?', answer: 'Belgium' },
    { question: 'You can get to see the remains of the most famous wall of the modern age. Where will you go?', answer: 'Germany' },
    { question: 'You can visit the place where the tie was invented (maybe to regret the fact).Where would you go?', answer: 'Croatia' },
    { question: 'You may greet the original Santa Klaus there in his homeland. Where will you go?', answer: 'Finland' },
    { question: 'You can try some of the world\'s most renowned meatballs. Where will you go?', answer: 'Sweden' },
    { question: 'You can visit the country that is the home of the world\'s most famous queen. Where will you go?', answer: 'United Kindgom' },
  ];

  const europeanCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croacia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'The Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'United Kingdom', 'United Kingdom', 'Ukraine'];

  let randomQuestionIndex = 0;
  let currentQuestion = {};
  let possibleAnswers = [];
  let round = 1;
  let score = 0;

  function stylePage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.appendChild(countryOptionsElements[i]);
    }
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.8)';
    countDisplay.style.color = 'black';
    headerTitle.innerHTML = 'Europe';
    questionToGuessElement.style.height = '80px';
    questionToGuessElement.style.padding = '20px';
    for (let i = 0; i < continentOptions.length; i++) {
      continentContainer.removeChild(continentOptions[i]);
    }
  }


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
      score += 1;
      rightAnswerAudio.play();
    } else {
      evaluateRightAnswer.innerHTML = 'Not this time :(';
      wrongAnswerAudio.play();
    }

    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    round += 1

    if (round < 11) {
      setTimeout(newQuestion, 2000);
      setTimeout(function () {
        questionNumber.innerHTML = `${round}`;
      }, 2000);
      console.log(`the score is ${score}`);
    } else {
      setTimeout(rank, 2000);
      setTimeout(clearPage, 2000);

    }
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


  function rank() {

    if (score < 4) {
      evaluateRightAnswer.innerHTML = `You\'ve got only ${score} right answers out of 10 😢 </br> Go on and get that old backpack for a ride. 🎒 </br> You deserve some travelling!😎`
    } else if (score < 7) {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> Good on you! 🙌 We\'ve seen that you\'ve been around!! 😉`
    } else {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> WOW! 🤩 You have been doing some serious traveling 🛫`
    }
  }
  function clearPage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.removeChild(countryOptionsElements[i]);
    }
    document.querySelector('.section').removeChild(questionToGuessElement);
    evaluateRightAnswer.style.height = '120px';
    evaluateRightAnswer.style.padding = '30px';
    evaluateRightAnswer.style.animation = 'color-change 3s linear infinite alternate';
    evaluateRightAnswer.style.fontSize = '25px';
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
    countDisplay.style.color = 'rgba(255,255,255, 0.1)';
    holidayAudio.play();
    playAgain.style.backgroundColor = 'rgba(240, 40, 100, 0.8)';
    playAgain.innerHTML = 'Play Again';
  };
  playAgain.addEventListener('click', startGame);
  stylePage();
  startRound();
}


//America
function america() {
  let americaQuestions = [
    { question: 'If you were to visit the land of samba music and Copacabana beach, which country would you go?', answer: 'Brazil' },
    { question: 'You can visit the Statue of Liberty and watch world famous musicals at Broadway, which country should you be?', answer: 'United States' },
    { question: 'You will taste exquisite tequila where it was invented and visit old Mayan pyramides. Which country will you land?', answer: 'Mexico' },
    { question: 'You can visit the cities of Medellin and Cali, most famous for its past drug cartels and feared drug lords. Where will you go?', answer: 'Colombia' },
    { question: 'You can dine a tasty barbecue while watching first class tango dancers. Which country should you be?', answer: 'Argentina' },
    { question: 'You can visit the second largest country of the world. A country that has more lakes than the rest of the world combined. Which country will you go?', answer: 'Canada' },
    { question: 'You will be able to visit Machu Pichu. Which country will you go?', answer: 'Peru' },
    { question: 'You can learn some words in Guarany - an official language of this country along with spanish - and ride an Alpaca. Where should you go?', answer: 'Paraguay' },
    { question: 'You can stay at an hotel made almost entirely of salt at the edge of the Salar the Uyuni plain. Which country will you go?', answer: 'Bolivia' },
    { question: 'You can drink rum and smoke artisanal cigars at the largest island of the Caribbean. Where will you go?', answer: 'Cuba' },
    { question: 'You can visit the Atacama Desert, the Andes Mountains and Patagonia without leaving this country. Where would you go?', answer: 'Chile' },
    { question: 'You can visit it\'s capital, Santo Domingo, the oldest European settlement in the Americas founded in 1496. Where will you go?', answer: 'Dominican Republic' },
    { question: 'You can get to know the birthplace of reggae and Bob Marley. Where will you go?', answer: 'Jamaica' },
    { question: 'You will meet people - also known as Ticos - from one of the happiest countries of the world. Where will you go?', answer: 'Costa Rica' },
  ];
  const americanCountries = ['United States', 'Brazil', 'Mexico', 'Colombia', 'Argentina', 'Canada', 'Peru', 'Venezuela', 'Chile', 'Ecuador', 'Guatemala', 'Cuba', 'Bolivia', 'Haiti', 'Dominican Republic', 'Honduras', 'Paraguay', 'Nicaragua', 'El Salvador', 'Costa Rica', 'Panama', 'Uruguay', 'Jamaica', 'Trinidad and Tobago', 'Guyana', 'Suriname', 'Guadeloupe', 'Martinique', 'Bahamas', 'Belize', 'Barbados'];

  let randomQuestionIndex = 0;
  let currentQuestion = {};
  let possibleAnswers = [];
  let round = 1;
  let score = 0;

  function stylePage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.appendChild(countryOptionsElements[i]);
    }
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.8)';
    countDisplay.style.color = 'black';
    headerTitle.innerHTML = 'America';
    questionToGuessElement.style.height = '80px';
    questionToGuessElement.style.padding = '20px';
    for (let i = 0; i < continentOptions.length; i++) {
      continentContainer.removeChild(continentOptions[i]);
    }
  }


  function populateAnswers() {
    unshuffledPossibleAnswers = [];
    console.log(currentQuestion.answer);

    unshuffledPossibleAnswers.push(currentQuestion.answer);

    while (unshuffledPossibleAnswers.length < 4) {
      const randomCountry = americanCountries[randomIntergerUpto(americanCountries.length - 1)];
      let isAlreadyInArray = false;

      for (let i = 0; i < unshuffledPossibleAnswers.length; i++) {
        if (randomCountry === unshuffledPossibleAnswers[i]) isAlreadyInArray = true;
      }

      if (!isAlreadyInArray) unshuffledPossibleAnswers.push(randomCountry);
    }

    possibleAnswers = shuffle(unshuffledPossibleAnswers)
  }

  function startRound() {
    randomQuestionIndex = randomIntergerUpto(americaQuestions.length - 1);
    currentQuestion = americaQuestions.splice(randomQuestionIndex, 1)[0];

    populateAnswers();

    const selectedQuestion = currentQuestion.question;

    questionToGuessElement.innerHTML = selectedQuestion;

    for (let i = 0; i < countryOptionsElements.length; i++) {
      const country = possibleAnswers[i];
      const countryOptionsElement = countryOptionsElements[i];
      countryOptionsElement.innerHTML = country;
    }

  }

  function answerClick(event) {
    const button = event.target;
    const clickedIndex = Number(button.getAttribute('data-index'));
    console.log(clickedIndex);

    if (possibleAnswers[clickedIndex] === currentQuestion.answer) {
      evaluateRightAnswer.innerHTML = 'Cooool. You have conquered it!';
      score += 1;
      rightAnswerAudio.play();
    } else {
      evaluateRightAnswer.innerHTML = 'Not this time :(';
      wrongAnswerAudio.play();
    }

    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    round += 1
    // if round < 10
    if (round < 11) {
      setTimeout(newQuestion, 2000);
      setTimeout(function () {
        questionNumber.innerHTML = `${round}`;
      }, 2000);
      console.log(`the score is ${score}`);
    } else {
      setTimeout(rank, 2000);
      setTimeout(clearPage, 2000);

    }

  }
  for (let i = 0; i < countryOptionsElements.length; i++) {
    const countryOptionsElement = countryOptionsElements[i];
    countryOptionsElement.addEventListener('click',
      answerClick
    );
  }


  function newQuestion() {

    questionToGuessElement.innerHTML = '';

    evaluateRightAnswer.innerHTML = '';
    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.1)';

    for (let i = 0; i < countryOptionsElements.length; i++) {
      countryOptionsElements[i].innerHTML = '';
    }
    startRound();
  }


  function rank() {

    if (score < 4) {
      evaluateRightAnswer.innerHTML = `You\'ve got only ${score} right answers out of 10 😢 </br> Go on and get that old backpack for a ride. 🎒 </br> You deserve some travelling!😎`
    } else if (score < 7) {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> Good on you! 🙌 We\'ve seen that you\'ve been around!! 😉`
    } else {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> WOW! 🤩 You have been doing some serious traveling 🛫`
    }
  }
  function clearPage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.removeChild(countryOptionsElements[i]);
    }
    document.querySelector('.section').removeChild(questionToGuessElement);
    evaluateRightAnswer.style.height = '120px';
    evaluateRightAnswer.style.padding = '30px';
    evaluateRightAnswer.style.animation = 'color-change 3s linear infinite alternate';
    evaluateRightAnswer.style.fontSize = '25px';
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
    countDisplay.style.color = 'rgba(255,255,255, 0.1)';
    holidayAudio.play();
    playAgain.style.backgroundColor = 'rgba(240, 40, 100, 0.8)';
    playAgain.innerHTML = 'Play Again';
  };
  stylePage();
  startRound();
}
//asia
function asia() {
  let asiaQuestions = [
    { question: 'You can visit the land regarded by the Christian, Jewish and Muslim religious as the Holy Land, which country would you go?', answer: 'Israel' },
    { question: 'You can visit the famous Forbiden City and The Great Wall, which country should you be?', answer: 'China' },
    { question: 'You will visit the Taj Mahal and the coutry where the yoga and chess were invented. Which country will you go?', answer: 'India' },
    { question: 'You will go to a small and predominantly Buddhist country. It is also the only country in the world where tobacco is forbidden. Where will you go?', answer: 'Bhutan' },
    { question: 'You can visit more than 2,200 temples and pagodas in the Bagan plains. Which country you will go?', answer: 'Myanmar' },
    { question: 'You will visit the mythical island of Bali. Which country will you go?', answer: 'Indonesia' },
    { question: 'In the so-called \'Land of the rising sun\' you can see Mount Fuji. Which country will you go for that?', answer: 'Japan' },
    { question: 'You will visit some of its 1190 low-lying coral islands located amid the Indian Ocean. Where will you go?', answer: 'Maldives' },
    { question: 'You would get to know the birthplace of the feared conquerer Genghis Khan. Which country will you go?', answer: 'Mongolia' },
    { question: 'In this country you can visit the Himalaian Mountains and greet other people saying Namaste. Where will you go?', answer: 'Nepal' },
    { question: 'You can visit the largest country in the world and drink some vodka. Where would you go?', answer: 'Russia' },
    { question: 'You can get to know the so-called \'Lion City\', some man-made waterfalls and trees made of fluorescent lights. Where will you go?', answer: 'Singapore' },
    { question: 'You can listen to some K-Pop, join the crowds that follow e-games and do some serious shopping in Seul. Where will you go?', answer: 'South Korea' },
    { question: 'You will visit a formet Soviet republic that has 5 UNESCO World Heritage Sites and the shrinking Aral Sea. Where will you go?', answer: 'Uzbekistan' },
  ];
  const asianCountries = ['Armenia', 'Bhutan', 'China', 'India', 'Indonesia', 'Israel', 'Japan', 'Jordan', 'Laos', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'Philippines', 'Russia', 'Singapore', 'South Korea', 'Thailand', 'Sri Lanka', 'Vietnam', 'Nepal', 'Uzbekistan', 'Kyrgyzstan', 'Bangladesh', 'Syria', 'Qatar', 'Tajikistan', 'Lebanon', 'Bahrain', 'Pakistan'];
  let randomQuestionIndex = 0;
  let currentQuestion = {};
  let possibleAnswers = [];
  let round = 1;
  let score = 0;

  function stylePage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.appendChild(countryOptionsElements[i]);
    }
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.8)';
    countDisplay.style.color = 'black';
    headerTitle.innerHTML = 'Asia';
    questionToGuessElement.style.height = '80px';
    questionToGuessElement.style.padding = '20px';
    for (let i = 0; i < continentOptions.length; i++) {
      continentContainer.removeChild(continentOptions[i]);
    }
  }

  function populateAnswers() {
    unshuffledPossibleAnswers = [];
    console.log(currentQuestion.answer);

    unshuffledPossibleAnswers.push(currentQuestion.answer);

    while (unshuffledPossibleAnswers.length < 4) {
      const randomCountry = asianCountries[randomIntergerUpto(asianCountries.length - 1)];
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
    randomQuestionIndex = randomIntergerUpto(asiaQuestions.length - 1);
    currentQuestion = asiaQuestions.splice(randomQuestionIndex, 1)[0];

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
      score += 1;
      rightAnswerAudio.play();
    } else {
      evaluateRightAnswer.innerHTML = 'Not this time :(';
      wrongAnswerAudio.play();
    }

    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    round += 1
    // if round < 10
    if (round < 11) {
      setTimeout(newQuestion, 2000);
      setTimeout(function () {
        questionNumber.innerHTML = `${round}`;
      }, 2000);
      console.log(`the score is ${score}`);
    } else {
      setTimeout(rank, 2000);
      setTimeout(clearPage, 2000);

    }

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

  //rank player
  function rank() {

    if (score < 4) {
      evaluateRightAnswer.innerHTML = `You\'ve got only ${score} right answers out of 10 😢 </br> Go on and get that old backpack for a ride. 🎒 </br> You deserve some travelling!😎`
    } else if (score < 7) {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> Good on you! 🙌 We\'ve seen that you\'ve been around!! 😉`
    } else {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> WOW! 🤩 You have been doing some serious traveling 🛫`
    }
  }
  function clearPage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.removeChild(countryOptionsElements[i]);
    }
    document.querySelector('.section').removeChild(questionToGuessElement);
    evaluateRightAnswer.style.height = '120px';
    evaluateRightAnswer.style.padding = '30px';
    evaluateRightAnswer.style.animation = 'color-change 3s linear infinite alternate';
    evaluateRightAnswer.style.fontSize = '25px';
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
    countDisplay.style.color = 'rgba(255,255,255, 0.1)';
    holidayAudio.play();
    playAgain.style.backgroundColor = 'rgba(240, 40, 100, 0.8)';
    playAgain.innerHTML = 'Play Again';
  };
  stylePage();
  startRound();
}


//africa
function africa() {

  let africaQuestions = [
    { question: 'You can climb up the Mount Kilimanjaro. Which country will you go?', answer: 'Tanzania' },
    { question: 'You can visit the Table Mountain and overlook the Cape Town Bay. Which country will you go?', answer: 'South Africa' },
    { question: 'You will visit the world\'s most famous pyramides. Which country will you go?', answer: 'Egypt' },
    { question: 'You can visit the most populated country in Africa and the Niger River. Which country will you go?', answer: 'Nigeria' },
    { question: 'You can visit Mount Nimba, that rises above the savannah where this country meets with Guinea and Liberia. Which country will you go?', answer: 'Ivory Coast' },
    { question: 'You can travel to the largest island in Africa - and the 4th largest in the world. Which country will you go?', answer: 'Madagascar' },
    { question: 'You can visit the largest lake in Africa, Lake Victoria. Which country will you go?', answer: 'Zimbabwe' },
    { question: 'You can meet the \'Big Five\' on a Safari at the country that was named after its highest Mount. Which country will you go?', answer: 'Kenya' },
    { question: 'You can visit an archipelago of Islands in the center of the Atlantic Ocean that was a Portuguese colony. Which country will you go?', answer: 'Cabo Verde' },
    { question: 'You can visit Casablanca, one of its most famous locations. Which country will you go?', answer: 'Morocco' },
    { question: 'You can visit the Calahari Desert, that covers almost 80% of this country\'s territory. Which country will you go?', answer: 'Botswana' },
    { question: 'You can visit the place where the famous Paris-Dakar rali use to end after crossing the Sahara Desert. Which country will you go?', answer: 'Senegal' },
    { question: 'You can visit the endangered mountain gorillas at Ruwenzori Mountains. English and Swahili are the official languages. Which country will you go?', answer: 'Uganda' },
  ];
  const africanCountries = ['Algeria', 'Angola', 'Benin', 'Botswana', 'Cabo Verde', 'Cameroon', 'Ivory Coast', 'Egypt', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guinea', 'Kenya', 'Madagascar', 'Malawi', 'Mauritius', 'Morocco', 'Mozambique', 'Nigeria', 'Rwanda', 'Senegal', 'South Africa', 'Tanzania', 'Uganda', 'Zambia', 'Zimbabwe', 'Togo', 'Seychelles', 'Somalia', 'Chad'];
  let randomQuestionIndex = 0;
  let currentQuestion = {};
  let possibleAnswers = [];
  let round = 1;
  let score = 0;

  function stylePage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.appendChild(countryOptionsElements[i]);
    }
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.8)';
    countDisplay.style.color = 'black';
    headerTitle.innerHTML = 'Africa';
    questionToGuessElement.style.height = '60px';
    questionToGuessElement.style.padding = '20px';
    for (let i = 0; i < continentOptions.length; i++) {
      continentContainer.removeChild(continentOptions[i]);
    }
  }

  function populateAnswers() {
    unshuffledPossibleAnswers = [];
    console.log(currentQuestion.answer);

    unshuffledPossibleAnswers.push(currentQuestion.answer);

    while (unshuffledPossibleAnswers.length < 4) {
      const randomCountry = africanCountries[randomIntergerUpto(africanCountries.length - 1)];
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
    randomQuestionIndex = randomIntergerUpto(africaQuestions.length - 1);
    currentQuestion = africaQuestions.splice(randomQuestionIndex, 1)[0];

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

  function answerClick(event) {
    const button = event.target;
    const clickedIndex = Number(button.getAttribute('data-index'));
    console.log(clickedIndex);

    if (possibleAnswers[clickedIndex] === currentQuestion.answer) {
      evaluateRightAnswer.innerHTML = 'Cooool. You have conquered it!';
      score += 1;
      rightAnswerAudio.play();
    } else {
      evaluateRightAnswer.innerHTML = 'Not this time :(';
      wrongAnswerAudio.play();
    }

    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    round += 1
    // if round < 10
    if (round < 11) {
      setTimeout(newQuestion, 2000);
      setTimeout(function () {
        questionNumber.innerHTML = `${round}`;
      }, 2000);
      console.log(`the score is ${score}`);
    } else {
      setTimeout(rank, 2000);
      setTimeout(clearPage, 2000);

    }

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

  function rank() {

    if (score < 4) {
      evaluateRightAnswer.innerHTML = `You\'ve got only ${score} right answers out of 10 😢 </br> Go on and get that old backpack for a ride. 🎒 </br> You deserve some travelling!😎`
    } else if (score < 7) {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> Good on you! 🙌 We\'ve seen that you\'ve been around!! 😉`
    } else {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> WOW! 🤩 You have been doing some serious traveling 🛫`
    }
  }
  function clearPage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.removeChild(countryOptionsElements[i]);
    }
    document.querySelector('.section').removeChild(questionToGuessElement);
    evaluateRightAnswer.style.height = '120px';
    evaluateRightAnswer.style.padding = '30px';
    evaluateRightAnswer.style.animation = 'color-change 3s linear infinite alternate';
    evaluateRightAnswer.style.fontSize = '25px';
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
    countDisplay.style.color = 'rgba(255,255,255, 0.1)';
    holidayAudio.play();
    playAgain.style.backgroundColor = 'rgba(240, 40, 100, 0.8)';
    playAgain.innerHTML = 'Play Again';
  };
  stylePage();
  startRound();
}

//oceania
function oceania() {

  let oceaniaQuestions = [
    { question: 'You can see Kangaroos and Koalas in their original habitat. Which country will you go?', answer: 'Australia' },
    { question: 'You can greet the \'Kiwis\' and visit places where the \'Lord of the Rings\' thrilogy was filmed. Which country will you go?', answer: 'New Zealand' },
    { question: 'You will visit one of the world\'s largest islands, that its also one of the least explored. Which country will you go?', answer: 'Papua New Guinea' },
    { question: 'You can visit the most populated country in Africa and the Niger River. Which country will you go?', answer: 'Nigeria' },
    { question: 'You can visit Mount Nimba, that rises above the savannah where this country meets with Guinea and Liberia. Which country will you go?', answer: 'Ivory Coast' },
    { question: 'You can travel to the largest island in Africa - and the 4th largest in the world. Which country will you go?', answer: 'Madagascar' },
    { question: 'You can visit the largest lake in Africa, Lake Victoria. Which country will you go?', answer: 'Zimbabwe' },
    { question: 'You can meet the \'Big Five\' on a Safari at the country that was named after its highest Mount. Which country will you go?', answer: 'Kenya' },
    { question: 'You can visit an archipelago of Islands in the center of the Atlantic Ocean that was a Portuguese colony. Which country will you go?', answer: 'Cabo Verde' },
    { question: 'You can visit Casablanca, one of its most famous locations. Which country will you go?', answer: 'Morocco' },
    { question: 'You can visit the Calahari Desert, that covers almost 80% of this country\'s territory. Which country will you go?', answer: 'Botswana' },
    { question: 'You can visit the place where the famous Paris-Dakar rali use to end after crossing the Sahara Desert. Which country will you go?', answer: 'Senegal' },
    { question: 'You can visit the endangered mountain gorillas at Ruwenzori Mountains. English and Swahili are the official languages. Which country will you go?', answer: 'Uganda' },
  ];
  const oceaniaCountries = ['Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Samoa', 'Solomon Islands', 'Vanuatu', 'New Caledonia', 'French Polynesia', 'Samoa', 'Guam', 'Kiribati', 'Tonga', 'Micronesia', 'Tokelau', 'Nauru', 'Marshall Islands', 'American Samoa'];
  let randomQuestionIndex = 0;
  let currentQuestion = {};
  let possibleAnswers = [];
  let round = 1;
  let score = 0;

  function stylePage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.appendChild(countryOptionsElements[i]);
    }
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.8)';
    countDisplay.style.color = 'black';
    headerTitle.innerHTML = 'Oceania';
    questionToGuessElement.style.height = '60px';
    questionToGuessElement.style.padding = '20px';
    for (let i = 0; i < continentOptions.length; i++) {
      continentContainer.removeChild(continentOptions[i]);
    }
  }

  function populateAnswers() {
    unshuffledPossibleAnswers = [];
    console.log(currentQuestion.answer);

    unshuffledPossibleAnswers.push(currentQuestion.answer);

    while (unshuffledPossibleAnswers.length < 4) {
      const randomCountry = oceaniaCountries[randomIntergerUpto(oceaniaCountries.length - 1)];
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
    randomQuestionIndex = randomIntergerUpto(oceaniaQuestions.length - 1);
    currentQuestion = oceaniaQuestions.splice(randomQuestionIndex, 1)[0];

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

  function answerClick(event) {
    const button = event.target;
    const clickedIndex = Number(button.getAttribute('data-index'));
    console.log(clickedIndex);

    if (possibleAnswers[clickedIndex] === currentQuestion.answer) {
      evaluateRightAnswer.innerHTML = 'Cooool. You have conquered it!';
      score += 1;
      rightAnswerAudio.play();
    } else {
      evaluateRightAnswer.innerHTML = 'Not this time :(';
      wrongAnswerAudio.play();
    }

    evaluateRightAnswer.style.backgroundColor = 'rgba(255,255,255, 0.7)';
    round += 1
    // if round < 10
    if (round < 11) {
      setTimeout(newQuestion, 2000);
      setTimeout(function () {
        questionNumber.innerHTML = `${round}`;
      }, 2000);
      console.log(`the score is ${score}`);
    } else {
      setTimeout(rank, 2000);
      setTimeout(clearPage, 2000);

    }

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

  function rank() {

    if (score < 4) {
      evaluateRightAnswer.innerHTML = `You\'ve got only ${score} right answers out of 10 😢 </br> Go on and get that old backpack for a ride. 🎒 </br> You deserve some travelling!😎`
    } else if (score < 7) {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> Good on you! 🙌 We\'ve seen that you\'ve been around!! 😉`
    } else {
      evaluateRightAnswer.innerHTML = `You\'ve got ${score} right answers out of 10. </br> WOW! 🤩 You have been doing some serious traveling 🛫`
    }
  }
  function clearPage() {
    for (let i = 0; i < countryOptionsElements.length; i++) {
      answersContainer.removeChild(countryOptionsElements[i]);
    }
    document.querySelector('.section').removeChild(questionToGuessElement);
    evaluateRightAnswer.style.height = '120px';
    evaluateRightAnswer.style.padding = '30px';
    evaluateRightAnswer.style.animation = 'color-change 3s linear infinite alternate';
    evaluateRightAnswer.style.fontSize = '25px';
    countDisplay.style.backgroundColor = 'rgba(255,255,255, 0.1)';
    countDisplay.style.color = 'rgba(255,255,255, 0.1)';
    holidayAudio.play();
    playAgain.style.backgroundColor = 'rgba(240, 40, 100, 0.8)';
    playAgain.innerHTML = 'Play Again';
  };
  stylePage();
  startRound();
}

startGame();
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


