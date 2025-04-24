
const questions = [
  {
    question: "Qual o seu clima ideal para um momento íntimo?",
    answers: ["Luzes apagadas e silêncio absoluto", "Aromas envolventes e música suave", "Espontâneo, em qualquer lugar!"]
  },
  {
    question: "Você já usou algum acessório para estimular sua libido?",
    answers: ["Nunca, mas tenho curiosidade", "Já experimentei e adorei", "Ainda não, acho desnecessário"]
  },
  {
    question: "Você se considera confortável explorando o seu corpo?",
    answers: ["Sim, adoro me conhecer", "Estou começando a descobrir isso", "Ainda me sinto tímido(a)"]
  },
  {
    question: "Você já experimentou um gel com efeito de calor ou frescor?",
    answers: ["Não, mas fiquei curioso(a)", "Sim, e foi uma surpresa boa", "Não vejo necessidade"]
  },
  {
    question: "Você toparia explorar novas sensações com os olhos vendados?",
    answers: ["Claro, adoro novidades", "Talvez… dependendo da vibe", "Acho desconfortável"]
  },
  {
    question: "Qual dessas frases mais combina com você?",
    answers: ["O toque transforma.", "Curiosa(o) por natureza.", "Prefiro o tradicional."]
  }
];

const products = [
  "Vibradores",
  "Lubrificantes",
  "Kits românticos",
  "Géis com efeito quente ou frio",
  "Lingeries sensuais",
  "Óleos corporais com feromônio"
];

let current = 0;
let scores = [0, 0, 0];
let quizEl = document.getElementById("quiz");
let resultEl = document.getElementById("result");
let startBtn = document.getElementById("startBtn");

function startQuiz() {
  startBtn.style.display = "none";
  scores = [0, 0, 0];
  current = 0;
  shuffle(questions);
  showQuestion();
}

function showQuestion() {
  if (current >= 3) {
    showResult();
    return;
  }

  const q = questions[current];
  quizEl.innerHTML = `<h2>${q.question}</h2>` +
    q.answers.map((ans, idx) =>
      `<button onclick="answer(${idx})">${ans}</button>`
    ).join("<br><br>");
}

function answer(i) {
  scores[i]++;
  current++;
  showQuestion();
}

function showResult() {
  let maxIndex = scores.indexOf(Math.max(...scores));
  let recommended = products[maxIndex % products.length];
  quizEl.innerHTML = "";
  resultEl.innerHTML = `<h2>Recomendamos: ${recommended} 💕</h2>`;
  resultEl.classList.remove("hidden");
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

startBtn.addEventListener("click", startQuiz);
