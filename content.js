let initialized = false;
let currentVideoId = null;

// ==========================
// INIT SYSTEM
// ==========================
function init() {
    if (initialized) return;
    initialized = true;

    createNotePanel();
    trackVideo();

    console.log("🧠 Focus Mode initialized");
}

// ==========================
// DISTRACTIONS CLEANER
// ==========================
function hideDistractions() {

    document.querySelectorAll("ytd-reel-shelf-renderer")
        .forEach(e => e.remove());

    const related = document.getElementById("related");
    if (related) related.style.display = "none";

    const comments = document.getElementById("comments");
    if (comments) comments.style.display = "none";

    document.querySelectorAll("ytd-rich-section-renderer")
        .forEach(e => e.remove());
}

// ==========================
// VIDEO ID (HER VİDEO AYRI)
// ==========================
function getVideoId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("v");
}

// ==========================
// NOTE PANEL
// ==========================
function createNotePanel() {

    if (document.getElementById("focus-note-panel")) return;

    const panel = document.createElement("div");
    panel.id = "focus-note-panel";

    panel.innerHTML = `
        <h3>📝 Notlar</h3>

        <textarea id="notes" placeholder="Video notlarını yaz..."></textarea>

        <button id="saveNote">📥 TXT İndir</button>

        <div id="saved"></div>
    `;

    document.body.appendChild(panel);

    // TXT EXPORT
    document.getElementById("saveNote").onclick = () => {
        const text = document.getElementById("notes").value;
        downloadTXT(text);
    };

    loadNotes();
}

// ==========================
// LOAD NOTES (VIDEO BAZLI)
// ==========================
function loadNotes() {

    const id = getVideoId();
    currentVideoId = id;

    if (!id) return;

    const saved = localStorage.getItem(`yt_notes_${id}`) || "";

    const notes = document.getElementById("notes");
    if (notes) notes.value = saved;
}

// ==========================
// SAVE NOTES (AUTO)
// ==========================
function saveNotes(text) {
    const id = getVideoId();
    if (!id) return;

    localStorage.setItem(`yt_notes_${id}`, text);
}

// ==========================
// TXT DOWNLOAD
// ==========================
function downloadTXT(text) {

    const title = document.title.replace(/[^\w\s]/gi, "");

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${title}_notlar.txt`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ==========================
// VIDEO TRACKING
// ==========================
function trackVideo() {

    const video = document.querySelector("video");
    if (!video) return;

    if (video.dataset.listenerAdded) return;
    video.dataset.listenerAdded = "true";

    video.addEventListener("pause", () => {

        const time = Math.floor(video.currentTime);

        const note = document.getElementById("notes");

        if (note) {
            note.value += `\n[${time}s] - `;
            saveNotes(note.value);
        }
    });
}

// ==========================
// CHECK FOCUS MODE
// ==========================
// function checkFocusMode() {

//     chrome.storage.local.get("focusMode", (data) => {

//         if (data.focusMode) {
//             init();
//             hideDistractions();
//         }
//     });
// }

    function checkFocusMode() {

    chrome.storage.local.get("focusMode", (data) => {

        if (data.focusMode) {
            init();
            hideDistractions();
        }
    });
}

// ==========================
// LOOP (SAFE)
// ==========================
// setInterval(() => {
//     checkFocusMode();
// }, 2000);

const interval = setInterval(() => {

    if (!chrome.runtime?.id) {
        clearInterval(interval);
        return;
    }

    checkFocusMode();

}, 2000);