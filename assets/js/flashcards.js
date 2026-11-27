(() => {
  const deck = document.getElementById('flashcards');
  const status = document.getElementById('deckStatus');
  const controls = document.getElementById('deckControls');
  const question = document.getElementById('cardQuestion');
  const answer = document.getElementById('cardAnswer');
  const position = document.getElementById('cardPosition');
  const announcement = document.getElementById('cardAnnouncement');
  const reveal = document.getElementById('revealCard');
  const prev = document.getElementById('prevCard');
  const next = document.getElementById('nextCard');
  const jump = document.getElementById('cardNumber');
  const shuffle = document.getElementById('shuffleDeck');
  let cards = [];
  let order = [];
  let index = 0;
  let shuffled = false;

  function setAnswer(visible) {
    answer.hidden = !visible;
    reveal.textContent = visible ? 'Hide answer' : 'Show answer';
    reveal.setAttribute('aria-expanded', String(visible));
  }

  function showCard() {
    const [front, back] = cards[order[index]];
    const label = 'Card ' + (index + 1) + ' of ' + cards.length;
    position.textContent = label;
    question.textContent = front;
    answer.textContent = back;
    jump.value = index + 1;
    setAnswer(false);
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
    announcement.textContent = label + '. ' + front;
  }

  reveal.addEventListener('click', () => setAnswer(answer.hidden));
  prev.addEventListener('click', () => { index--; showCard(); });
  next.addEventListener('click', () => { index++; showCard(); });
  jump.addEventListener('change', () => {
    const target = jump.valueAsNumber;
    if (Number.isInteger(target)) index = Math.min(Math.max(target - 1, 0), cards.length - 1);
    showCard();
  });
  shuffle.addEventListener('click', () => {
    shuffled = !shuffled;
    order = cards.map((_, item) => item);
    if (shuffled) {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    shuffle.setAttribute('aria-pressed', String(shuffled));
    index = 0;
    showCard();
  });

  status.textContent = 'Loading flashcards…';
  fetch(deck.dataset.deck).then(async (response) => {
    if (!response.ok) throw new Error('Flashcards unavailable');
    cards = (await response.text()).replace(/^\uFEFF/, '').split(/\r?\n/)
      .map((line) => line.split('\t'))
      .filter(([front, back]) => front?.trim() && back?.trim());
    if (!cards.length) throw new Error('Empty deck');
    order = cards.map((_, item) => item);
    jump.max = cards.length;
    status.textContent = '';
    controls.hidden = false;
    showCard();
  }).catch(() => {
    status.textContent = 'The interactive deck could not load. You can still download the TSV.';
  });
})();
