let elemNoname = document.getElementById("noname");
console.log(elemNoname);
let elemName = document.getElementById("name");

let nameValue = localStorage.getItem("name");
console.log("nameValue", nameValue);

// Verifica se o valor "name" existe na localStorage
if (nameValue) {
    elemNoname.style.display = "none"; // Esconde o formulário
    elemName.innerText = "Olá " + nameValue; // Exibe o nome na tela
} else {
    elemName.innerText = ""; // Caso não tenha nome, não exibe nada
}

// Função para adicionar nome na localStorage
function addName() {
    console.log("addName");
    let cxaName = document.getElementById("cxaName");
    let value = cxaName.value;

    if (value) {
        localStorage.setItem("name", value); // Armazena o nome na localStorage
        elemNoname.style.display = "none"; // Esconde o formulário
        elemName.innerText = "Olá " + value; // Exibe o nome que foi inserido
    }
}
