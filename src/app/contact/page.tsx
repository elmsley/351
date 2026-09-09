import contactData from '@/data/contacts.json';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-12">
      <header>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight border-b-4 border-blue-600 inline-block pb-2">
          Contact Us
        </h1>
      </header>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-base font-bold text-slate-900 mb-3 uppercase">Official Inquiry</h2>
        <div className="space-y-1 text-sm">
          <p className="text-slate-600">Email: <span className="font-medium text-slate-900">{contactData.officialContact.email}</span></p>
          <p className="text-slate-600">Phone: <span className="font-medium text-slate-900">{contactData.officialContact.phone}</span></p>
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-lg font-bold text-slate-800 mb-4 text-center uppercase tracking-wide">Support Resources</h2>
        <div className="grid gap-3">
          {contactData.supportLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="block p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 rounded-xl transition-colors group"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-slate-900 text-sm group-hover:text-blue-700">{link.name}</span>
                <span className="text-blue-600 text-xs font-medium">Visit Site &rarr;</span>
              </div>
              {link.description && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {link.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
