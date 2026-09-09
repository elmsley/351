import trainingData from '@/data/training.json';
import locationsData from '@/data/locations.json';

export default function TrainingPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-blue-600 inline-block pb-2">
        Training & Requirements
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6 uppercase tracking-wide">Mandatory Activities</h2>
          <div className="space-y-4">
            {trainingData.mandatoryActivities.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <div className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900">{item.activity}</div>
                  <div className="text-sm text-slate-500">{item.requirement}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-6 uppercase tracking-wide">Team Competitions</h2>
          <div className="grid gap-4">
            {trainingData.competitions.map((comp, index) => (
              <div key={index} className="p-4 rounded-lg bg-slate-100 border-l-4 border-slate-900">
                <div className="font-bold text-slate-900">{comp.name}</div>
                <div className="text-sm text-slate-600">{comp.category}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Training Location</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="text-xl font-bold text-slate-800">{locationsData.burOak.name}</div>
            <div className="text-slate-600">{locationsData.burOak.address}</div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-800 text-sm italic">
              Please follow all school and squadron safety protocols upon arrival.
            </div>
          </div>
          <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <iframe 
              src={locationsData.burOak.mapEmbedUrl} 
              className="w-full h-full" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title={locationsData.burOak.name}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
