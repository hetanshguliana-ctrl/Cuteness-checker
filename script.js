const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const celebration = document.getElementById("celebration");
const lock = document.getElementById("lock");
const lockedTitle = document.getElementById("locked-title");
const lockedText = document.getElementById("locked-text");


// September 3, 2026 — 12:00 AM IST
const targetTime =
    new Date("2026-09-03T00:00:00+05:30").getTime();

let finished = false;


function updateTimer() {

    const remaining = targetTime - Date.now();

    if (remaining <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        finish();

        return;
    }


    const totalSeconds =
        Math.floor(remaining / 1000);


    const days =
        Math.floor(totalSeconds / 86400);

    const hours =
        Math.floor((totalSeconds % 86400) / 3600);

    const minutes =
        Math.floor((totalSeconds % 3600) / 60);

    const seconds =
        totalSeconds % 60;


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


function finish() {

    if (finished) return;

    finished = true;

    lock.textContent = "🔓";

    lockedTitle.textContent =
        "It's time! ✨";

    lockedText.textContent =
        "Your surprise is finally unlocked. ❤️";

    celebration.classList.add("show");

    createHearts();
}


function createHearts() {

    for (let i = 0; i < 100; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            Math.random() > 0.5
                ? "❤️"
                : "✨";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize =
            15 + Math.random() * 25 + "px";

        heart.style.zIndex = "2000";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        const animation =
            heart.animate(
                [
                    {
                        transform:
                            "translateY(0) rotate(0deg)",
                        opacity: 1
                    },
                    {
                        transform:
                            `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                        opacity: 0
                    }
                ],
                {
                    duration:
                        2500 + Math.random() * 3000,
                    easing: "linear"
                }
            );

        animation.onfinish = () => {
            heart.remove();
        };
    }
}


updateTimer();

setInterval(updateTimer, 250);