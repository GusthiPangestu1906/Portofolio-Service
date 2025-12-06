/* =========================================
   1. INITIALIZATION & UTILS
   ========================================= */

// Inisialisasi AOS (Animate On Scroll)
// Pastikan library AOS sudah dimuat di HTML
if (typeof AOS !== 'undefined') {
    AOS.init({
        once: true,
        offset: 100,
        duration: 800,
        easing: 'ease-out-cubic',
    });
}

// Mobile Menu Logic
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
        
        // Animasi icon menu
        const icon = btn.querySelector('i');
        if(menu.classList.contains('hidden')) {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        } else {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        }
    });
}

// Close menu when clicking link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if (menu) {
            menu.classList.add('hidden');
            menu.classList.remove('flex');
            const icon = btn.querySelector('i');
            if(icon) {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        }
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* =========================================
   2. DYNAMIC NAVBAR SCROLL
   ========================================= */
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
        header.style.background = 'rgba(9, 9, 16, 0.95)';
        header.style.padding = '10px 0';
    } else {
        header.classList.remove('shadow-lg');
        header.style.background = 'rgba(9, 9, 16, 0.8)';
        header.style.padding = '16px 0'; // Kembali ke padding awal (py-4 = 16px)
    }
});

/* =========================================
   3. TYPEWRITER EFFECT (Efek Mengetik)
   ========================================= */
const typeWriterElement = document.querySelector('.typewriter');
const words = ["LCD Operator", "Graphic Designer", "Visual Judge", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    if (!typeWriterElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        // Menghapus karakter
        typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Lebih cepat saat menghapus
    } else {
        // Mengetik karakter
        typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Normal saat mengetik
    }

    if (!isDeleting && charIndex === currentWord.length) {
        // Selesai mengetik satu kata, pause sebentar
        isDeleting = true;
        typeSpeed = 2000; // Tunggu 2 detik sebelum menghapus
    } else if (isDeleting && charIndex === 0) {
        // Selesai menghapus, pindah ke kata berikutnya
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Tunggu sebentar sebelum mengetik kata baru
    }

    setTimeout(typeEffect, typeSpeed);
}

// Jalankan efek mengetik saat halaman dimuat
document.addEventListener('DOMContentLoaded', typeEffect);

/* =========================================
   4. 3D TILT EFFECT ON CARDS (Efek Miring 3D)
   ========================================= */
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Menghitung rotasi berdasarkan posisi mouse
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5; // Max rotasi 5 deg
        const rotateY = ((x - centerX) / centerX) * 5;

        // Apply transformasi
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        
        // Efek kilau (Glare)
        // Pastikan CSS card memiliki overflow: hidden agar glare tidak keluar
    });

    // Reset saat mouse keluar
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        card.style.transition = 'transform 0.5s ease';
    });
    
    // Hapus transisi saat mouse masuk agar gerakan responsif
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

/* =========================================
   5. MOUSE GLOW FOLLOWER (Cahaya Kursor)
   ========================================= */
// Membuat elemen follower jika belum ada
if (!document.querySelector('.mouse-glow')) {
    const glow = document.createElement('div');
    glow.classList.add('mouse-glow');
    document.body.appendChild(glow);

    // Styling follower via JS (atau bisa dipindah ke CSS)
    glow.style.position = 'fixed';
    glow.style.width = '300px';
    glow.style.height = '300px';
    glow.style.background = 'radial-gradient(circle, rgba(135, 80, 247, 0.15) 0%, rgba(135, 80, 247, 0) 70%)';
    glow.style.borderRadius = '50%';
    glow.style.pointerEvents = 'none'; // Agar tidak menghalangi klik
    glow.style.zIndex = '9999';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.transition = 'opacity 0.3s ease';
    glow.style.mixBlendMode = 'screen';
    
    // Sembunyikan di mobile
    if(window.innerWidth < 768) {
        glow.style.display = 'none';
    }

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    // Animasi smooth (Lerp) agar glow sedikit terlambat mengikuti mouse
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;
        
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}