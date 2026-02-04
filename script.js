/* =========================================
   1. INITIALIZATION & UTILS
   ========================================= */

// Variabel Global untuk menampung instance
let portfolioSwiper, skillsSwiper, servicesSwiper, educationSwiper;

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
                el: ".portfolioSwiper .swiper-pagination",
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
            // Mobile First Configuration (Focus Mode)
            slidesPerView: 1.15, 
            centeredSlides: true,
            spaceBetween: 15,
            loop: true,
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".experienceSwiper .swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                640: { 
                    slidesPerView: 2, 
                    spaceBetween: 20, 
                    centeredSlides: false 
                },
                768: { 
                    slidesPerView: 2, 
                    spaceBetween: 30, 
                    centeredSlides: false 
                },
                1024: { 
                    slidesPerView: 3, 
                    spaceBetween: 30, 
                    centeredSlides: false 
                },
            },
        });

        // Education Carousel
        educationSwiper = new Swiper(".educationSwiper", {
            // Mobile First Configuration
            slidesPerView: 1.15,
            centeredSlides: true,
            spaceBetween: 15,
            loop: true,
            grabCursor: true,
            observer: true,
            observeParents: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".educationSwiper .swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    centeredSlides: false
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                    centeredSlides: false
                },
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
            linear-gradient(rgba(0, 194, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 194, 255, 0.2) 1px, transparent 1px);
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
   SYSTEM CHECK (BATTERY, ISP, NET)
   ========================================= */

// Global Data Container
window.sysData = {
    battery: "AC POWER / DESKTOP",
    connection: "WIRED / STABLE",
    device: "UNKNOWN TERMINAL",
    loc: "UNKNOWN LOCATION",
    isp: "PRIVATE NETWORK",
    screen: "UNKNOWN RES",
    cores: "UNKNOWN",
    ram: "UNKNOWN",
    platform: "UNKNOWN"
};

async function initSystemCheck() {
    // 0. Detect Device/Browser
    const ua = navigator.userAgent;
    if (ua.includes("Android")) window.sysData.device = "ANDROID SYSTEM";
    else if (ua.includes("iPhone")) window.sysData.device = "IOS DEVICE";
    else if (ua.includes("Windows")) window.sysData.device = "WINDOWS NT WORKSTATION";
    else if (ua.includes("Mac")) window.sysData.device = "MACINTOSH SYSTEM";
    else if (ua.includes("Linux")) window.sysData.device = "LINUX TERMINAL";

    // 1. Battery Check
    if ('getBattery' in navigator) {
        try {
            const battery = await navigator.getBattery();
            const level = Math.round(battery.level * 100);
            const status = battery.charging ? "CHARGING" : "DRAINING";
            window.sysData.battery = `${level}% [${status}]`;
        } catch (e) { /* Ignore */ }
    } 

    // 2. Network Info
    if (navigator.connection) {
        const conn = navigator.connection;
        const type = conn.effectiveType ? conn.effectiveType.toUpperCase() : 'WIRED';
        const speed = conn.downlink ? conn.downlink + ' Mbps' : 'UNKNOWN';
        window.sysData.connection = `${type} // ${speed}`;
    }

    // 3. ISP Check (Async)
    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.org) window.sysData.isp = data.org.toUpperCase().substring(0, 25);
        if (data.city) window.sysData.loc = `${data.city.toUpperCase()}, ${data.country_code}`;
    } catch (e) { /* Ignore */ }

    // 4. Hardware Info (Linux Style Data)
    window.sysData.screen = `${window.screen.width}x${window.screen.height}`;
    window.sysData.platform = navigator.platform ? navigator.platform.toUpperCase() : "UNKNOWN OS";
    if (navigator.hardwareConcurrency) window.sysData.cores = `${navigator.hardwareConcurrency} CORES`;
    if (navigator.deviceMemory) window.sysData.ram = `${navigator.deviceMemory} GB`;

    // 5. GPU Detection (Advanced WebGL)
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            window.sysData.gpu = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : "STANDARD GRAPHICS";
        } else {
            window.sysData.gpu = "SOFTWARE RENDERER";
        }
    } catch (e) { window.sysData.gpu = "UNKNOWN GPU"; }
}

