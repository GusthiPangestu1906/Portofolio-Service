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

        enterBtn.onclick = () => {
            // Simple Enter Logic (Handshake already done at start)
            enterBtn.classList.remove('uplink-pulse');
            enterBtn.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> ESTABLISHING CONNECTION...";
            enterBtn.classList.add('cursor-wait', 'opacity-80');
            new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3').play().catch(()=>{});
            
            setTimeout(() => {
                resolve();
            }, 800);
        };
    });
}

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
    updateLanguageUI(); // Update UI & Typewriter saat load
    initSystemCheck(); // Jalankan pengecekan sistem
    initHeroVisuals(); // Inisialisasi efek visual hero baru
});

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

    if(progressBar) progressBar.style.width = '0%';
    if(percentageText) percentageText.innerText = '0%';

    // Helper: Detect Mobile Device
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    };

    // Mulai Interval Loading
    const interval = setInterval(() => {
        if (width >= 99 && !isPageLoaded) {
            if(statusText) statusText.innerText = "> WAITING FOR ASSETS...";
            return; 
        }

        if (width >= 100) {
            clearInterval(interval);
            
            if (isMobile()) {
                // MOBILE FLOW: Fingerprint Scan -> System Diagnosis
                startFingerprintScan().then(() => {
                    if(loaderContent) loaderContent.style.opacity = '0';

                    if(sysOverlay) {
                        sysOverlay.classList.remove('hidden');
                        runSystemSequence().then(() => {
                            finishLoading();
                        });
                    }
                });
            } else {
                // DESKTOP FLOW: Langsung ke System Diagnosis (Sesuai Request)
                if(loaderContent) loaderContent.style.opacity = '0';

                if(sysOverlay) {
                    sysOverlay.classList.remove('hidden');
                    runSystemSequence().then(() => {
                        finishLoading();
                    });
                }
            }
        } else {
            width++;
            if(progressBar) progressBar.style.width = width + '%';
            if(percentageText) percentageText.innerText = width + '%';

            if (width % 15 === 0 && width < 90) {
                 const randIdx = Math.floor(Math.random() * (loadingStatuses.length - 1));
                 if(statusText) statusText.innerText = loadingStatuses[randIdx];
            }
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
        hero_badge: "Open for Collaboration",
        hero_greeting: "Halo, Saya",
        // UPDATE TEKS KREATIF (INDONESIA)
        hero_title_highlight: "Realitas Digital.",
        hero_desc_creative: "Menggabungkan presisi teknis dengan estetika seni. Saya tidak sekadar mendesain; saya merekayasa pengalaman visual imersif yang meninggalkan kesan mendalam.",
        btn_start: "Mulai Kolaborasi",
        btn_cv: "Lihat Arsip",

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
        exp_itds_desc: "Merancang identitas visual utama ITDS Insight 2025, memproduksi 15+ aset grafis (Poster, Banner, Feeds) menggunakan Adobe Illustrator yang meningkatkan engagement media sosial HIMIT PENS.",
        
        exp_mbex_role: "Visual Operator",
        exp_mbex_desc: "Mengoperasikan visual panggung utama Minat Bakat Expo 2025 menggunakan OBS Studio, mengelola 50+ scene transisi dan multimedia live untuk audiens skala kampus.",
        
        exp_figma_role: "UI/UX Design",
        exp_figma_desc: "Menyelesaikan bootcamp UI/UX intensif, menghasilkan High-Fidelity Prototype aplikasi mobile dengan penerapan Design Thinking dan Auto-Layout di Figma.",
        
        exp_digiup_role: "Graphic Designer",
        exp_digiup_desc: "Lulus sertifikasi Digital Graphic Designer dengan predikat kompeten, menguasai manipulasi foto advanced dan layouting komersial menggunakan Adobe Photoshop.",
        
        exp_bnsp_role: "Junior Designer",
        exp_bnsp_desc: "Tersertifikasi kompetensi nasional (BNSP) skema Junior Graphic Designer, memvalidasi keahlian teknis dalam manajemen warna, tipografi, dan penyiapan file cetak standar industri.",
        
        exp_gla_role: "Graphic Design",
        exp_gla_desc: "Menuntaskan kursus fundamental desain grafis, memperdalam pemahaman teori warna dan komposisi visual untuk kebutuhan branding digital.",

        // Portfolio Section
        port_title: "Dokumentasi & Portofolio",
        port_subtitle: "Arsip proyek, kegiatan, dan sertifikasi.",
        
        port_pmcc_role: "AS JUDGE OF",
        port_pmcc_desc: "Berperan sebagai Juri Turnamen dalam kompetisi esports resmi PUBG Mobile Campus Championship, bertanggung jawab atas penegakan regulasi kompetisi, pemantauan integritas pertandingan, dan pengambilan keputusan strategis untuk memastikan fair play dan sportivitas di antara peserta mahasiswa.",
        
        port_pekan_role: "AS PDD & OPERATOR OF",
        port_pekan_desc: "Menjabat sebagai staf Publikasi, Dekorasi, dan Dokumentasi (PDD) sekaligus Operator OBS dalam Pekan Komunitas Teknologi dan Olahraga HIMIT PENS. Mengelola produksi visual live dan materi publikasi strategis untuk memperkenalkan ekosistem komunitas secara efektif kepada mahasiswa baru angkatan 2025.",
        
        port_mbex_role: "AS PDD & OPERATOR OF",
        port_mbex_desc: "Berkontribusi sebagai staf PDD dan Operator Visual dalam Minat Bakat Expo (MBEX) yang diselenggarakan oleh LMB PENS. Bertanggung jawab atas desain visual acara dan manajemen tampilan layar multimedia untuk memfasilitasi pengenalan Unit Kegiatan Mahasiswa (UKM) yang komprehensif kepada mahasiswa baru.",
        
        port_lmb_role: "AS PENANGGUNG JAWAB OF",
        port_lmb_desc: "Diamanahkan sebagai Penanggung Jawab (PJ) dalam kegiatan Pelatihan Desain LMB PENS. Mengoordinasikan kurikulum pelatihan, memfasilitasi sesi pembelajaran teori dan praktik desain grafis menggunakan Canva, serta membimbing peserta dalam pengembangan keterampilan visual dasar hingga menengah.",
        
        port_itds_role: "AS PDD OF",
        port_itds_desc: "Bertugas sebagai staf PDD dalam kegiatan ITDS Insight HIMIT PENS. Mengembangkan konsep visual dan materi edukasi kreatif untuk memperkenalkan kurikulum Program Studi IT serta etika perkuliahan kepada mahasiswa baru, memastikan penyampaian informasi yang efektif, menarik, dan mudah dipahami.",
        
        port_atfest_role: "AS PDD OF",
        port_atfest_desc: "Berperan sebagai staf PDD dalam Agile Teknik Festival (AT-FEST) PENS. Merancang aset visual menarik untuk pameran produk inovasi mahasiswa IT, mendukung strategi branding acara untuk menarik minat khalayak umum dan industri terhadap karya teknologi mahasiswa PENS.",
        
        port_elta_role: "AS OPERATOR OF",
        port_elta_desc: "Bertindak sebagai Operator Visual dalam ELTAFEST 25, sebuah kompetisi multi-bidang yang diselenggarakan oleh LMB PENS. Mengelola aspek teknis visualisasi acara secara profesional untuk mendukung kolaborasi antar UKM dan memastikan kelancaran jalannya perlombaan yang dinamis.",
        
        port_staff_role: "AS STAFF OF",
        port_staff_desc: "Menjalani masa bakti sebagai Staf Muda di Departemen Media dan Informasi (MEDFO) LMB PENS periode 2024-2025. Berkolaborasi secara aktif dengan Staf Ahli dalam pengelolaan media sosial organisasi, pembuatan konten kreatif, dan diseminasi informasi kegiatan kemahasiswaan yang strategis.",

        // Contact Section
        contact_title: "Mari Bekerja <br> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300\">Sama.</span>",
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
        hero_badge: "Open for Collaboration",
        hero_greeting: "Hi, I'm",
        // UPDATE TEKS KREATIF (INGGRIS)
        hero_title_highlight: "Digital Reality.",
        hero_desc_creative: "Merging technical precision with artistic chaos. I don't just design; I engineer immersive visual experiences that leave a mark.",
        btn_start: "Initiate Protocol",
        btn_cv: "Explore Archives",

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
        exp_itds_desc: "Fully responsible for the conceptualization and execution of the event's entire visual identity, including the creation of strategic digital assets such as posters, banners, and social media promotional materials to significantly enhance brand awareness and participant engagement.",
        
        exp_mbex_role: "Visual Operator",
        exp_mbex_desc: "Served as the Lead Visual Operator for Minat Bakat Expo 2025, managing real-time visual orchestration using OBS Studio to ensure seamless transitions and professional multimedia displays, supporting an immersive audience experience.",
        
        exp_figma_role: "UI/UX Design",
        exp_figma_desc: "Completed intensive training on UI/UX design principles, covering user research, wireframing, and interactive prototyping, while implementing Design Thinking methodologies using Figma software for user-centric design solutions.",
        
        exp_digiup_role: "Graphic Designer",
        exp_digiup_desc: "Delved into Graphic Design fundamentals through a comprehensive training program, focusing on visual composition, color theory, and typography, along with advanced technical application using Adobe Photoshop to produce industry-quality visual works.",
        
        exp_bnsp_role: "Junior Designer",
        exp_bnsp_desc: "Achieved national competency certification from BNSP as a Junior Graphic Designer, validating technical expertise and theoretical understanding in operating industry-standard design software and visual asset management in accordance with professional standards.",
        
        exp_gla_role: "Graphic Design",
        exp_gla_desc: "Completed a fundamental Graphic Design course covering basic visual aesthetics principles and digital image manipulation, strengthening the technical foundation in using Adobe Photoshop for creative needs and visual communication.",

        // Portfolio Section
        port_title: "Documentation & Portfolio",
        port_subtitle: "Archive of projects, activities, and certifications.",
        
        port_pmcc_role: "AS JUDGE OF",
        port_pmcc_desc: "Served as a Tournament Judge in the official PUBG Mobile Campus Championship esports competition, responsible for enforcing competition regulations, monitoring match integrity, and making strategic decisions to ensure fair play and sportsmanship among student participants.",
        
        port_pekan_role: "AS PDD & OPERATOR OF",
        port_pekan_desc: "Served as Publication, Decoration, and Documentation (PDD) staff as well as OBS Operator for the HIMIT PENS Technology and Sports Community Week. Managed live visual production and strategic publication materials to effectively introduce the community ecosystem to the class of 2025 freshmen.",
        
        port_mbex_role: "AS PDD & OPERATOR OF",
        port_mbex_desc: "Contributed as PDD staff and Visual Operator in the Minat Bakat Expo (MBEX) organized by LMB PENS. Responsible for event visual design and multimedia screen display management to facilitate a comprehensive introduction of Student Activity Units (UKM) to new students.",
        
        port_lmb_role: "AS PERSON IN CHARGE OF",
        port_lmb_desc: "Entrusted as the Person in Charge (PJ) for the LMB PENS Design Training activity. Coordinated the training curriculum, facilitated graphic design theory and practice sessions using Canva, and guided participants in developing basic to intermediate visual skills.",
        
        port_itds_role: "AS PDD OF",
        port_itds_desc: "Served as PDD staff in the HIMIT PENS ITDS Insight activity. Developed visual concepts and creative educational materials to introduce the IT Study Program curriculum and academic ethics to new students, ensuring effective, engaging, and comprehensible information delivery.",
        
        port_atfest_role: "AS PDD OF",
        port_atfest_desc: "Served as PDD staff in the PENS Agile Teknik Festival (AT-FEST). Designed engaging visual assets for the IT student innovation product exhibition, supporting the event branding strategy to attract public and industrial interest in PENS student technological works.",
        
        port_elta_role: "AS OPERATOR OF",
        port_elta_desc: "Acted as Visual Operator in ELTAFEST 25, a multi-disciplinary competition organized by LMB PENS. Professionally managed the technical visualization aspects of the event to support collaboration between UKMs and ensure the smooth running of dynamic competitions.",
        
        port_staff_role: "AS STAFF OF",
        port_staff_desc: "Served as Junior Staff in the Media and Information (MEDFO) Department of LMB PENS for the 2024-2025 period. Actively collaborated with Expert Staff in managing organizational social media, creating creative content, and strategically disseminating student activity information.",

        // Contact Section
        contact_title: "Let's Work <br> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300\">Sama.</span>",
        contact_desc: "Creating visual stories and digital experiences. Open for freelance projects and collaborations.",
        contact_subtitle: "Discuss your LCD Operator or Graphic Design needs to make your event a success.",
        contact_email_label: "Email Me",
        contact_linkedin_label: "Connect",
        footer_loc: "Surabaya, Indonesia",

        // Typewriter Words
        // UPDATE KATA-KATA TYPEWRITER BIAR LEBIH KEREN
        typewriter_words: ["Visual Alchemist", "LCD Operator", "Digital Artisan", "Tech Enthusiast"]
    }
};

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

const aiChatData = {
    id: {
        greeting: "Halo! Saya Noctua AI, asisten virtual Gusthi. Saya siap menjawab pertanyaan seputar Gusthi. Topik apa yang ingin kamu bahas?",
        options: [
            { text: "👤 Profil & Latar Belakang", next: "profile_menu" },
            { text: "🛠️ Skill & Tools", next: "skills_menu" },
            { text: "💼 Layanan & Jasa", next: "services_menu" },
            { text: "📞 Kontak", next: "contact_menu" }
        ],
        responses: {
            // --- PROFILE BRANCH ---
            profile_menu: {
                text: "Gusthi adalah seorang mahasiswa Teknik Informatika yang memiliki passion kuat di dunia visual. Apa yang ingin kamu ketahui lebih detail?",
                options: [
                    { text: "Siapa Gusthi?", next: "who_is" },
                    { text: "Pendidikan", next: "education" },
                    { text: "Pengalaman", next: "experience_info" },
                    { text: "⬅️ Kembali", next: "init" }
                ]
            },
            who_is: {
                text: "Gusthi Pangestu adalah 'Tech-Artist'. Siang hari dia ngoding sebagai mahasiswa PENS, malam hari (atau saat event) dia beraksi sebagai Visual Operator atau Graphic Designer. Kombinasi logika dan estetika.",
                options: [
                    { text: "Unik juga ya", next: "profile_menu" },
                    { text: "Lihat karyanya", action: "scroll_projects" }
                ]
            },
            education: {
                text: "Saat ini menempuh pendidikan di PENS (Politeknik Elektronika Negeri Surabaya) jurusan Teknik Informatika. Fokus pada Software Development, tapi sering 'belok' ke Multimedia.",
                options: [
                    { text: "Skill codingnya apa?", next: "skill_tech" },
                    { text: "Kembali", next: "profile_menu" }
                ]
            },
            experience_info: {
                text: "Sudah menangani 15+ event besar sebagai Operator Visual (OBS) dan Desain Grafis. Mulai dari event kampus, turnamen esports (PMCC), hingga expo.",
                options: [
                    { text: "Lihat buktinya", action: "scroll_projects" },
                    { text: "Kembali", next: "profile_menu" }
                ]
            },

            // --- SKILLS BRANCH ---
            skills_menu: {
                text: "Gusthi memiliki skillset hybrid. Mau bahas sisi teknis atau kreatif?",
                options: [
                    { text: "🎨 Sisi Kreatif (Design/Visual)", next: "skill_visual" },
                    { text: "💻 Sisi Teknis (Coding)", next: "skill_tech" },
                    { text: "⬅️ Kembali", next: "init" }
                ]
            },
            skill_visual: {
                text: "Di dunia visual, Gusthi ahli menggunakan **OBS Studio** untuk live production, **Adobe Photoshop & Illustrator** untuk desain grafis, dan **Figma** untuk UI/UX.",
                options: [
                    { text: "Kalau coding?", next: "skill_tech" },
                    { text: "Kembali", next: "skills_menu" }
                ]
            },
            skill_tech: {
                text: "Sebagai anak IT, dia menguasai **HTML, CSS, JavaScript** (seperti website ini!), serta dasar-dasar Backend dan Database. Dia suka membuat web yang interaktif.",
                options: [
                    { text: "Keren!", next: "skills_menu" },
                    { text: "Lihat Project Web", action: "scroll_projects" }
                ]
            },

            // --- SERVICES BRANCH ---
            services_menu: {
                text: "Gusthi terbuka untuk kolaborasi freelance. Layanan mana yang kamu butuhkan?",
                options: [
                    { text: "🖥️ Operator LCD/OBS", next: "srv_obs" },
                    { text: "✨ Graphic Design", next: "srv_design" },
                    { text: "⬅️ Kembali", next: "init" }
                ]
            },
            srv_obs: {
                text: "Jasa Operator Visual meliputi: Manajemen scene OBS, transisi live, playback video, dan setup layar LED/Proyektor agar event terlihat profesional.",
                options: [
                    { text: "Saya tertarik", next: "contact_menu" },
                    { text: "Kembali", next: "services_menu" }
                ]
            },
            srv_design: {
                text: "Jasa Desain meliputi: Pembuatan Poster, Banner, Feed Instagram, hingga kebutuhan visual branding untuk organisasi atau event.",
                options: [
                    { text: "Saya tertarik", next: "contact_menu" },
                    { text: "Kembali", next: "services_menu" }
                ]
            },

            // --- CONTACT BRANCH ---
            contact_menu: {
                text: "Siap berkolaborasi? Hubungi Gusthi melalui saluran berikut:",
                options: [
                    { text: "📧 Kirim Email", action: "email" },
                    { text: "🔗 LinkedIn", action: "linkedin" },
                    { text: "⬅️ Menu Utama", next: "init" }
                ]
            }
        }
    },
    en: {
        greeting: "Hello! I'm Noctua AI, Gusthi's virtual assistant. I'm ready to answer questions about Gusthi. What topic would you like to discuss?",
        options: [
            { text: "👤 Profile & Background", next: "profile_menu" },
            { text: "🛠️ Skills & Tools", next: "skills_menu" },
            { text: "💼 Services", next: "services_menu" },
            { text: "📞 Contact", next: "contact_menu" }
        ],
        responses: {
            // --- PROFILE BRANCH ---
            profile_menu: {
                text: "Gusthi is an Informatics Engineering student with a strong passion for the visual world. What would you like to know in detail?",
                options: [
                    { text: "Who is Gusthi?", next: "who_is" },
                    { text: "Education", next: "education" },
                    { text: "Experience", next: "experience_info" },
                    { text: "⬅️ Back", next: "init" }
                ]
            },
            who_is: {
                text: "Gusthi Pangestu is a 'Tech-Artist'. By day he codes as a PENS student, by night (or during events) he acts as a Visual Operator or Graphic Designer. A mix of logic and aesthetics.",
                options: [
                    { text: "Unique!", next: "profile_menu" },
                    { text: "See his work", action: "scroll_projects" }
                ]
            },
            education: {
                text: "Currently studying at PENS (Electronic Engineering Polytechnic Institute of Surabaya) majoring in Informatics Engineering. Focused on Software Development, but often 'swerves' into Multimedia.",
                options: [
                    { text: "Coding skills?", next: "skill_tech" },
                    { text: "Back", next: "profile_menu" }
                ]
            },
            experience_info: {
                text: "Has handled 15+ major events as a Visual Operator (OBS) and Graphic Designer. Ranging from campus events, esports tournaments (PMCC), to expos.",
                options: [
                    { text: "Show me proof", action: "scroll_projects" },
                    { text: "Back", next: "profile_menu" }
                ]
            },

            // --- SKILLS BRANCH ---
            skills_menu: {
                text: "Gusthi has a hybrid skillset. Want to discuss the technical or creative side?",
                options: [
                    { text: "🎨 Creative Side (Design/Visual)", next: "skill_visual" },
                    { text: "💻 Technical Side (Coding)", next: "skill_tech" },
                    { text: "⬅️ Back", next: "init" }
                ]
            },
            skill_visual: {
                text: "In the visual world, Gusthi is an expert in **OBS Studio** for live production, **Adobe Photoshop & Illustrator** for graphic design, and **Figma** for UI/UX.",
                options: [
                    { text: "What about coding?", next: "skill_tech" },
                    { text: "Back", next: "skills_menu" }
                ]
            },
            skill_tech: {
                text: "As an IT student, he masters **HTML, CSS, JavaScript** (like this website!), as well as Backend and Database basics. He loves creating interactive webs.",
                options: [
                    { text: "Cool!", next: "skills_menu" },
                    { text: "See Web Projects", action: "scroll_projects" }
                ]
            },

            // --- SERVICES BRANCH ---
            services_menu: {
                text: "Gusthi is open for freelance collaborations. Which service do you need?",
                options: [
                    { text: "🖥️ LCD/OBS Operator", next: "srv_obs" },
                    { text: "✨ Graphic Design", next: "srv_design" },
                    { text: "⬅️ Back", next: "init" }
                ]
            },
            srv_obs: {
                text: "Visual Operator services include: OBS scene management, live transitions, video playback, and LED/Projector screen setup for professional-looking events.",
                options: [
                    { text: "I'm interested", next: "contact_menu" },
                    { text: "Back", next: "services_menu" }
                ]
            },
            srv_design: {
                text: "Design services include: Creation of Posters, Banners, Instagram Feeds, to visual branding needs for organizations or events.",
                options: [
                    { text: "I'm interested", next: "contact_menu" },
                    { text: "Back", next: "services_menu" }
                ]
            },

            // --- CONTACT BRANCH ---
            contact_menu: {
                text: "Ready to collaborate? Contact Gusthi via the following channels:",
                options: [
                    { text: "📧 Send Email", action: "email" },
                    { text: "🔗 LinkedIn", action: "linkedin" },
                    { text: "⬅️ Main Menu", next: "init" }
                ]
            }
        }
    }
};

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
   SINGLE FINGERPRINT SCAN LOGIC
   ========================================= */
function startFingerprintScan() {
    return new Promise((resolve) => {
        const instruction = document.getElementById('scan-instruction');
        const target = document.getElementById('fingerprint-target');
        const statusText = document.getElementById('loader-status');
        const progressBar = document.getElementById('progress-bar');
        
        // Hide Logo when scan starts
        const logo = document.getElementById('loading-logo');
        if(logo) logo.classList.add('opacity-0');

        // Show UI
        if(instruction) instruction.classList.remove('hidden');
        if(target) target.classList.remove('hidden');
        if(statusText) statusText.innerText = "> BIOMETRIC REQUIRED";
        if(progressBar) progressBar.style.width = '0%';

        // Prevent Context Menu (Klik Kanan/Tahan Lama) di Mobile
        target.oncontextmenu = function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        };

        let holdStart = 0;
        let holdInterval;
        const holdDuration = 1500; // 1.5s hold time
        let isSuccess = false; // Flag agar tidak double trigger
        
        const onTouchStart = (e) => {
            if (isSuccess) return;
            // Prevent default to stop scrolling/zooming while scanning
            if(e.cancelable) e.preventDefault();
            
            // Check finger count (only 1 allowed)
            if (e.touches && e.touches.length > 1) {
                if(statusText) {
                    statusText.innerText = "> ERROR: SINGLE FINGER ONLY";
                    statusText.classList.add('text-red-500');
                }
                return;
            }

            holdStart = Date.now();
            if(statusText) {
                statusText.innerText = "> IDENTIFYING...";
                statusText.classList.remove('text-red-500');
                statusText.classList.add('text-primary');
            }
            
            // Visual feedback: Spin rings faster
            document.body.classList.add('scanning-active');
            if(navigator.vibrate) navigator.vibrate(50);

            holdInterval = setInterval(() => {
                const elapsed = Date.now() - holdStart;
                const progress = Math.min((elapsed / holdDuration) * 100, 100);
                
                if(progressBar) progressBar.style.width = progress + '%';

                if (elapsed >= holdDuration) {
                    success();
                }
            }, 30);
        };

        const onTouchEnd = () => {
            if (isSuccess) return;
            clearInterval(holdInterval);
            document.body.classList.remove('scanning-active');
            if(progressBar) progressBar.style.width = '0%';
            if(statusText) {
                statusText.innerText = "> BIOMETRIC REQUIRED";
                statusText.classList.remove('text-primary', 'text-red-500');
            }
        };

        const success = () => {
            isSuccess = true;
            clearInterval(holdInterval);
            document.body.classList.remove('scanning-active');
            
            // Visual Success Effect on Fingerprint
            const fpContainer = target.querySelector('.relative');
            if(fpContainer) {
                fpContainer.classList.add('ring-success');

                // Generate Green Particles Effect
                for (let i = 0; i < 30; i++) {
                    const p = document.createElement('div');
                    p.classList.add('scan-particle');
                    
                    // Random direction & distance
                    const angle = Math.random() * Math.PI * 2;
                    const dist = 60 + Math.random() * 80; // Spread distance (60px - 140px)
                    
                    p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
                    p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
                    
                    // Random size & delay
                    const size = Math.random() * 4 + 2 + 'px';
                    p.style.width = size;
                    p.style.height = size;
                    p.style.animationDelay = Math.random() * 0.2 + 's';
                    
                    fpContainer.appendChild(p);
                    
                    // Cleanup particle after animation
                    setTimeout(() => p.remove(), 1000);
                }
            }

            const fpSvg = target.querySelector('svg');
            if(fpSvg) {
                fpSvg.classList.remove('animate-pulse');
                fpSvg.classList.add('fingerprint-success');
            }
            
            if(navigator.vibrate) navigator.vibrate([100, 50, 100]);
            
            // Play Access Granted Sound
            const successSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3');
            successSound.volume = 0.5;
            successSound.play().catch(() => {});
            
            if(statusText) {
                statusText.innerText = "> IDENTITY VERIFIED";
                statusText.classList.add('text-green-500');
            }
            if(instruction) {
                instruction.innerText = "ACCESS GRANTED";
                instruction.classList.add('text-green-500');
            }
            if(progressBar) {
                progressBar.style.width = '100%';
                progressBar.classList.add('bg-green-500');
            }

            // Cleanup listeners
            target.removeEventListener('touchstart', onTouchStart);
            target.removeEventListener('touchend', onTouchEnd);
            target.removeEventListener('mousedown', onTouchStart);
            target.removeEventListener('mouseup', onTouchEnd);
            target.removeEventListener('mouseleave', onTouchEnd);

            setTimeout(() => {
                // Sembunyikan UI Scan agar bersih
                if(instruction) instruction.classList.add('hidden');
                if(target) target.classList.add('hidden');
                resolve();
            }, 800);
        };

        // Add listeners
        target.addEventListener('touchstart', onTouchStart, {passive: false});
        target.addEventListener('touchend', onTouchEnd);
        target.addEventListener('mousedown', onTouchStart);
        target.addEventListener('mouseup', onTouchEnd);
        target.addEventListener('mouseleave', onTouchEnd);
    });
}