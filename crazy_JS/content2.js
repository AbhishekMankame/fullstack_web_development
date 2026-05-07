let timer;
const TIME_LIMIT = 0.5 * 60 * 1000; // 1 minute

function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(triggerReminder, TIME_LIMIT);
}

// Detect user activity
["mousemove", "keydown", "scroll", "click"].forEach(event => {
    window.addEventListener(event, resetTimer);
});

// Detect YouTube video pause
function checkVideoPause() {
    const video = document.querySelector("video");

    if (video) {
        video.addEventListener("pause", () => {
            console.log("Video paused, starting timer...");
            resetTimer();
        });

        video.addEventListener("play", () => {
            console.log("Video playing, clearing timer...");
            clearTimeout(timer);
        });
    }
}

// Run periodically to attach listener
setInterval(checkVideoPause, 2000);

// What happens after 5 mins
function triggerReminder() {
    showPopup();
}

// Create popup
function showPopup() {
    if (document.getElementById("study-popup")) return;

    const popup = document.createElement("div");
    popup.id = "study-popup";

    popup.innerHTML = `
        <div style="
            position: fixed;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            background: black;
            color: white;
            padding: 20px;
            z-index: 9999;
            text-align: center;
            border-radius: 10px;
        ">
            <h2>😤 Kyu nahi ho rahi hai padhai?</h2>
            <iframe width="300" height="200"
                src="https://youtube.com/shorts/QpQJ6boEOH8?si=OurVmyaBlJj5XLON">
            </iframe>
            <br><br>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;

    document.body.appendChild(popup);
}

// Start timer initially
resetTimer();