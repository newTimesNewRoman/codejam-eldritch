import ancientsData from './data/ancients.js';
import greenCardsData from './data/mythicCards/green/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';

const greetingWindow = document.querySelector('.greeting');
const difficultyWindow = document.querySelector('.difficulty');
const createDeckWindow = document.querySelector('.create-deck-button');
const gameWindow = document.querySelector('.game');

const azathoth = document.querySelector('#azathoth');
const cthulhu = document.querySelector('#cthulhu');
const iogSothoth = document.querySelector('#iogSothoth');
const shubNiggurath = document.querySelector('#shubNiggurath');

let ancientNumber = 0;

azathoth.addEventListener('click', function() {
  ancientNumber = 0;
  greetingWindow.classList.add('hidden');
  difficultyWindow.classList.remove('hidden');
});

cthulhu.addEventListener('click', function() {
  ancientNumber = 1;
  greetingWindow.classList.add('hidden');
  difficultyWindow.classList.remove('hidden');
});

iogSothoth.addEventListener('click', function() {
  ancientNumber = 2;
  greetingWindow.classList.add('hidden');
  difficultyWindow.classList.remove('hidden');
});

shubNiggurath.addEventListener('click', function() {
  ancientNumber = 3;
  greetingWindow.classList.add('hidden');
  difficultyWindow.classList.remove('hidden');
});

//let sumOfGreenCards = ancientsData[ancientNumber].firstStage.greenCards + ancientsData[ancientNumber].secondStage.greenCards + ancientsData[ancientNumber].thirdStage.greenCards;
//let sumOfBlueCards = ancientsData[ancientNumber].firstStage.blueCards + ancientsData[ancientNumber].secondStage.blueCards + ancientsData[ancientNumber].thirdStage.blueCards;
//let sumOfBrownCards = ancientsData[ancientNumber].firstStage.brownCards + ancientsData[ancientNumber].secondStage.brownCards + ancientsData[ancientNumber].thirdStage.brownCards;

function greenCardsCounting() {
  return ancientsData[ancientNumber].firstStage.greenCards + ancientsData[ancientNumber].secondStage.greenCards + ancientsData[ancientNumber].thirdStage.greenCards;
};
function blueCardsCounting() {
  return ancientsData[ancientNumber].firstStage.blueCards + ancientsData[ancientNumber].secondStage.blueCards + ancientsData[ancientNumber].thirdStage.blueCards;
};
function brownCardsCounting() {
  return ancientsData[ancientNumber].firstStage.brownCards + ancientsData[ancientNumber].secondStage.brownCards + ancientsData[ancientNumber].thirdStage.brownCards;
};




let difficultyOfGame = '';

const veryEasy = document.querySelector('#veryEasy');
const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
const extraHard = document.querySelector('#extraHard');

veryEasy.addEventListener('click', function(){
  difficultyOfGame = 'veryEasy';
  difficultyWindow.classList.add('hidden');
  createDeckWindow.classList.remove('hidden');
});

easy.addEventListener('click', function(){
  difficultyOfGame = 'easy';
  difficultyWindow.classList.add('hidden');
  createDeckWindow.classList.remove('hidden');
});

normal.addEventListener('click', function(){
  difficultyOfGame = 'normal';
  difficultyWindow.classList.add('hidden');
  createDeckWindow.classList.remove('hidden');
});

hard.addEventListener('click', function(){
  difficultyOfGame = 'hard';
  difficultyWindow.classList.add('hidden');
  createDeckWindow.classList.remove('hidden');
});

extraHard.addEventListener('click', function(){
  difficultyOfGame = 'extraHard';
  difficultyWindow.classList.add('hidden');
  createDeckWindow.classList.remove('hidden');
});

let greenCardsDeck = [];
let blueCardsDeck = [];
let brownCardsDeck = [];
let prepareGreenDeck = [];
let prepareBlueDeck = [];
let prepareBrownDeck = [];
let firstStageDeck = [];
let secondStageDeck = [];
let thirdStageDeck = [];

function createNormalDeck() {
  greenCardsDeck = greenCardsData;
  blueCardsDeck = blueCardsData;
  brownCardsDeck = brownCardsData;
}

function createEasyDeck() {
  greenCardsData.forEach(card => {
    if (card.difficulty != 'hard') {
      greenCardsDeck.push(card);
    }
  });

  blueCardsData.forEach(card => {
    if (card.difficulty != 'hard') {
      blueCardsDeck.push(card);
    }
  });

  brownCardsData.forEach(card => {
    if (card.difficulty != 'hard') {
      brownCardsDeck.push(card);
    }
  });
};

function createHardDeck() {
  greenCardsData.forEach(card => {
    if (card.difficulty != 'easy') {
      greenCardsDeck.push(card);
    }
  });

  blueCardsData.forEach(card => {
    if (card.difficulty != 'easy') {
      blueCardsDeck.push(card);
    }
  });

  brownCardsData.forEach(card => {
    if (card.difficulty != 'easy') {
      brownCardsDeck.push(card);
    }
  });
};

