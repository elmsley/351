"use client";

import dashboardData from '@/data/dashboard.json';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
          Cadet <span className="text-blue-600">Dashboard</span>
        </h1>
        <p className="text-slate-500">Please select a sign-in method to access your portal.</p>
      </header>

      <div className="space-y-6">
        {dashboardData.loginMethods.map((method) => (
          <div key={method.id} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                {method.title}
              </h2>
              
              {method.statusMessage && (
                <div className={`p-3 rounded-xl text-sm mb-6 ${
                  method.status === 'discontinued' ? 'bg-red-50 text-red-800 border border-red-100' : 
                  method.status === 'transition' ? 'bg-yellow-50 text-yellow-800 border border-yellow-100' : 
                  'bg-blue-50 text-blue-800 border border-blue-100'
                }`}>
                  {method.statusMessage}
                </div>
              )}

              <div className="flex flex-col items-center justify-center py-4">
                {method.id === 'google' && (
                  <div className="text-center space-y-4">
                    <div className="p-8 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 text-slate-400 italic text-sm">
                      Google Sign-In is no longer available.
                    </div>
                    <p className="text-xs text-slate-500 italic">
                      {method.domainNote}
                    </p>
                  </div>
                )}

                {method.id === 'c365' && (
                  <button 
                    disabled 
                    className="bg-slate-900 text-white px-6 py-3 rounded-full font-bold opacity-50 cursor-not-allowed flex items-center gap-3 shadow-md"
                  >
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
                    </div>
                    {method.buttonText}
                  </button>
                )}

                {method.id === 'internal' && (
                  <form className="w-full max-w-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Username</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                        placeholder="Enter username"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="flex items-center gap-2 px-1">
                      <input type="checkbox" id="remember" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                      <label htmlFor="remember" className="text-xs text-slate-600">Keep me signed in</label>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl font-bold transition-all shadow-md">
                      Sign In
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-4">
        <Link href={dashboardData.footer.forgotPasswordLink} className="text-sm text-blue-600 hover:underline font-medium">
          Forgot password?
        </Link>
        <p className="text-xs text-slate-500 italic">
          {dashboardData.footer.webmasterNote}{' '}
          <Link href={dashboardData.footer.webmasterLink} className="text-blue-600 hover:underline font-medium">
            contact the webmaster
          </Link>
        </p>
      </div>
    </div>
  );
}
