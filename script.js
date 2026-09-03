const riddleText = "I am not a person, but I can mimic your voice. I am not a mirror, but I can recreate your face. I can paint a masterpiece in seconds or write a symphony from scratch, yet I have never felt a single emotion. What am I?";
const aiStreamElement = document.getElementById("aiStream");
const inputField = document.getElementById("userInput");
let index = 0;

// Typewriter AI generation stream
function typeAIText() {
  if (index < riddleText.length) {
    aiStreamElement.textContent += riddleText.charAt(index);
    index++;
    setTimeout(typeAIText, Math.floor(Math.random() * 20) + 15);
  }
}

window.addEventListener("DOMContentLoaded", typeAIText);

// Force all user inputs directly into UPPERCASE
inputField.addEventListener("input", function() {
  this.value = this.value.toUpperCase();
});

function checkGuess() {
  const input = inputField.value.trim().toUpperCase();
  const feedback = document.getElementById('feedback');

  const validAnswers = [
    'AI',
    'ARTIFICIAL INTELLIGENCE',
    'GENERATIVE AI',
    'GEN AI',
    'DEEPFAKE',
    'BOT',
    'LLM'
  ];

  if (!input) {
    feedback.textContent = 'PLEASE ENTER A GUESS FIRST!';
    feedback.className = 'feedback-msg wrong';
    return;
  }

  if (validAnswers.some(ans => input.includes(ans))) {
    feedback.textContent = '🎉 BINGO! YOU GOT IT RIGHT!';
    feedback.className = 'feedback-msg correct';
  } else {
    feedback.textContent = '❌ NICE TRY, BUT NOT QUITE!';
    feedback.className = 'feedback-msg wrong';
  }
}

function toggleAnswer() {
  const box = document.getElementById('answerBox');
  const btn = document.getElementById('revealBtn');

  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    btn.textContent = 'HIDE ANSWER';
  } else {
    box.classList.add('hidden');
    btn.textContent = 'GIVE UP? REVEAL ANSWER';
  }
}

inputField.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkGuess();
});