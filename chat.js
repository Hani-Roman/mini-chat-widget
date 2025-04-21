window.onload = function () {
    const ws = new WebSocket("ws://" + window.location.host + "/mini-chat/chat");
    const input = document.getElementById("input-box");
    const sendBtn = document.getElementById("send-btn");
    const chatBox = document.getElementById("chat-box");

    ws.onmessage = function (event) {
        const message = document.createElement("div");
        message.textContent = event.data;
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    sendBtn.onclick = function () {
        if (input.value.trim() !== "") {
            ws.send(input.value);
            input.value = "";
        }
    };

    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });
};
