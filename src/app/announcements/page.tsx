"use client";

import announcementsData from '@/data/announcements.json';
import { useState } from 'react';

export default function AnnouncementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false;
    
    // expiryDate is in "MM/YYYY" format
    const [month, year] = expiryDate.split('/').map(Number);
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentYear = now.getFullYear();

    // Expire at the end of the month:
    // If current year > expiry year, it's expired.
    // If current year == expiry year and current month > expiry month, it's expired.
    if (currentYear > year) return true;
    if (currentYear === year && currentMonth > month) return true;
    
    return false;
  };

  const activeAnnouncements = announcementsData.filter(event => !isExpired(event.expiryDate));

  return (
    <div className="max-w-6xl mx-auto space-y-8 relative">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
          Latest <span className="text-blue-600">Announcements</span>
        </h1>
        <p className="text-slate-500 text-base">Stay updated with the latest squadron events and deadlines.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activeAnnouncements.map((event, index) => (
          <div key={index} className="group bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col">
            {event.image && (
              <div className="bg-slate-50 border-b border-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  onClick={() => setSelectedImage(event.image)}
                  className="w-full h-40 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>
            )}
            {event.video && (
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  src={event.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={event.title}
                />
              </div>
            )}
            <div className="bg-slate-900 p-3 text-center">
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest">
                {event.date}
              </span>
            </div>
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                {event.title}
              </h2>
              <div className="text-slate-600 leading-relaxed mb-4 space-y-3 text-sm">
                <p>{event.description}</p>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  const key = `description${num}`;
                  const value = (event as any)[key];
                  return value ? (
                    <p key={num}>{value}</p>
                  ) : null;
                })}
              </div>
            </div>
            <div className="p-6 pt-0">
              {event.link ? (
                <a
                  href={event.link}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl font-bold transition-all shadow-md text-sm"
                >
                  Sign Up Now
                </a>
              ) : (
                <div className="w-full text-center py-2 rounded-xl bg-slate-100 text-slate-400 font-bold text-xs uppercase cursor-not-allowed">
                  Details Forthcoming
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full announcement"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
