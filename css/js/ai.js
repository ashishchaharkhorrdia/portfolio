    // ... (JavaScript code remains the same) ...
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    chatIcon.addEventListener('click', () => {
        chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
    });

    const responses = {
"hello": ["Hello! Welcome to Chahar's portfolio. How can I assist you today?", "Hi! I'm here to help you learn about my work. Please take your time.", "Welcome! Let's talk . I'll be patient."],
"name": ["I'm Chahar's portfolio assistant. I can help you learn about my projects and skills."],
"about": ["I'm here to answer your questions about Chahar's work. Please feel free to ask anything."],
"default": ["I'm still learning. Could you please try saying that again in a different way?", "I'm not sure I understand. Can you give me more details?", "Take your time. I'm here to listen."],
"goodbye": ["Goodbye! I enjoyed talking with you. Come back anytime.", "Have a good day! I'm here if you need me.", "See you later! Don't hesitate to reach out again."],
"projects": ["Chahar has worked on various projects, including [Project 1], [Project 2], and [Project 3]. Would you like to know more about a specific project?", "You can find information about my projects in the 'Projects' section of this website."],
"skills": ["Chahar's skills include [Skill 1], [Skill 2], and [Skill 3]. Is there a specific skill you're interested in?", "My skillset includes a variety of technologies. Please specify what you want to know."],
"contact": ["You can contact Chahar via email at [your_email@example.com] or through the contact form on this website.", "Feel free to reach out using the contact information provided on the 'Contact' page."],
"resume": ["You can download Chahar's resume from the 'Resume' section of this website.", "A downloadable version of my resume is available on this site."],
"project1_details": ["Project 1 details: [Insert details here]."],
"project2_details": ["Project 2 details: [Insert details here]."],
"project3_details": ["Project 3 details: [Insert details here]."],
"skill1_details": ["Skill 1 details: [Insert details here]."],
"skill2_details": ["Skill 2 details: [Insert details here]."],
"skill3_details": ["Skill 3 details: [Insert details here]."],
"yes": ["Okay!", "Got it.", "Understood."],
"no": ["Okay, no problem.", "Alright.", "Understood."],
"repeat": ["Sure, I can repeat that. What would you like me to repeat?", "Of course, let me say that again."],
"slow_down": ["Okay, I will speak more slowly.", "I will slow down my pace.", "I will try to speak slower."],
"explain_again": ["Let me try explaining it in a different way.", "I'll give you another explanation.", "I'll rephrase that for you."],
"clear_instructions": ["Please tell me what you need, and I will do my best to provide clear instructions.", "I'm ready for your instructions. Take your time."],
"thank_you": ["You're welcome!", "My pleasure.", "I'm glad I could help."],
};

function getResponse(userText) {
userText = userText.toLowerCase();

if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey")) {
    return responses["hello"][Math.floor(Math.random() * responses["hello"].length)];
} else if (userText.includes("name")) {
    return responses["name"][0];
} else if (userText.includes("about")) {
    return responses["about"][0];
} else if (userText.includes("project")) {
    if(userText.includes("1")){
        return responses["project1_details"][0];
    } else if (userText.includes("2")){
        return responses["project2_details"][0];
    } else if (userText.includes("3")){
        return responses["project3_details"][0];
    } else {
        return responses["projects"][Math.floor(Math.random() * responses["projects"].length)];
    }
} else if (userText.includes("skill")) {
    if(userText.includes("1")){
        return responses["skill1_details"][0];
    } else if (userText.includes("2")){
        return responses["skill2_details"][0];
    } else if (userText.includes("3")){
        return responses["skill3_details"][0];
    } else {
        return responses["skills"][Math.floor(Math.random() * responses["skills"].length)];
    }
} else if (userText.includes("contact")) {
    return responses["contact"][Math.floor(Math.random() * responses["contact"].length)];
} else if (userText.includes("resume")) {
    return responses["resume"][Math.floor(Math.random() * responses["resume"].length)];
} else if (userText.includes("bye") || userText.includes("goodbye")) {
    return responses["goodbye"][Math.floor(Math.random() * responses["goodbye"].length)];
} else if (userText.includes("yes") || userText.includes("okay") || userText.includes("ok")) {
    return responses["yes"][Math.floor(Math.random() * responses["yes"].length)];
} else if (userText.includes("no")) {
    return responses["no"][Math.floor(Math.random() * responses["no"].length)];
} else if (userText.includes("repeat")) {
    return responses["repeat"][Math.floor(Math.random() * responses["repeat"].length)];
} else if (userText.includes("slow down")) {
    return responses["slow_down"][Math.floor(Math.random() * responses["slow_down"].length)];
} else if (userText.includes("explain again")) {
    return responses["explain_again"][Math.floor(Math.random() * responses["explain_again"].length)];
} else if (userText.includes("clear instructions")) {
    return responses["clear_instructions"][0];
} else if (userText.includes("thank you")) {
    return responses["thank_you"][Math.floor(Math.random() * responses["thank_you"].length)];
} else {
    return responses["default"][Math.floor(Math.random() * responses["default"].length)];
}
}


    chatSend.addEventListener('click', () => {
        const userText = chatInput.value;
        if (userText.trim() !== '') {
            displayMessage(userText, 'user');
            const botResponse = getResponse(userText);
            setTimeout(() => displayMessage(botResponse, 'chatbot'), 500);
            chatInput.value = '';
        }
    });

    chatInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            chatSend.click();
        }
    });

    function displayMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.classList.add(`${sender}-message`);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }