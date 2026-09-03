const riddleText = "I am not a person, but I can mimic your voice. I am not a mirror, but I can recreate your face. I can paint a masterpiece in seconds or write a symphony from scratch, yet I have never felt a single emotion. What am I?";
const aiStreamElement = document.getElementById("aiStream");
const box1 = document.getElementById("letter1");
const box2 = document.getElementById("letter2");
let index = 0;

// Streaming typewriter effect
function typeAIText() {
  if (index < riddleText.length) {
    aiStreamElement.textContent += riddleText.charAt(index);
    index++;
    setTimeout(typeAIText, Math.floor(Math.random() * 20) + 15);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  typeAIText();
  box1.focus();
});

// Auto-advance and force uppercase
box1.addEventListener("input", function() {
  this.value = this.value.toUpperCase();
  if (this.value.length === 1) {
    box2.focus();
  }
});

box2.addEventListener("input", function() {
  this.value = this.value.toUpperCase();
});

// Backspace handles jumping back
box2.addEventListener("keydown", function(e) {
  if (e.key === "Backspace" && this.value === "") {
    box1.focus();
  } else if (e.key === "Enter") {
    checkGuess();
  }
});

box1.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  const combined = (box1.value + box2.value).trim().toUpperCase();
  const feedback = document.getElementById("feedback");

  if (combined.length < 2) {
    feedback.textContent = "PLEASE ENTER BOTH LETTERS!";
    feedback.className = "feedback-msg wrong";
    return;
  }

  if (combined === "AI") {
    feedback.textContent = "🎉 BINGO! YOU CRACKED IT!";
    feedback.className = "feedback-msg correct";
  } else {
    feedback.textContent = "❌ NOT QUITE! TRY AGAIN.";
    feedback.className = "feedback-msg wrong";
  }
}

function toggleAnswer() {
  const box = document.getElementById("answerBox");
  const btn = document.getElementById("revealBtn");

  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    btn.textContent = "CLOSE NOTE";
  } else {
    box.classList.add("hidden");
    btn.textContent = "GIVE UP? REVEAL ANSWER";
  }
}