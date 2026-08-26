'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PortfolioData } from '@/types/portfolio';
import { X, Terminal, Send, ShieldCheck, RefreshCw } from 'lucide-react';

interface CelestiqTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  lang?: string;
}

interface LogEntry {
  type: 'system' | 'user' | 'ai' | 'error' | 'success';
  content: string;
}

export const CelestiqTerminalModal: React.FC<CelestiqTerminalModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [booting, setBooting] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    setBooting(true);
    setLogs([]);

    const bootMessages: LogEntry[] = [
      { type: 'system', content: 'INITIALIZING CELESTIQ NEURAL KERNEL v2.5.0...' },
      { type: 'system', content: 'SCANNING HARDWARE ARCHITECTURE (PENS INFORMATICS)...' },
      { type: 'system', content: 'ESTABLISHING SECURE QUANTUM LINK (TLS_AES_256_GCM)...' },
      { type: 'success', content: 'SYSTEM READY: GUSTHI PANGESTU // CYBER IDENTITY LOADED' },
      { type: 'ai', content: 'Selamat datang di Celestial Quantum Terminal. Ketik "help" untuk melihat perintah atau gunakan tombol modul di bawah.' }
    ];

    let delay = 0;
    bootMessages.forEach((msg, idx) => {
      delay += 300;
      setTimeout(() => {
        setLogs((prev) => [...prev, msg]);
        if (idx === bootMessages.length - 1) {
          setBooting(false);
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      }, delay);
    });
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setLogs((prev) => [...prev, { type: 'user', content: `$ ${cmd}` }]);

    switch (trimmed) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          {
            type: 'system',
            content: `PERINTAH TERSEDIA:
- about     : Menampilkan bio & ringkasan profil Gusthi
- skills    : Melihat pohon keahlian (OBS, Desain, Web)
- quests    : Menampilkan histori event & proyek unggulan
- socials   : Menampilkan tautan jejaring & kontak
- stats     : Melihat metrik performa & status sistem
- clear     : Membersihkan layar terminal
- exit      : Menutup terminal`
          }
        ]);
        break;

      case 'about':
        setLogs((prev) => [
          ...prev,
          {
            type: 'ai',
            content: `[IDENTITAS] Gusthi Pangestu
Role: Informatics Engineering Student @ PENS | Lead Visual Operator & Designer.
Bio: Menggabungkan keahlian live multimedia broadcasting dengan rekayasa web modern.`
          }
        ]);
        break;

      case 'skills':
        setLogs((prev) => [
          ...prev,
          {
            type: 'ai',
            content: `[ARSENAL KEAHLIAN]
• OBS Studio (95%) [EXPERT]
• Canva Pro (92%) [EXPERT]
• Next.js / TypeScript (85%) [ADVANCED]
• Photoshop & Figma (85%) [ADVANCED]
• Live Stage Switching (92%) [EXPERT]`
          }
        ]);
        break;

      case 'quests':
      case 'projects':
        setLogs((prev) => [
          ...prev,
          {
            type: 'ai',
            content: `[HISTORI PROYEK / EVENT]
1. PUBG Mobile Campus Championship (PMCC) - Esports Judge
2. Minat Bakat Expo (MBEX 2025) - Lead Visual Operator (OBS)
3. ITDS Insight 2025 - Creative Design Lead
4. ELTAFEST 2025 - Stage Screen & Visual Jockey
5. LMB CERDAS - Design Workshop Instructor`
          }
        ]);
        break;

      case 'socials':
      case 'contact':
        setLogs((prev) => [
          ...prev,
          {
            type: 'ai',
            content: `[JARINGAN]
• GitHub   : ${data.socials.github}
• LinkedIn : ${data.socials.linkedin}
• Email    : ${data.email}
• Instagram: ${data.socials.instagram}`
          }
        ]);
        break;

      case 'stats':
        setLogs((prev) => [
          ...prev,
          {
            type: 'system',
            content: `[METRIK SISTEM]
• Events Handled: 15+ Major Events
• Experience    : 3+ Years Track Record
• System Status : 100% OPERATIONAL (ONLINE)`
          }
        ]);
        break;

      case 'clear':
        setLogs([]);
        break;

      case 'exit':
      case 'logout':
        onClose();
        break;

      default:
        setLogs((prev) => [
          ...prev,
          {
            type: 'error',
            content: `Perintah tidak dikenal: "${trimmed}". Ketik "help" untuk panduan.`
          }
        ]);
        break;
    }

    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl h-[620px] bg-[#07090e] border border-purple-500/40 rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(168,85,247,0.2)] font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 bg-purple-950/30 border-b border-purple-500/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            </div>
            <div className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>CELESTIQ_QUANTUM_CORE // GUSTHI_AI</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-2 px-5 py-2.5 bg-black/40 border-b border-purple-500/20 overflow-x-auto text-[11px]">
          <span className="text-gray-500 shrink-0">QUICK:</span>
          {['help', 'about', 'skills', 'quests', 'socials', 'stats', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 transition-colors cursor-pointer shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        <div className="flex-1 p-5 overflow-y-auto space-y-2 text-xs text-gray-200">
          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log.type === 'system' && <span className="text-gray-400">{log.content}</span>}
              {log.type === 'user' && <span className="text-yellow-400 font-bold">{log.content}</span>}
              {log.type === 'ai' && (
                <div className="text-cyan-300 bg-cyan-950/20 p-2 rounded-lg border border-cyan-500/20 whitespace-pre-line">
                  {log.content}
                </div>
              )}
              {log.type === 'success' && (
                <span className="text-green-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 inline" /> {log.content}
                </span>
              )}
              {log.type === 'error' && <span className="text-red-400 font-bold">{log.content}</span>}
            </div>
          ))}
          {booting && (
            <div className="flex items-center gap-2 text-purple-400 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Memuat sistem modul...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 p-4 bg-purple-950/20 border-t border-purple-500/30"
        >
          <span className="text-cyan-400 font-bold pl-2">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={booting}
            placeholder={booting ? 'Menunggu inisialisasi...' : 'Ketik perintah ("help", "about", "skills")...'}
            className="flex-1 bg-transparent text-white text-xs outline-none font-mono placeholder:text-gray-600"
          />
          <button
            type="submit"
            disabled={booting || !inputVal.trim()}
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-40 text-white text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>KIRIM</span>
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
