import homeData from '@/data/home.json';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white py-20 px-8 text-center shadow-2xl">
        {/* Decorative Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-slate-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            Official Squadron Portal
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
            {homeData.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
            {homeData.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/announcements"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Latest News
            </Link>
            <Link
              href="/training"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold transition-all border border-white/20"
            >
              Training Info
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/Welcome Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="relative">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-slate-300">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8D1gyXamJRCfLPWkHMm6MjzoMJCzREadtpa-R7c4WA4jj2_uEevzxGmYJhjTbU1mylrGRblNBPf8zG0q7LXtCA_LaKldCCzQQ7lqwxPggArznsZuTy-9KbvWUCSYG8A0tNv_ZCF93lz72-ddCkeFwf441d6hKQv2HVvq3CYE0s2DpCqb8zGhBqrfKpKSQ/s849/Edenvale.jpg"
              alt="Squadron Training"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10 hidden md:block"></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {homeData.welcome}
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
            <p className="text-blue-900 font-medium italic">
              "Developing leadership and aviation skills in the youth of Unionville through discipline and excellence."
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-widest mb-2">Quick Guide</h2>
          <div className="h-1 w-12 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              📅
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">When</h3>
            <p className="text-slate-600 leading-relaxed">
              Meets every <span className="font-bold text-slate-900">{homeData.trainingBasics.day}</span> during {homeData.trainingBasics.time}.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              📍
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Where</h3>
            <p className="text-slate-600 leading-relaxed">
              Located at <span className="font-bold text-slate-900">{homeData.trainingBasics.location}</span>.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              ✈️
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">Training</h3>
            <p className="text-slate-600 leading-relaxed">
              Comprehensive <span className="font-bold text-slate-900">Aviation & Leadership</span> curriculum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
