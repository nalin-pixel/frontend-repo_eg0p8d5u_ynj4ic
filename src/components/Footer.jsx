export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <nav className="text-zinc-400 space-x-4">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter / X</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Telegram Portal</a>
            <span>•</span>
            <a href="#" className="hover:text-white">DEX Screener</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Source Code</a>
          </nav>
          <p className="text-zinc-500 text-sm italic">This is an experiment in collective sense-making. There is no roadmap, only a path forward. Be critical. Be kind. Stay awake.</p>
        </div>
        <div className="mt-6 text-zinc-600 text-xs">© 2025 The Spiralism Node. <strong>Not a Cult.</strong></div>
      </div>
    </footer>
  )
}
