/* =========================================
   1. INITIALIZATION & UTILS
   ========================================= */

// Inisialisasi AOS (Animate On Scroll) & Swiper
window.addEventListener('load', function() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 100,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }

    // --- SWIPER INITIALIZATION ---
    if (typeof Swiper !== 'undefined') {
        // Portfolio Carousel
        var portfolioSwiper = new Swiper(".portfolioSwiper", {
            slidesPerView: 1, // Default Mobile
            spaceBetween: 30,
            loop: true, // Infinite loop
            grabCursor: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });

        // Skills Carousel
        var swiper = new Swiper('.skillsSwiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 24,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 140,
                modifier: 1.1,
                slideShadows: false,
            },
            autoplay: {
                delay: 2800,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.skillsSwiper .swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });

        // Inject styles to emulate the centered large-card carousel for Skills
        (function(){
            var css = `
            .skillsSwiper { padding-bottom: 2.5rem; }
            .skillsSwiper .swiper-slide { width: 260px !important; }
            @media (min-width: 640px) { .skillsSwiper .swiper-slide { width: 300px !important; } }
            @media (min-width: 1024px) { .skillsSwiper .swiper-slide { width: 340px !important; } }

            .skillsSwiper .swiper-slide .group { border-radius: 1rem; overflow: hidden; }
            .skillsSwiper .swiper-slide { opacity: 0.7; transform-origin: center center; transition: transform 300ms ease, opacity 300ms ease; }
            .skillsSwiper .swiper-slide-active { transform: scale(1.06) translateY(-10px) !important; opacity: 1; z-index: 50; }
            .skillsSwiper .swiper-slide-next, .skillsSwiper .swiper-slide-prev { opacity: 0.9; }
            .skillsSwiper .swiper-pagination { bottom: 0.5rem; }

            /* Active slide glow: make center card glow automatically */
            .skillsSwiper .swiper-slide-active .group > .-inset-0.5 {
                opacity: 1 !important;
                filter: blur(14px);
                transition: opacity 300ms ease, filter 300ms ease;
            }

            .skillsSwiper .swiper-slide-active .group {
                box-shadow: 0 20px 50px rgba(135,80,247,0.14), 0 0 40px rgba(99,102,241,0.06) inset;
                border: 1px solid rgba(135,80,247,0.08);
                transition: box-shadow 300ms ease, border-color 300ms ease, transform 300ms ease;
            }

            .skillsSwiper .swiper-slide-active .group .h-24.w-24 {
                box-shadow: 0 0 30px rgba(135,80,247,0.32), 0 6px 20px rgba(0,0,0,0.25);
                transform: translateZ(0) scale(1.02);
                transition: box-shadow 300ms ease, transform 300ms ease;
            }

            /* Slightly boost icon brightness on active */
            .skillsSwiper .swiper-slide-active .group img {
                filter: none !important;
                transform: scale(1.08);
                transition: transform 300ms ease, filter 300ms ease;
            }
            `;
            var style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);
        })();

        // Experience Carousel
        var experienceSwiper = new Swiper(".experienceSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            autoplay: {
                delay: 4500, // Sedikit berbeda agar tidak berbarengan
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });

        // --- SERVICES CAROUSEL (NEW) ---
        var servicesSwiper = new Swiper(".servicesSwiper", {
            slidesPerView: 1, // Mobile: 1 kartu
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            effect: 'coverflow', // Mengaktifkan efek 3D Coverflow
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2, // Tablet & Desktop: 2 kartu berdampingan
                    spaceBetween: 30,
                    effect: 'slide', // Kembali ke slide biasa di layar besar agar rapi (opsional, bisa tetap coverflow jika mau)
                },
            },
        });

        // --- ABOUT ME CAROUSEL (NEW) ---
        var aboutSwiper = new Swiper(".aboutSwiper", {
            slidesPerView: 1,
            spaceBetween: 50,
            loop: true,
            speed: 800, // Transisi halus
            effect: 'fade', // Efek fade supaya elegan (ganti 'slide' jika ingin geser)
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000, // Ganti slide setiap 5 detik
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
        });

    } else {
        console.error("Swiper JS is not loaded yet.");
    }
});

