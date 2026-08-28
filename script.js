// ========================================
// 🧪 TEST MODE — 1 MINUTE
// ========================================

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const lock = document.getElementById("lock");
const lockedMessage = document.getElementById("lockedMessage");
const bottomMessage = document.getElementById("bottomMessage");
const celebration = document.getElementById("celebration");

// 1 minute from when the page loads
const targetTime = new Date(Date.now() + 60 * 1000);

let unlocked = false;

function updateCountdown() {

    const now = new Date();
    const difference = targetTime.getTime() - now.getTime();

    if (difference <= 0) {

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        unlockSurprise();
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}


// ========================================
// 🔓 UNLOCK SURPRISE
// ========================================

function unlockSurprise() {

    if (unlocked) return;

    unlocked = true;

    // Unlock the box
    lock.textContent = "🔓";

    lockedMessage.innerHTML = `
        <h2>✨ It's time.</h2>
        <p>Your surprise is finally unlocked ❤️</p>
    `;

    bottomMessage.textContent =
        "The surprise is unlocked. ❤️";

    // FORCE THE CELEBRATION TO SHOW
    celebration.classList.remove("hidden");
    celebration.style.display = "flex";
    celebration.style.opacity = "1";
    celebration.style.visibility = "visible";

    // Start hearts/confetti
    startCelebration();
}
}


// ========================================
// 🎉 CELEBRATION
// ========================================

function startCelebration() {

    for (let i = 0; i < 80; i++) {

        const piece = document.createElement("div");

        piece.textContent =
            Math.random() > 0.5 ? "✨" : "❤️";

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize =
            (15 + Math.random() * 20) + "px";
        piece.style.zIndex = "9999";
        piece.style.pointerEvents = "none";

        document.body.appendChild(piece);

        const duration =
            2000 + Math.random() * 3000;

        piece.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            piece.remove();
        }, duration);
    }
}


// ========================================
// ⏳ START
// ========================================

updateCountdown();

const timer = setInterval(() => {

    if (unlocked) {
        clearInterval(timer);
        return;
    }

    updateCountdown();

}, 1000);