// --- SYSTEM SEQUENCE (DEFAULT) ---
async function runSystemSequence() {
    const consoleDiv = document.getElementById('sys-console');
    const statusDot = document.getElementById('sys-status-dot');
    const statusText = document.getElementById('sys-status-text');
    const deviceId = document.getElementById('sys-device-id');
    const timeDisplay = document.getElementById('sys-time');
    const sysBox = document.getElementById('sys-box');

    // Update Time
    const now = new Date();
    if(timeDisplay) timeDisplay.innerText = now.toLocaleTimeString();

    // Helper: Delay
    const wait = (ms) => new Promise(r => setTimeout(r, ms));
    
    // Sound Effect for System Lines
    const lineSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
    lineSound.volume = 0.15;

    // Helper: Add Header Group
    const addHeader = (text) => {
        const div = document.createElement('div');
        div.className = "mt-4 mb-2 text-[10px] font-bold text-gray-500 tracking-[0.2em] border-b border-white/10 pb-1 flex items-center gap-2";
        div.innerHTML = `<i class='bx bx-hash text-primary'></i> ${text}`;
        consoleDiv.appendChild(div);
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    };

    // Helper: Add Data Row
    const addData = async (label, value, color = "text-white") => {
        const div = document.createElement('div');
        div.className = "flex justify-between items-center font-mono text-xs opacity-0 transform translate-x-[-10px] transition-all duration-300 mb-1 pl-2 border-l border-white/5";
        div.innerHTML = `<span class="text-gray-400">${label}</span> <span class="${color} font-bold text-right truncate max-w-[180px]">${value}</span>`;
        consoleDiv.appendChild(div);
        
        // Trigger animation
        requestAnimationFrame(() => div.classList.remove('opacity-0', 'translate-x-[-10px]'));
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
        
        lineSound.currentTime = 0;
        lineSound.play().catch(() => {});
        await wait(100);
    };

    // --- THE SEQUENCE ---
    if(sysBox) sysBox.classList.remove('scale-95'); // Zoom in effect
    
    const initDiv = document.createElement('div');
    initDiv.className = "text-xs font-mono text-primary animate-pulse mb-2";
    initDiv.innerText = "> ESTABLISHING SECURE HANDSHAKE...";
    consoleDiv.appendChild(initDiv);
    await wait(600);

    // 1. HARDWARE
    addHeader("HARDWARE_INTEGRITY");
    await addData("DEVICE", window.sysData.device);
    await addData("PLATFORM", window.sysData.platform);
    if(window.sysData.cores) await addData("CPU THREADS", window.sysData.cores, "text-cyan-400");
    if(window.sysData.gpu) {
        // Clean GPU string for better display
        let gpuName = window.sysData.gpu;
        gpuName = gpuName.replace(/ANGLE \((.*)\)/, '$1'); // Remove ANGLE wrapper
        gpuName = gpuName.replace(/Direct3D.*vs_.*\)/, ''); // Remove D3D version
        gpuName = gpuName.split(',')[0]; // Take first part
        await addData("GPU UNIT", gpuName, "text-cyan-400");
    }
    
    // 2. POWER
    addHeader("POWER_MANAGEMENT");
    const batColor = window.sysData.battery.includes("CHARGING") ? "text-green-400" : "text-yellow-400";
    await addData("BATTERY STATUS", window.sysData.battery, batColor);

    // 3. NETWORK
    addHeader("NETWORK_UPLINK");
    await addData("CONNECTION TYPE", window.sysData.connection);
    await addData("LATENCY", Math.floor(Math.random() * 30 + 10) + "ms", "text-green-400");
    
    // 4. LOCATION
    addHeader("GEOLOCATION_DATA");
    await addData("REGION", window.sysData.loc, "text-purple-400");
    await addData("ISP NODE", window.sysData.isp);

    await wait(400);

    // Final Success
    const successDiv = document.createElement('div');
    successDiv.className = "mt-6 p-3 bg-green-500/10 border border-green-500/30 rounded text-center text-green-400 font-bold text-xs tracking-widest animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.2)]";
    successDiv.innerHTML = "<i class='bx bx-check-circle'></i> ACCESS GRANTED";
    consoleDiv.appendChild(successDiv);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;

    if(deviceId) {
        deviceId.innerText = window.sysData.device;
        deviceId.classList.remove('opacity-50');
    }

    if(statusDot) {
        statusDot.classList.remove('bg-red-500');
        statusDot.classList.add('bg-green-500', 'animate-pulse');
    }
    if(statusText) {
        statusText.innerText = "SYSTEM ONLINE";
        statusText.classList.add('text-green-400');
    }
    
    // --- NEW: MANUAL ENTRY CONCEPT ---
    const actionContainer = document.getElementById('sys-action-container');
    const enterBtn = document.getElementById('sys-enter-btn');
    
    if(actionContainer) {
        actionContainer.classList.remove('hidden');
        // Scroll agar tombol terlihat
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

    return new Promise((resolve) => {
        if(!enterBtn) {
            setTimeout(resolve, 1000); // Fallback jika tombol tidak ada
            return;
        }

        // Add pulse animation to draw attention
        enterBtn.classList.add('uplink-pulse');

        // Auto-trigger fallback (5s) agar tidak stuck jika user diam
        const autoTrigger = setTimeout(() => {
            if(enterBtn) enterBtn.click();
        }, 5000);

        enterBtn.onclick = () => {
            // Simple Enter Logic (Handshake already done at start)
            enterBtn.classList.remove('uplink-pulse');
            enterBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> ESTABLISHING CONNECTION...";
            enterBtn.classList.add('cursor-wait', 'opacity-80');
            new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3').play().catch(()=>{});
            
            clearTimeout(autoTrigger);
            setTimeout(() => {
                resolve();
            }, 800);
        };
    });
}

