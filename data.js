/* =========================================
   DATA STORAGE
   ========================================= */

// 1. Loading Screen Statuses
window.loadingStatuses = [
    "> INITIALIZING KERNEL...",
    "> LOADING ASSETS...",
    "> COMPILING SHADERS...",
    "> OPTIMIZING FOR MOBILE...",
    "> DECRYPTING DATA...",
    "> ACCESS GRANTED"
];

// 2. Language Translations
window.translations = {
    id: {
        // Navbar
        nav_home: "Home",
        nav_about: "About",
        nav_edu: "Education",
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

        // Education Section
        edu_title: "Riwayat Pendidikan",
        edu_subtitle: "Latar belakang akademik dan kualifikasi formal.",
        edu_pens_degree: "Teknik Informatika",
        edu_pens_desc: "Fokus pada Rekayasa Perangkat Lunak, Algoritma, dan Pengembangan Web. Aktif dalam organisasi HIMIT dan kegiatan kemahasiswaan.",
        edu_smk_degree: "Teknik Jaringan Akses (TJA)",
        edu_smk_desc: "Mempelajari infrastruktur jaringan, fiber optik, dan teknologi akses telekomunikasi di SMK Telkom Sidoarjo.",
        
        edu_tefa_degree: "SEO Web Specialist",
        edu_tefa_desc: "Program Teaching Factory kolaborasi dengan Jagoan Hosting. Fokus pada optimasi website, strategi konten, dan analisis trafik web.",
        
        edu_intern_degree: "Marketing Communication",
        edu_intern_desc: "Magang di Performa Optima Group. Bertanggung jawab atas komunikasi pemasaran, branding perusahaan, dan manajemen media sosial.",

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
        nav_edu: "Education",
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

        // Education Section
        edu_title: "Education History",
        edu_subtitle: "Academic background and formal qualifications.",
        edu_pens_degree: "Informatics Engineering",
        edu_pens_desc: "Focused on Software Engineering, Algorithms, and Web Development. Active in HIMIT organization and student activities.",
        edu_smk_degree: "Access Network Engineering",
        edu_smk_desc: "Focused on network infrastructure, fiber optics, and telecommunication access technology at SMK Telkom Sidoarjo.",
        
        edu_tefa_degree: "SEO Web Specialist",
        edu_tefa_desc: "Teaching Factory program with Jagoan Hosting. Focused on website optimization, content strategy, and web traffic analysis.",
        
        edu_intern_degree: "Marketing Communication",
        edu_intern_desc: "Internship at Performa Optima Group. Responsible for marketing communication, corporate branding, and social media management.",

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

// 3. AI Chat Data
window.aiChatData = {
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
