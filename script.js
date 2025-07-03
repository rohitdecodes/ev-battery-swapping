function checkAnswer(button) {
  const result = document.getElementById("quiz-result");
  if (button.innerText.includes("Faster energy replenishment")) {
    result.innerText = "✅ Correct! Battery swapping saves time.";
    result.className = "text-green-700 dark:text-green-400";
  } else {
    result.innerText = "❌ Oops! Try again.";
    result.className = "text-red-700 dark:text-red-400";
  }
}
function toggleContact() {
  const contact = document.getElementById("contact-section");
  contact.classList.toggle("hidden");
}