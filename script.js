/* =========================================
   1. INITIALIZATION & UTILS
   ========================================= */

// Variabel Global untuk menampung instance
let portfolioSwiper, skillsSwiper, servicesSwiper;

// Fungsi inisialisasi Swiper (Dipanggil saat siap)
function initSwipers() {
    if (typeof Swiper !== 'undefined') {
        // Portfolio Carousel
        portfolioSwiper = new Swiper(".portfolioSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            observer: true, // PENTING: Agar update saat hidden -> visible
            observeParents: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        });

        // Skills Carousel
        skillsSwiper = new Swiper('.skillsSwiper', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 24,
            observer: true,
            observeParents: true,
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

        // Experience Carousel
        new Swiper(".experienceSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
            },
        });

        // Services Carousel
        servicesSwiper = new Swiper(".servicesSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            effect: 'coverflow',
            observer: true,
            observeParents: true,
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                    effect: 'slide',
                },
            },
        });
    }
}

// Inject CSS dinamis untuk Swiper Skills
(function(){
    var css = `
    .skillsSwiper { padding-bottom: 2.5rem; }
    .skillsSwiper .swiper-slide { width: 260px !important; }
    @media (min-width: 640px) { .skillsSwiper .swiper-slide { width: 300px !important; } }
    @media (min-width: 1024px) { .skillsSwiper .swiper-slide { width: 340px !important; } }
    .skillsSwiper .swiper-slide .group { border-radius: 1rem; overflow: hidden; }
    .skillsSwiper .swiper-slide { opacity: 0.7; transform-origin: center center; transition: transform 300ms ease, opacity 300ms ease; }
    .skillsSwiper .swiper-slide-active { transform: scale(1.06) translateY(-10px) !important; opacity: 1; z-index: 50; }
    /* Optimasi Mobile: Matikan shadow berat di HP */
    @media (max-width: 768px) {
        .skillsSwiper .swiper-slide-active .group { box-shadow: none !important; }
    }
    `;
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();

// Inject CSS dinamis untuk Home Page (Cyber Grid Effect)
(function(){
    var css = `
    .cyber-grid {
        position: absolute;
        bottom: -25%;
        left: -50%;
        width: 200%;
        height: 75%;
        background-image: 
            linear-gradient(rgba(135, 80, 247, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(135, 80, 247, 0.2) 1px, transparent 1px);
        background-size: 50px 50px;
        transform: perspective(500px) rotateX(60deg);
        animation: gridScroll 3s linear infinite;
        opacity: 0.3;
        z-index: 0;
        pointer-events: none;
        mask-image: linear-gradient(to top, black, transparent 90%);
        -webkit-mask-image: linear-gradient(to top, black, transparent 90%);
    }
    @keyframes gridScroll {
        0% { background-position: 0 0; }
        100% { background-position: 0 50px; }
    }
    `;
    // Tambahan CSS untuk Shake Animation (Efek Error)
    css += `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    .shake-animation { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }
    `;
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
})();


/* =========================================
   2. SMART LOADING SCREEN LOGIC
   ========================================= */
const loadingScreen = document.getElementById('loading-screen');
const percentageText = document.getElementById('loading-percentage');
const statusText = document.getElementById('loader-status');
const progressBar = document.getElementById('progress-bar');

const loadingStatuses = [
    "> INITIALIZING KERNEL...",
    "> LOADING ASSETS...",
    "> COMPILING SHADERS...",
    "> OPTIMIZING FOR MOBILE...",
    "> DECRYPTING DATA...",
    "> ACCESS GRANTED"
];

let width = 0;
let isPageLoaded = false; // Flag penanda halaman sudah load penuh

// Event saat semua aset (gambar, css, js) benar-benar selesai dimuat
window.addEventListener('load', () => {
    isPageLoaded = true;
    initSwipers(); // Inisialisasi slider di background
    initEmailProtection(); // Inisialisasi email
    if (typeof updateLanguageUI === 'function' && currentLang === 'en') {
        updateLanguageUI();
    }
});

if (loadingScreen && percentageText && progressBar) {
    // Kecepatan loading diperlambat (50ms) agar sempat load aset
    const interval = setInterval(() => {
        
        // Logika Smart Loading:
        // Jika loading bar sudah 99% TAPI halaman belum selesai load (isPageLoaded = false),
        // maka tahan di 99% ("Menunggu...").
        // Jika halaman sudah load, baru gass ke 100%.
        
        if (width >= 99 && !isPageLoaded) {
            // Tahan di 99%
            if(statusText) statusText.innerText = "> WAITING FOR ASSETS...";
            return; 
        }

        if (width >= 100) {
            clearInterval(interval);
            
            // Final Status
            if(statusText) statusText.innerText = "> SYSTEM READY";
            if(percentageText) percentageText.innerText = "100%";
            
            // --- TRIGGER ANIMASI KELUAR ---
            setTimeout(() => {
                loadingScreen.classList.add('loading-finished');
                loadingScreen.classList.add('bg-transparent'); 
                
                // Mulai AOS (Scroll Animation) hanya setelah loading selesai
                // Ini mencegah animasi berjalan saat layar masih hitam
                if (typeof AOS !== 'undefined') {
                    AOS.init({
                        once: true,
                        offset: 50, // Offset lebih kecil di mobile biar cepat muncul
                        duration: 800,
                        easing: 'ease-out-cubic',
                    });
                }
            }, 500); 

            // Hapus elemen dari DOM
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 2000); 

        } else {
            width++;
            progressBar.style.width = width + '%';
            if(percentageText) percentageText.innerText = width + '%';

            // Update status text
            if (width % 15 === 0 && width < 90) {
                 const randIdx = Math.floor(Math.random() * (loadingStatuses.length - 1));
                 if(statusText) statusText.innerText = loadingStatuses[randIdx];
            }
        }
    }, 50); // Diperlambat dari 25ms ke 50ms
}


/* =========================================
   3. MOBILE MENU & NAVIGATION
   ========================================= */
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-menu-overlay');

if (btn && menu && overlay) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        overlay.classList.toggle('show');
        
        const icon = btn.querySelector('i');
        if(menu.classList.contains('hidden')) {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        } else {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        }
    });

    overlay.addEventListener('click', () => {
        menu.classList.add('hidden');
        overlay.classList.remove('show');
        const icon = btn.querySelector('i');
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    });
}

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
    });
});

