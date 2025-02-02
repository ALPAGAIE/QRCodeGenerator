window.onload = function() {
    let QRCode = document.getElementById("QRCode");

    document.getElementById("button").addEventListener("click", displayCode);

    document.getElementById("inputText").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            displayCode();
        }
    });

    function displayCode() {
        let inputText = document.getElementById("inputText").value.trim(); 
    
        if(inputText == '') {
            QRCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Nothing haha";
            return;
        }
    
        QRCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + inputText;
    }
};

    