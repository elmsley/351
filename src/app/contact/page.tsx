import contactData from '@/data/contacts.json';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 uppercase tracking-tight border-b-4 border-blue-600 inline-block pb-2">
        Contact Us
      </h1>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 mb-12">
        <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase">Official Inquiry</h2>
        <p className="text-slate-600 mb-2">Email: <span className="font-medium text-slate-900">{contactData.officialContact.email}</span></p>
        <p className="text-slate-600">Phone: <span className="font-medium text-slate-900">{contactData.officialContact.phone}</span></p>
      </div>

      <div className="text-left">
        <h2 className="text-xl font-bold text-slate-800 mb-6 text-center uppercase tracking-wide">Support Resources</h2>
        <div className="grid gap-4">
          {contactData.supportLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="block p-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition-colors group"
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900 group-hover:text-blue-700">{link.name}</span>
                <span className="text-blue-600 text-sm font-medium">Visit Site &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