/* =========================================
   4. DYNAMIC NAVBAR SCROLL
   ========================================= */
const header = document.querySelector('header');
// Gunakan requestAnimationFrame untuk performa scroll yang lebih ringan
let lastScrollY = window.scrollY;
let ticking = false;

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (lastScrollY > 50) {
                header.classList.add('shadow-lg');
                header.style.background = 'rgba(9, 9, 16, 0.95)';
                header.style.padding = '10px 0';
            } else {
                header.classList.remove('shadow-lg');
                header.style.background = 'rgba(9, 9, 16, 0.8)';
                header.style.padding = '16px 0'; 
            }
            ticking = false;
        });
        ticking = true;
    }
});

/* =========================================
   5. UTILS (Typewriter & Tilt)
   ========================================= */
// Typewriter - Disable di HP jika perlu, tapi ringan jadi biarkan saja
const typeWriterElement = document.querySelector('.typewriter');

// --- REVISI: Menggunakan LET agar bisa diubah saat translate ---
let words = ["LCD Operator", "Graphic Designer", "Tech Enthusiast", "UI/UX Developer"];

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

// 3D Tilt - MATIKAN DI MOBILE (Performance Heavy)
if (window.innerWidth > 768) {
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
}

// Mouse Glow - MATIKAN DI MOBILE
if (window.innerWidth > 768 && !document.querySelector('.mouse-glow')) {
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

    let mouseX = 0; let mouseY = 0; let glowX = 0; let glowY = 0;
    document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; glow.style.opacity = '1'; });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
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
   WEBGL FLUID CURSOR TRAIL (DESKTOP ONLY)
   ========================================= */
// WebGL sangat berat di HP low-end, disable total untuk mobile demi scroll mulus
const canvas = document.getElementById('cursor-canvas');
const gl = canvas ? canvas.getContext('webgl') : null;

