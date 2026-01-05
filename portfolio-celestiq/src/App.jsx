import React, { useState, useEffect, useRef } from 'react';

// --- DATA PEMAIN (DATABASE) ---
const playerData = {
  name: "Gusthi Pangestu",
  role: "Informatics Engineering Student",
  version: "v2.5.0",
  bio: "Currently pursuing Informatics Engineering at PENS (Electronic Engineering Polytechnic Institute of Surabaya). Passionate about Network Engineering and crafting intuitive UI/UX designs.",
  stats: [
    { 
      label: "Visual/OBS", 
      val: 95,
      skills: [
        { name: "OBS Studio", val: 95 }
      ]
    }, 
    { 
      label: "Design", 
      val: 85,
      skills: [
        { name: "Canva", val: 90 },
        { name: "Figma", val: 75 },
        { name: "Photoshop", val: 70 }
      ]
    },     
    { 
      label: "Web Dev", 
      val: 75,
      skills: [
        { name: "Node.js", val: 65 },
        { name: "Docker", val: 60 }
      ]
    }     
  ],
  projects: [ 
    { name: "PMCC (PUBG Mobile)", role: "Judge", status: "Esports" },
    { name: "MBEX Expo", role: "Main Visual Ops", status: "Completed" },
    { name: "ITDS Insight", role: "Creative Design", status: "Branding" },
    { name: "Community Week", role: "PDD & Operator", status: "Event" }, 
    { name: "LMB CERDAS", role: "PJ / Trainer", status: "Training" },
    { name: "Agile Tech Fest", role: "PDD", status: "Expo" }, 
    { name: "ELTAFEST 25", role: "Operator", status: "Competition" }
  ],
  socials: {
    linkedin: "linkedin.com/in/gusthipangestu",
    github: "github.com/gusthipangestu"
  }
};

