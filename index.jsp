<!DOCTYPE html>
<html>
<head>
    <title>Mini Chat</title>
    <script src="js/chat.js"></script>
    <style>
        #chat-box { border: 1px solid #ccc; height: 300px; overflow-y: scroll; padding: 10px; }
        #input-box { width: 80%; }
        #send-btn { width: 15%; }
    </style>
</head>
<body>
    <h2>Mini Chat Widget</h2>
    <div id="chat-box"></div>
    <input type="text" id="input-box" placeholder="Type message..." />
    <button id="send-btn">Send</button>
</body>
</html>
