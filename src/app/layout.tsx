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
        <div className="w-full flex justify-center py-6 px-4">
          <div className="relative w-full max-w-[75%] overflow-hidden rounded-2xl shadow-lg border border-slate-200 h-32 md:h-48">
            <img
              src="https://www.351silverstar.com/images/header_wide.jpg"
              alt="351 Silver Star Banner"
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
              <h1 className="text-white text-lg md:text-2xl font-black uppercase tracking-widest text-center px-4 drop-shadow-lg">
                351 Silver Star Royal Canadian Air Cadet Squadron - Unionville
              </h1>
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