/* =========================================
   FLIP CARD HANDLER (EDUCATION) - Support click/tap on touch devices
   ========================================= */
function initFlipCards() {
    // Toggle flip on click/tap while ignoring inner interactive elements
    document.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a, button, .ripple-btn')) return;
            this.classList.toggle('is-flipped');
        });
    });

    // Close flipped cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.flip-card')) {
            document.querySelectorAll('.flip-card.is-flipped').forEach(c => c.classList.remove('is-flipped'));
        }
    });

    // When education swiper changes slide, reset flipped state
    if (typeof educationSwiper !== 'undefined' && educationSwiper && typeof educationSwiper.on === 'function') {
        educationSwiper.on('slideChange', function() {
            document.querySelectorAll('.flip-card.is-flipped').forEach(c => c.classList.remove('is-flipped'));
        });
    }
}

/* =========================================
   2. SMART LOADING SCREEN LOGIC
   ========================================= */
const loadingScreen = document.getElementById('loading-screen');

// loadingStatuses is now in data.js

let width = 0;
let isPageLoaded = false; // Flag penanda halaman sudah load penuh

// Event saat semua aset (gambar, css, js) benar-benar selesai dimuat
window.addEventListener('load', () => {
    isPageLoaded = true;
    initSwipers(); // Inisialisasi slider di background
    initFlipCards(); // Enable click/tap to flip education cards
    updateLanguageUI(); // Update UI & Typewriter saat load
    initSystemCheck(); // Jalankan pengecekan sistem
    initHeroVisuals(); // Inisialisasi efek visual hero baru
});

// Fallback check jika page sudah loaded sebelum script jalan (Mencegah Stuck 99%)
if (document.readyState === 'complete') isPageLoaded = true;

// Fungsi untuk menjalankan animasi loading (bisa dipanggil ulang)
async function startLoadingAnimation() {
    // Reset State UI
    width = 0;
    if(loadingScreen) {
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('loading-finished', 'bg-transparent');
    }
    document.body.style.overflow = 'hidden';
    
    // Reset Konten Loading
    const loaderContent = document.getElementById('loader-content');
    if(loaderContent) loaderContent.style.opacity = '1';

    // Reset Logo Visibility
    const logo = document.getElementById('loading-logo');
    if(logo) logo.classList.remove('opacity-0');

    // Reset System Overlay
    const sysOverlay = document.getElementById('sys-overlay');
    if(sysOverlay) {
        sysOverlay.classList.add('hidden');
        sysOverlay.style.opacity = ''; 
        sysOverlay.style.transition = '';
    }
    
    // Reset Tombol Masuk
    const sysAction = document.getElementById('sys-action-container');
    if(sysAction) sysAction.classList.add('hidden');
    const sysBtn = document.getElementById('sys-enter-btn');

    if(sysBtn) {
        sysBtn.innerHTML = `<span class="relative z-10 flex items-center justify-center gap-2 tracking-widest"><i class='bx bx-power-off'></i> INITIALIZE UPLINK</span><div class="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>`;
        sysBtn.classList.remove('cursor-wait', 'opacity-80', 'animate-pulse', 'uplink-pulse');
    }

    // Bersihkan Console System
    const consoleDiv = document.getElementById('sys-console');
    if(consoleDiv) consoleDiv.innerHTML = '';

    // Reset Status Dot
    const statusDot = document.getElementById('sys-status-dot');
    if(statusDot) {
        statusDot.classList.remove('bg-green-500', 'animate-pulse');
        statusDot.classList.add('bg-red-500');
    }
    const statusTextEl = document.getElementById('sys-status-text');
    if(statusTextEl) {
        statusTextEl.innerText = "Disconnected";
        statusTextEl.classList.remove('text-green-400');
    }

    // Helper: Detect Mobile Device
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    // Mulai Interval Loading
    const interval = setInterval(() => {
        if (width >= 99 && !isPageLoaded) {
            return; 
        }

        if (width >= 100) {
            clearInterval(interval);
            
            // DESKTOP & MOBILE FLOW: Langsung ke System Diagnosis
            if(loaderContent) loaderContent.style.opacity = '0';

            if(sysOverlay) {
                sysOverlay.classList.remove('hidden');
                runSystemSequence().then(() => {
                    finishLoading();
                });
            }
        } else {
            width++;

        }
    }, 50); // Diperlambat dari 25ms ke 50ms
}

