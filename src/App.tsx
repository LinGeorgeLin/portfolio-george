/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Disc, 
  Github, 
  Instagram, 
  Mail, 
  ExternalLink 
} from "lucide-react";
import GeorgeAvatar from './assets/GeorgeAvatar.jpg';

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h3 className="text-xl font-bold mt-9 mb-4 inline-block border-b-4 border-[#525252]">
    {children}
  </h3>
);

const SocialItem = ({ 
  href, 
  icon: Icon, 
  children 
}: { 
  href: string; 
  icon: any; 
  children: ReactNode 
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-3 text-accent-teal no-underline rounded-lg transition-colors hover:bg-accent-teal/10 font-bold"
    whileHover={{ x: 5 }}
  >
    <Icon className="mr-3 w-5 h-5" />
    {children}
  </motion.a>
);

export default function App() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-24 selection:bg-accent-teal/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full h-14 backdrop-blur-md bg-bg-dark/50 z-50 flex justify-center items-center border-b border-border-glass">
        <div className="w-full max-w-[500px] px-5 font-bold">
          George Lin
        </div>
      </nav>

      <main className="w-full max-w-[500px] pt-24 px-5">
        {/* Hero Section */}
        <motion.div 
          className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-center mb-10 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <div className="flex-1">
            <h1 className="text-3xl font-bold">林子鈞 (George)</h1>
            <p className="text-base leading-relaxed text-[#e2e8f0] mt-1">
              Digital Craftsman ( Student / Dev / Guitarist )
            </p>
          </div>
          <motion.div 
            className="w-24 h-24 rounded-full border-2 border-white overflow-hidden shadow-2xl flex-shrink-0"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={GeorgeAvatar}
              alt="George" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Work Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <SectionTitle>Work</SectionTitle>
          <p className="text-base leading-relaxed mb-4 text-[#e2e8f0]">
            我是國立中山大學企管系的學生，熱衷於將網頁設計、App 開發與人工智慧技術結合。我喜歡在簡潔的代碼中構建美感，並不斷探索 AI 在數位產品中的無限可能。
          </p>
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <SectionTitle>Hobbies</SectionTitle>
          <p className="text-base leading-relaxed mb-4 text-[#e2e8f0]">
            當我不寫程式時，通常會拿起吉他，沉浸在 Fingerstyle 的世界裡，或者是享受我的 Spotify 歌單。
          </p>
        </motion.section>

        {/* Spotify Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <SectionTitle>Playlist</SectionTitle>
          <div className="bg-glass rounded-[20px] p-6 border border-border-glass mt-5 relative overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center font-bold text-sm text-accent-teal">
                <Disc className="w-5 h-5 mr-2 animate-spin-slow" />
                <span>Currently Curating</span>
              </div>
              <div className="flex items-end gap-[2px] h-[15px]">
                <div className="w-[3px] bg-accent-teal rounded-[1px] animate-equalize h-[60%] [animation-delay:0.1s]" />
                <div className="w-[3px] bg-accent-teal rounded-[1px] animate-equalize h-full [animation-delay:0.3s]" />
                <div className="w-[3px] bg-accent-teal rounded-[1px] animate-equalize h-[80%] [animation-delay:0.2s]" />
                <div className="w-[3px] bg-accent-teal rounded-[1px] animate-equalize h-[50%] [animation-delay:0.4s]" />
              </div>
            </div>
            
            <motion.a 
              href="https://open.spotify.com/playlist/2iYORhVk0rz8k6uHoLiM1c?si=b3cfb30306684881" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between w-full p-5 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 border border-[#1DB954]/30 rounded-xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-4 z-10">
                <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-lg shadow-[#1DB954]/20">
                  <Disc className="w-6 h-6 text-black" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-[#1DB954] font-bold mb-0.5">Spotify Playlist</div>
                  <div className="text-sm font-bold text-white">Soul Vibe</div>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-[#1DB954] opacity-50 group-hover:opacity-100 transition-opacity z-10" />
              
              {/* Decorative background glow */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#1DB954]/10 rounded-full blur-2xl group-hover:bg-[#1DB954]/20 transition-colors" />
            </motion.a>

            <p className="text-[11px] text-center mt-4 text-text-muted italic">
              Click to explore my favorite tracks for coding and relaxing.
            </p>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mt-8"
        >
          <SectionTitle>Contact</SectionTitle>
          <div className="flex flex-col gap-1 mt-2">
            <SocialItem href="https://www.instagram.com/george.lin.29" icon={Instagram}>
              @george.lin.29
            </SocialItem>
            <SocialItem href="https://github.com/LinGeorgeLin" icon={Github}>
              GitHub
            </SocialItem>
            <SocialItem href="mailto:glin7583@gmail.com" icon={Mail}>
              glin7583@gmail.com
            </SocialItem>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
