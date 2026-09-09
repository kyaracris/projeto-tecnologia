// =========================================
// DADOS DOS PROJETOS
// =========================================

const projetos = {
    robotica: {
        titulo: "Robótica",
        texto: "A robótica reúne programação, eletrônica e mecânica para criar máquinas capazes de realizar tarefas de forma automatizada.",
        itens: [
            "Uso de sensores",
            "Controle de motores",
            "Programação de robôs",
            "Automação de tarefas"
        ]
    },

    arduino: {
        titulo: "Arduino",
        texto: "O Arduino é uma plataforma eletrônica muito utilizada em projetos de tecnologia, automação e prototipagem.",
        itens: [
            "Utilização de sensores",
            "Controle de LEDs e motores",
            "Programação",
            "Criação de projetos automatizados"
        ]
    },

    matematica: {
        titulo: "Matemática",
        texto: "A matemática possui grande importância na tecnologia, sendo utilizada em cálculos, programação, lógica e desenvolvimento de soluções.",
        itens: [
            "Raciocínio lógico",
            "Cálculos",
            "Geometria",
            "Aplicações na programação"
        ]
    }
};


// =========================================
// CRIAÇÃO DA CAIXA DE DETALHES
// =========================================

const modal = document.createElement("div");

modal.classList.add("modal");

modal.innerHTML = `
    <div class="modal-conteudo">

        <button class="fechar">&times;</button>

        <h2 id="modalTitulo"></h2>

        <p id="modalTexto"></p>

        <h3>Principais características:</h3>

        <ul id="modalLista"></ul>

    </div>
`;

document.body.appendChild(modal);


// =========================================
// ELEMENTOS DA CAIXA
// =========================================

const modalTitulo = document.getElementById("modalTitulo");
const modalTexto = document.getElementById("modalTexto");
const modalLista = document.getElementById("modalLista");
const botaoFechar = document.querySelector(".fechar");


// =========================================
// BOTÕES "VER PROJETO"
// =========================================

const botoes = document.querySelectorAll(".botao");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function(event) {

        event.preventDefault();

        const nomeProjeto = botao.dataset.projeto;

        const projeto = projetos[nomeProjeto];

        if (!projeto) {
            return;
        }

        // Coloca o título
        modalTitulo.textContent = projeto.titulo;

        // Coloca o texto
        modalTexto.textContent = projeto.texto;

        // Limpa a lista
        modalLista.innerHTML = "";

        // Cria os itens da lista
        projeto.itens.forEach(function(item) {

            const li = document.createElement("li");

            li.textContent = item;

            modalLista.appendChild(li);

        });

        // Abre a caixa
        modal.classList.add("mostrar");

    });

});


// =========================================
// FECHAR PELO X
// =========================================

botaoFechar.addEventListener("click", function() {

    modal.classList.remove("mostrar");

});


// =========================================
// FECHAR CLICANDO FORA DA CAIXA
// =========================================

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.classList.remove("mostrar");

    }

});


// =========================================
// FECHAR COM A TECLA ESC
// =========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        modal.classList.remove("mostrar");

    }

});