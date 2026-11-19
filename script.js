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


// ---------- 4. The Watchlist (dynamic list + drag to reorder) ----------

// application state: an array of objects, one per entry
let movies = [];
let nextMovieId = 1;

// tracks which entry is currently being dragged, by id
let draggedId = null;

const watchlistForm = document.getElementById("watchlist-form");
const watchlistInput = document.getElementById("watchlist-input");
const watchlistStatus = document.getElementById("watchlist-status");
const watchlistList = document.getElementById("watchlist-list");

if (watchlistForm && watchlistInput && watchlistStatus && watchlistList) {

  // builds the <ul> from the current state of the movies array
  function renderWatchlist() {

    // clear out whatever is there and rebuild it from scratch
    watchlistList.innerHTML = "";

    if (movies.length === 0) {
      watchlistStatus.textContent = "nothing queued yet.";
      return;
    }

    const watchedCount = movies.filter(function (movie) {
      return movie.watched;
    }).length;

    watchlistStatus.textContent = movies.length + " queued, " + watchedCount + " watched.";

    movies.forEach(function (movie) {
      const item = document.createElement("li");
      item.className = "watchlist-item";
      item.draggable = true;
      item.dataset.id = movie.id;

      if (movie.watched) {
        item.classList.add("watched");
      }

      const title = document.createElement("span");
      title.className = "watchlist-title";
      title.textContent = movie.title;

      const watchBtn = document.createElement("button");
      watchBtn.type = "button";
      watchBtn.className = "watchlist-btn";
      watchBtn.textContent = movie.watched ? "undo" : "watched";

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "watchlist-btn watchlist-remove";
      removeBtn.textContent = "remove";

      // mouse event: toggle watched state on click
      watchBtn.addEventListener("click", function () {
        movie.watched = !movie.watched;
        renderWatchlist();
      });

      // mouse event: remove this entry on click
      removeBtn.addEventListener("click", function () {
        movies = movies.filter(function (m) {
          return m.id !== movie.id;
        });
        renderWatchlist();
      });

      // drag-and-drop events: reorder the list by dragging an entry
      item.addEventListener("dragstart", function () {
        draggedId = movie.id;
        item.classList.add("dragging");
      });

      item.addEventListener("dragend", function () {
        item.classList.remove("dragging");
      });

      item.addEventListener("dragover", function (event) {
        // required so the element is allowed to receive a drop
        event.preventDefault();
        item.classList.add("drag-over");
      });

      item.addEventListener("dragleave", function () {
        item.classList.remove("drag-over");
      });

      item.addEventListener("drop", function (event) {
        event.preventDefault();
        item.classList.remove("drag-over");

        if (draggedId === null || draggedId === movie.id) {
          return;
        }

        const fromIndex = movies.findIndex(function (m) {
          return m.id === draggedId;
        });
        const toIndex = movies.findIndex(function (m) {
          return m.id === movie.id;
        });

        const [draggedMovie] = movies.splice(fromIndex, 1);
        movies.splice(toIndex, 0, draggedMovie);
        draggedId = null;
        renderWatchlist();
      });

      item.appendChild(title);
      item.appendChild(watchBtn);
      item.appendChild(removeBtn);
      watchlistList.appendChild(item);
    });
  }

  // form event: add a new title to the list
  watchlistForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = watchlistInput.value.trim();

    if (title === "") {
      watchlistStatus.textContent = "type a title first.";
      return;
    }

    const alreadyQueued = movies.some(function (movie) {
      return movie.title.toLowerCase() === title.toLowerCase();
    });

    if (alreadyQueued) {
      watchlistStatus.textContent = "\"" + title + "\" is already on the pile.";
      watchlistInput.value = "";
      return;
    }

    movies.push({ id: nextMovieId, title: title, watched: false });
    nextMovieId = nextMovieId + 1;

    watchlistInput.value = "";
    watchlistInput.focus();
    renderWatchlist();
  });

  renderWatchlist();
}
