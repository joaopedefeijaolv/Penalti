let gols = 0;
let defesas = 0;
let tentativas = 0;

const movimentos = {
  "esq-alto":  { left: "25%", top: "20px", rotate: "-25deg" },
  "esq-baixo": { left: "25%", top: "90px", rotate: "-35deg" },
  "meio":      { left: "50%", top: "55px", rotate: "0deg" },
  "dir-alto":  { left: "75%", top: "20px", rotate: "25deg" },
  "dir-baixo": { left: "75%", top: "90px", rotate: "35deg" }
};

function chutar(direcaoJogador) {
  const goleiro = document.getElementById("goleiro");
  const resultado = document.getElementById("resultado");

  const direcoes = Object.keys(movimentos);
  const direcaoGoleiro = direcoes[Math.floor(Math.random() * direcoes.length)];

  tentativas++;

  const mov = movimentos[direcaoGoleiro];
  goleiro.style.left = mov.left;
  goleiro.style.top = mov.top;
  goleiro.style.transform = `translateX(-50%) rotate(${mov.rotate})`;

  if (direcaoJogador === direcaoGoleiro) {
    resultado.innerText = "🧤 DEFESA!";
    defesas++;
  } else {
    resultado.innerText = "⚽ GOOOOOL!";
    gols++;
  }

  document.getElementById("gols").innerText = gols;
  document.getElementById("defesas").innerText = defesas;
  document.getElementById("tentativas").innerText = tentativas;
}
