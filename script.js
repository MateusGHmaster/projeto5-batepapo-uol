let yourUserName = null;
let toggleMessageTarget = null;
let hour = null;
let userName = null;
let divScroll = null;

function insertUsername () {
    yourUserName = prompt("Por favor, insira seu nome de usuário, para que possamos logo ingressar você em uma conversa! ♥(ˆ⌣ˆԅ)");
}

const promise = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
promise.then(showMessages);

function showMessages(response) {

    response.data.forEach((messages) => {
        console.log(messages);
        showEverything(messages);
    });
    
}

function showEverything (messages) {
    const insertChat = document.querySelector(".message-divs");
    insertChat.innerHTML += `
    
    <div>
        <p class="message-style">
            &nbsp;&nbsp;<span class="span1">(${messages.time})</span> <span class="span2">${messages.from}</span> para <span class="span2">${messages.to}</span>: ${messages.text}.</br></br>
        </p>
        <style>.message-style{margin-top: 3px; font-style: normal; background-color: white; padding-top: 15px;}</style>
    </div>
    
    `;
    divScroll = document.getElementById("message-scroll");
    divScroll.scrollTop = divScroll.scrollHeight;
    /* const lastMessage = document.querySelector(".messages-divs").lastElementChild;*/
    /* lastMessage.scrollIntoView(); */
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
sendMessage();