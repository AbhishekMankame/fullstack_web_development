// ==============================
// STUDY REMINDER EXTENSION
// Professional YouTube Popup
// ==============================

let timer;
let popupVisible = false;
let videoListenerAttached = false;

const TIME_LIMIT = 60 * 1000; // 1 minute

// ==============================
// RESET TIMER
// ==============================

function resetTimer() {
    clearTimeout(timer);

    timer = setTimeout(() => {
        triggerReminder();
    }, TIME_LIMIT);
}

// ==============================
// STOP TIMER
// ==============================

function stopTimer() {
    clearTimeout(timer);
}

// ==============================
// USER ACTIVITY
// ==============================

[
    "mousemove",
    "keydown",
    "scroll",
    "click"
].forEach(event => {
    window.addEventListener(
        event,
        () => {
            if (!popupVisible) {
                resetTimer();
            }
        },
        { passive: true }
    );
});

// ==============================
// DETECT VIDEO PLAY / PAUSE
// ==============================

function attachVideoListeners() {
    const video = document.querySelector("video");

    if (!video || videoListenerAttached) return;

    videoListenerAttached = true;

    video.addEventListener("pause", () => {
        console.log("YouTube video paused");
        resetTimer();
    });

    video.addEventListener("play", () => {
        console.log("YouTube video resumed");
        stopTimer();
    });
}

// ==============================
// OBSERVE PAGE CHANGES
// ==============================

const observer = new MutationObserver(() => {
    attachVideoListeners();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

attachVideoListeners();

// ==============================
// TRIGGER REMINDER
// ==============================

function triggerReminder() {
    if (popupVisible) return;

    popupVisible = true;

    showPopup();
}

// ==============================
// SHOW POPUP
// ==============================

function showPopup() {

    if (document.getElementById("study-popup")) return;

    const popup = document.createElement("div");

    popup.id = "study-popup";

    popup.innerHTML = `
    
    <div id="study-overlay">

        <div id="study-card">

            <h1>😤 Kyu nahi ho rahi hai padhai?</h1>

            <p>
                Focus now. Success later.
            </p>

            <iframe
                width="100%"
                height="420"
                src="https://youtube.com/shorts/QpQJ6boEOH8?si=OurVmyaBlJj5XLON"
                title="Motivation Video"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>

            <button id="close-study-popup">
                Continue Studying 📚
            </button>

        </div>

    </div>
    `;

    document.body.appendChild(popup);

    injectStyles();

    document
        .getElementById("close-study-popup")
        .addEventListener("click", closePopup);
}

// ==============================
// CLOSE POPUP
// ==============================

function closePopup() {

    const popup = document.getElementById("study-popup");

    if (popup) {
        popup.remove();
    }

    popupVisible = false;

    resetTimer();
}

// ==============================
// INJECT STYLES
// ==============================

function injectStyles() {

    if (document.getElementById("study-popup-styles")) return;

    const style = document.createElement("style");

    style.id = "study-popup-styles";

    style.textContent = `

        #study-overlay {

            position: fixed;
            inset: 0;

            background: rgba(0,0,0,0.75);

            backdrop-filter: blur(8px);

            display: flex;
            justify-content: center;
            align-items: center;

            z-index: 999999;

            animation: fadeIn 0.3s ease;
        }

        #study-card {

            width: 720px;

            background: #111827;

            border-radius: 24px;

            padding: 28px;

            color: white;

            text-align: center;

            box-shadow:
                0 20px 60px rgba(0,0,0,0.5);

            border:
                1px solid rgba(255,255,255,0.1);

            animation: popupScale 0.3s ease;
        }

        #study-card h1 {

            font-size: 34px;

            margin-bottom: 10px;

            font-family: sans-serif;
        }

        #study-card p {

            color: #CBD5E1;

            margin-bottom: 24px;

            font-size: 18px;

            font-family: sans-serif;
        }

        #study-card iframe {

            width: 100%;

            height: 420px;

            border: none;

            border-radius: 18px;

            overflow: hidden;
        }

        #close-study-popup {

            margin-top: 24px;

            padding: 14px 22px;

            border: none;

            border-radius: 14px;

            background: #2563EB;

            color: white;

            font-size: 16px;

            font-weight: 600;

            cursor: pointer;

            transition: all 0.2s ease;
        }

        #close-study-popup:hover {

            background: #1D4ED8;

            transform: translateY(-2px);
        }

        @keyframes fadeIn {

            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        @keyframes popupScale {

            from {
                transform: scale(0.92);
                opacity: 0;
            }

            to {
                transform: scale(1);
                opacity: 1;
            }
        }

    `;

    document.head.appendChild(style);
}

// ==============================
// START TIMER
// ==============================

resetTimer();