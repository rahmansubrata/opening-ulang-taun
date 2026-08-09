// ISIKAN PESAN ROMANTIS DI SINI
const romanticMessage = `Saat jarum jam menyentuh angka 00.00, sebuah babak baru dalam hidupmu resmi dimulai. Happy Birthday my love.

Di dalam riuhnya dunia, kehadiranmu selalu menjadi tempat yang paling tenang untuk dituju. Terima kasih telah tumbuh menjadi pribadi yang luar biasa, mandiri, berani, dan rasional. Setiap detik yang ku perjuangkan untuk mu agar bisa bersama adalah salah satu keputusan terbaik yang pernah ada dalam hidupku.

Malam ini, aku hanya ingin kamu tahu betapa berharganya dirimu—bukan hanya untuk hari ini, tapi untuk setiap hari yang akan datang.`;

// Konfigurasi Kecepatan Ketik (milidetik)
const typingSpeed = 50; 
let index = 0;

function openLetter() {
  const envelopeSection = document.getElementById('envelopeSection');
  const letterSection = document.getElementById('letterSection');
  const audioBtn = document.getElementById('audioBtn');
  const bgAudio = document.getElementById('bgAudio');

  // Mulai Musik (jika ada audio)
  bgAudio.play().catch(err => {
    console.log("Autoplay dicegah browser, klik tombol musik manual.");
  });

  // Tampilkan Tombol Audio
  audioBtn.classList.remove('hidden');

  // Efek Menghilangkan Amplop dan Menampilkan Surat
  envelopeSection.style.transition = 'all 0.8s ease';
  envelopeSection.style.opacity = '0';
  envelopeSection.style.transform = 'scale(0.9)';

  setTimeout(() => {
    envelopeSection.classList.add('hidden');
    letterSection.classList.remove('hidden');
    
    // Jalankan Animasi Typewriter
    typeWriter();
  }, 800);
}

// Fungsi Efek Ketik (Typewriter)
function typeWriter() {
  const textContainer = document.getElementById('typewriterText');
  
  if (index < romanticMessage.length) {
    textContainer.innerHTML += romanticMessage.charAt(index);
    index++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    // Setelah selesai mengetik, tampilkan Teaser
    showTeaser();
  }
}

// Fungsi Tampilkan Teaser Besok Hari
function showTeaser() {
  const teaserBox = document.getElementById('teaserBox');
  setTimeout(() => {
    teaserBox.classList.remove('hidden');
  }, 1000);
}

// Control Play/Pause Audio
function toggleAudio() {
  const bgAudio = document.getElementById('bgAudio');
  const audioBtn = document.getElementById('audioBtn');

  if (bgAudio.paused) {
    bgAudio.play();
    audioBtn.innerHTML = "🎵 Music: ON";
  } else {
    bgAudio.pause();
    audioBtn.innerHTML = "🔇 Music: OFF";
  }
}