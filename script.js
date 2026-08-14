const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    document.querySelector(".container").innerHTML = `
        <h1>💗 Cute Check</h1>

        <p class="subtitle">
            Okay... let's see how cute you actually are. 👀
        </p>

        <button onclick="startCamera()">
            📸 TAKE THE SELFIE TEST
        </button>

        <br>

        <button onclick="showQuiz()">
            📝 DO THE QUIZ INSTEAD
        </button>
    `;
});


function startCamera() {

    document.querySelector(".container").innerHTML = `
        <h1>📸 Cuteness Camera</h1>

        <video id="camera" autoplay playsinline></video>

        <br>

        <button onclick="takeSelfie()">
            📸 TAKE SELFIE
        </button>

        <p id="cameraStatus">
            Camera permission required 👀
        </p>
    `;

    const video = document.getElementById("camera");

    navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: "user"
        },
        audio: false
    })
    .then(function(stream) {
        video.srcObject = stream;
        window.cameraStream = stream;

        document.getElementById("cameraStatus").textContent =
            "Camera ready! 😏";
    })
    .catch(function(error) {
        document.getElementById("cameraStatus").textContent =
            "Camera permission was not allowed.";
        console.error(error);
    });
}


function takeSelfie() {

    // Stop the camera after taking the selfie
    if (window.cameraStream) {
        window.cameraStream.getTracks().forEach(track => track.stop());
    }

    document.querySelector(".container").innerHTML = `
        <h1>🔍 Analyzing...</h1>

        <p class="subtitle">
            Scanning smile... 👀<br>
            Measuring cuteness... 💗<br>
            Calculating adorableness...<br><br>
            Please wait...
        </p>
    `;

    setTimeout(function() {

        document.querySelector(".container").innerHTML = `
            <h1>🚨 RESULT 🚨</h1>

            <p class="subtitle">
                Cuteness detected:
            </p>

            <h1>∞ / 10 💗</h1>

            <p class="subtitle">
                ERROR: Cuteness level exceeds<br>
                the maximum measurable limit. 😭
            </p>

            <button onclick="location.reload()">
                🔄 TEST AGAIN
            </button>
        `;

    }, 2500);
}


function showQuiz() {

    document.querySelector(".container").innerHTML = `
        <h1>💗 Cute Check</h1>

        <p class="subtitle">
            Choose your current level of cuteness:
        </p>

        <button onclick="showResult()">🥰 Very Cute</button>
        <button onclick="showResult()">😎 Pretty Cute</button>
        <button onclick="showResult()">😭 Dangerously Cute</button>
    `;
}


function showResult() {

    document.querySelector(".container").innerHTML = `
        <h1>🔍 Scanning...</h1>

        <p class="subtitle">
            Analyzing cuteness...<br>
            Checking smile...<br>
            Calculating adorableness... 💗
        </p>
    `;

    setTimeout(function() {

        document.querySelector(".container").innerHTML = `
            <h1>🚨 RESULT 🚨</h1>

            <p class="subtitle">
                Cuteness detected:
            </p>

            <h1>∞ / 10 💗</h1>

            <p class="subtitle">
                ERROR: Cuteness level exceeds<br>
                the maximum measurable limit. 😭
            </p>

            <button onclick="location.reload()">
                CHECK AGAIN 🔄
            </button>
        `;

    }, 2000);
}