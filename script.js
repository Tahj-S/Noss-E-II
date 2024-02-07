// script.js
const userInputElement = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Use the GitHub Actions secret
const apiKey = process.env.OPENAI_API_KEY;

sendButton.addEventListener('click', async () => {
    const userMessage = userInputElement.value;
    displayUserMessage(userMessage);

    // Simulate an API call (replace with actual API later)
    const botResponse = await getBotResponse(userMessage);
    displayBotMessage(botResponse);
});

async function getBotResponse(userMessage) {
    try {
        // Replace with your actual API endpoint
        const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions';
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                prompt: userMessage,
                max_tokens: 50, // Adjust as needed
            }),
        });

        const data = await response.json();
        return data.choices[0].text;
    } catch (error) {
        console.error('Error fetching API:', error);
        return 'Oops, something went wrong. Please try again later.';
    }
}

function displayUserMessage(message) {
    // Display user message in the chat
    // (You can append it to the chat container)
}

function displayBotMessage(message) {
    // Display bot response in the chat
    // (You can append it to the chat container)
}