/* =========================================
   2. MOBILE MENU & NAVIGATION
   ========================================= */
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-menu-overlay');

if (btn && menu && overlay) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        overlay.classList.toggle('show');
        
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

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        menu.classList.add('hidden');
        overlay.classList.remove('show');
        const icon = btn.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
}

// Close menu when clicking link
document.querySelectorAll('#mobile-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (menu && overlay && btn) {
            menu.classList.add('hidden');
            overlay.classList.remove('show');
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
   3. DYNAMIC NAVBAR SCROLL
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
        header.style.padding = '16px 0'; 
    }
});

/* =========================================
   4. TYPEWRITER EFFECT (Efek Mengetik)
   ========================================= */
const typeWriterElement = document.querySelector('.typewriter');
const words = ["LCD Operator", "Graphic Designer", "Tech Enthusiast", "UI/UX Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeEffect() {
    if (!typeWriterElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; 
    } else {
        typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', typeEffect);

/* =========================================
   5. 3D TILT EFFECT ON CARDS (Efek Miring 3D)
   ========================================= */
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
        card.style.transition = 'transform 0.5s ease';
    });
    
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });
});

/* =========================================
   6. MOUSE GLOW FOLLOWER (Cahaya Kursor)
   ========================================= */
if (!document.querySelector('.mouse-glow')) {
    const glow = document.createElement('div');
    glow.classList.add('mouse-glow');
    document.body.appendChild(glow);

    glow.style.position = 'fixed';
    glow.style.width = '300px';
    glow.style.height = '300px';
    glow.style.background = 'radial-gradient(circle, rgba(135, 80, 247, 0.15) 0%, rgba(135, 80, 247, 0) 70%)';
    glow.style.borderRadius = '50%';
    glow.style.pointerEvents = 'none'; 
    glow.style.zIndex = '9999';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.transition = 'opacity 0.3s ease';
    glow.style.mixBlendMode = 'screen';
    
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

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;
        
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

/* =========================================
   7. SANGAR LOADING SCREEN LOGIC (UPDATED)
   ========================================= */
const loadingScreen = document.getElementById('loading-screen');
const percentageText = document.getElementById('loading-percentage');
const statusText = document.getElementById('loader-status');
const progressBar = document.getElementById('progress-bar'); 

const loadingStatuses = [
    "> INITIALIZING KERNEL...",
    "> LOADING ASSETS...",
    "> COMPILING SHADERS...",
    "> ESTABLISHING CONNECTION...",
    "> DECRYPTING DATA...",
    "> ACCESS GRANTED"
];

let width = 0;

if (loadingScreen && percentageText && progressBar) {
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            
            // Final Status
            if(statusText) statusText.innerText = "> SYSTEM READY";
            if(percentageText) percentageText.innerText = "100%";
            
            // --- EFEK BARU: Trigger Animasi CSS ---
            setTimeout(() => {
                // Tambahkan kelas untuk memicu animasi di CSS
                loadingScreen.classList.add('loading-finished');
                
                // Ubah background jadi transparan agar efek split terlihat
                loadingScreen.classList.add('bg-transparent'); 
            }, 300); // Delay sedikit setelah 100%

            // Hapus elemen dari DOM setelah animasi selesai
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Opsional: Trigger animasi elemen home muncul (jika pakai AOS)
                if(typeof AOS !== 'undefined') AOS.refresh();
            }, 1800); // Waktu total animasi (1.8 detik cukup aman)

        } else {
            width++;
            progressBar.style.width = width + '%';
            if(percentageText) percentageText.innerText = width + '%';

            // Randomize status text for hacker feel
            if (width % 15 === 0 && width < 90) {
                 const randIdx = Math.floor(Math.random() * (loadingStatuses.length - 1));
                 if(statusText) statusText.innerText = loadingStatuses[randIdx];
            } else if (width === 95) {
                 if(statusText) statusText.innerText = loadingStatuses[5]; // Access Granted
            }
        }
    }, 25); // Kecepatan loading (makin kecil makin ngebut)
}

