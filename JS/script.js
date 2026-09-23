const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;
const nom = "Nolan";
console.log(`Bonjour ${nom} !`);
const images = [];
const tableauDeJeu = document.getElementById('game-board');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves= 0;
let matchedCount = 0;

for (let i = 0; i < 8; i++) {
  const url = `https://picsum.photos/${dimension}?random=${imgStart + i}`;
  images.push(url);
}

let cards = [...images, ...images];

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initGame(){
    shuffle(cards);
    cards.forEach((imgUrl) => {
      const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = imgUrl;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        tableauDeJeu.appendChild(card);
        card.addEventListener('click', () => handleCardClick(card))
    })
}

function handleCardClick(card){
    if (lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains('matched')) return;
    if (firstCard === null) {
        firstcard = card;
    } else {
        secondCard = card;
        lockBoard = true;
        moves++;
        checkMatch();
    }
}


initGame();