// Jalankan saat pertama kali load
if (loadingScreen) {
    startLoadingAnimation();
}

// Fungsi Replay Global
window.replayIntro = function() {
    window.scrollTo(0, 0);
    startLoadingAnimation();
}

// Fungsi Finalisasi Loading (Dipanggil setelah sequence selesai)
function finishLoading() {
    loadingScreen.classList.add('loading-finished');
    loadingScreen.classList.add('bg-transparent'); 

    // REVEAL UI ELEMENTS (Fade In)
    const uiElements = [
        document.getElementById('main-header'),
        document.getElementById('mobile-logo'),
        document.getElementById('mobile-menu-btn'),
        document.getElementById('floating-lang-toggle')
    ];
    
    uiElements.forEach(el => {
        if(el) el.classList.remove('opacity-0');
    });

    // Fade out system overlay if visible
    const sysOverlay = document.getElementById('sys-overlay');
    if(sysOverlay) {
        sysOverlay.style.transition = 'opacity 0.8s ease';
        sysOverlay.style.opacity = '0';
    }
    
    // Restart Hero Typewriter agar user melihat dan mendengarnya setelah loading selesai
    const heroDesc = document.querySelector('[data-i18n="hero_desc"]');
    if(heroDesc && typeof translations !== 'undefined' && translations[currentLang]) {
        setTimeout(() => {
             typeWriterGlobal(heroDesc, translations[currentLang]['hero_desc']);
        }, 500);
    }
    
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-out-cubic',
        });
    }

    setTimeout(() => {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'auto';

        // --- Auto Open AI Chat after 10s ---
        // Fitur: Otomatis buka chat jika user diam selama 10 detik
        if (typeof aiAutoOpenTimer !== 'undefined') {
            aiAutoOpenTimer = setTimeout(() => {
                const modal = document.getElementById('ai-modal');
                // Hanya buka jika belum terbuka
                if (modal && modal.classList.contains('hidden')) {
                    if (typeof showAiBadge === 'function') showAiBadge();
                }
            }, 10000);
        }
    }, 1000);
}

/* =========================================
   3. MOBILE MENU & NAVIGATION
   ========================================= */
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-menu-overlay');
const transitionOverlay = document.getElementById('page-transition-overlay');

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
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (menu && overlay && btn) {
            menu.classList.add('hidden');
            overlay.classList.remove('show');
            const icon = btn.querySelector('i');
            if(icon) {
                icon.classList.remove('bx-x');
                icon.classList.add('bx-menu');
            }
        }

        // Transition Effect
        if (transitionOverlay) {
            transitionOverlay.classList.remove('hidden');
            void transitionOverlay.offsetWidth; // Trigger reflow
            transitionOverlay.classList.remove('opacity-0');
            
            setTimeout(() => {
                const target = document.querySelector(targetId);
                if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
                
                setTimeout(() => {
                    transitionOverlay.classList.add('opacity-0');
                    setTimeout(() => {
                        transitionOverlay.classList.add('hidden');
                    }, 500);
                }, 800); // Logo visible duration
            }, 500); // Fade in duration
        } else {
             const target = document.querySelector(targetId);
             if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* =========================================
   4. DYNAMIC NAVBAR SCROLL
   ========================================= */
const header = document.getElementById('main-header');
const scrollIndicator = document.getElementById('scroll-indicator');
const langToggle = document.getElementById('floating-lang-toggle');
const navItems = document.querySelectorAll('.nav-item');
const navIndicator = document.getElementById('nav-indicator');
const sections = document.querySelectorAll('section');
let lastScrollY = window.scrollY;

// Scroll Logic for Navbar Appearance
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
        header.classList.add('nav-scrolled');
    } else {
        header.classList.remove('nav-scrolled');
    }

    // Hide Scroll Indicator on Scroll
    if (scrollIndicator) {
        if (currentScrollY > 50) {
            scrollIndicator.classList.add('opacity-0');
        } else {
            scrollIndicator.classList.remove('opacity-0');
        }
    }

    // Hide/Show Floating Lang Toggle
    if (langToggle) {
        let isNearSectionTop = false;
        const showThreshold = 300; // Tombol terlihat di 300px pertama setiap section

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Cek apakah scroll berada di area atas section (Buffer -150px s/d +300px)
            if (currentScrollY >= (sectionTop - 150) && currentScrollY <= (sectionTop + showThreshold)) {
                isNearSectionTop = true;
            }
        });

        // Selalu muncul di paling atas halaman
        if (currentScrollY < 100) isNearSectionTop = true;

        if (isNearSectionTop) {
            // Animasi Bounce saat muncul (Cubic Bezier Overshoot)
            langToggle.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease';
            langToggle.style.transform = 'translateY(0)';
            langToggle.style.opacity = '1';
        } else {
            // Animasi normal saat hilang
            langToggle.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            langToggle.style.transform = 'translateY(-100px)';
            langToggle.style.opacity = '0';
        }
    }
    lastScrollY = currentScrollY;
});

