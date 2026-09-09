import homeData from '@/data/home.json';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl h-auto py-8 px-8 text-center shadow-sm bg-slate-50 border border-slate-200">
        <div className="relative z-10 flex flex-col items-center justify-start px-8 max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-in">
            Un-official Squadron Portal
          </span>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/announcements"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Latest News
            </Link>
            <Link
              href="/training"
              className="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-full font-bold transition-all border border-slate-200 shadow-sm"
            >
              Training Info
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/Welcome Section */}
      <section className="max-w-3xl mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {homeData.welcome}
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 text-left inline-block">
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
