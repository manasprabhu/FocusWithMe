// 🎥 Video Background Handling
const videoElement = document.getElementById("bg-video");
const videoSources = [
    "videos/1.mp4",
    "videos/2.mp4",
    "videos/3.mp4",
    "videos/4.mp4",
    "videos/5.mp4",
    "videos/6.mp4"
];

let videoIndex = 0;

function changeVideo() {
    videoIndex = (videoIndex + 1) % videoSources.length;
    videoElement.classList.add("fade-out");

    setTimeout(() => {
        videoElement.setAttribute("src", videoSources[videoIndex]);
        videoElement.load();
        videoElement.play();
        videoElement.classList.remove("fade-out");
    }, 500);
}

videoElement.setAttribute("src", videoSources[videoIndex]);
videoElement.load();
videoElement.play();
videoElement.addEventListener("ended", changeVideo);

// ⏳ Pomodoro Timer
let timeLeft = 1500;
let timer;
let isRunning = false;
let currentMode = "pomodoro";
const alarmSound = document.getElementById("alarmSound");

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    document.getElementById("time").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById("startPause").innerText = "Start";
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                document.getElementById("startPause").innerText = "Start";
                alarmSound.play();
                showToast("⏳ Time's up! Take a break or start a new session.");
                changeVideo();
            }
        }, 1000);
        isRunning = true;
        document.getElementById("startPause").innerText = "Pause";
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startPause").innerText = "Start";

    const pomodoroTime = parseInt(document.getElementById("pomodoroTime").value) || 25;
    const shortBreakTime = parseInt(document.getElementById("shortBreakTime").value) || 5;
    const longBreakTime = parseInt(document.getElementById("longBreakTime").value) || 10;

    timeLeft = (currentMode === "pomodoro") ? pomodoroTime * 60 :
               (currentMode === "short") ? shortBreakTime * 60 :
               (currentMode === "long") ? longBreakTime * 60 : 1500;

    updateDisplay();
}

function setMode(mode) {
    currentMode = mode;
    document.querySelectorAll(".mode").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`button[onclick="setMode('${mode}')"]`).classList.add("active");
    resetTimer();
}

// ⚙️ Settings Modal Handling
function openSettings() {
    const modal = document.getElementById("settingsModal");
    modal.style.display = "block";
    modal.classList.add("fade-in");
}

function closeSettings() {
    const modal = document.getElementById("settingsModal");
    modal.classList.remove("fade-in");
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

function saveSettings() {
    resetTimer();
    closeSettings();
}

// 🎵 Spotify Music Integration (Placeholder)
function connectSpotify() {
    showToast("🔊 Spotify integration coming soon!");
}

// ✅ To-Do List
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">❌</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

// 🌟 Toast Notification
function showToast(message) {
    let toast = document.createElement("div");
    toast.innerText = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "6px";
    toast.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    toast.style.zIndex = "1000";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.5s ease-in-out";

    document.body.appendChild(toast);
    setTimeout(() => toast.style.opacity = "1", 100);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 3000);
}

// 📌 Initialize
updateDisplay();