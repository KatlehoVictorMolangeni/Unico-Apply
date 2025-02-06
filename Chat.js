// script.js

// Select DOM elements
const chatBody = document.getElementById("chat-body");
const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Predefined responses
const responses = {
  "hello": "Hi there! How can I assist you with Unico-Apply?",
  "hey": "Hi there! How can I assist you with Unico-Apply?",
  "hola": "Hi there! How can I assist you with Unico-Apply?",
  "hi": "Hi there! How can I assist you with Unico-Apply?",
  "what is unico-apply?": "Uni-coApply helps Matric candidates apply to universities and colleges in South Africa. How can I help you further?",
  "how does it work?": "You provide your details, and we handle the application process for you. Would you like to register or know more?",
  "fees": "Our service fees vary depending on the institutions you're applying to. Please provide more details for specific fee information.",
  "thank you": "You're welcome! Let me know if there's anything else you need.",
  "bye": "Goodbye! Have a great day!"
};

// Default response
const defaultResponse = "I'm sorry, I didn't understand that. Could you rephrase your question?";

// Load chat history from localStorage
let chatHistory = JSON.parse(localStorage.getItem("chatMessages")) || [];
renderChatMessages();

// Toggle chat visibility
function toggleChat() {
  chatBody.style.display = chatBody.style.display === "none" || chatBody.style.display === "" ? "flex" : "none";
}

// Send a message
sendButton.addEventListener("click", () => {
  const userMessage = messageInput.value.trim().toLowerCase(); // Normalize input
  if (userMessage) {
    // Add user's message to chat
    addMessage("user", userMessage);
    messageInput.value = ""; // Clear input

    // Generate bot's response
    const botResponse = responses[userMessage] || defaultResponse;
    setTimeout(() => addMessage("bot", botResponse), 500); // Simulate typing delay
  }
});

// Add a message to the chat and update localStorage
function addMessage(sender, text) {
  const message = { sender, text };
  chatHistory.push(message);
  localStorage.setItem("chatMessages", JSON.stringify(chatHistory));
  renderChatMessages();
}

// Render chat messages
function renderChatMessages() {
  chatMessages.innerHTML = "";
  chatHistory.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", msg.sender === "user" ? "user-message" : "bot-message");
    messageDiv.textContent = msg.text;
    chatMessages.appendChild(messageDiv);
  });
  chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll
}



document.querySelectorAll('.faq-item h3').forEach(item =>{
  item.addEventListener('click', ()=>{
      const parent = item.parentElement;
      parent.classList.toggle('active');
  });
});



const searchInput = document.getElementById('search');
const faqItems = document.querySelectorAll('.faq-item');

searchInput.addEventListener('input', (e) =>{




  const searchText = e.target.value.toLowerCase();
  faqItems.forEach((item) =>{
      const question = item.querySelector('h3').innerText.toLowerCase();
      const answer = item.querySelector('p').innerText.toLowerCase();

      if(question.includes(searchText82) || answer.includes(searchText)){
          item.style.display = 'block';
      }else{
          item.style.display = 'none';
      }
  });

});