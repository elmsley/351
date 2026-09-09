import supplyData from '@/data/supply.json';

export default function SupplyPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
          Supply & <span className="text-blue-600">Uniforms</span>
        </h1>
        <p className="text-slate-500 text-lg">Ensuring professional standards across the squadron.</p>
      </header>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Uniform Policy
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {supplyData.overview}
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Exchanges & Returns
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">How to Exchange</h3>
                <p className="text-blue-800">{supplyData.exchangeProcess}</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Return Policy</h3>
                <p className="text-slate-600">{supplyData.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
          
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-blue-400">
            Supply Nights
          </h2>
          
          <div className="space-y-6">
            {supplyData.supplyNights.map((night, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <span className="font-bold text-lg">{night.month}</span>
                <span className="text-slate-400 font-medium">{night.date}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-slate-800 rounded-2xl border border-slate-700">
            <h3 className="font-bold uppercase text-xs text-slate-400 mb-3 tracking-widest">Office Address</h3>
            <p className="text-slate-300 leading-relaxed">{supplyData.officeAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
