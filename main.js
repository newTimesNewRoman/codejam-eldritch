import ancientsData from './data/ancients.js';
import greenCardsData from './data/mythicCards/green/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';

let ancientNumber = 0;
let difficultyOfGame = 'normal';
const sumOfGreenCards = ancientsData[ancientNumber].firstStage.greenCards + ancientsData[ancientNumber].secondStage.greenCards + ancientsData[ancientNumber].thirdStage.greenCards;
const sumOfBlueCards = ancientsData[ancientNumber].firstStage.blueCards + ancientsData[ancientNumber].secondStage.blueCards + ancientsData[ancientNumber].thirdStage.blueCards;
const sumOfBrownCards = ancientsData[ancientNumber].firstStage.brownCards + ancientsData[ancientNumber].secondStage.brownCards + ancientsData[ancientNumber].thirdStage.brownCards;

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
  while (prepareGreenDeck.length < sumOfGreenCards) {
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

  while (prepareBlueDeck.length < sumOfBlueCards) {
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

  while (prepareBrownDeck.length < sumOfBrownCards) {
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
    let lastCard = prepareGreenDeck[prepareGreenDeck.length - 1];
    firstStageDeck.push(lastCard);
    prepareGreenDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].firstStage.blueCards; i++) {
    let lastCard = prepareBlueDeck[prepareBlueDeck.length - 1];
    firstStageDeck.push(lastCard);
    prepareBlueDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].firstStage.brownCards; i++) {
    let lastCard = prepareBrownDeck[prepareBrownDeck.length - 1];
    firstStageDeck.push(lastCard);
    prepareBrownDeck.pop(lastCard);
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
    let lastCard = prepareGreenDeck[prepareGreenDeck.length - 1];
    secondStageDeck.push(lastCard);
    prepareGreenDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].secondStage.blueCards; i++) {
    let lastCard = prepareBlueDeck[prepareBlueDeck.length - 1];
    secondStageDeck.push(lastCard);
    prepareBlueDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].secondStage.brownCards; i++) {
    let lastCard = prepareBrownDeck[prepareBrownDeck.length - 1];
    secondStageDeck.push(lastCard);
    prepareBrownDeck.pop(lastCard);
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
    let lastCard = prepareGreenDeck[prepareGreenDeck.length - 1];
    thirdStageDeck.push(lastCard);
    prepareGreenDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].thirdStage.blueCards; i++) {
    let lastCard = prepareBlueDeck[prepareBlueDeck.length - 1];
    thirdStageDeck.push(lastCard);
    prepareBlueDeck.pop(lastCard);
  }
  for (let i = 0; i < ancientsData[ancientNumber].thirdStage.brownCards; i++) {
    let lastCard = prepareBrownDeck[prepareBrownDeck.length - 1];
    thirdStageDeck.push(lastCard);
    prepareBrownDeck.pop(lastCard);
  }
  for (let i = thirdStageDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = thirdStageDeck[i];
    thirdStageDeck[i] = thirdStageDeck[j];
    thirdStageDeck[j] = temp;
  }
  return thirdStageDeck;
};

function createCompleteDesk() {
  let compliteDesk = [];
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
}
console.log(createCompleteDesk())

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

const openCards = document.querySelector('#openCards');
const closedCards = document.querySelector('#closedCards');

function openDeck() {
  const img = new Image();
  img.src = './assets/mythicCardBackground.png';
  img.onload = () => {      
    openCards.style.backgroundImage = 'url(./assets/mythicCardBackground.png)';
    openCards.style.opacity = "1";
  }; 
};
closedCards.addEventListener('click', openDeck);
