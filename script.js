// Fungsi untuk membuka amplop
function openEnvelope() {
    let envelopeContainer = document.querySelector(".envelope-container");
    let qrBox = document.getElementById("qrBox");

    // Cek apakah amplop sudah terbuka
    if (!envelopeContainer.classList.contains("open")) {
        envelopeContainer.classList.add("open");

        // Tambahkan efek sedikit delay agar QR Code muncul lebih smooth
        setTimeout(() => {
            qrBox.style.display = "block";
            setTimeout(() => {
                qrBox.style.opacity = "1";
                qrBox.style.transform = "scale(1)";
            }, 200); // Efek muncul lebih smooth
        }, 1000);
    }
}

// Fungsi untuk membuat emoji jatuh
function createFallingEmoji() {
    const emojiList = ["🌙", "⭐", "✨"];
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");
    emoji.innerHTML = emojiList[Math.floor(Math.random() * emojiList.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // Durasi jatuh acak
    emoji.style.fontSize = Math.random() * 10 + 20 + "px"; // Ukuran acak agar lebih natural

    document.querySelector(".background").appendChild(emoji);

    // Hapus emoji setelah jatuh
    setTimeout(() => {
        emoji.remove();
    }, 5000);
}

// Buat emoji jatuh setiap 600ms
setInterval(createFallingEmoji, 600);


function checkQRCodeStatus() {
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();

    let qrValid = document.getElementById("qrValid");
    let qrInvalid = document.getElementById("qrInvalid");

    // QR berlaku sebelum pukul 03:50
    if (currentHour < 3 || (currentHour === 3 && currentMinute < 59)) {
        qrValid.classList.remove("hidden");
        qrInvalid.classList.add("hidden");
    } else {
        qrValid.classList.add("hidden");
        qrInvalid.classList.remove("hidden");
    }
}

// Jalankan saat halaman dimuat
checkQRCodeStatus();

// Periksa setiap 10 detik
setInterval(checkQRCodeStatus, 10000);
