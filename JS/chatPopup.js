const chatPopup = document.getElementById("chatForm");
const chatMessage = document.querySelector(".message-textarea");
const chatMessageSection = document.querySelector(".chat-message-section");
const sendChatButton = document.querySelector(".sendChatButton");
const chatValidationMessage = document.querySelector(".chat-validation-message");
const chatError = document.querySelector(".chat-form-error");

function toggleChat() {
    if (chatPopup.style.display === "none") {
        chatPopup.style.display = "block";
    } else {
        chatPopup.style.display = "none";
    }
}
  
function closeChat() {
    chatPopup.style.display = "none";
}


function validateChat(event) {
    event.preventDefault();

    var formIsValid = true;

    if (checkLength(chatMessage.value, 1) === true) {
        chatError.style.display = "none";
    } else {
        chatError.style.display = "block";
        formIsValid = false;
    }

    if (formIsValid === true) {
        chatMessageSection.style.display = "none";
        sendChatButton.style.display = "none";
        chatValidationMessage.style.display = "block";
        chatError.style.display = "none";
    }

}

chatPopup.addEventListener("submit", validateChat);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}