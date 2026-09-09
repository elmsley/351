"use client";

import aboutData from '@/data/about.json';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
          About <span className="text-blue-600">Us</span>
        </h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Our History</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {aboutData.history}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-wide">Mission & Vision</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {aboutData.mission}
          </p>
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-blue-400">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.values.map((value, index) => (
              <div 
                key={index} 
                className="p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm flex items-center gap-3"
              >
                <span className="text-blue-400 text-xl">✓</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Our Staff</h2>
          <p className="text-slate-500 mt-2">The dedicated leadership and support team of 351 Silver Star.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {aboutData.staff.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
              <div className="aspect-square w-full overflow-hidden bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=random";
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <div className="font-bold text-slate-900 text-lg leading-tight">{member.name}</div>
                <div className="text-blue-600 text-xs font-medium uppercase tracking-wide mt-1">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Past Command Team</h2>
          <p className="text-slate-500 mt-2">Honoring the leaders who have shaped the squadron over the decades.</p>
        </div>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 font-bold border-b border-slate-200">Year</th>
                  <th className="p-4 font-bold border-b border-slate-200">Command Team</th>
                </tr>
              </thead>
              <tbody>
                {aboutData.pastCommandTeam.map((entry, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900 w-24">{entry.year}</td>
                    <td className="p-4 text-slate-700 font-medium">{entry.members}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
