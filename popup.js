const statusText = document.getElementById("status");
const toggleBtn = document.getElementById("toggle");

let isActive = false;

// durumu yükle
chrome.storage.local.get("focusMode", (data) => {
    isActive = data.focusMode || false;
    updateUI();
});

toggleBtn.addEventListener("click", () => {
    isActive = !isActive;

    chrome.storage.local.set({ focusMode: isActive });

    updateUI();
});

function updateUI() {
    statusText.innerText = isActive ? "Durum: ON" : "Durum: OFF";
    toggleBtn.innerText = isActive ? "Kapat" : "Aktifleştir";
}

// NASIL ÇALIŞIR
document.getElementById("infoBtn").addEventListener("click", () => {
    const box = document.getElementById("infoBox");

    box.style.display = box.style.display === "block"
        ? "none"
        : "block";
});