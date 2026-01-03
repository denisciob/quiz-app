const TEST_TIME_SECONDS = 120;
const PASS_PERCENTAGE = 75;
const QUESTIONS_PER_TEST = 5;

/*** USERS ***/
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;

/*** QUESTION BANK ***/
const questionBank = [
  {
    question: "Unde merg Denis si Adriana in septembrie?",
    options: ["Bangkok", "Bangpusi", "Bangdic", "Bacau"],
    correctIndex: 3
  },
  {
    question: "Cati ani are Alex Chirvase Intai?",
    options: ["47", "105 d.Hr.", "105 i.Hr.", "12cm"],
    correctIndex: 3
  },
  {
    question: "Cine sunt fratii Luca?",
    options: ["Luca fratii", "Petru si Pavel", "Ue cacatule", "Rusu si Radu"],
    correctIndex: 2
  },
  {
    question: "Cat de gros este penisul lui Matei Negura",
    options: ["Doza de bere", "Balot", "Dr.Max", "Plapuma cat preputul"],
    correctIndex: 1
  },
  {
    question: "Cum o cheama pe pisica Adrianei?",
    options: ["Mircea", "John Wick", "Cacatule", "Matei si Luca"],
    correctIndex: 3
  },
  {
    question: "Ce se caca Paula la micul dejun?",
    options: ["Lilieci aldente", "Batman", "Rulmenti", "Scrot prajit"],
    correctIndex: 0
  },
  {
    question: "Care este cea mai lunga parte a corpului uman unisex?",
    options: ["Irisul", "Preputul", "Plapuma", "Partia"],
    correctIndex: 1
  },
  {
    question: "Cine este autorul operei Punguta cu doi bani?",
    options: ["Paula si Fronea", "Cosmin Napoleon Games", "Ion Creanga", "Kanye West"],
    correctIndex: 2
  }
  // poti adauga ORICATE intrebari aici
];

/*** ELEMENTS ***/
const loginSection = document.getElementById("login-section");
const registerSection = document.getElementById("register-section");
const startSection = document.getElementById("start-section"); // NEW
const quizSection = document.getElementById("quiz-section");

const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const gridEl = document.getElementById("question-grid");
const welcomeEl = document.getElementById("welcome");

/*** LOGIN / REGISTER ***/
function showRegister() {
  loginSection.style.display = "none";
  registerSection.style.display = "block";
}

function showLogin() {
  registerSection.style.display = "none";
  loginSection.style.display = "block";
}

function register() {
  const username = regUsername().value;

  if (users.find(u => u.username === username)) {
    alert("Username already exists");
    return;
  }

  const user = {
    username,
    password: regPassword().value,
    firstName: regFirst().value,
    lastName: regLast().value,
    birthDate: regBirth().value,
    history: []
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  loginUser(user);
}

function login() {
  const user = users.find(
    u =>
      u.username === loginUsername().value &&
      u.password === loginPassword().value
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  loginUser(user);
}

function loginUser(user) {
  currentUser = user;
  localStorage.setItem("loggedUser", user.username);

  loginSection.style.display = "none";
  registerSection.style.display = "none";
  startSection.style.display = "block"; // NEW: aratam START
  quizSection.style.display = "none";   // NEW: nu pornim quiz-ul

  welcomeEl.textContent = `Welcome, ${user.firstName}`;
}

function logout() {
  localStorage.removeItem("loggedUser");
  location.reload();
}

/*** INPUT HELPERS ***/
const loginUsername = () => document.getElementById("login-username");
const loginPassword = () => document.getElementById("login-password");
const regUsername = () => document.getElementById("reg-username");
const regPassword = () => document.getElementById("reg-password");
const regFirst = () => document.getElementById("reg-firstname");
const regLast = () => document.getElementById("reg-lastname");
const regBirth = () => document.getElementById("reg-birthdate");

/*** QUIZ STATE ***/
let shuffledQuestions = [];
let currentQuestion = 0;
let userAnswers = [];
let timeLeft;
let timerInterval;
let answered = [];

/*** START TEST (NEW) ***/
function startTest() {
  startSection.style.display = "none";
  quizSection.style.display = "block";
  startQuiz();
}

/*** QUIZ LOGIC ***/
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function startQuiz() {
  shuffledQuestions = shuffle([...questionBank]).slice(0, QUESTIONS_PER_TEST);
  currentQuestion = 0;
  userAnswers = [];
  answered = [];
  timeLeft = TEST_TIME_SECONDS;
  resultEl.innerHTML = "";

  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const q = shuffledQuestions[currentQuestion];
  const alreadyAnswered = answered[currentQuestion] === true;

  quizEl.innerHTML = `
    <strong>${currentQuestion + 1}. ${q.question}</strong>
    ${q.options.map((o, i) => {
      let className = "";

      if (alreadyAnswered) {
        if (i === q.correctIndex) className = "correct"; // verde
        else if (userAnswers[currentQuestion] === i) className = "wrong"; // rosu
      }

      return `
        <label class="${className}">
          <input type="radio" name="answer" value="${i}"
            ${userAnswers[currentQuestion] === i ? "checked" : ""}
            ${alreadyAnswered ? "disabled" : ""}
          >
          ${o}
        </label>
      `;
    }).join("")}
  `;

  progressEl.textContent =
    `Question ${currentQuestion + 1}/${shuffledQuestions.length}`;

  // NEXT dispare la ultima intrebare
  nextBtn.style.display =
    currentQuestion === shuffledQuestions.length - 1 ? "none" : "inline-block";
  nextBtn.disabled = !
answered[currentQuestion];
  prevBtn.style.display =
currentQuestion === 0 ? "none" : "inline-block";
  // SUBMIT apare DOAR la ultima intrebare SI daca a raspuns
  submitBtn.style.display =
    currentQuestion === shuffledQuestions.length - 1 &&
    answered[currentQuestion]
      ? "inline-block"
      : "none";

  renderGrid();
}
quizEl.addEventListener("change", e => {
  if (answered[currentQuestion]) return;
  userAnswers[currentQuestion] = Number(e.target.value);
  answered[currentQuestion] = true;
  loadQuestion();
});

nextBtn.onclick = () => {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }
};

prevBtn.onclick = () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
};