// --- KOMPONEN TYPEWRITER (EFEK MENGETIK) ---
const Typewriter = ({ text, speed = 30, className = "", onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    setDisplayText('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse border-r-2 border-current ml-0.5 h-4 inline-block align-middle opacity-70"></span>
    </span>
  );
};

// --- KOMPONEN IDENTITY CARD (UPDATED: Auto Trigger Next Step) ---
const IdentityCard = ({ onReadComplete }) => {
    // Teks AI mengambil data secara dinamis dari playerData
    const aiText = `System Analysis: Gusthi Pangestu identified. Role: ${playerData.role}. Bio Data: "${playerData.bio}"`;

    const handleTypingComplete = () => {
        // Setelah selesai mengetik, tunggu 3 detik (waktu baca), lalu trigger next step
        if (onReadComplete) {
            setTimeout(() => {
                onReadComplete();
            }, 3000); 
        }
    };

    return (
        <div className="my-4 p-5 border border-purple-500/30 bg-gray-900/80 rounded-xl max-w-3xl animate-fade-in relative overflow-hidden">
            {/* Decorative Dots */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Avatar Section */}
                <div className="shrink-0 flex flex-col items-center">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden group bg-black flex items-center justify-center">
                            <img 
                            src={`https://ui-avatars.com/api/?name=${playerData.name}&background=0d0d12&color=a855f7&size=256&bold=true`}
                            alt="Profile" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent opacity-50 animate-pulse pointer-events-none"></div>
                    </div>
                    <div className="mt-4 text-center">
                        <div className="text-[10px] text-gray-500 tracking-widest uppercase">System Status</div>
                        <div className="text-xs font-bold text-green-400 flex items-center gap-1 justify-center mt-1">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            ONLINE / ACTIVE
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 space-y-4 w-full">
                    <div>
                        <div className="text-xs text-purple-400 mb-1">IDENTITY RECORD FOUND</div>
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-1">{playerData.name}</h2>
                        <div className="flex flex-wrap gap-2 items-center text-sm mt-2">
                            <span className="text-purple-300 font-mono bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">{playerData.role}</span>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400 text-xs">LOC: IDN (GMT+7)</span>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-purple-500/30 to-transparent"></div>
                    
                    {/* DYNAMIC DESCRIPTION BOX - ALWAYS AI LOG */}
                    <div className="bg-white/5 p-4 rounded-lg border-l-2 border-purple-500 min-h-[80px]">
                        <div className="text-purple-300 text-sm font-mono leading-relaxed">
                            <span className="bg-purple-900/50 text-purple-400 text-[10px] px-1 rounded mr-2 uppercase font-bold">AI LOG</span>
                            <Typewriter 
                                text={aiText} 
                                speed={25} 
                                onComplete={handleTypingComplete} 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div className="bg-black/20 p-2 rounded border border-white/5">
                            <div className="text-[10px] text-gray-500 uppercase">System Ver</div>
                            <div className="text-xs text-white font-mono">{playerData.version}</div>
                        </div>
                        <div className="bg-black/20 p-2 rounded border border-white/5">
                            <div className="text-[10px] text-gray-500 uppercase">Exp Level</div>
                            <div className="text-xs text-yellow-400 font-mono">LVL 25 (Senior)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- KOMPONEN MENU INTERAKTIF (UPDATED: Supports filtering) ---
const MenuGrid = ({ onCommand, modules = ['about', 'skills', 'quests', 'socials', 'logout'] }) => {
    return (
        <div className="my-4 animate-fade-in">
            <div className="flex items-center justify-between border-b border-purple-500/50 pb-2 mb-4">
                <span className="text-purple-400 font-bold tracking-widest text-sm flex items-center gap-2">
                    <i className='bx bx-grid-alt'></i> CELESTIAL_QUANTUM_CENTER
                </span>
                <span className="text-[10px] text-green-400 font-mono bg-green-900/20 px-2 py-0.5 rounded border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                    SYSTEM: ONLINE
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
                {/* IDENTITY MODULE */}
                {modules.includes('about') && (
                    <div 
                        onClick={() => onCommand('about')}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-purple-500/50 hover:bg-purple-900/10 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className='bx bx-id-card text-purple-500/50 text-4xl transform translate-x-2 -translate-y-2'></i>
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1 tracking-wider group-hover:text-purple-400 transition-colors">IDENTITY</div>
                        <div className="flex items-center justify-between z-10 relative">
                            <span className="text-yellow-400 font-mono font-bold text-lg group-hover:pl-2 transition-all">about</span>
                            <span className="text-xs text-gray-400 group-hover:text-white">View Profile Bio</span>
                        </div>
                    </div>
                )}

                {/* SKILL TREE MODULE */}
                {modules.includes('skills') && (
                    <div 
                        onClick={() => onCommand('skills')}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-green-500/50 hover:bg-green-900/10 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className='bx bx-git-branch text-green-500/50 text-4xl transform translate-x-2 -translate-y-2'></i>
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1 tracking-wider group-hover:text-green-400 transition-colors">CAPABILITIES</div>
                        <div className="flex items-center justify-between z-10 relative">
                            <span className="text-yellow-400 font-mono font-bold text-lg group-hover:pl-2 transition-all">skills</span>
                            <span className="text-xs text-gray-400 group-hover:text-white">Skill Tree & Stats</span>
                        </div>
                    </div>
                )}

                {/* ARCHIVES MODULE (EXPERIENCE) */}
                {modules.includes('quests') && (
                    <div 
                        onClick={() => onCommand('quests')}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-orange-500/50 hover:bg-orange-900/10 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className='bx bx-folder-open text-orange-500/50 text-4xl transform translate-x-2 -translate-y-2'></i>
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1 tracking-wider group-hover:text-orange-400 transition-colors">EXPERIENCE / ARCHIVES</div>
                        <div className="flex items-center justify-between z-10 relative">
                            <span className="text-yellow-400 font-mono font-bold text-lg group-hover:pl-2 transition-all">quests</span>
                            <span className="text-xs text-gray-400 group-hover:text-white">Project History</span>
                        </div>
                    </div>
                )}

                {/* NETWORK MODULE */}
                {modules.includes('socials') && (
                    <div 
                        onClick={() => onCommand('socials')}
                        className="bg-white/5 border border-white/5 rounded-lg p-3 hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className='bx bx-network-chart text-cyan-500/50 text-4xl transform translate-x-2 -translate-y-2'></i>
                        </div>
                        <div className="text-[10px] text-gray-500 mb-1 tracking-wider group-hover:text-cyan-400 transition-colors">NETWORK</div>
                        <div className="flex items-center justify-between z-10 relative">
                            <span className="text-yellow-400 font-mono font-bold text-lg group-hover:pl-2 transition-all">socials</span>
                            <span className="text-xs text-gray-400 group-hover:text-white">Connect Links</span>
                        </div>
                    </div>
                )}

                {/* SYSTEM OPS MODULE */}
                {modules.includes('logout') && (
                    <div 
                        onClick={() => onCommand('logout')}
                        className="bg-red-900/10 border border-red-500/20 rounded-lg p-3 hover:border-red-500/50 hover:bg-red-900/20 transition-all cursor-pointer group relative overflow-hidden active:scale-95"
                    >
                        <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <i className='bx bx-power-off text-red-500/50 text-4xl transform translate-x-2 -translate-y-2'></i>
                        </div>
                        <div className="text-[10px] text-red-400/60 mb-1 tracking-wider group-hover:text-red-400 transition-colors">SYSTEM OPS</div>
                        <div className="flex items-center justify-between z-10 relative">
                            <span className="text-red-400 font-mono font-bold text-lg group-hover:pl-2 transition-all">logout</span>
                            <span className="text-xs text-gray-400 group-hover:text-white">End Session</span>
                        </div>
                    </div>
                )}
            </div>
            
            <div className="mt-4 flex gap-4 text-[10px] text-gray-600 border-t border-dashed border-gray-800 pt-2">
               <span><span className="text-gray-500">USAGE:</span> Type command name OR Click Module</span>
               <span><span className="text-gray-500">TRY:</span> 'skills' or 'quests'</span>
            </div>
        </div>
    );
};

// --- KOMPONEN UTAMA (TERMINAL) ---
function App() {
  const [booting, setBooting] = useState(true);
  const [sessionActive, setSessionActive] = useState(false);
  const [username, setUsername] = useState("");
  const [isVip, setIsVip] = useState(false); 
  const [isFamily, setIsFamily] = useState(false); 
  const [guiMode, setGuiMode] = useState(false); 
  
  // STATE BARU: VERIFIKASI KEAMANAN & ERROR INPUT
  const [verificationMode, setVerificationMode] = useState(false); 
  const [pendingName, setPendingName] = useState(""); 
  const [inputError, setInputError] = useState(""); 
  
  // STATE BARU: MENGUNCI INPUT SAAT AI BERBICARA
  const [isProcessing, setIsProcessing] = useState(false);
  
  // STATE BARU: TRACKING USER JOURNEY
  const [viewedSkills, setViewedSkills] = useState(false);
  const [viewedQuests, setViewedQuests] = useState(false);

  const [history, setHistory] = useState([]); 
  const [inputVal, setInputVal] = useState("");
  
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const initialized = useRef(false);
  const triggerCommandRef = useRef(null);

  // --- REUSABLE FUNCTIONS ---
  
  const addToHistory = (content, type = 'output') => {
    setHistory(prev => [...prev, { id: Date.now() + Math.random(), type, content }]);
  };

  const showTempMsg = async (renderContent, txtLen, speed = 30) => {
     const id = Date.now() + Math.random();
     const duration = (txtLen * speed) + 1500; 
     setHistory(prev => [...prev, { id, type: 'output', content: renderContent }]);
     await new Promise(r => setTimeout(r, duration));
     setHistory(prev => prev.filter(i => i.id !== id));
  };

  const showSystemIntro = () => {
      addToHistory(
        <div className="my-4 p-4 border border-purple-500/50 rounded-lg bg-purple-900/10 animate-fade-in relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            
            <div className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                <i className='bx bxs-chip'></i> CELESTIAL QUANTUM SYSTEM v2.5.0
            </div>
            
            <div className="text-gray-300 text-sm leading-relaxed mb-3">
                Hello, <span className="text-white font-bold">Visitor</span>. You are attempting to connect to the 
                <span className="text-purple-300"> Celestial Quantum System</span>.
                <br/><br/>
                This construct manages the digital neural interface of Gusthi Pangestu. 
                Please identify yourself to proceed.
            </div>

            <div className="flex gap-4 text-[10px] text-gray-500 uppercase tracking-widest border-t border-purple-500/20 pt-2">
                <span>System: <span className="text-green-400">ONLINE</span></span>
                <span>Security: <span className="text-green-400">SECURE</span></span>
                <span>AI: <span className="text-purple-400">ACTIVE</span></span>
            </div>
        </div>
    );
  };

  // Helper untuk menampilkan Limited Menu
  const showLimitedMenu = () => {
      addToHistory(
         <MenuGrid onCommand={(cmd) => triggerCommandRef.current(cmd)} modules={['skills', 'quests']} />
      );
  };

  const triggerCommand = (cmd) => {
      if (isProcessing) return;
      handleCommand(cmd);
  };

  const showMenu = () => {
    // Menampilkan visual menu hanya untuk Skills dan Quests, 
    // namun command lain (about, socials, logout) tetap bisa diketik manual.
    addToHistory(<MenuGrid onCommand={(cmd) => triggerCommandRef.current(cmd)} modules={['skills', 'quests']} />);
  };

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const link = document.createElement("link");
    link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const savedUser = localStorage.getItem('celestiq_user');
    
    let isVipUser = false;
    let isFamilyUser = false;
    if (savedUser) {
        const vipFlag = localStorage.getItem('celestiq_vip');
        const familyFlag = localStorage.getItem('celestiq_family');
        if (vipFlag === 'true') isVipUser = true;
        if (familyFlag === 'true') isFamilyUser = true;
    }

    let bootLogs = [];
    if (savedUser) {
        bootLogs = [
            { text: "ESTABLISHING QUANTUM LINK...", delay: 200 },
            { text: "SYNCING NEURAL INTERFACE...", delay: 200 },
            { text: `IDENTITY RECOGNIZED: ${savedUser}`, delay: 300, color: "text-purple-400" },
            { text: "CELESTIAL SYSTEM AWAKENING...", delay: 300 },
            { text: "CONNECTION ESTABLISHED.", delay: 400, color: "text-green-500" }
        ];
    } else {
        bootLogs = [
            { text: "INITIALIZING QUANTUM KERNEL...", delay: 300 },
            { text: "LOADING AI PERSONA...", delay: 300 },
            { text: "VERIFYING BIOMETRICS...", delay: 400 },
            { text: "SYSTEM READY.", delay: 300, color: "text-green-500" }
        ];
    }

    const runBoot = async () => {
      setIsProcessing(true); 
      for (const log of bootLogs) {
        addToHistory(<div className={log.color || "text-gray-500"}>{`> ${log.text}`}</div>);
        await new Promise(r => setTimeout(r, log.delay));
      }
      
      if (savedUser) {
          setUsername(savedUser);
          if (isVipUser) setIsVip(true);
          if (isFamilyUser) setIsFamily(true);

          setSessionActive(true);
          await new Promise(r => setTimeout(r, 500));
          
          setIsProcessing(false); 
          startWelcomeSequence(savedUser, isVipUser || isFamilyUser);
      } else {
          await new Promise(r => setTimeout(r, 500));
          showSystemIntro(); 
          await new Promise(r => setTimeout(r, 800));
          addToHistory(<div className="text-white mt-2">To initiate a session, please state your name.</div>);
          addToHistory(<div className="text-yellow-500">Enter your name:</div>);
          setIsProcessing(false); 
      }
      
      setBooting(false);
    };

    runBoot();

    return () => {
        if(document.head.contains(link)){
            document.head.removeChild(link);
        }
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const keepFocus = () => !guiMode && !isProcessing && inputRef.current?.focus(); 

  const handleInputChange = (e) => {
      const val = e.target.value;
      if (val.length > 25) {
          setInputError("MAX 25 CHARACTERS ALLOWED");
          return;
      }
      if (/\d/.test(val)) {
          setInputError("NUMERIC CHARACTERS BLOCKED");
          return;
      }
      setInputError("");
      setInputVal(val);
  };

  // --- 1. SYSTEM LOGIN GREETING (LOGIN ONLY) ---
  const startWelcomeSequence = async (user, isSpecial) => {
      setIsProcessing(true); 
      
      const speedSystem = 30;

      // Pesan 1: Sapaan Login
      const greetingMsg = isSpecial 
        ? `Access granted. Welcome back, ${user}. Neural interface restored.` 
        : `Connection established. Greetings, ${user}.`;
      
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
            <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
            "<Typewriter text={greetingMsg} speed={speedSystem} className="text-purple-200" />"
        </div>,
        greetingMsg.length,
        speedSystem
      );

      // Pesan 2: Intro Diri AI
      const introMsg = "I am the Celestial Quantum System (v2.5). I am here to assist you in exploring this digital space.";
      
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
            <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
            "<Typewriter text={introMsg} speed={speedSystem} className="text-purple-200" />"
        </div>,
        introMsg.length,
        speedSystem
      );

      // Pesan 3: Transisi (Tanpa bocoran info)
      const autoMsg = "Initializing default startup sequence. Loading primary module...";
      
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
            <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
            "<Typewriter text={autoMsg} speed={speedSystem} className="text-purple-200" />"
        </div>,
        autoMsg.length,
        speedSystem
      );
      
      setIsProcessing(false); 
      
      // AUTO EXECUTE 'about' -> Memanggil IdentityCard
      if (triggerCommandRef.current) {
          triggerCommandRef.current('about', true); 
      }
  };

  // --- 2. ABOUT COMMAND LOGIC (DIPISAH) ---
  
  const handleProfileRead = async () => {
      setIsProcessing(true);
      
      const speed = 30;
      
      // Komentar AI 1
      const msg1 = "Identity record analysis complete.";
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
             <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
             "<Typewriter text={msg1} speed={speed} className="text-purple-200" />"
        </div>,
        msg1.length,
        speed
      );

      // Komentar AI 2 - Mengambil data skill tertinggi
      const msg2 = `It appears Gusthi has a high proficiency in ${playerData.stats[0].label} and ${playerData.stats[1].label}.`;
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
             <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
             "<Typewriter text={msg2} speed={speed} className="text-purple-200" />"
        </div>,
        msg2.length,
        speed
      );
      
      // Komentar AI 3
      const msg3 = "I have unlocked the full command center. Ready for further exploration?";
      await showTempMsg(
        <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
             <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
             "<Typewriter text={msg3} speed={speed} className="text-purple-200" />"
        </div>,
        msg3.length,
        speed
      );

      setIsProcessing(false);
      showMenu();
  };

  const runAboutSequence = async () => {
     // Gunakan fungsi handleProfileRead sebagai callback menggantikan showLimitedMenu langsung
     addToHistory(<IdentityCard onReadComplete={handleProfileRead} />);
  };

  const runGuidedTour = async () => {
      setIsProcessing(true);
      const tourSteps = [
          { msg: "Initiating Guided Tour Protocol...", delay: 500, type: "system" },
          { msg: "The 'Identity' module (command: about) contains the personal biography and operational role of Gusthi Pangestu.", delay: 4000 },
          { msg: "The 'Skill Tree' module (command: skills) visualizes the Core Attributes and their associated Tool Proficiencies in a hierarchical structure.", delay: 4000 },
          { msg: "The 'Archives' module (command: quests) is a record of past projects, missions, and achievements.", delay: 4000 },
          { msg: "Tour complete. You may now explore freely.", delay: 1000, type: "system" }
      ];

      for (const step of tourSteps) {
          if (step.type === 'system') {
              addToHistory(<div className="text-green-500 text-xs mt-2">{`> ${step.msg}`}</div>);
              await new Promise(r => setTimeout(r, 1000));
          } else {
              const speed = 25;
              const duration = (step.msg.length * speed) + 1500; 
              addToHistory(
                <div className="text-purple-300 border-l-2 border-purple-500 pl-3 my-2 animate-fade-in">
                    <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                    "<Typewriter text={step.msg} speed={speed} />"
                </div>
              );
              await new Promise(r => setTimeout(r, duration));
          }
      }
      showMenu();
      setIsProcessing(false);
  };

  const handleConversationalInput = (text) => {
      const lowerText = text.toLowerCase();
      const responses = {
          "hello": "Greetings. The system is functioning optimally.",
          "hi": "Hello there. How can I facilitate your exploration today?",
          "who are you": "I am the Celestial Quantum System (CQS) v2.5.0. An AI construct designed to bridge the gap between you and this data.",
          "apa kabar": "Sistem beroperasi pada efisiensi 100%. Terima kasih sudah bertanya.",
          "siapa kamu": "Saya adalah Celestial Quantum System. Asisten digital untuk memandu Anda di sini.",
          "thanks": "You are welcome. My processing power is at your disposal.",
          "thank you": "Affirmative. Happy to assist.",
          "bye": "If you wish to leave, simply type 'logout'.",
          "help": "I can show you the 'menu', or you can ask me to 'guide' you.",
          "system": "Yes? I am listening."
      };

      for (const key in responses) {
          if (lowerText.includes(key)) {
              const speed = 30;
              const responseText = responses[key];
              setIsProcessing(true);
              
              addToHistory(
                <div className="text-purple-300 border-l-2 border-purple-500 pl-3 my-2 animate-fade-in">
                    <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                    "<Typewriter text={responseText} speed={speed} />"
                </div>
              );

              const duration = (responseText.length * speed) + 800;
              setTimeout(() => {
                  setIsProcessing(false);
              }, duration);

              return true; 
          }
      }
      return false;
  };

  // --- HANDLE COMMAND UTAMA ---
  const handleCommand = async (cmd, isSystem = false) => {
    if (isProcessing && !isSystem) return;

    const cleanCmd = cmd.trim();
    
    let promptColor = "text-yellow-500";
    let promptText = "LOGIN >";
    
    if (verificationMode) {
        promptText = "SECURITY QUESTION >";
        promptColor = "text-red-500 animate-pulse";
    } else if (username) {
        promptText = `${username.toLowerCase()}@celestiq:~$`;
        if (isVip) {
            promptColor = "text-pink-500"; 
        } else if (isFamily) {
            promptColor = "text-cyan-400"; 
        } else {
            promptColor = "text-purple-500";
        }
    }

    addToHistory(
      <div className="flex gap-2">
        <span className={`${promptColor} font-bold shrink-0`}>{promptText}</span>
        <span className="text-white">{cmd}</span>
      </div>
    , 'input');

    if (!cleanCmd) return; 

    // --- LOGIKA LOGIN ---
    if (!username && !verificationMode) {
        const lowerName = cleanCmd.toLowerCase();
        let needsVerification = false;
        let securityQuestion = "What is your last name?";

        if (lowerName.includes("samantha") || lowerName.includes("sammy") || lowerName.includes("gisel") || lowerName.includes("gisela")) {
            needsVerification = true;
            if (lowerName.includes("gisel") || lowerName.includes("gisela")) securityQuestion = "What is your middle name?";
        }
        if (lowerName.includes("ananda") || lowerName.includes("pras") || lowerName.includes("yuni") || lowerName.includes("noto")) {
            needsVerification = true;
        }

        if (needsVerification) {
            setPendingName(cleanCmd);
            setVerificationMode(true);
            addToHistory(
                <div className="mt-4 mb-2 p-3 bg-red-900/10 border-l-4 border-red-500 rounded animate-fade-in">
                    <div className="flex items-center gap-2 text-red-400 font-bold mb-1">
                        <i className='bx bx-scan animate-pulse'></i>
                        <span>IDENTITY MATCH DETECTED</span>
                    </div>
                    <div className="text-xs font-mono text-gray-400 mb-2">
                        System detected potential high-level clearance signature. <br/>
                        Initiating Level-5 Verification Protocol...
                    </div>
                    <div className="w-full bg-gray-800 h-1 rounded overflow-hidden mb-2">
                        <div className="h-full bg-red-500 animate-[width_2s_ease-in-out_forwards]" style={{width: '100%'}}></div>
                    </div>
                </div>
            );
            setTimeout(() => {
                addToHistory(
                    <div className="text-white animate-fade-in mt-2">
                        <span className="text-yellow-400 font-bold bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20 mr-2">SECURITY QUESTION</span>
                        {securityQuestion}
                    </div>
                );
            }, 800);
            return;
        }

        setUsername(cleanCmd);
        setSessionActive(true); 
        localStorage.setItem('celestiq_user', cleanCmd);
        
        addToHistory(<div className="text-green-500 mt-1">IDENTITY CONFIRMED.</div>);
        setTimeout(() => startWelcomeSequence(cleanCmd, false), 500);
        return;
    }

    // --- LOGIKA VERIFIKASI ---
    if (verificationMode) {
        const answer = cleanCmd.toLowerCase();
        const pendingLower = pendingName.toLowerCase();
        let isVerified = false;
        let accessType = "VIP"; 

        if (pendingLower.includes("samantha") || pendingLower.includes("sammy")) {
            if (answer === "purvance") isVerified = true;
        } else if (pendingLower.includes("gisel") || pendingLower.includes("gisela")) {
            if (answer === "yeftania") isVerified = true;
        }
        else if (pendingLower.includes("ananda") || pendingLower.includes("pras")) {
            if (answer.includes("prasetyo") || answer.includes("wicaksono")) {
                isVerified = true;
                accessType = "FAMILY";
            }
        } 
        else if (pendingLower.includes("yuni")) {
            if (answer.includes("kusumawati")) { 
                isVerified = true;
                accessType = "FAMILY";
            }
        } 
        else if (pendingLower.includes("noto")) {
            if (answer.includes("asmoro")) { 
                isVerified = true;
                accessType = "FAMILY";
            }
        }

        if (isVerified) {
            setUsername(pendingName);
            setSessionActive(true);
            setVerificationMode(false);
            localStorage.setItem('celestiq_user', pendingName);

            if (accessType === "VIP") {
                setIsVip(true);
                localStorage.setItem('celestiq_vip', 'true');
                addToHistory(
                    <div className="my-4 p-1 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-fade-in">
                        <div className="bg-black/90 rounded-lg p-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><i className='bx bxs-crown text-6xl text-yellow-500'></i></div>
                            <h3 className="text-2xl font-bold text-white mb-2">Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">{pendingName}</span></h3>
                            <p className="text-gray-400 text-sm">System recognizes your biometric signature. Level 10 clearance granted.</p>
                        </div>
                    </div>
                );
            } else if (accessType === "FAMILY") {
                setIsFamily(true);
                localStorage.setItem('celestiq_family', 'true');
                addToHistory(
                    <div className="my-4 p-1 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 animate-fade-in">
                        <div className="bg-black/90 rounded-lg p-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20"><i className='bx bxs-home-heart text-6xl text-cyan-400'></i></div>
                            <h3 className="text-2xl font-bold text-white mb-2">Welcome Home, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{pendingName}</span></h3>
                            <p className="text-gray-400 text-sm">Special access granted. Thank you for visiting my digital world.</p>
                        </div>
                    </div>
                );
            }
            setTimeout(() => startWelcomeSequence(pendingName, true), 800);
        } else {
            setUsername(pendingName);
            setIsVip(false);
            setIsFamily(false); 
            setSessionActive(true);
            setVerificationMode(false);
            localStorage.setItem('celestiq_user', pendingName);
            localStorage.removeItem('celestiq_vip');
            localStorage.removeItem('celestiq_family');

            addToHistory(<div className="text-red-500 mt-1">❌ VERIFICATION FAILED. INCORRECT ANSWER.</div>);
            addToHistory(<div className="text-gray-400 mt-1">Logging in with <span className="text-white">STANDARD GUEST</span> privileges...</div>);
            setTimeout(() => startWelcomeSequence(pendingName, false), 800);
        }
        return;
    }

    // --- COMMAND HANDLER ---
    
    const lowerCmd = cleanCmd.toLowerCase();

    if (handleConversationalInput(lowerCmd)) {
        return;
    }

    if (lowerCmd === 'logout' || lowerCmd === 'exit') {
         const logoutSteps = [
             { text: `Saving preferences...`, delay: 300 },
             { text: "System shutting down...", delay: 500, color: "text-red-500" }
         ];

         const runLogout = async () => {
             setIsProcessing(true);
             for (const step of logoutSteps) {
                 addToHistory(<div className={step.color || "text-gray-400"}>{step.text}</div>);
                 await new Promise(r => setTimeout(r, step.delay));
             }

             localStorage.removeItem('celestiq_user');
             localStorage.removeItem('celestiq_vip');
             localStorage.removeItem('celestiq_family');

             setTimeout(() => {
                 setHistory([]); 
                 setUsername(""); 
                 setSessionActive(false); 
                 setIsVip(false); 
                 setIsFamily(false);
                 setVerificationMode(false);
                 showSystemIntro();
                 addToHistory(<div className="text-white mt-2">System ready for new connection.</div>);
                 addToHistory(<div className="text-yellow-500">Enter your name:</div>);
                 setIsProcessing(false);
             }, 1000);
         };
         runLogout();
         return;
    }

    switch (lowerCmd) {
      case 'help': 
      case 'menu': 
      case 'start': 
        showMenu();
        break;
      
      case 'guide':
      case 'tour':
        runGuidedTour();
        break;

      case 'about':
        await runAboutSequence();
        break;

      case 'skills':
      case 'stats': 
        setIsProcessing(true);
        setViewedSkills(true); // Mark as viewed

        const welcomeMsg = `Welcome, ${username || 'User'}. Prepare to be impressed. I am unveiling the elite capabilities that make Gusthi Pangestu truly exceptional. Let me show you just how cool this unit really is.`;
        await showTempMsg(
            <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                "<Typewriter text={welcomeMsg} speed={30} className="text-purple-200" />"
            </div>,
            welcomeMsg.length,
            30
        );

        const skillMsg = "Accessing Neural Skill Tree... Retrieving technical competencies.";
        await showTempMsg(
            <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                "<Typewriter text={skillMsg} speed={30} className="text-purple-200" />"
            </div>,
            skillMsg.length,
            30
        );

        addToHistory(
           <div className="my-2 space-y-4 max-w-xl font-mono animate-fade-in">
              <div className="text-xs text-gray-500 tracking-[0.2em] mb-2">SYSTEM_CAPABILITIES_MANIFEST</div>
              
              {playerData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-purple-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-2">
                    <span>[{stat.label}]</span>
                    <span className="text-[10px] text-purple-500/50 hidden md:inline">------------------</span>
                  </div>
                  
                  <div className="pl-4 border-l border-gray-800 ml-1 space-y-2">
                     {stat.skills.map((skill, j) => (
                        <div key={j} className="flex items-center gap-3">
                           <span className="w-24 text-gray-400 text-xs shrink-0">{skill.name}</span>
                           <div className="flex-1 h-2 bg-gray-800/50 rounded-none overflow-hidden max-w-[200px]">
                              <div className="h-full bg-green-500" style={{width: `${skill.val}%`}}></div>
                           </div>
                           <span className="text-green-400 text-xs w-8 text-right font-mono">{skill.val}%</span>
                        </div>
                     ))}
                  </div>
                </div>
              ))}
           </div>
        );

        // Cross-promotion: If Quests haven't been seen yet
        if (!viewedQuests) {
             const suggestMsg = "I notice you haven't explored the 'Quests' archives yet. Don't you want to see the missions Gusthi has completed?";
             addToHistory(
                <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                    <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                    "<Typewriter text={suggestMsg} speed={30} className="text-purple-200" />"
                </div>
            );
            await new Promise(r => setTimeout(r, (suggestMsg.length * 30) + 1000));
        }

        setIsProcessing(false);
        break;

      case 'quests':
        setIsProcessing(true);
        setViewedQuests(true); // Mark as viewed

        const questMsg = "Accessing Mission Archives... Retrieving project history logs.";
        await showTempMsg(
            <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                "<Typewriter text={questMsg} speed={30} className="text-purple-200" />"
            </div>,
            questMsg.length,
            30
        );

        addToHistory(
           <div className="my-2 space-y-2 max-w-xl animate-fade-in">
              <div className="flex border-b border-gray-700 pb-1 mb-2 text-gray-500 text-xs uppercase">
                 <span className="flex-1">Quest Name</span>
                 <span className="w-28">Role</span>
                 <span className="w-24 text-right">Type</span>
              </div>
              {playerData.projects.map((p, i) => (
                 <div key={i} className="flex hover:bg-white/5 p-1 rounded transition-colors">
                    <span className="flex-1 text-white font-bold">{p.name}</span>
                    <span className="w-28 text-gray-400 text-xs">{p.role}</span>
                    <span className={`w-24 text-right text-xs ${p.status === 'Completed' || p.status === 'Esports' ? 'text-green-400' : 'text-blue-400'}`}>{p.status}</span>
                 </div>
              ))}
           </div>
        );

        // Cross-promotion: If Skills haven't been seen yet
        if (!viewedSkills) {
             const suggestMsg = "You've seen the history, but what about the capabilities? Don't you want to check the 'Skills' section to see what makes this possible?";
             addToHistory(
                <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                    <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                    "<Typewriter text={suggestMsg} speed={30} className="text-purple-200" />"
                </div>
            );
            await new Promise(r => setTimeout(r, (suggestMsg.length * 30) + 1000));
        }

        setIsProcessing(false);
        break;
      
      case 'socials':
        setIsProcessing(true);
        const socialMsg = "Opening Secure Communication Channels... Establishing network links.";
        
        addToHistory(
            <div className="text-purple-300 border-l-2 border-purple-500 pl-3 mb-2 animate-fade-in">
                <span className="text-[10px] text-purple-500 uppercase font-bold tracking-widest block mb-1">Celestial AI</span>
                "<Typewriter text={socialMsg} speed={30} className="text-purple-200" />"
            </div>
        );
        
        await new Promise(r => setTimeout(r, (socialMsg.length * 30) + 800));

        addToHistory(
            <div className="my-2 flex gap-4 animate-fade-in">
                <a href={`https://${playerData.socials.linkedin}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline hover:text-blue-300">
                    <i className='bx bxl-linkedin'></i> LinkedIn
                </a>
                <a href={`https://${playerData.socials.github}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:underline hover:text-white">
                    <i className='bx bxl-github'></i> GitHub
                </a>
            </div>
        );
        setIsProcessing(false);
        break;

      case 'clear':
        setHistory([]);
        break;

      default:
        addToHistory(<div className="text-red-500">Command not found: '{lowerCmd}'. Type 'help' for info.</div>);
    }
  };

  triggerCommandRef.current = handleCommand;

  const onKeyDown = (e) => {
    if (isProcessing) return;

    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal("");
      setInputError(""); 
    }
  };

  if (guiMode) {
      return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col animate-fade-in">
             <button 
                onClick={() => setGuiMode(false)}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-red-600 text-white p-2 rounded-full backdrop-blur-md transition-colors border border-white/10 group"
                title="Return to Terminal"
             >
                <i className='bx bx-x text-xl group-hover:rotate-90 transition-transform'></i>
             </button>
             <iframe 
                src="https://gusthipangestu1906.github.io/Portofolio-Service/" 
                className="flex-1 w-full h-full border-none bg-white"
                title="Gusthi Pangestu Portfolio"
             />
        </div>
      );
  }

  return (
    <div 
        className="min-h-screen bg-[#050509] text-gray-300 p-4 font-mono text-sm md:text-base relative selection:bg-purple-500/50 selection:text-white"
        onClick={keepFocus}
    >
      <div className="scanlines"></div>
      <div className="screen-glow"></div>

      <div className="max-w-4xl mx-auto h-full flex flex-col pt-10 pb-20 relative z-10">
         <div className="flex justify-between border-b border-gray-800 pb-2 mb-4 opacity-50 text-xs">
            <div>CELESTIAL_QUANTUM_SYSTEM [v2.5.0]</div>
            <div>SECURE_CONNECTION: ENCRYPTED</div>
         </div>

         <div className="flex-1 space-y-1">
            {history.map((item) => (
               <div key={item.id} className="animate-fade-in break-words">
                  {item.content}
               </div>
            ))}
            <div ref={bottomRef}></div>
         </div>

         <div className="mt-4">
            <div className="flex items-center">
                {username ? (
                    <span className={`${isVip ? "text-pink-500" : isFamily ? "text-cyan-400" : "text-purple-500"} mr-2 font-bold shrink-0`}>{username.toLowerCase()}@celestiq:~$</span>
                ) : (
                    <span className={`${verificationMode ? "text-red-500" : "text-yellow-500"} mr-2 font-bold shrink-0 animate-pulse`}>
                        {verificationMode ? 'SECURITY CHECK >' : "LOGIN >"}
                    </span>
                )}
                
                <input 
                   ref={inputRef}
                   type="text" 
                   value={inputVal}
                   onChange={handleInputChange} 
                   onKeyDown={onKeyDown}
                   disabled={isProcessing}
                   className={`bg-transparent border-none outline-none text-white w-full font-mono caret-transparent ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`} 
                   autoFocus
                   autoComplete="off"
                   spellCheck="false"
                />
                {!isProcessing && <span className="cursor-blink -ml-[1px]"></span>}
            </div>
            {inputError && (
                <div className="text-red-500 text-xs mt-1 animate-bounce font-bold">
                    <i className='bx bxs-error-circle'></i> {inputError}
                </div>
            )}
            {isProcessing && (
                <div className="text-purple-500/50 text-[10px] mt-1 animate-pulse">
                    <i className='bx bx-loader-alt bx-spin'></i> AI PROCESSING...
                </div>
            )}
         </div>
      </div>
    </div>
  );
}

export default App;