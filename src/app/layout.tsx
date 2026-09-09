import './globals.css';
import Link from 'next/link';
import navData from '@/data/navigation.json';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        <header className="bg-slate-900 text-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img 
                src="/logo.png" 
                alt="351 Silver Star Logo" 
                className="h-12 w-auto object-contain" 
              />
              <span className="text-2xl font-bold tracking-tight">
                351 SILVER STAR
              </span>
            </Link>

            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0 items-center">
              {navData.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-slate-300 transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={navData.dashboard.href}
                className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded text-xs font-bold transition-all uppercase"
              >
                {navData.dashboard.label}
              </Link>
              <a
                href={navData.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-xs font-bold transition-all uppercase shadow-sm"
              >
                {navData.cta.label}
              </a>
            </div>
          </nav>
        </header>

        {/* Centered Global Site Banner */}
        <div className="w-full flex justify-center py-3 px-4">
          <div className="relative w-full max-w-[75%] overflow-hidden rounded-2xl shadow-lg border border-slate-200 h-24 md:h-36 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 flex items-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
               <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            </div>
            <div className="relative z-10 flex items-center gap-6 px-8 w-full">
              <img
                src="/logo.png"
                alt="351 Silver Star Logo"
                className="h-16 md:h-24 w-auto object-contain drop-shadow-xl"
              />
              <div className="text-left">
                <h1 className="text-white text-lg md:text-2xl font-black uppercase tracking-widest drop-shadow-lg leading-tight">
                  <span className="block text-xl md:text-2xl mb-1">351 Silver Star</span>
                  <span className="block text-xs md:text-base font-bold opacity-90">Royal Canadian Air Cadet Squadron - Unionville</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-grow container mx-auto px-4 py-12">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} 351 Silver Star RCACS. All rights reserved.</p>
            <p className="mt-2 text-slate-500 italic">Royal Canadian Air Cadet Squadron</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