// Active Link & Indicator Logic
function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
            moveIndicator(link);
        }
    });
}

/* =========================================
   11. HERO VISUAL EFFECTS (NEW CONCEPT)
   ========================================= */
function initHeroVisuals() {
    // 1. Text Scramble Effect (Efek Dekripsi Nama)
    const title = document.querySelector('.hero-title-scramble');
    if (title) {
        const originalText = title.getAttribute('data-original-text') || title.innerText;
        // Store original text if not stored
        if(!title.getAttribute('data-original-text')) title.setAttribute('data-original-text', originalText);
        
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>";
        let iterations = 0;
        
        // Trigger on load
        const runScramble = () => {
            iterations = 0;
            const interval = setInterval(() => {
                title.innerText = originalText
                    .split("")
                    .map((letter, index) => {
                        if(index < iterations) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("");
                
                if(iterations >= originalText.length) clearInterval(interval);
                iterations += 1 / 2; // Speed
            }, 30);
        };
        
        // Jalankan saat halaman siap
        setTimeout(runScramble, 1000); // Delay sedikit agar tidak tabrakan dengan loading
        
        // Re-trigger on hover
        title.addEventListener('mouseenter', runScramble);
    }

    // 2. Mouse Parallax for Aurora (Efek Gerak Background)
    const aurora = document.querySelector('.hero-aurora-layer');
    if (aurora) {
        document.addEventListener('mousemove', (e) => {
            // Kalkulasi posisi mouse relatif terhadap tengah layar
            const x = (e.clientX / window.innerWidth - 0.5) * 20; // Range gerak -10px s/d 10px
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            // Terapkan transform dengan smooth transition (via CSS default)
            aurora.style.transform = `translateX(calc(-50% + ${x}px)) translateY(${y}px) scale(1.1)`;
        });
    }

    // 3. Image Parallax (Efek 3D pada Foto)
    const heroImg = document.querySelector('.hero-profile-img');
    if (heroImg) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 15; // Gerakan horizontal
            const y = (e.clientY / window.innerHeight - 0.5) * 15; // Gerakan vertikal
            
            // Gambar bergerak berlawanan arah mouse untuk efek kedalaman
            heroImg.style.transform = `translateX(${-x}px) translateY(${-y}px)`;
        });
    }

    // 4. Giant Text Parallax (Efek Gerak Teks Belakang)
    const bgText = document.querySelector('.hero-bg-text');
    if (bgText) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40; // Gerak lebih lebar
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            
            bgText.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}