if (gl && window.innerWidth > 1024) { // Hanya aktif di layar besar (>1024px)
    
    let mouse = { x: 0, y: 0 };
    let points = [];
    const maxPoints = 50; 

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', resize);
    resize();

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
            vec2 coord = gl_PointCoord - vec2(0.5);
            if(length(coord) > 0.5) discard;
            gl_FragColor = v_color;
        }
    `;

    function createShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
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

    const positionLoc = gl.getAttribLocation(program, "a_position");
    const sizeLoc = gl.getAttribLocation(program, "a_size");
    const colorLoc = gl.getAttribLocation(program, "a_color");

    window.addEventListener('mousemove', e => {
        const x = (e.clientX / canvas.width) * 2 - 1;
        const y = -((e.clientY / canvas.height) * 2 - 1); 
        mouse = { x, y };
        points.push({ x: x, y: y, age: 0, r: Math.random(), g: 0.5, b: 1.0 });
    });

    function render() {
        gl.clearColor(0, 0, 0, 0); 
        gl.clear(gl.COLOR_BUFFER_BIT);

        if (points.length > maxPoints) points.shift();
        
        const positions = [];
        const sizes = [];
        const colors = [];

        points.forEach((p) => {
            p.age += 0.02; 
            const life = 1.0 - p.age; 

            if (life > 0) {
                positions.push(p.x, p.y);
                sizes.push(30.0 * life); 
                colors.push(0.5, 0.2, 1.0, life); 
            }
        });

        points = points.filter(p => p.age < 1.0);

        if (positions.length > 0) {
            const posBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(positionLoc);
            gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

            const sizeBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(sizeLoc);
            gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, 0, 0);

            const colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
            gl.enableVertexAttribArray(colorLoc);
            gl.vertexAttribPointer(colorLoc, 4, gl.FLOAT, false, 0, 0);

            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            
            gl.drawArrays(gl.POINTS, 0, positions.length / 2);
        }
        requestAnimationFrame(render);
    }
    render();
}

/* =========================================
   EMAIL ENCRYPTION LOGIC
   ========================================= */
function initEmailProtection() {
    const emailLink = document.getElementById('email-link');
    const emailText = document.getElementById('email-text');
    
    if (emailLink && emailText) {
        emailLink.addEventListener('click', function(e) {
            if (this.getAttribute('href') === 'javascript:void(0)') {
                e.preventDefault();
                const user = this.getAttribute('data-user');
                const domain = this.getAttribute('data-domain');
                const email = `${user}@${domain}`;
                this.setAttribute('href', `mailto:${email}`);
                emailText.innerText = email;
                emailText.classList.remove('truncate'); 
                window.location.href = `mailto:${email}`;
            }
        });
    }
}

/* =========================================
   6. LANGUAGE TRANSLATION LOGIC
   ========================================= */

// 1. Kamus Bahasa (Dictionary)
const translations = {
    id: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        btn_talk: "Let's Talk",

        // Hero Section
        widget_projects_label: "Projects Completed",
        widget_projects_val: "15+ Events Succesfull",
        widget_role_label: "Current Role",
        widget_role_val: "LCD Operator",
        widget_exp_label: "Experience",
        widget_exp_val: "2+ Years Active",
        widget_skill_label: "Skill Proficiency",
        hero_badge: "Open for Collaboration",
        hero_greeting: "Hi, I'm",
        hero_desc: "Operator LCD Kreatif & Desainer Grafis yang menciptakan pengalaman visual modern untuk acara dan aset branding digital yang kuat.",
        btn_start: "Mulai Proyek",
        btn_cv: "Unduh CV",

        // About Section
        about_creative_badge: "CREATIVE SIDE",
        about_creative_title: "Visual Creator & <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500\">Event Specialist</span>",
        about_creative_desc: "Di balik layar, saya adalah seorang kreator yang menghidupkan suasana acara. Fokus saya adalah menciptakan pengalaman visual yang imersif melalui desain grafis dan manajemen panggung digital.",
        about_creative_li1: "Spesialis <strong>Desain Grafis & Branding</strong> untuk kebutuhan event.",
        about_creative_li2: "Expert <strong>Operator OBS Studio</strong> untuk live production & visual jockey.",
        
        about_tech_badge: "TECHNICAL SIDE",
        about_tech_title: "Mahasiswa PENS <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400\">Informatics Engineering</span>",
        about_tech_desc: "Sebagai mahasiswa Teknik Informatika di PENS, saya mendalami pengembangan perangkat lunak dan teknologi web. Saya menggabungkan logika pemrograman dengan estetika desain.",
        about_tech_li1: "Berpengalaman dalam <strong>Web Development</strong> (Front-end & UI/UX).",
        about_tech_li2: "Memahami konsep <strong>Database & Backend Logic</strong> untuk aplikasi skala kecil-menengah.",

        // Services Section
        services_title: "Layanan Saya",
        services_subtitle: "Solusi teknis dan kreatif untuk kebutuhan acara dan branding Anda.",
        
        serv_lcd_title: "Operator LCD & OBS",
        serv_lcd_desc: "Manajemen visual acara live yang profesional untuk kelancaran presentasi dan multimedia.",
        serv_lcd_li1: "<i class='bx bx-check text-primary'></i> Manajemen Scene & Transisi OBS",
        serv_lcd_li2: "<i class='bx bx-check text-primary'></i> Playback Video & Presentasi",
        serv_lcd_li3: "<i class='bx bx-check text-primary'></i> Setup Layar LED/Proyektor",

        serv_gd_title: "Graphic Design",
        serv_gd_desc: "Desain visual komunikatif untuk memperkuat branding acara dan organisasi Anda.",
        serv_gd_li1: "<i class='bx bx-check text-pink-400'></i> Social Media Feeds & Story",
        serv_gd_li2: "<i class='bx bx-check text-pink-400'></i> Poster, Banner & Flyer Event",
        serv_gd_li3: "<i class='bx bx-check text-pink-400'></i> Desain Kebutuhan Organisasi (PDD)",

        // Skills Section
        skills_title: "Tools",
        skills_subtitle: "Rekam jejak dalam manajemen event, desain visual, dan kompetisi.",
        badge_expert: "EXPERT",
        badge_intermediate: "INTERMEDIATE",
        badge_advanced: "ADVANCED",

        // Experience Section
        exp_title: "Pengalaman Profesional",
        exp_subtitle: "Rekam jejak dalam manajemen event, desain visual, dan kompetisi.",
        
        exp_itds_role: "Creative Design",
        exp_itds_desc: "Bertanggung jawab penuh atas seluruh desain identitas visual termasuk poster, banner, dan materi promosi digital.",
        
        exp_mbex_role: "Main Operator Visual",
        exp_mbex_desc: "Operator utama dalam acara Minat Bakat Expo 2025 bertugas dalam mengelola transisi visual dan display menggunakan OBS.",
        
        exp_figma_role: "UI/UX Design",
        exp_figma_desc: "Mempelajari semua dasar teori dalam membuat desain UI/UX beserta penerapannya menggunakan figma.",
        
        exp_digiup_role: "Digital Graphic Designer",
        exp_digiup_desc: "Mempelajari semua dasar teori Graphic Design beserta penerapannya menggunakan Photoshop.",
        
        exp_bnsp_role: "Junior Graphic Designer",
        exp_bnsp_desc: "Sertifikasi bersama dengan BNSP setelah menyelesaikan kelas Digital Graphic Designer menggunakan Photoshop.",
        
        exp_gla_role: "Intro to Graphic Design",
        exp_gla_desc: "Mempelajari dasar-dasar Graphic Design beserta penerapannya dalam Photoshop.",

        // Portfolio Section
        port_title: "Dokumentasi & Portofolio",
        port_subtitle: "Arsip proyek, kegiatan, dan sertifikasi.",
        
        port_pmcc_role: "AS JUDGE OF",
        port_pmcc_desc: "Panitia kegiatan turnamen esports resmi PUBG Mobile yang khusus diadakan untuk mahasiswa di berbagai universitas",
        
        port_pekan_role: "AS PDD & OPERATOR OF",
        port_pekan_desc: "Panitia Kegiatan Pekan Komunitas Teknologi dan Olahraga yang diselenggarakan HIMIT PENS berupa pengenalan komunitas yang ada dalam HIMIT PENS kepada MABA angkatan 25",
        
        port_mbex_role: "AS PDD & OPERATOR OF",
        port_mbex_desc: "Kegiatan Expo yang diselenggarakan oleh LMB PENS berupa pengenalan UKM (Unit Kegiatan Mahasiswa) / komunitas yang ada dalam PENS kepada MABA angkatan 25.",
        
        port_lmb_role: "AS PENANGGUNG JAWAB OF",
        port_lmb_desc: "Kegiatan Pelatihan Desain yang diselenggarakan oleh LMB PENS berupa pembelajaran terkait pembuatan desain mulai dari teori hingga penerapannya menggunakan tools canva.",
        
        port_itds_role: "AS PDD OF",
        port_itds_desc: "Kegiatan pengenalan Program Studi IT PENS yang diselenggarakan oleh HIMIT PENS berupa pengenalan terkait mata kuliah dan etika mulai dari teori hingga penerapannya dalam kehidupan perkuliahan.",
        
        port_atfest_role: "AS PDD OF",
        port_atfest_desc: "Kegiatan Expo yang diselenggarakan oleh PENS berupa pengenalan produk mahasiswa IT yang ada dalam PENS kepada khalayak umum.",
        
        port_elta_role: "AS OPERATOR OF",
        port_elta_desc: "Kegiatan Perlombaan yang diselenggarakan oleh LMB PENS berupa perlombaan dalam berbagai bidang dengan berkolaborasi bersama dengan UKM yang ada dalam PENS.",
        
        port_staff_role: "AS STAFF OF",
        port_staff_desc: "Sewaktu Menjadi Staff Muda dalam departemen MEDFO LMB PENS tahun periode 2024 - 2025 kenangan bersama Staff Ahli.",

        // Contact Section
        contact_title: "Mari Bekerja <br> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400\">Sama.</span>",
        contact_desc: "Menciptakan cerita visual dan pengalaman digital. Terbuka untuk proyek freelance dan kolaborasi.",
        contact_subtitle: "Diskusikan kebutuhan Operator LCD atau Desain Grafis untuk sukseskan acara Anda.",
        contact_email_label: "Email Me",
        contact_linkedin_label: "Connect",
        footer_loc: "Surabaya, Indonesia",

        // Typewriter Words (Array khusus)
        typewriter_words: ["LCD Operator", "Graphic Designer", "Tech Enthusiast", "UI/UX Developer"]
    },
    en: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_skills: "Skills",
        nav_exp: "Experience",
        nav_projects: "Projects",
        nav_contact: "Contact",
        btn_talk: "Let's Talk",

        // Hero Section
        widget_projects_label: "Projects Completed",
        widget_projects_val: "15+ Events Succesfull",
        widget_role_label: "Current Role",
        widget_role_val: "LCD Operator",
        widget_exp_label: "Experience",
        widget_exp_val: "2+ Years Active",
        widget_skill_label: "Skill Proficiency",
        hero_badge: "Open for Collaboration",
        hero_greeting: "Hi, I'm",
        hero_desc: "Creative LCD Operator & Graphic Designer crafting modern visual experiences for events and robust digital branding assets.",
        btn_start: "Start a Project",
        btn_cv: "Download CV",

        // About Section
        about_creative_badge: "CREATIVE SIDE",
        about_creative_title: "Visual Creator & <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500\">Event Specialist</span>",
        about_creative_desc: "Behind the scenes, I am a creator who brings event atmospheres to life. My focus is on creating immersive visual experiences through graphic design and digital stage management.",
        about_creative_li1: "Specialist in <strong>Graphic Design & Branding</strong> for event needs.",
        about_creative_li2: "Expert <strong>OBS Studio Operator</strong> for live production & visual jockey.",
        
        about_tech_badge: "TECHNICAL SIDE",
        about_tech_title: "PENS Student <br><span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400\">Informatics Engineering</span>",
        about_tech_desc: "As an Informatics Engineering student at PENS, I delve into software development and web technology. I combine programming logic with design aesthetics.",
        about_tech_li1: "Experienced in <strong>Web Development</strong> (Front-end & UI/UX).",
        about_tech_li2: "Understanding <strong>Database & Backend Logic</strong> concepts for small-to-medium scale apps.",

        // Services Section
        services_title: "My Services",
        services_subtitle: "Technical and creative solutions for your event and branding needs.",
        
        serv_lcd_title: "LCD & OBS Operator",
        serv_lcd_desc: "Professional live event visual management for seamless presentations and multimedia.",
        serv_lcd_li1: "<i class='bx bx-check text-primary'></i> OBS Scene & Transition Management",
        serv_lcd_li2: "<i class='bx bx-check text-primary'></i> Video Playback & Presentation",
        serv_lcd_li3: "<i class='bx bx-check text-primary'></i> LED/Projector Screen Setup",

        serv_gd_title: "Graphic Design",
        serv_gd_desc: "Communicative visual design to strengthen your event and organization branding.",
        serv_gd_li1: "<i class='bx bx-check text-pink-400'></i> Social Media Feeds & Story",
        serv_gd_li2: "<i class='bx bx-check text-pink-400'></i> Event Posters, Banners & Flyers",
        serv_gd_li3: "<i class='bx bx-check text-pink-400'></i> Organizational Design Needs (PDD)",

        // Skills Section
        skills_title: "Tools",
        skills_subtitle: "Track record in event management, visual design, and competitions.",
        badge_expert: "EXPERT",
        badge_intermediate: "INTERMEDIATE",
        badge_advanced: "ADVANCED",

        // Experience Section
        exp_title: "Professional Experience",
        exp_subtitle: "Track record in event management, visual design, and competitions.",
        
        exp_itds_role: "Creative Design",
        exp_itds_desc: "Fully responsible for all visual identity designs including posters, banners, and digital promotional materials.",
        
        exp_mbex_role: "Main Visual Operator",
        exp_mbex_desc: "Main operator in the Minat Bakat Expo 2025 event, tasked with managing visual transitions and displays using OBS.",
        
        exp_figma_role: "UI/UX Design",
        exp_figma_desc: "Learned all basic theories in creating UI/UX designs along with their application using Figma.",
        
        exp_digiup_role: "Digital Graphic Designer",
        exp_digiup_desc: "Learned all basic theories of Graphic Design along with their application using Photoshop.",
        
        exp_bnsp_role: "Junior Graphic Designer",
        exp_bnsp_desc: "Certification with BNSP after completing the Digital Graphic Designer class using Photoshop.",
        
        exp_gla_role: "Intro to Graphic Design",
        exp_gla_desc: "Learned the basics of Graphic Design along with their application in Photoshop.",

        // Portfolio Section
        port_title: "Documentation & Portfolio",
        port_subtitle: "Archive of projects, activities, and certifications.",
        
        port_pmcc_role: "AS JUDGE OF",
        port_pmcc_desc: "Committee for the official PUBG Mobile esports tournament specifically held for students in various universities",
        
        port_pekan_role: "AS PDD & OPERATOR OF",
        port_pekan_desc: "Committee for the Technology and Sports Community Week organized by HIMIT PENS involving the introduction of communities within HIMIT PENS to batch 25 freshmen",
        
        port_mbex_role: "AS PDD & OPERATOR OF",
        port_mbex_desc: "Expo activity organized by LMB PENS involving the introduction of UKM (Student Activity Units) / communities within PENS to batch 25 freshmen.",
        
        port_lmb_role: "AS PERSON IN CHARGE OF",
        port_lmb_desc: "Design Training activity organized by LMB PENS involving learning related to design creation from theory to application using Canva tools.",
        
        port_itds_role: "AS PDD OF",
        port_itds_desc: "Introduction activity for the IT PENS Study Program organized by HIMIT PENS involving introduction related to courses and ethics from theory to application in college life.",
        
        port_atfest_role: "AS PDD OF",
        port_atfest_desc: "Expo activity organized by PENS involving the introduction of IT student products within PENS to the general public.",
        
        port_elta_role: "AS OPERATOR OF",
        port_elta_desc: "Competition activity organized by LMB PENS involving competitions in various fields in collaboration with UKMs within PENS.",
        
        port_staff_role: "AS STAFF OF",
        port_staff_desc: "During my time as Junior Staff in the MEDFO department of LMB PENS for the 2024 - 2025 period, memories with Expert Staff.",

        // Contact Section
        contact_title: "Let's Work <br> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400\">Sama.</span>",
        contact_desc: "Creating visual stories and digital experiences. Open for freelance projects and collaborations.",
        contact_subtitle: "Discuss your LCD Operator or Graphic Design needs to make your event a success.",
        contact_email_label: "Email Me",
        contact_linkedin_label: "Connect",
        footer_loc: "Surabaya, Indonesia",

        // Typewriter Words
        typewriter_words: ["LCD Operator", "Graphic Designer", "Tech Enthusiast", "UI/UX Developer"]
    }
};

// 2. State Bahasa Saat Ini (Default ID)
let currentLang = localStorage.getItem('celestiq_lang') || 'id'; 

// 3. Fungsi Update UI Bahasa
function updateLanguageUI() {
    // Update Konten Website
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });

    // --- LOGIKA ANIMASI PRESISI ---
    const slider = document.getElementById('lang-slider');
    const labelId = document.getElementById('label-id');
    const labelEn = document.getElementById('label-en');

    if (slider && labelId && labelEn) {
        if (currentLang === 'en') {
            // Posisi EN: Geser sejauh 100% dari lebar slidernya sendiri
            // Ini menjamin posisi simetris sempurna tanpa hitungan pixel manual
            slider.style.transform = 'translateX(100%)'; 
            
            // Update Warna Teks
            labelId.classList.remove('text-white');
            labelId.classList.add('text-gray-500');
            
            labelEn.classList.remove('text-gray-500');
            labelEn.classList.add('text-white');
        } else {
            // Posisi ID: Geser balik ke 0
            slider.style.transform = 'translateX(0)';
            
            // Update Warna Teks
            labelEn.classList.remove('text-white');
            labelEn.classList.add('text-gray-500');
            
            labelId.classList.remove('text-gray-500');
            labelId.classList.add('text-white');
        }
    }

    // Update Typewriter
    updateTypewriterLanguage();

    // Reset AI Chat saat ganti bahasa agar sinkron
    if (typeof chatBody !== 'undefined' && chatBody) {
        chatBody.innerHTML = ''; // Hapus riwayat chat lama
        if (typeof aiModal !== 'undefined' && aiModal && !aiModal.classList.contains('hidden')) {
            startConversation(); // Mulai ulang dengan bahasa baru jika sedang terbuka
        }
    }
}

// 4. Fungsi Toggle (Versi Matematika Presisi)
function toggleLanguage() {
    // Switch state
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('celestiq_lang', currentLang);
    updateLanguageUI();
}

// 4. Update Typewriter secara Dinamis
function updateTypewriterLanguage() {
    // Ambil kata-kata baru dari kamus
    const newWords = translations[currentLang].typewriter_words;
    
    // Update variabel global 'words'
    if (typeof words !== 'undefined') {
        // Kita timpa array words dengan yang baru
        words.splice(0, words.length, ...newWords);
        
        // Reset index agar ketikan mulai ulang dengan bahasa baru
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        
        // Hapus timeout yang sedang berjalan agar tidak tumpang tindih (opsional, tapi lebih aman dibiarkan loop sendiri)
    }
}

/* =========================================
   7. AI ASSISTANT LOGIC
   ========================================= */
const aiModal = document.getElementById('ai-modal');
const aiBox = document.getElementById('ai-box');
const closeAiBtn = document.getElementById('close-ai');
const letsTalkBtn = document.getElementById('lets-talk-btn');
const chatBody = document.getElementById('ai-chat-body');
const optionsContainer = document.getElementById('ai-options');
const inputForm = document.getElementById('ai-input-form');
const userInput = document.getElementById('user-input');
let userName = localStorage.getItem('celestiq_username');

const aiChatData = {
    id: {
        greeting: "Halo! Saya Celestiq AI, asisten virtual Gusthi. Saya bisa ceritakan profil Gusthi secara singkat. Mau mulai dari mana?",
        options: [
            { text: "Siapa Gusthi sebenarnya?", next: "who_is" },
            { text: "Apa keahlian utamanya?", next: "skills" },
            { text: "Langsung ke kontak", next: "hire" }
        ],
        responses: {
            who_is: {
                text: "Gusthi adalah mahasiswa Teknik Informatika PENS yang punya passion unik: menggabungkan <strong>Coding</strong> dan <strong>Visual Art</strong>. Sehari-hari dia kuliah, tapi di luar itu dia sering jadi Operator Visual untuk event besar.",
                options: [
                    { text: "Event apa saja?", next: "experience" },
                    { text: "Bisa lihat karyanya?", next: "portfolio" }
                ]
            },
            experience: {
                text: "Dia sudah menangani visual untuk 15+ event, termasuk turnamen esports PMCC dan expo kampus MBEX. Dia memastikan tampilan layar panggung selalu memukau.",
                options: [
                    { text: "Keren, lihat buktinya dong", next: "portfolio" },
                    { text: "Apa tools yang dipakai?", next: "skills" }
                ]
            },
            skills: {
                text: "Untuk visual panggung, dia jago pakai <strong>OBS Studio</strong>. Untuk desain, dia pakai <strong>Photoshop & Figma</strong>. Dan karena dia anak IT, dia juga bisa bikin website seperti ini!",
                options: [
                    { text: "Saya butuh skill itu", next: "hire" },
                    { text: "Kembali ke awal", next: "init" }
                ]
            },
            portfolio: {
                text: "Semua dokumentasi event dan desainnya ada di halaman ini. Mau saya antarkan ke bagian Portfolio?",
                options: [
                    { text: "Ya, antarkan saya", action: "scroll_projects" },
                    { text: "Nanti saja, tanya lain", next: "init" }
                ]
            },
            hire: {
                text: "Gusthi selalu terbuka untuk diskusi project baru. Kamu lebih nyaman menghubungi lewat mana?",
                options: [
                    { text: "Email saja", action: "email" },
                    { text: "LinkedIn", action: "linkedin" },
                    { text: "Kembali", next: "init" }
                ]
            }
        }
    },
    en: {
        greeting: "Hello! I'm Celestiq AI, Gusthi's virtual assistant. I can tell you a bit about him. Where should we start?",
        options: [
            { text: "Who is Gusthi?", next: "who_is" },
            { text: "What are his skills?", next: "skills" },
            { text: "Contact info", next: "hire" }
        ],
        responses: {
            who_is: {
                text: "Gusthi is an Informatics student at PENS with a unique passion: combining <strong>Coding</strong> and <strong>Visual Art</strong>. By day he studies, but he often works as a Visual Operator for major events.",
                options: [
                    { text: "What kind of events?", next: "experience" },
                    { text: "Can I see his work?", next: "portfolio" }
                ]
            },
            experience: {
                text: "He has handled visuals for 15+ events, including the PMCC esports tournament and MBEX campus expo. He ensures the stage screen always looks stunning.",
                options: [
                    { text: "Cool, show me proof", next: "portfolio" },
                    { text: "What tools does he use?", next: "skills" }
                ]
            },
            skills: {
                text: "For stage visuals, he's an expert in <strong>OBS Studio</strong>. For design, he uses <strong>Photoshop & Figma</strong>. And since he's an IT student, he built this website too!",
                options: [
                    { text: "I need those skills", next: "hire" },
                    { text: "Back to start", next: "init" }
                ]
            },
            portfolio: {
                text: "All his event documentation and designs are on this page. Shall I take you to the Portfolio section?",
                options: [
                    { text: "Yes, take me there", action: "scroll_projects" },
                    { text: "Maybe later", next: "init" }
                ]
            },
            hire: {
                text: "Gusthi is always open to discussing new projects. How would you prefer to contact him?",
                options: [
                    { text: "Email", action: "email" },
                    { text: "LinkedIn", action: "linkedin" },
                    { text: "Back", next: "init" }
                ]
            }
        }
    }
};

function openAI() {
    if (!aiModal) return;
    aiModal.classList.remove('hidden');
    // Trigger reflow
    void aiModal.offsetWidth;
    aiModal.classList.remove('opacity-0');
    aiBox.classList.remove('scale-95');
    aiBox.classList.add('scale-100');
    
    if (!userName) {
        // Jika belum kenalan: Tampilkan Input, Sembunyikan Opsi
        if(inputForm) inputForm.style.display = 'flex';
        if(optionsContainer) optionsContainer.style.display = 'none';
        if(userInput) setTimeout(() => userInput.focus(), 100);
        
        if (chatBody.children.length === 0 || chatBody.innerHTML.trim() === "") {
            addMessage('Halo! Saya Celestiq AI. Boleh tau nama kamu siapa?', 'ai');
        }
    } else {
        // Jika sudah kenalan: Sembunyikan Input, Tampilkan Opsi
        if(inputForm) inputForm.style.display = 'none';
        if(optionsContainer) optionsContainer.style.display = 'flex';
        
        if (chatBody.children.length === 0 || chatBody.innerHTML.trim() === "") {
            addMessage(`Halo kembali, ${userName}! Ada yang bisa saya bantu?`, 'ai');
            showOptions(aiChatData[currentLang].options);
        }
    }
}

function closeAI() {
    if (!aiModal) return;
    aiModal.classList.add('opacity-0');
    aiBox.classList.remove('scale-100');
    aiBox.classList.add('scale-95');
    
    setTimeout(() => {
        aiModal.classList.add('hidden');
    }, 300);
}

function addMessage(text, sender) {
    const div = document.createElement('div');
    if (sender === 'ai') {
        div.className = 'flex gap-3';
        div.innerHTML = `<div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-bot'></i></div><div class="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed border border-white/5">${text}</div>`;
    } else {
        div.className = 'flex gap-3 flex-row-reverse';
        div.innerHTML = `<div class="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-user'></i></div><div class="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed border border-primary/20">${text}</div>`;
    }
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'flex gap-3';
    div.id = 'typing-indicator';
    div.innerHTML = `<div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-bot'></i></div><div class="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed border border-white/5 flex items-center gap-1"><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span></div>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

function showOptions(options) {
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'ai-option-btn';
        btn.innerText = opt.text;
        btn.onclick = () => handleOptionClick(opt);
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(option) {
    // User message
    addMessage(option.text, 'user');
    optionsContainer.innerHTML = ''; // Clear options
    
    addTypingIndicator();
    
    setTimeout(() => {
        removeTypingIndicator();
        
        if (option.action) {
            handleAction(option.action);
            // Tampilkan menu lagi setelah aksi
             setTimeout(() => {
                 const followUp = currentLang === 'id' ? "Ada lagi yang bisa saya bantu?" : "Is there anything else?";
                 addMessage(followUp, 'ai');
                 showOptions(aiChatData[currentLang].options);
             }, 1000);
             return;
        }

        if (option.next === 'init') {
            addMessage(aiChatData[currentLang].greeting, 'ai');
            showOptions(aiChatData[currentLang].options);
        } else if (aiChatData[currentLang].responses[option.next]) {
            const response = aiChatData[currentLang].responses[option.next];
            addMessage(response.text, 'ai');
            showOptions(response.options);
        }
    }, 800);
}

function handleAction(action) {
    if (action === 'email') {
        const msg = currentLang === 'id' ? "Membuka aplikasi email..." : "Opening email client...";
        addMessage(msg, 'ai');
        const emailBtn = document.getElementById('email-link');
        if (emailBtn) {
            emailBtn.click();
        } else {
            window.location.href = "mailto:gusthipangestu1906@gmail.com";
        }
    } else if (action === 'linkedin') {
        const msg = currentLang === 'id' ? "Membuka LinkedIn..." : "Opening LinkedIn...";
        addMessage(msg, 'ai');
        window.open('https://linkedin.com/in/gusthipangestu', '_blank');
    } else if (action === 'scroll_projects') {
        const msg = currentLang === 'id' ? "Menggulir ke bagian Projects..." : "Scrolling to Projects section...";
        addMessage(msg, 'ai');
        closeAI();
        document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
    }
}

function startConversation() {
    chatBody.innerHTML = '';
    // Logic reset conversation
    if (!userName) {
        addMessage('Halo! Saya Celestiq AI. Boleh tau nama kamu siapa?', 'ai');
        if(optionsContainer) optionsContainer.style.display = 'none';
        if(inputForm) inputForm.style.display = 'flex';
    } else {
        addMessage(`Halo kembali, ${userName}! Ada yang bisa saya bantu?`, 'ai');
        if(optionsContainer) optionsContainer.style.display = 'flex';
        if(inputForm) inputForm.style.display = 'none';
        showOptions(aiChatData[currentLang].options);
    }
}

// Event Listeners
if (letsTalkBtn) {
    letsTalkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAI();
    });
}

if (closeAiBtn) {
    closeAiBtn.addEventListener('click', closeAI);
}

// Close on outside click
if (aiModal) {
    aiModal.addEventListener('click', (e) => {
        if (e.target === aiModal) closeAI();
    });
}

if (inputForm) {
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = userInput.value.trim();
        if (!text) return;

        addMessage(text, 'user');
        userInput.value = '';

        if (!userName) {
            // Smart Name Extraction (Agar tidak kaku jika user mengetik "Nama saya Gusthi")
            let name = text;
            // Regex untuk menangkap nama setelah kata kunci umum
            const nameRegex = /(?:nama\s+(?:saya|aku|gue|ku)|panggil\s+(?:saya|aku|gue)|i'm|my\s+name\s+is)\s+(?:adalah\s+)?(.+)/i;
            const match = text.match(nameRegex);
            
            if (match && match[1]) {
                name = match[1].trim();
            }
            
            // Bersihkan tanda baca dan Capitalize
            name = name.replace(/[!.,?]/g, '');
            name = name.charAt(0).toUpperCase() + name.slice(1);

            userName = name;
            localStorage.setItem('celestiq_username', userName);
            
            // Sembunyikan form input setelah nama dimasukkan
            if(inputForm) inputForm.style.display = 'none';

            addTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                addMessage(`Salam kenal, ${userName}! Senang bertemu denganmu.`, 'ai');
                setTimeout(() => {
                    addMessage('Silakan pilih topik di bawah ini.', 'ai');
                    if(optionsContainer) optionsContainer.style.display = 'flex';
                    showOptions(aiChatData[currentLang].options);
                }, 800);
            }, 600);
        }
    });
}

/* =========================================
   10. PORTFOLIO DETAIL HANDLER
   ========================================= */
function openDetail(element) {
    // Ambil data dari elemen yang diklik
    const img = element.querySelector('img').src;
    // Mencari elemen role (biasanya text-xs font-bold)
    const role = element.querySelector('.text-xs.font-bold').innerText;
    const title = element.querySelector('h3').innerText;
    const desc = element.querySelector('p').innerText;
    
    // Ambil link asli dari atribut data-link
    const link = element.getAttribute('data-link');

    // Simpan ke LocalStorage agar bisa dibaca di halaman detail.html
    const data = { img, role, title, desc, link };
    localStorage.setItem('celestiq_detail', JSON.stringify(data));
    
    // Buka halaman detail di tab baru
    window.open('detail.html', '_blank');
}

/* =========================================
   8. PARTICLES BACKGROUND
   ========================================= */
if (document.getElementById('particles-js') && typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.3, "random": true },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" },
                "resize": true
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                "push": { "particles_nb": 4 }
            }
        },
        "retina_detect": true
    });
}

/* =========================================
   9. CONTACT FORM HANDLER (FORMSPREE EDITION)
   ========================================= */
const contactForm = document.getElementById('contact-form');

// Toast Notification Function
function showToast(type, title, message) {
    const toast = document.getElementById('toast-notification');
    const iconBox = document.getElementById('toast-icon');
    const titleEl = document.getElementById('toast-title');
    const msgEl = document.getElementById('toast-message');

    if (!toast || !iconBox || !titleEl || !msgEl) return;

    // Set Content
    titleEl.innerText = title;
    msgEl.innerText = message;

    // Set Style based on Type
    if (type === 'success') {
        iconBox.className = 'w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-green-500/20 text-green-500';
        iconBox.innerHTML = "<i class='bx bx-check'></i>";
        toast.classList.add('border-green-500/30');
    } else {
        iconBox.className = 'w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 bg-red-500/20 text-red-500';
        iconBox.innerHTML = "<i class='bx bx-x'></i>";
        toast.classList.add('border-red-500/30');
    }

    // Show
    toast.classList.remove('translate-y-24', 'opacity-0');
    
    // Hide after 4s
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        setTimeout(() => {
            toast.classList.remove('border-green-500/30', 'border-red-500/30');
        }, 500);
    }, 4000);
}

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // --- VALIDASI INPUT (SECURITY & UX) ---
        const formData = new FormData(contactForm);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const subject = formData.get('subject').trim();
        const message = formData.get('message').trim();
        
        // Fungsi efek getar saat error
        const triggerShake = () => {
            contactForm.classList.add('shake-animation');
            setTimeout(() => contactForm.classList.remove('shake-animation'), 500);
        };

        // 1. Validasi Nama (Wajib diisi & Tidak boleh angka/simbol aneh)
        // Regex: Hanya huruf, spasi, titik, strip, atau petik satu
        if (!name || !/^[A-Za-z\s\.\-']+$/.test(name)) {
            showToast('error', 'Invalid Name', 'Nama harus diisi huruf (tidak boleh angka).');
            triggerShake();
            return;
        }

        // 2. Validasi Email (Format standard)
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('error', 'Invalid Email', 'Mohon masukkan alamat email yang valid.');
            triggerShake();
            return;
        }

        // 3. Validasi Subject (Harus ada huruf, minimal 3 karakter huruf)
        // Mengatasi "masih bisa ditembus kalau pakai angka" -> misal "12345"
        const subjectLetters = (subject.match(/[a-zA-Z]/g) || []).length;
        if (subjectLetters < 3) {
            showToast('error', 'Invalid Subject', 'Subjek harus jelas (minimal 3 huruf).');
            triggerShake();
            return;
        }

        // 4. Cek apakah pesan HANYA berisi angka
        if (/^\d+$/.test(message)) {
            showToast('error', 'Invalid Message', 'Pesan tidak boleh hanya berisi angka.');
            triggerShake();
            return;
        }

        // 5. Cek apakah pesan mengandung huruf yang cukup (minimal 3 huruf)
        const messageLetters = (message.match(/[a-zA-Z]/g) || []).length;
        if (messageLetters < 3) {
            showToast('error', 'Message Unclear', 'Mohon tulis pesan yang jelas (gunakan huruf).');
            triggerShake();
            return;
        }

        // 6. Cek Spam Karakter Berulang (misal: "aaaaaaa" atau ".......")
        if (/(.)\1{4,}/.test(message)) {
            showToast('error', 'Spam Detected', 'Terdeteksi karakter berulang yang tidak wajar.');
            triggerShake();
            return;
        }

        // Ambil elemen input
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;
        const formAction = contactForm.getAttribute('action');

        // Cek apakah user sudah mengganti placeholder Formspree
        if (formAction.includes('PLACEHOLDER_CODE_DISINI')) {
            alert('PERHATIAN: Anda belum memasukkan kode Formspree di index.html!\n\nSilakan daftar di formspree.io, buat form baru, dan copy ID-nya ke file index.html baris form action.');
            return;
        }

        // Ubah tombol jadi loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin text-xl"></i> <span class="ml-2">Sending...</span>';

        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                showToast('success', 'Message Sent!', 'Thank you, I will get back to you soon.');
                contactForm.reset();
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showToast('error', 'Sending Failed', 'Oops! Something went wrong. Please try again.');
        } finally {
            // Kembalikan tombol ke semula
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}