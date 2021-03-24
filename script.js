let input = document.getElementById("input");
let lista = document.getElementById("lista");

let filtro = document.getElementById("iconeFiltro");
let tarefas = document.getElementsByClassName("tarefas");

filtro.style.opacity = "0.5";

// Verificar se quando botão é clicado input está vazio
function tarefaAdicionada() {
    if ((input.value != "") && (input.value != " ")) {
        criarTarefa();
    }
}

// Criando tarefa
function criarTarefa() {
    lista.innerHTML += 
        `<div class="tarefaContainer">
            <li class="tarefas" onclick="riscarTarefas(this)">
                ${input.value}
            </li>
            <div class="lixeira" onclick="excluirTarefa(this)">
                <img src="./assets/bin.png" alt="Lixeira" >
            </div>
        </div>`
    ;

    input.value = "";
}

// Riscando tarefa
function riscarTarefas(elemento) {
    if (elemento.style.textDecoration === "line-through"){
        elemento.style.textDecoration = "none";
        elemento.style.listStyleImage = "url(./assets/bullet.png)";
    } else {
        elemento.style.textDecoration = "line-through";
        elemento.style.listStyleImage = "url(./assets/check.png)";
        ocultarTarefaComFiltro(tarefas);
    }
}

function ocultarTarefaComFiltro(vetor) {
    if (filtro.style.opacity == "1") {
        varrerVetorFiltrar(vetor);
    }
}

// Excluindo tarefa
function excluirTarefa(elemento) {
    elemento.parentNode.innerHTML = "";
}

// Limpar tudo
function limparTudo() {
    lista.innerHTML = "";
}

// Filtrar
function filtrar() {
    ativarDesativar(filtro, tarefas);
}

function ativarDesativar(filtro, elemento) {
    if (filtro.style.opacity == "1") {

        filtro.style.opacity = "0.5";
        varrerVetorMostrar(elemento);

    } else if (filtro.style.opacity == "0.5") {

        filtro.style.opacity = "1";
        varrerVetorFiltrar(elemento);
    }
}

function varrerVetorFiltrar(vetor) {
    for (var item of vetor) {
        filtrarItens(item);
    }
}

function filtrarItens(elemento) {
    if (elemento.style.textDecoration === "line-through") {
        elemento.parentNode.style.display = "none";
    }
}

function varrerVetorMostrar(vetor) {
    for (var item of vetor) {
        mostrarItens(item);
    }
}

function mostrarItens(elemento) {
    if (elemento.parentNode.style.display === "none") {
        elemento.parentNode.style.display = "flex";
    }
}