function moveIndicator(element) {
    if (!navIndicator) return;
    
    // Only show indicator if we are in desktop view (nav is visible)
    const nav = document.getElementById('desktop-nav');
    if (!nav || window.getComputedStyle(nav).display === 'none') return;

    const width = element.offsetWidth;
    const left = element.offsetLeft;
    
    navIndicator.style.width = `${width}px`;
    navIndicator.style.left = `${left}px`;
    navIndicator.style.opacity = '1';
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('resize', updateActiveLink);
// Initial call
setTimeout(updateActiveLink, 100);

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
    glow.style.background = 'radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, rgba(0, 194, 255, 0) 70%)';
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
                colors.push(0.0, 0.76, 1.0, life); 
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
   6. LANGUAGE TRANSLATION LOGIC
   ========================================= */

// translations is now in data.js

// 2. State Bahasa Saat Ini (Default ID)
let currentLang = localStorage.getItem('celestiq_lang') || 'id'; 

// --- GLOBAL TYPEWRITER SETUP ---
const globalTypeSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2358/2358-preview.mp3');
globalTypeSound.volume = 0.2;
let globalTypingTimeout;

function typeWriterGlobal(element, text, speed = 40) {
    if (!element) return;
    
    if (globalTypingTimeout) clearTimeout(globalTypingTimeout);
    element.textContent = "";
    
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            
            // Cek apakah loading screen masih aktif (mencegah suara bocor saat loading)
            const loadingScreen = document.getElementById('loading-screen');
            const isLoading = loadingScreen && loadingScreen.style.display !== 'none' && !loadingScreen.classList.contains('loading-finished');

            if (!isLoading && Math.random() > 0.5) {
                globalTypeSound.currentTime = 0;
                globalTypeSound.play().catch(() => {});
            }
            i++;
            globalTypingTimeout = setTimeout(type, speed);
        }
    }
    type();
}

// 3. Fungsi Update UI Bahasa
function updateLanguageUI() {
    // Update Konten Website
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            // Terapkan Typewriter khusus untuk hero_desc (Profil)
            if (key === 'hero_desc') {
                typeWriterGlobal(el, translations[currentLang][key]);
            } else {
                el.innerHTML = translations[currentLang][key];
            }
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

    // --- LOGIKA ANIMASI PRESISI (MOBILE) ---
    const sliderMob = document.getElementById('lang-slider-mobile');
    const labelIdMob = document.getElementById('label-id-mobile');
    const labelEnMob = document.getElementById('label-en-mobile');

    if (sliderMob && labelIdMob && labelEnMob) {
        if (currentLang === 'en') {
            sliderMob.style.transform = 'translateX(100%)'; 
            labelIdMob.classList.remove('text-white');
            labelIdMob.classList.add('text-gray-500');
            labelEnMob.classList.remove('text-gray-500');
            labelEnMob.classList.add('text-white');
        } else {
            sliderMob.style.transform = 'translateX(0)';
            labelEnMob.classList.remove('text-white');
            labelEnMob.classList.add('text-gray-500');
            labelIdMob.classList.remove('text-gray-500');
            labelIdMob.classList.add('text-white');
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
let aiAutoOpenTimer = null;
const aiModal = document.getElementById('ai-modal');
const aiBox = document.getElementById('ai-box');
const closeAiBtn = document.getElementById('close-ai');
const letsTalkBtn = document.getElementById('lets-talk-btn');
const chatBody = document.getElementById('ai-chat-body');
const optionsContainer = document.getElementById('ai-options');
const inputForm = document.getElementById('ai-input-form');
const userInput = document.getElementById('user-input');
let userName = localStorage.getItem('celestiq_username');

// --- DRAG TO SCROLL FOR AI OPTIONS (DESKTOP) ---
if (optionsContainer) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Set initial styles for drag interaction
    optionsContainer.style.cursor = 'grab';
    optionsContainer.style.userSelect = 'none';

    optionsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        optionsContainer.style.cursor = 'grabbing';
        startX = e.pageX - optionsContainer.offsetLeft;
        scrollLeft = optionsContainer.scrollLeft;
    });
    optionsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        optionsContainer.style.cursor = 'grab';
    });
    optionsContainer.addEventListener('mouseup', () => {
        isDown = false;
        optionsContainer.style.cursor = 'grab';
    });
    optionsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - optionsContainer.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        optionsContainer.scrollLeft = scrollLeft - walk;
    });
}

// aiChatData is now in data.js

function showAiBadge() {
    const badge = document.getElementById('ai-badge');
    if (badge) {
        badge.classList.remove('scale-0');
        badge.classList.add('scale-100');
        // Sound effect for attention
        new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3').play().catch(()=>{});
    }
}