function createVeryEasyDeck() {
  greenCardsData.forEach(card => {
    if (card.difficulty == 'easy') {
      prepareGreenDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      greenCardsDeck.push(card);
    };
  });

  blueCardsData.forEach(card => {
    if (card.difficulty == 'easy') {
      prepareBlueDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      blueCardsDeck.push(card);
    };
  });

  brownCardsData.forEach(card => {
    if (card.difficulty == 'easy') {
      prepareBrownDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      brownCardsDeck.push(card);
    };
  });
};

function createExtraHardDeck() {
  greenCardsData.forEach(card => {
    if (card.difficulty == 'hard') {
      prepareGreenDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      greenCardsDeck.push(card);
    };
  });

  blueCardsData.forEach(card => {
    if (card.difficulty == 'hard') {
      prepareBlueDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      blueCardsDeck.push(card);
    };
  });

  brownCardsData.forEach(card => {
    if (card.difficulty == 'hard') {
      prepareBrownDeck.push(card);
    };
    if (card.difficulty == 'normal') {
      brownCardsDeck.push(card);
    };
  });
};

function createPrepareDecks() {
  while (prepareGreenDeck.length <= greenCardsCounting()) {
    let random = Math.floor(Math.random() * (greenCardsDeck.length - 1));
    let card = greenCardsDeck[random];
    if (!prepareGreenDeck.includes(card)) {
      prepareGreenDeck.push(card);
    }
  };

  for (let i = prepareGreenDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = prepareGreenDeck[i];
    prepareGreenDeck[i] = prepareGreenDeck[j];
    prepareGreenDeck[j] = temp;
  };

  while (prepareBlueDeck.length <= blueCardsCounting()) {
    let random = Math.floor(Math.random() * (blueCardsDeck.length - 1));
    let card = blueCardsDeck[random];
    if (!prepareBlueDeck.includes(card)) {
      prepareBlueDeck.push(card);
    }
  };

  for (let i = prepareBlueDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = prepareBlueDeck[i];
    prepareBlueDeck[i] = prepareBlueDeck[j];
    prepareBlueDeck[j] = temp;
  };

  while (prepareBrownDeck.length <= brownCardsCounting()) {
    let random = Math.floor(Math.random() * (brownCardsDeck.length - 1));
    let card = brownCardsDeck[random];
    if (!prepareBrownDeck.includes(card)) {
      prepareBrownDeck.push(card);
    }
  };

  for (let i = prepareBrownDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = prepareBrownDeck[i];
    prepareBrownDeck[i] = prepareBrownDeck[j];
    prepareBrownDeck[j] = temp;
  };
};

function createFirstStageDeck() {
  for (let i = 0; i < ancientsData[ancientNumber].firstStage.greenCards; i++) {
    let lastCard = prepareGreenDeck.pop();
    firstStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].firstStage.blueCards; i++) {
    let lastCard = prepareBlueDeck.pop();
    firstStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].firstStage.brownCards; i++) {
    let lastCard = prepareBrownDeck.pop();
    firstStageDeck.push(lastCard);
  }
  for (let i = firstStageDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = firstStageDeck[i];
    firstStageDeck[i] = firstStageDeck[j];
    firstStageDeck[j] = temp;
  }
  return firstStageDeck;
};

function createSecondStageDeck() {
  for (let i = 0; i < ancientsData[ancientNumber].secondStage.greenCards; i++) {
    let lastCard = prepareGreenDeck.pop();
    secondStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].secondStage.blueCards; i++) {
    let lastCard = prepareBlueDeck.pop();
    secondStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].secondStage.brownCards; i++) {
    let lastCard = prepareBrownDeck.pop();
    secondStageDeck.push(lastCard);
  }
  for (let i = secondStageDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = secondStageDeck[i];
    secondStageDeck[i] = secondStageDeck[j];
    secondStageDeck[j] = temp;
  }
  return secondStageDeck;
};

function createThirdStageDeck() {
  for (let i = 0; i < ancientsData[ancientNumber].thirdStage.greenCards; i++) {
    let lastCard = prepareGreenDeck.pop();
    thirdStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].thirdStage.blueCards; i++) {
    let lastCard = prepareBlueDeck.pop();
    thirdStageDeck.push(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].thirdStage.brownCards; i++) {
    let lastCard = prepareBrownDeck.pop();
    thirdStageDeck.push(lastCard);
  }
  for (let i = thirdStageDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = thirdStageDeck[i];
    thirdStageDeck[i] = thirdStageDeck[j];
    thirdStageDeck[j] = temp;
  }
  return thirdStageDeck;
};

const greenCounter = document.querySelector('#greenCounter');
const blueCounter = document.querySelector('#blueCounter');
const brownCounter = document.querySelector('#brownCounter');

let greenCardsLeft = 0;
let blueCardsLeft = 0;
let brownCardsLeft = 0;

