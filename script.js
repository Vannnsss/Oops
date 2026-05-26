AOS.init();

const startBtn = document.getElementById("startBtn");
const dateInput = document.getElementById("dateInput");
const errorText = document.getElementById("errorText");

// AUTO PLAY MUSIC AFTER FIRST INTERACTION

const music = document.getElementById("bgMusic");

function startMusic() {

    music.play()
        .then(() => {
            console.log("music started");
        })
        .catch((err) => {
            console.log(err);
        });

    // hanya sekali
    document.removeEventListener("click", startMusic);
}

document.addEventListener("click", startMusic);

// LOCK SCROLL AWAL
document.body.classList.add("locked");

// GANTI TANGGAL
const correctDate = "01112014";

startBtn.addEventListener("click", () => {

    const value = dateInput.value.trim();

    if (value === correctDate) {

        // UNLOCK SCROLL
        document.body.classList.remove("locked");
        // SCROLL KE BAWAH
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth"
        });

    } else {

        errorText.innerText = "Ihh tanggalnya salah sayangkuuuuuuuuuu 🤦‍♂️";

        // EFFECT SHAKE
        dateInput.classList.add("shake");

        setTimeout(() => {
            dateInput.classList.remove("shake");
        }, 1200);
    }

});

const text = `
Makasih ya udah hadir di hidup aku.
Makasih udah bertahan sejauh ini.
Aku mungkin belum sempurna,
tapi aku selalu serius perjuangin kamu ❤️
`;

let i = 0;

function typingEffect() {

    if (i < text.length) {

        document.getElementById("typingText").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect, 50);
    }
}

setTimeout(typingEffect, 2000);

// FALLING HEARTS & FLOWERS

const fallingContainer = document.getElementById("fallingContainer");

const items = [
    "❤️",
    "🌸",
    "💖",
    "💕",
    "🌷",
    "💗"
];

function createFallingItem() {

    const item = document.createElement("div");

    item.classList.add("falling-item");

    item.innerHTML = items[Math.floor(Math.random() * items.length)];

    item.style.left = Math.random() * window.innerWidth + "px";

    item.style.fontSize = (20 + Math.random() * 25) + "px";

    item.style.animationDuration = (4 + Math.random() * 6) + "s";

    item.style.opacity = Math.random();

    fallingContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 10000);
}

setInterval(createFallingItem, 200);

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseScreen = document.getElementById("surpriseScreen");

surpriseBtn.addEventListener("click", () => {

    surpriseScreen.classList.add("show");

    // getar hp kecil (mobile)
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }

    // klik lagi untuk close
    surpriseScreen.addEventListener("click", () => {
        surpriseScreen.classList.remove("show");
    });

});