function openAI() {
    // Clear auto-open timer if user opens manually (prevent double trigger)
    if (aiAutoOpenTimer) clearTimeout(aiAutoOpenTimer);

    // Hide Badge when opened
    const badge = document.getElementById('ai-badge');
    if (badge) {
        badge.classList.remove('scale-100');
        badge.classList.add('scale-0');
    }

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
            addMessage('Halo! Saya Noctua AI. Boleh tau nama kamu siapa?', 'ai');
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
    // Parse Markdown-style bold (**text**) to HTML <strong>text</strong>
    const parsedText = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');

    const div = document.createElement('div');
    if (sender === 'ai') {
        div.className = 'flex gap-3';
        div.innerHTML = `<div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-bot'></i></div><div class="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed border border-white/5">${parsedText}</div>`;
    } else {
        div.className = 'flex gap-3 flex-row-reverse';
        div.innerHTML = `<div class="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-user'></i></div><div class="bg-primary/20 p-3 rounded-2xl rounded-tr-none text-sm text-white leading-relaxed border border-primary/20">${parsedText}</div>`;
    }
    chatBody.appendChild(div);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });
}

function addTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'flex gap-3';
    div.id = 'typing-indicator';
    div.innerHTML = `<div class="w-8 h-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white text-xs"><i class='bx bx-bot'></i></div><div class="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-gray-200 leading-relaxed border border-white/5 flex items-center gap-1"><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></span><span class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span></div>`;
    chatBody.appendChild(div);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: 'smooth' });
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
        addMessage('Halo! Saya Noctua AI. Boleh tau nama kamu siapa?', 'ai');
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
    const descEl = element.querySelector('p');
    const i18nKey = descEl.getAttribute('data-i18n');
    
    // Default: ambil teks yang tampil saat ini
    let descId = descEl.textContent;
    let descEn = descEl.textContent;

    // Cek kamus translations dari data.js untuk mendapatkan kedua bahasa
    if (i18nKey && typeof translations !== 'undefined') {
        if (translations.id && translations.id[i18nKey]) descId = translations.id[i18nKey];
        if (translations.en && translations.en[i18nKey]) descEn = translations.en[i18nKey];
    }

    // Cek jika ada override deskripsi detail (custom attribute)
    const customDetail = element.getAttribute('data-detail-desc');

    // Cek apakah ada atribut data-img (untuk Experience), jika tidak gunakan tag img (untuk Portfolio)
    let imgSrc = element.getAttribute('data-img');
    if (!imgSrc) {
        const imgEl = element.querySelector('img');
        if (imgEl) imgSrc = imgEl.src;
    }

    // Deteksi Tipe: Apakah dari section Experience atau Portfolio?
    const sectionType = element.closest('#experience') ? 'experience' : 'portfolio';

    // Extract Category (Event, Training, Certification, etc.)
    let category = 'Event';
    if (sectionType === 'experience') {
        const catSpan = element.querySelector('span.tracking-widest.uppercase');
        if (catSpan) category = catSpan.textContent.trim();
    } else {
        category = 'Project';
    }

    const data = {
        img: imgSrc,
        role: element.getAttribute('data-role-title'),
        title: element.querySelector('h3').textContent,
        link: element.getAttribute('data-link'),
        year: element.getAttribute('data-year'),
        organizer: element.getAttribute('data-organizer'),
        role_real: element.getAttribute('data-role-title'),
        type: sectionType, // Kirim tipe section ke detail.html
        category: category,
        
        // Simpan kedua versi bahasa (gunakan customDetail jika ada, jika tidak gunakan kamus)
        desc_id: customDetail || descId,
        desc_en: customDetail || descEn
    };
    localStorage.setItem('celestiq_detail', JSON.stringify(data));
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
    // --- RATE LIMIT UI MANAGER ---
    function updateRateLimitUI() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const STORAGE_KEY = 'celestiq_contact_history';
        const LIMIT = 2;
        const ONE_MONTH = 30 * 24 * 60 * 60 * 1000; 
        const now = Date.now();

        let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        // Filter expired
        history = history.filter(timestamp => (now - timestamp) < ONE_MONTH);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));

        // Remove existing message
        const existingMsg = document.getElementById('rate-limit-msg');
        if (existingMsg) existingMsg.remove();

        if (history.length >= LIMIT) {
            const oldestTimestamp = history[0];
            const resetTime = oldestTimestamp + ONE_MONTH;
            
            // Disable Button
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-50', 'cursor-not-allowed', 'grayscale');
            
            // Show Email Suggestion
            const msgDiv = document.createElement('div');
            msgDiv.id = 'rate-limit-msg';
            msgDiv.className = 'text-center mt-3 text-xs text-red-400 animate-pulse font-mono';
            msgDiv.innerHTML = `Kuota habis. Silakan hubungi via <a href="mailto:gusthipangestu1906@gmail.com" class="underline hover:text-white font-bold">Email</a> saja.`;
            submitBtn.parentNode.insertBefore(msgDiv, submitBtn.nextSibling);

            // Real-time Countdown
            if (window.rateLimitInterval) clearInterval(window.rateLimitInterval);
            
            const updateTimer = () => {
                const currentNow = Date.now();
                const diff = resetTime - currentNow;

                if (diff <= 0) {
                    clearInterval(window.rateLimitInterval);
                    updateRateLimitUI(); // Refresh state
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                submitBtn.innerHTML = `<i class='bx bx-time-five'></i> Wait: ${days}d ${hours}h ${minutes}m ${seconds}s`;
            };

            updateTimer();
            window.rateLimitInterval = setInterval(updateTimer, 1000);
        } else {
             // Restore Button if previously disabled
             if (submitBtn.disabled && submitBtn.classList.contains('cursor-not-allowed')) {
                 submitBtn.disabled = false;
                 submitBtn.classList.remove('opacity-50', 'cursor-not-allowed', 'grayscale');
                 submitBtn.innerHTML = `Send Message <i class='bx bx-send group-hover:translate-x-1 transition-transform'></i>`;
             }
        }
    }

    // Init UI on Load
    updateRateLimitUI();

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // --- RATE LIMIT CHECK (2x / Month) ---
        const STORAGE_KEY = 'celestiq_contact_history';
        const LIMIT = 2;
        const ONE_MONTH = 30 * 24 * 60 * 60 * 1000; // 30 Days in ms
        const now = Date.now();

        let history = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        // Filter: Hanya simpan timestamp yang kurang dari 30 hari yang lalu
        history = history.filter(timestamp => (now - timestamp) < ONE_MONTH);
        
        if (history.length >= LIMIT) {
            // Hitung mundur kapan slot tersedia kembali (berdasarkan timestamp terlama)
            const oldestTimestamp = history[0]; 
            const resetTime = oldestTimestamp + ONE_MONTH;
            const diff = resetTime - now;

            // Konversi ke Hari, Jam, Menit
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60)); // Ceil agar minimal 1 menit

            const waitText = `${days > 0 ? days + ' hari ' : ''}${hours > 0 ? hours + ' jam ' : ''}${minutes} menit`;

            showToast('error', 'Limit Reached', `Kuota habis. Coba lagi dalam: ${waitText}.`);
            contactForm.classList.add('shake-animation');
            setTimeout(() => contactForm.classList.remove('shake-animation'), 500);
            return;
        }

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
                
                // Simpan timestamp pengiriman berhasil
                history.push(Date.now());
                localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
                
                // Update UI (Disable button immediately)
                updateRateLimitUI();
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

