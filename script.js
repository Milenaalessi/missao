const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é o seu tipo de esporte preferido?",
        alternativas: [
            {
                texto: "Esportes físicos.",
                afirmacao: "É preciso ter um bom jogo de corpo para se impor no basquete, assim como uma perna calibrada para acertar um bom chute no futebol."
            },
            {
                texto: "Esportes mentais.",
                afirmacao: "Não basta apenas saber mover as pecinhas: é preciso ter estratégia no xadrez, a mais famosa das modalidades de esporte principalmente mentais.."
            }

        ]
    },
    {
        enunciado: "Esporte individual ou em equipe??",
        alternativas: [
            {
                texto: "Individual.",
                afirmacao: "São aqueles praticados por apenas uma pessoa, ou seja, um atleta compete com adversário individualmente."
            },
            {
                texto: "Em equipe.",
                afirmacao: "Praticados por duas ou mais pessoas em oposição à equipe adversária."
            }

        ]
    },
    {
        enunciado: "Você gosta de esportes que usam",
        alternativas: [
            {
                texto: "Pés.",
                afirmacao: 
            },
            {
                texto: "Mãos.",
                afirmacao: 
            }
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent
    mostraAlternativas();

}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () =>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta();
}
function mostraResultado() {
    caixaPerguntas.textContent = "Resumindo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "oi";
}
mostraPergunta();