/*** GRID ***/
function renderGrid() {
  gridEl.innerHTML = "";

  shuffledQuestions.forEach((q, i) => {
    const box = document.createElement("div");
    box.textContent = i + 1;
    box.className = "q-box";

    if (userAnswers[i] === undefined) box.classList.add("q-unanswered");
    else if (userAnswers[i] === q.correctIndex) box.classList.add("q-correct");
    else box.classList.add("q-wrong");

    if (i === currentQuestion) box.classList.add("q-current");

    box.onclick = () => {
      currentQuestion = i;
      loadQuestion();
    };

    gridEl.appendChild(box);
  });
}

/*** TIMER ***/
function startTimer() {
  timerEl.textContent = formatTime();
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = formatTime();
    if (timeLeft <= 0) submitTest(); // auto submit
  }, 1000);
}

function formatTime() {
  return `Time: ${String(Math.floor(timeLeft / 60)).padStart(2, "0")}:${String(
    timeLeft % 60
  ).padStart(2, "0")}`;
}

/*** SUBMIT ***/
submitBtn.onclick = submitTest;

function submitTest() {
  clearInterval(timerInterval);

  let score = 0;
  shuffledQuestions.forEach((q, i) => {
    if (userAnswers[i] === q.correctIndex) score++;
  });

  const percentage = ((score / shuffledQuestions.length) * 100).toFixed(2);
  const passed = percentage >= PASS_PERCENTAGE;

  currentUser.history.push({
    date: new Date().toLocaleString(),
    score,
    total: shuffledQuestions.length,
    percentage
  });

  users = users.map(u => (u.username === currentUser.username ? currentUser : u));
  localStorage.setItem("users", JSON.stringify(users));

  quizEl.innerHTML = "";
  gridEl.innerHTML = "";
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  resultEl.innerHTML = `
    <h2>${percentage}% - ${passed ? "PASS" : "FAIL"}</h2>
    <button id="btn-back-start"
  style="margin: 20px 0; padding: 10px 20px; cursor: pointer;">
  Back
  </button>
    <h3>History</h3>
  `;

  currentUser.history
    .sort((a, b) => b.percentage - a.percentage)
    .forEach(h => {
      resultEl.innerHTML += `<p>${h.date} — ${h.percentage}%</p>`;
    });
   document.getElementById("btn-back-start").onclick = () => {
    quizSection.style.display = "none";
    startSection.style.display = "block";
   }
}

/*** AUTO LOGIN ***/
const logged = localStorage.getItem("loggedUser");
if (logged) {
  const user = users.find(u => u.username === logged);
  if (user) loginUser(user);
}