function showCounter() {
  greenCounter.innerHTML = greenCardsLeft;
  blueCounter.innerHTML = blueCardsLeft;
  brownCounter.innerHTML = brownCardsLeft;
};

let compliteDesk = [];
function createCompleteDesk() {
  greenCardsLeft = greenCardsCounting();
  blueCardsLeft = blueCardsCounting();
  brownCardsLeft = brownCardsCounting();
  showCounter();
  if (difficultyOfGame == 'veryEasy') {
    createVeryEasyDeck();
    createPrepareDecks();
    createFirstStageDeck();
    createSecondStageDeck();
    createThirdStageDeck();
    compliteDesk.push(...firstStageDeck, ...secondStageDeck, ...thirdStageDeck);
    return compliteDesk;
  };
  if (difficultyOfGame == 'easy') {
    createEasyDeck();
    createPrepareDecks();
    createFirstStageDeck();
    createSecondStageDeck();
    createThirdStageDeck();
    compliteDesk.push(...firstStageDeck, ...secondStageDeck, ...thirdStageDeck);
    return compliteDesk;
  };
  if (difficultyOfGame == 'normal') {
    createNormalDeck();
    createPrepareDecks();
    createFirstStageDeck();
    createSecondStageDeck();
    createThirdStageDeck();
    compliteDesk.push(...firstStageDeck, ...secondStageDeck, ...thirdStageDeck);
    return compliteDesk;
  };
  if (difficultyOfGame == 'hard') {
    createHardDeck();
    createPrepareDecks();
    createFirstStageDeck();
    createSecondStageDeck();
    createThirdStageDeck();
    compliteDesk.push(...firstStageDeck, ...secondStageDeck, ...thirdStageDeck);
    return compliteDesk;
  };
  if (difficultyOfGame == 'extraHard') {
    createExtraHardDeck();
    createPrepareDecks();
    createFirstStageDeck();
    createSecondStageDeck();
    createThirdStageDeck();
    compliteDesk.push(...firstStageDeck, ...secondStageDeck, ...thirdStageDeck);
    return compliteDesk;
  };
};

const openCards = document.querySelector('#openCards');
const closedCards = document.querySelector('#closedCards');
const cardsIsOver = document.querySelector('#cardsIsOver');
let counter = 0;

function cardsCounting(selectColor) {
  if (selectColor == 'green') {
    greenCardsLeft -= 1;
  }
  if (selectColor == 'blue') {
    blueCardsLeft -= 1;
  }
  if (selectColor == 'brown') {
    brownCardsLeft -= 1;
  }
  showCounter();
};

function openDeck() {
  const img = new Image();
  let selectColor = compliteDesk[counter].color;
  let selectCard = compliteDesk[counter].id;
  img.src = `./assets/MythicCards/${selectColor}/${selectCard}.png`
  img.onload = () => {      
    openCards.style.backgroundImage = `url(./assets/MythicCards/${selectColor}/${selectCard}.png)`;
    openCards.style.opacity = "1";
    }; 
  
  cardsCounting(selectColor);
    
  counter += 1;
  if (counter === compliteDesk.length) {
    closedCards.classList.add('hidden');
    cardsIsOver.classList.remove('hidden');
    };
};

closedCards.addEventListener('click', openDeck);

const startButton = document.querySelector('#startButton');
const closeButton = document.querySelector('#closeButton');
const repeatButton = document.querySelector('#repeatButton');

function cardsReset() {
  greenCardsDeck = [];
  blueCardsDeck = [];
  brownCardsDeck = [];
  prepareGreenDeck = [];
  prepareBlueDeck = [];
  prepareBrownDeck = [];
  firstStageDeck = [];
  secondStageDeck = [];
  thirdStageDeck = [];
  compliteDesk = [];
  counter = 0;
  
  const img = new Image();
  img.src = './assets/backgroundCard.png';
  img.onload = () => {      
    openCards.style.backgroundImage = 'url(./assets/backgroundCard.png)';
    openCards.style.opacity = "0.5";
    };

  if (closedCards.classList.contains('hidden')) {
    closedCards.classList.remove('hidden');
    cardsIsOver.classList.add('hidden');
  };
}

startButton.addEventListener('click', function() {
  createCompleteDesk();
  createDeckWindow.classList.add('hidden');
  gameWindow.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
  cardsReset();
  createDeckWindow.classList.add('hidden');
  greetingWindow.classList.remove('hidden');
});

repeatButton.addEventListener('click', function() {
  cardsReset();
  gameWindow.classList.add('hidden');
  greetingWindow.classList.remove('hidden');
});

const body = document.querySelector('body');

function setBg() {
  let randomNum = 0;
  function getRandomNum() {
    const min = Math.ceil(1);
    const max = Math.floor(3);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  };
  getRandomNum();

  const img = new Image();
  const bgNum = randomNum.toString();
  img.src = `./assets/Background-${bgNum}.jpg`;
  img.onload = () => {      
    body.style.backgroundImage = `url(./assets/Background-${bgNum}.jpg)`;
  }; 
};
setBg();