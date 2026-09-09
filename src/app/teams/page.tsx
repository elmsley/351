import teamsData from '@/data/teams.json';

export default function TeamsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
          Squadron <span className="text-blue-600">Teams & Bands</span>
        </h1>
        <p className="text-slate-500 text-lg">Specialized activity teams and competitive programs for our cadets.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamsData.teams.map((team, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col">
            <div className="p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 leading-tight">{team.name}</h3>
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                  team.status === 'Active' || team.status === 'Active (Online)' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-amber-100 text-amber-700'
                }`}>
                  {team.status}
                </span>
              </div>
              <div className="text-xs font-medium text-blue-600 uppercase tracking-widest">
                {team.category}
              </div>
            </div>
            <div className="p-6 flex-grow">
              <p className="text-slate-600 leading-relaxed text-sm">
                {team.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
