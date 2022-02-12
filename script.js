let yourUserName = null;
let toggleMessageTarget = null;
let hour = null;
let userName = null;

function insertUsername () {
    yourUserName = prompt("Por favor, insira seu nome de usuário, para que possamos logo ingressar você em uma conversa! ♥(ˆ⌣ˆԅ)");
}

const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/participants");
promise.then(processResponse);

function processResponse(response) {
    
    const insertChat = document.querySelector(".chat-box");
    insertChat.innerHTML += `
    
    <div>${TBD}</div>

    `;

}

function sendMessage () {

    let myMessage = document.querySelector(".text").value;
    let message = document.querySelector(".message-divs");
    if (toggleMessageTarget === "Public") {
        hour = getMessageTime();
        message.innerHTML+= `
        
        <div class="public-message" data-identifier="message">
            <p class="message-container">
                <time>${hour}</time>
                <strong class="user-name">${userName}</strong>
            </p>
        </div>

        `
        const textInput = document.querySelector(".text");
        console.log(textInput);
        textInput.value = "";
    } else if (toggleMessageTarget === "Private") {
        hour = getMessageTime();
        message.innerHTML += `
        
        <div class="private-message" data-identifier="message">
            <p class="message-container">
                <time>${hour}</time>
                <strong class="user-name">${userName}</strong>
            </p>
        </div>
        
        `
        const textInput = document.querySelector(".text");
        textInput.value = "";
    }

}

function getMessageTime () {

}





insertUsername();