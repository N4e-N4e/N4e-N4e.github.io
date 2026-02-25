<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Fraud Analysis Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: #0f172a;
    color: white;
}

header {
    padding: 25px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
}

.container {
    display: flex;
    min-height: 100vh;
}

.dashboard {
    flex: 3;
    padding: 30px;
}

.card {
    background: #1e293b;
    padding: 25px;
    margin-bottom: 25px;
    border-radius: 14px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    transition: 0.3s;
}

.card:hover {
    transform: translateY(-4px);
}

.card h2 {
    margin-top: 0;
    color: #38bdf8;
    font-size: 18px;
}

.placeholder {
    margin-top: 70px;
    text-align: center;
    color: #94a3b8;
    font-size: 15px;
}

.chatbot {
    flex: 1;
    background: #111827;
    padding: 25px;
    border-left: 3px solid #38bdf8;
    display: flex;
    flex-direction: column;
}

.chatbot h2 {
    margin-top: 0;
    color: #38bdf8;
}

.chat-window {
    flex: 1;
    background: #1f2937;
    border-radius: 12px;
    padding: 15px;
    margin-top: 15px;
    overflow-y: auto;
}

.chat-input {
    margin-top: 15px;
    display: flex;
}

.chat-input input {
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    border: none;
    outline: none;
}

.chat-input button {
    margin-left: 10px;
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    background: #38bdf8;
    color: black;
    font-weight: bold;
    cursor: pointer;
}

@media (max-width: 900px) {
    .container {
        flex-direction: column;
    }
    .chatbot {
        height: 400px;
    }
}
</style>
</head>

<body>

<header>
Fraud Analysis Dashboard
</header>

<div class="container">

<div class="dashboard">

<div class="card">
<h2>Fraud Overview Metrics</h2>
<div class="placeholder">[ KPI Metrics Placeholder ]</div>
</div>

<div class="card">
<h2>Geographic Fraud Distribution</h2>
<div class="placeholder">[ Map Visualization Placeholder ]</div>
</div>

<div class="card">
<h2>Provider Risk Score Analysis</h2>
<div class="placeholder">[ Risk Score Chart Placeholder ]</div>
</div>

<div class="card">
<h2>Claim Pattern Trends</h2>
<div class="placeholder">[ Time Series Visualization Placeholder ]</div>
</div>

</div>

<div class="chatbot">
<h2>AI Fraud Assistant</h2>

<div class="chat-window">
[ AI Chatbot Conversation Area ]
</div>

<div class="chat-input">
<input type="text" placeholder="Ask about fraud risk patterns...">
<button>Send</button>
</div>

</div>

</div>

</body>
</html>
