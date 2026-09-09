import supportersData from '@/data/supporters.json';

export default function SupportersPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
          Our <span className="text-blue-600">Supporters</span>
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
          {supportersData.intro}
        </p>
        <p className="mt-4 text-blue-600 font-bold italic">
          {supportersData.sponsorshipCall}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Sponsoring Committee */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b-2 border-slate-200 pb-2">
            Squadron Sponsoring Committee
          </h2>
          <div className="grid gap-3">
            {supportersData.sponsoringCommittee.map((member, idx) => (
              <div key={idx} className="flex justify-between p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <span className="font-bold text-slate-900">{member.name}</span>
                <span className="text-slate-500 text-sm">{member.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Community Supporters */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b-2 border-slate-200 pb-2">
            Community Supporters
          </h2>
          <p className="text-slate-600 italic text-sm">
            {supportersData.communitySupporters.thankYouMessage}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportersData.communitySupporters.supporters.map((supporter, idx) => (
              <div 
                key={idx} 
                className="p-4 bg-white rounded-xl border border-slate-200 text-center font-medium text-slate-700 shadow-sm"
              >
                {supporter}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Volunteers Section */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-blue-400">Volunteers</h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            {supportersData.volunteers.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {supportersData.volunteers.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
            {supportersData.scholarship.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {supportersData.scholarship.description}
          </p>
          <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 text-left italic text-blue-900 font-medium">
            {supportersData.scholarship.criteria}
          </div>
          <p className="text-slate-500 text-sm">
            {supportersData.scholarship.note}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="bg-slate-100 p-6 border-b border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 text-center uppercase tracking-widest">
              Past Recipients
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="p-4 font-bold border-b border-slate-200">Year</th>
                  <th className="p-4 font-bold border-b border-slate-200">Recipient(s)</th>
                  <th className="p-4 font-bold border-b border-slate-200">Squadron</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {supportersData.scholarship.pastRecipients.map((entry, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-900">{entry.year}</td>
                    <td className="p-4">
                      {entry.status ? (
                        <span className="text-slate-400 italic">{entry.status}</span>
                      ) : entry.recipients ? (
                        <div className="space-y-1">
                          {entry.recipients.map((r, rIdx) => (
                            <div key={rIdx} className="text-slate-700 font-medium">{r.name}</div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-700 font-medium">{entry.name}</span>
                      )}
                    </td>
                    <td className="p-4 text-slate-500 text-sm">
                      {entry.squadron || (entry.recipients ? "Multiple" : "")}
                      {entry.recipients && entry.recipients.map(r => r.squadron).join(", ")}
                    </td>
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
