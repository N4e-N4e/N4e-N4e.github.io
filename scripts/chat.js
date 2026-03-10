// Define the backend endpoint used by the embedded assistant.
// CUSTOMIZE: replace the fallback URL if the deployed backend moves.
const CHAT_ENDPOINT = window.QUARTO_CHAT_ENDPOINT || 'https://backend-site-lifv.onrender.com/chat';

// Resolve the core chat elements on the AI Assistant page.
const chatWindow = document.getElementById('chat-window');
// Resolve the chat text input element.
const chatInput = document.getElementById('chat-input');
// Resolve the send button element.
const chatSend = document.getElementById('chat-send');

// Exit early when the assistant page is not active.
if (chatWindow && chatInput && chatSend) {
  // Create a safe message element without using innerHTML for user text.
  function appendMessage(role, text) {
    // Create the outer message container.
    const wrapper = document.createElement('div');
    // Apply the shared message class.
    wrapper.classList.add('message');
    // Apply the role-specific style class.
    wrapper.classList.add(role === 'user' ? 'user-message' : 'assistant-message');

    // Create a bold label for the speaker name.
    const label = document.createElement('strong');
    // Set the speaker label text.
    label.textContent = role === 'user' ? 'You: ' : 'Assistant: ';

    // Create a span for the message text.
    const body = document.createElement('span');
    // Set the message text safely.
    body.textContent = text;

    // Assemble the message element.
    wrapper.appendChild(label);
    // Assemble the message element.
    wrapper.appendChild(body);
    // Add the new message to the transcript.
    chatWindow.appendChild(wrapper);
    // Keep the latest message visible.
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Return the new message node for later updates when needed.
    return wrapper;
  }

  // Send the current prompt to the backend and render the response.
  async function sendMessage() {
    // Read the current prompt text and trim extra whitespace.
    const prompt = chatInput.value.trim();

    // Stop when no prompt was entered.
    if (!prompt) {
      return;
    }

    // Render the user prompt in the transcript.
    appendMessage('user', prompt);
    // Clear the input after sending.
    chatInput.value = '';
    // Render a temporary typing indicator.
    const loadingNode = appendMessage('assistant', 'typing...');

    try {
      // Post the prompt payload to the backend endpoint.
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt })
      });

      // Parse the JSON response from the backend.
      const data = await response.json();
      // Remove the temporary typing indicator.
      loadingNode.remove();

      // Render the assistant reply when present.
      if (data.reply) {
        appendMessage('assistant', data.reply);
      }
      // Render the error text returned by the backend when present.
      else if (data.error) {
        appendMessage('assistant', `Error: ${data.error}`);
      }
      // Render a fallback response when no expected field exists.
      else {
        appendMessage('assistant', 'No response returned by the backend.');
      }
    } catch (error) {
      // Log the network error for browser debugging.
      console.error(error);
      // Remove the temporary typing indicator.
      loadingNode.remove();
      // Render a user-visible fallback error message.
      appendMessage('assistant', 'Error fetching results from the backend.');
    }
  }

  // Trigger a send action when the button is clicked.
  chatSend.addEventListener('click', sendMessage);
  // Trigger a send action when the Enter key is pressed.
  chatInput.addEventListener('keypress', (event) => {
    // Check whether the pressed key is Enter.
    if (event.key === 'Enter') {
      // Send the current message.
      sendMessage();
    }
  });
}
