import { motion } from "motion/react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    href: "https://asciiuu.vercel.app/",
    title: "Asciiuu",
    desc: "將照片轉換成 ASCII 字元藝術，可調整符號密度、顏色與顯示符號。",
    tags: ["Web App", "Creative Coding"],
    img: "/asciiuu.png",
  },
  {
    href: "https://designmontrose.vercel.app/",
    title: "Montrose Design",
    desc: "網頁設計工作室，提供 Design、Website Building 與 Deploy 服務。",
    tags: ["Next.js", "Web Design"],
    img: "/montroseDesign.png",
  },
  {
    href: "https://podcastarchive.vercel.app/",
    title: "喬治香菇 Podcast",
    desc: "個人 Podcast 節目網站，上架 Spotify 與 Apple Podcast。",
    tags: ["Next.js", "Podcast"],
    img: "/podcastArchive.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Works() {
  return (
    <div className="min-h-screen flex flex-col items-center pb-24">
      {/* Nav */}
      <nav className="fixed top-0 w-full h-14 backdrop-blur-md bg-bg-dark/50 z-50 flex justify-center items-center border-b border-border-glass">
        <div className="w-full max-w-[500px] px-5 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-teal transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            George Lin
          </Link>
          <span className="font-bold text-accent-teal text-sm">Works</span>
        </div>
      </nav>

      <main className="w-full max-w-[500px] pt-24 px-5">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">Works</h1>
          <p className="text-text-muted text-sm">我做過的專案與作品。</p>
        </motion.div>

        {/* List */}
        {/* Grid 雙欄，卡片縮小 */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col no-underline bg-glass border border-border-glass rounded-xl overflow-hidden hover:border-accent-teal/30 hover:bg-white/[0.07] transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -3 }}
            >
              {/* 縮圖高度從 160 → 110 */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[110px] object-cover bg-white/5"
                loading="lazy"
              />
              <div className="p-3 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-1 mb-1">
                  <span className="font-bold text-xs text-text-main leading-tight">
                    {project.title}
                  </span>
                  <ExternalLink className="w-3 h-3 text-accent-teal opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-[0.72rem] leading-relaxed text-text-muted mb-2 flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-wide text-accent-teal bg-accent-teal/10 border border-accent-teal/20 rounded-full px-1.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
