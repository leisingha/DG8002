// =========================================================
// TAG-Me Interactive Edition - script.js
// Shared by index.html and classified.html.
// Each feature checks that its elements exist first, since
// not every page has every feature.
// =========================================================


// ---------- 1. Light / Dark Mode Toggle ----------

const body = document.querySelector("body");
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "light mode";
    } else {
      themeToggleBtn.textContent = "dark mode";
    }
  });
}


// ---------- 2. Random Fact Generator ----------

const facts = [
  "has strong opinions about which Toronto buffet is worth the price of admission.",
  "has rewatched the same three movies more times than he'd like to admit.",
  "owns a mechanical keyboard that is louder than it needs to be.",
  "has never finished an assignment before 11pm. not once. it's a streak now.",
  "can hear the difference between two microphones but can't find his own keys.",
  "has more reviews on Letterboxd than bullet points on his resume."
];

const factBtn = document.getElementById("fact-btn");
const factDisplay = document.getElementById("fact-display");

if (factBtn && factDisplay) {
  factBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
  });
}


// ---------- 3. Personalized Greeting ----------

const nameInput = document.getElementById("name-input");
const greetBtn = document.getElementById("greet-btn");
const greetingDisplay = document.getElementById("greeting-display");

if (greetBtn && greetingDisplay && nameInput) {
  greetBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      greetingDisplay.textContent = "type a name first.";
      return;
    }

    greetingDisplay.textContent = "hey " + name + ". welcome to the totally accurate guide.";
  });

  // let visitors hit enter instead of clicking the button
  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      greetBtn.click();
    }
  });
}
