let yourUserName = null;
let toggleMessageTarget = null;
let hour = null;
let userName = null;
let divScroll = null;

function insertUsername () {
    yourUserName = prompt("Por favor, insira seu nome de usuário, para que possamos logo ingressar você em uma conversa! ♥(ˆ⌣ˆԅ)");
}

/* const promise2 = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
promise.then(showMessages); */

function handleLogin () {
    yourUserName = null;
    while ((yourUserName === null) || (yourUserName === undefined) || (yourUserName === '')) {
        insertUsername();
    }
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/uol/participants", {name: yourUserName});
    promise.then(showMessages);
    promise.catch(handleLogin);
}

function handleLogOff () {
    alert("Problemas ao se conecatar ao servidor. Redirecionando ao login, novamente.");
    window.location.reload();
}

function showMessages() {
    
    setInterval(() => {
        const promise1 = axios.get("https://mock-api.driven.com.br/api/v4/uol/messages");
        promise1.then((response) => {
            document.querySelector(".message-divs").innerHTML = '';
            response.data.forEach((messages) => {
                console.log(messages);
                showEverything(messages);
            });
        });
    }, 5000);


    setInterval(() => {
        const promise2 = axios.post("https://mock-api.driven.com.br/api/v4/uol/status", {name: yourUserName});
        promise2.catch(handleLogOff);
    }, 3000);
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

    const lastMessage = document.querySelector(".message-divs").lastElementChild;
    lastMessage.scrollIntoView(); 
    
}



function sendMessage () {

    let myMessage = document.querySelector(".text").value;
    let message = document.querySelector(".message-divs");
    if (toggleMessageTarget === "Public") {
        hour = getMessageTime();
        message.innerHTML+= `
        
        <div class="public-message" data-identifier="message">
            <p class="message-container">
                <div>${hour}</div>
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




handleLogin();
/* sendMessage(); */