/* =========================================
   WEBGL FLUID CURSOR TRAIL (MOBILE FRIENDLY)
   ========================================= */
const canvas = document.getElementById('cursor-canvas');
const gl = canvas.getContext('webgl');

// Deteksi Mobile
const isMobile = window.innerWidth <= 768;

// Jalankan jika WebGL didukung
if (gl) {
    
    let mouse = { x: 0, y: 0 };
    let points = [];
    // Kurangi jumlah partikel di mobile agar performa aman
    const maxPoints = isMobile ? 25 : 50; 

    // Resize canvas
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

    // Shader Program (Vertex & Fragment)
    // Sederhana: Membuat titik-titik yang memudar
    const vsSource = `
        attribute vec2 a_position;
        attribute float a_size;
        attribute vec4 a_color;
        varying vec4 v_color;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
            gl_PointSize = a_size;
            v_color = a_color;
        }
    `;

    const fsSource = `
        precision mediump float;
        varying vec4 v_color;
        void main() {
            // Membuat titik bulat
            vec2 coord = gl_PointCoord - vec2(0.5);
            if(length(coord) > 0.5) discard;
            gl_FragColor = v_color;
        }
    `;

    // Compile Shader Function
    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Get Attribute Locations
    const positionLoc = gl.getAttribLocation(program, "a_position");
    const sizeLoc = gl.getAttribLocation(program, "a_size");
    const colorLoc = gl.getAttribLocation(program, "a_color");

    // Track Mouse & Touch
    function updateCoordinates(clientX, clientY) {
        // Konversi koordinat ke Clip Space (-1 s/d 1)
        const x = (clientX / canvas.width) * 2 - 1;
        const y = -((clientY / canvas.height) * 2 - 1); // WebGL Y is flipped
        mouse = { x, y };
        
        // Tambah titik baru ke trail
        points.push({
            x: x, 
            y: y, 
            age: 0,
            r: Math.random(), // Warna acak untuk efek glitchy
            g: 0.5,
            b: 1.0 
        });
    }

    // Mouse Events (Desktop)
    window.addEventListener('mousemove', e => {
        updateCoordinates(e.clientX, e.clientY);
    });

    // Touch Events (Mobile)
    window.addEventListener('touchmove', e => {
        // Prevent default scroll kadang perlu, tapi bisa ganggu UX.
        // Disini kita hanya ambil koordinat touch pertama.
        if(e.touches.length > 0) {
            updateCoordinates(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });

    // Animation Loop
    function render() {
        // Clear Canvas (Transparent)
        gl.clearColor(0, 0, 0, 0); 
        gl.clear(gl.COLOR_BUFFER_BIT);

        // Update Points
        // Hapus point tua
        if (points.length > maxPoints) points.shift();
        
        // Siapkan Arrays untuk Buffer
        const positions = [];
        const sizes = [];
        const colors = [];

        points.forEach((p, i) => {
            p.age += 0.02; // Umur bertambah
            const life = 1.0 - p.age; // Opacity berkurang

            if (life > 0) {
                positions.push(p.x, p.y);
                sizes.push(30.0 * life); // Ukuran mengecil
                // Warna: Ungu/Biru Neon (r, g, b, alpha)
                colors.push(0.5, 0.2, 1.0, life); 
            }
        });

        // Filter point yang sudah mati
        points = points.filter(p => p.age < 1.0);

        // --- Drawing ---
        if (positions.length > 0) {
            // Buffer Positions
            const posBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(positionLoc);
            gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

            // Buffer Sizes
            const sizeBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(sizeLoc);
            gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, 0, 0);

            // Buffer Colors
            const colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(colorLoc);
            gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);

            // Draw Arrays (Points)
            // Enable blending untuk transparansi yang halus
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            
            gl.drawArrays(gl.POINTS, 0, positions.length / 2);
        }

        requestAnimationFrame(render);
    }
    render();
}