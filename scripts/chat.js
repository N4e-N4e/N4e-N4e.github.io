const CHAT_ENDPOINT = window.QUARTO_CHAT_ENDPOINT || 'https://backend-site-lifv.onrender.com/chat';

const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

if (chatWindow && chatInput && chatSend) {

  function appendMessage(role, text) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('message');
    wrapper.classList.add(role === 'user' ? 'user-message' : 'assistant-message');

    const label = document.createElement('strong');
    label.textContent = role === 'user' ? 'You: ' : 'Gemini: ';

    const body = document.createElement('span');
    body.textContent = text;

    wrapper.appendChild(label);
    wrapper.appendChild(body);
    chatWindow.appendChild(wrapper);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return wrapper;
  }

  async function sendMessage() {
    const prompt = chatInput.value.trim();
    if (!prompt) return;

    appendMessage('user', prompt);
    chatInput.value = '';

    // Show typing indicator while waiting for backend response
    const loadingNode = appendMessage('assistant', 'typing...');

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt })
      });

      const data = await response.json();
      loadingNode.remove();

      if (data.reply) {
        appendMessage('assistant', data.reply);
      } else if (data.error) {
        appendMessage('assistant', `Error: ${data.error}`);
      } else {
        appendMessage('assistant', 'No response returned by the backend.');
      }

    } catch (error) {
      console.error(error);
      loadingNode.remove();
      appendMessage('assistant', 'Error fetching results from the backend.');
    }
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
  });
}
