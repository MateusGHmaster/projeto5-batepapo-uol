let userName = null;

function insertUsername () {
    userName = prompt("Por favor, insira seu nome de usuário, para que possamos logo ingressar você em uma conversa! ♥(ˆ⌣ˆԅ)");
}

const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants");
promise.then(processResponse);

function processResponse(response) {
    console.log(response);
} 











insertUsername();