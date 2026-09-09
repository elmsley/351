import announcementsData from '@/data/announcements.json';

export default function AnnouncementsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
          Latest <span className="text-blue-600">Announcements</span>
        </h1>
        <p className="text-slate-500 text-lg">Stay updated with the latest squadron events and deadlines.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {announcementsData.map((event, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
            <div className="bg-slate-900 p-4 text-center">
              <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">
                {event.date}
              </span>
            </div>
            <div className="p-8 flex-grow">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {event.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {event.description}
              </p>
            </div>
            <div className="p-8 pt-0">
              {event.link ? (
                <a 
                  href={event.link} 
                  className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold transition-all shadow-md"
                >
                  Sign Up Now
                </a>
              ) : (
                <div className="w-full text-center py-3 rounded-xl bg-slate-100 text-slate-400 font-bold text-sm uppercase cursor-not-allowed">
                  Details Forthcoming
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