/* =========================================
   RIPPLE EFFECT HANDLER
   ========================================= */
document.addEventListener('click', function(e) {
    const target = e.target.closest('.ripple-btn');
    if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        
        // Make it large enough to cover the button
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size/2}px`;
        ripple.style.top = `${y - size/2}px`;

        target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

/* =========================================
   12. PORTFOLIO FILTER LOGIC
   ========================================= */
let originalPortfolioSlides = [];

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.portfolioSwiper .swiper-wrapper');
    if(wrapper) {
        // Clone nodes to preserve events and data before Swiper initializes
        originalPortfolioSlides = Array.from(wrapper.children).map(node => node.cloneNode(true));
    }
});

function filterPortfolio(category, btn) {
    // Update UI Buttons
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-primary/10', 'border-primary/50', 'text-white');
        b.classList.add('bg-white/5', 'border-white/10', 'text-gray-400');
    });
    btn.classList.remove('bg-white/5', 'border-white/10', 'text-gray-400');
    btn.classList.add('active', 'bg-primary/10', 'border-primary/50', 'text-white');

    if (typeof portfolioSwiper !== 'undefined') {
        const filtered = originalPortfolioSlides.filter(slide => {
            if (category === 'all') return true;
            const role = slide.querySelector('.glass-card').getAttribute('data-role-title').toLowerCase();
            if (category === 'graphic') return role.includes('graphic') || role.includes('pdd') || role.includes('design');
            if (category === 'operator') return role.includes('operator') || role.includes('obs');
            return false;
        }).map(slide => {
            const clone = slide.cloneNode(true);
            clone.classList.add('filter-anim');
            return clone;
        });

        portfolioSwiper.removeAllSlides();
        portfolioSwiper.appendSlide(filtered);
        portfolioSwiper.loopDestroy();
        portfolioSwiper.loopCreate();
        portfolioSwiper.update();
        portfolioSwiper.slideTo(0);
    }
}