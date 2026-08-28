// ======================================
// REAL BIRTHDAY COUNTDOWN
// September 3, 2026 — 00:00 AM IST
// ======================================

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const lock = document.getElementById("lock");
const lockedMessage = document.getElementById("lockedMessage");
const bottomMessage = document.getElementById("bottomMessage");

const celebration =
    document.getElementById("celebration");

let unlocked = false;


// ======================================
// BIRTHDAY TIME
// ======================================

const targetTime =      
    new Date(""August 28, 2026 08:08:00"");

// ======================================
// COUNTDOWN
// ======================================

function updateCountdown() {

    const now = new Date("August 28, 2026 08:08:00");

    const difference =
        targetTime.getTime() - now.getTime();


    if (difference <= 0) {

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        unlockSurprise();

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    daysEl.textContent =
        String(days).padStart(2, "0");

    hoursEl.textContent =
        String(hours).padStart(2, "0");

    minutesEl.textContent =
        String(minutes).padStart(2, "0");

    secondsEl.textContent =
        String(seconds).padStart(2, "0");
}


// ======================================
// UNLOCK
// ======================================

function unlockSurprise() {

    if (unlocked) return;

    unlocked = true;

    lock.textContent = "🔓";


    lockedMessage.innerHTML = `

        <h2>✨ You made it.</h2>

        <p>
            Okay... you actually waited. 😭❤️
        </p>

        <span>
            But this isn't the whole surprise yet...
        </span>

    `;


    bottomMessage.textContent =
        "This is only the beginning. 🎁";


    startCelebration();
}


// ======================================
// CELEBRATION
// ======================================

function startCelebration() {

    celebration.classList.remove("hidden");

    createParticles();
}


// ======================================
// FLOATING HEARTS & SPARKLES
// ======================================

function createParticles() {

    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "✨",
        "♥",
        "♡"
    ];


    for (let i = 0; i < 90; i++) {

        const particle =
            document.createElement("div");


        particle.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        particle.style.position =
            "fixed";

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            "-40px";

        particle.style.fontSize =
            (12 + Math.random() * 25) + "px";

        particle.style.opacity =
            0.4 + Math.random() * 0.6;

        particle.style.zIndex =
            "2000";

        particle.style.pointerEvents =
            "none";


        const duration =
            3 + Math.random() * 5;


        particle.style.transition =
            `transform ${duration}s linear,
             opacity ${duration}s linear`;


        document.body.appendChild(
            particle
        );


        setTimeout(() => {

            particle.style.transform =
                `translateY(110vh)
                 rotate(${Math.random() * 360}deg)`;

            particle.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            particle.remove();

        }, duration * 1000 + 500);

    }

}


// ======================================
// START TIMER
// ======================================

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
