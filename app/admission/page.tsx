"use client";
import Link from "next/link";
import { useState } from "react";

type TabKey = "montessori" | "plus2";

type Teacher = {
  name: string;
  subject: string;
  phone: string;
  email: string;
  avatar: string;
  color: string;
  available: string;
  classes: string;
};

type AdmissionInfo = {
  title: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  bgGradient: string;
  headerGradient: string;
  icon: string;
  fee: string;
  seats: string;
  deadline: string;
  requirements: string[];
};

const teachers: Record<TabKey, Teacher[]> = {
  montessori: [
    {
      name: "Mrs. Sunita Rai",
      subject: "Montessori Lead Teacher",
      phone: "+977-9841-123456",
      email: "sunita.rai@singeswari.edu.np",
      avatar: "SR",
      color: "from-pink-400 to-rose-500",
      available: "Mon–Fri, 9AM–3PM",
      classes: "Nursery · LKG · UKG",
    },
    {
      name: "Mrs. Anita Sharma",
      subject: "Early Childhood Educator",
      phone: "+977-9852-234567",
      email: "anita.sharma@singeswari.edu.np",
      avatar: "AS",
      color: "from-violet-400 to-purple-500",
      available: "Mon–Sat, 8AM–2PM",
      classes: "Nursery · LKG",
    },
  ],
  plus2: [
    {
      name: "Mr. Bikash Thapa",
      subject: "Science & Mathematics",
      phone: "+977-9841-345678",
      email: "bikash.thapa@singeswari.edu.np",
      avatar: "BT",
      color: "from-blue-400 to-cyan-500",
      available: "Mon–Fri, 10AM–4PM",
      classes: "Grade 11 · Grade 12 (Science)",
    },
    {
      name: "Mrs. Puja Limbu",
      subject: "Humanities & Social Studies",
      phone: "+977-9852-456789",
      email: "puja.limbu@singeswari.edu.np",
      avatar: "PL",
      color: "from-emerald-400 to-teal-500",
      available: "Mon–Fri, 9AM–3PM",
      classes: "Grade 11 · Grade 12 (Humanities)",
    },
  ],
};

const admissionInfo: Record<TabKey, AdmissionInfo> = {
  montessori: {
    title: "Montessori Programme",
    tagline: "Ages 3–6 · Nurturing Curious Minds",
    badge: "OPEN",
    badgeColor: "bg-rose-500",
    accentColor: "border-rose-400",
    bgGradient: "from-rose-50 to-pink-50",
    headerGradient: "from-rose-500 to-pink-600",
    icon: "🌱",
    fee: "NPR 2,500/month",
    seats: "12 seats remaining",
    deadline: "April 15, 2025",
    requirements: ["Birth Certificate", "Vaccination Record", "2 Passport Photos", "Parent ID"],
  },
  plus2: {
    title: "+2 Programme",
    tagline: "Grade 11 & 12 · Science · Humanities · Management",
    badge: "OPEN",
    badgeColor: "bg-blue-600",
    accentColor: "border-blue-400",
    bgGradient: "from-blue-50 to-sky-50",
    headerGradient: "from-blue-600 to-cyan-600",
    icon: "🎓",
    fee: "NPR 4,500/month",
    seats: "8 seats remaining",
    deadline: "May 1, 2025",
    requirements: ["SEE Marksheet", "Character Certificate", "Migration Certificate", "2 Passport Photos", "Parent ID"],
  },
};

const bubbles = [
  { width: 42, height: 42, top: "8%", left: "10%", opacity: 0.22 },
  { width: 64, height: 64, top: "20%", left: "78%", opacity: 0.18 },
  { width: 30, height: 30, top: "68%", left: "16%", opacity: 0.2 },
  { width: 54, height: 54, top: "72%", left: "86%", opacity: 0.16 },
  { width: 36, height: 36, top: "40%", left: "52%", opacity: 0.14 },
  { width: 26, height: 26, top: "54%", left: "33%", opacity: 0.24 },
];

export default function AdmissionsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("montessori");
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const handleCopy = (phone: string, name: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(name);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const info = admissionInfo[activeTab];
  const teacherList = teachers[activeTab];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <style jsx global>{`
        /* Tailwind fallback (only for classes used in this page) */
        .min-h-screen{min-height:100vh}.bg-gray-50{background:#f9fafb}.bg-gray-800{background:#1f2937}
        .bg-blue-700{background:#1d4ed8}.bg-blue-900{background:#1e3a8a}.bg-white{background:#fff}
        .text-white{color:#fff}.text-gray-400{color:#9ca3af}.text-gray-800{color:#1f2937}.text-gray-600{color:#4b5563}
        .text-blue-200{color:#bfdbfe}.text-blue-300{color:#93c5fd}.text-blue-700{color:#1d4ed8}.text-yellow-300{color:#fde047}
        .text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}
        .text-2xl{font-size:1.5rem}.text-4xl{font-size:2.25rem}.text-5xl{font-size:3rem}
        .font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}
        .leading-tight{line-height:1.25}.text-center{text-align:center}.uppercase{text-transform:uppercase}
        .px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}
        .py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2\\.5{padding-top:.625rem;padding-bottom:.625rem}
        .py-3{padding-top:.75rem;padding-bottom:.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-12{padding-top:3rem;padding-bottom:3rem}
        .p-1\\.5{padding:.375rem}.p-3{padding:.75rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}
        .mt-1{margin-top:.25rem}.mt-5{margin-top:1.25rem}.mt-8{margin-top:2rem}.mt-10{margin-top:2.5rem}.mt-12{margin-top:3rem}
        .mb-1{margin-bottom:.25rem}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-10{margin-bottom:2.5rem}
        .mx-auto{margin-left:auto;margin-right:auto}.max-w-md{max-width:28rem}.max-w-sm{max-width:24rem}.max-w-xl{max-width:36rem}
        .max-w-4xl{max-width:56rem}.max-w-5xl{max-width:64rem}
        .flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.inline-block{display:inline-block}
        .items-center{align-items:center}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}
        .flex-1{flex:1 1 0%}.flex-wrap{flex-wrap:wrap}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}
        .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}
        .rounded-full{border-radius:9999px}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}
        .border{border:1px solid #e5e7eb}.border-2{border:2px solid}.border-gray-100{border-color:#f3f4f6}.border-gray-200{border-color:#e5e7eb}
        .border-white\\/20{border-color:rgba(255,255,255,.2)}.border-white\\/50{border-color:rgba(255,255,255,.5)}
        .border-yellow-300{border-color:#fde047}.border-b-2{border-bottom-width:2px}
        .overflow-hidden{overflow:hidden}.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}
        .w-10{width:2.5rem}.h-10{height:2.5rem}.w-14{width:3.5rem}.h-14{height:3.5rem}
        .shadow-sm{box-shadow:0 1px 2px rgba(0,0,0,.08)}.shadow-md{box-shadow:0 4px 12px rgba(0,0,0,.12)}.shadow-lg{box-shadow:0 8px 20px rgba(0,0,0,.15)}.shadow-xl{box-shadow:0 14px 30px rgba(0,0,0,.18)}.shadow-2xl{box-shadow:0 20px 40px rgba(0,0,0,.22)}
        .hover\\:text-yellow-300:hover{color:#fde047}.hover\\:bg-green-600:hover{background:#16a34a}.hover\\:bg-blue-700:hover{background:#1d4ed8}.hover\\:opacity-90:hover{opacity:.9}
        .transition-colors{transition:color .2s,background-color .2s}.transition-opacity{transition:opacity .2s}
        .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-from),var(--tw-gradient-to))}
        .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-from),var(--tw-gradient-to))}
        .from-blue-800{--tw-gradient-from:#1e40af}.via-blue-700{--tw-gradient-from:#1d4ed8}.to-blue-600{--tw-gradient-to:#2563eb}
        .from-blue-700{--tw-gradient-from:#1d4ed8}.to-blue-900{--tw-gradient-to:#1e3a8a}
        .from-rose-50{--tw-gradient-from:#fff1f2}.to-pink-50{--tw-gradient-to:#fdf2f8}
        .from-blue-50{--tw-gradient-from:#eff6ff}.to-sky-50{--tw-gradient-to:#f0f9ff}
        .from-rose-500{--tw-gradient-from:#f43f5e}.to-pink-600{--tw-gradient-to:#db2777}
        .from-blue-600{--tw-gradient-from:#2563eb}.to-cyan-600{--tw-gradient-to:#0891b2}
        .from-pink-400{--tw-gradient-from:#f472b6}.to-rose-500{--tw-gradient-to:#f43f5e}
        .from-violet-400{--tw-gradient-from:#a78bfa}.to-purple-500{--tw-gradient-to:#a855f7}
        .from-blue-400{--tw-gradient-from:#60a5fa}.to-cyan-500{--tw-gradient-to:#06b6d4}
        .from-emerald-400{--tw-gradient-from:#34d399}.to-teal-500{--tw-gradient-to:#14b8a6}
        .from-amber-400{--tw-gradient-from:#fbbf24}.to-orange-500{--tw-gradient-to:#f97316}
        .bg-green-500{background:#22c55e}
        @media (min-width:768px){.md\\:flex{display:flex}.md\\:text-5xl{font-size:3rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}
        @media (min-width:1024px){.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}}
      `}</style>

      {/* NAV */}
      <nav className="bg-blue-700 text-white px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 font-bold text-sm overflow-hidden">
            <img 
              src="/logo.jpg" 
              alt="School Logo" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "contain",
                display: "block"
              }} 
            />
          </div>
          <div>
            <div className="font-bold text-sm leading-tight">Shree Singeswari Secondary School</div>
            <div className="text-blue-200 text-xs">Num · Makalu-5 · Sankhuwasabha</div>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          <Link href="/#gallery" className="hover:text-yellow-300 transition-colors">Gallery</Link>
          <Link href="/#course" className="hover:text-yellow-300 transition-colors">Course</Link>
          <Link href="/notice" className="hover:text-yellow-300 transition-colors">Notice</Link>
          <Link href="/admission" className="text-yellow-300 font-semibold border-b-2 border-yellow-300 pb-0.5">Admissions</Link>
          <Link href="/#footer" className="bg-white text-blue-700 px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition-colors">Contact</Link>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {bubbles.map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: b.width,
                height: b.height,
                top: b.top,
                left: b.left,
                opacity: b.opacity,
              }}
            />
          ))}
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            <span className="w-2 h-2 bg-yellow-700 rounded-full animate-pulse"></span>
            Admissions Now Open — 2025/26
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight">
            Start Your Journey<br />
            <span className="text-yellow-300">With Us</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Limited seats available. Contact our dedicated teachers directly to secure your spot.
          </p>
        </div>
      </div>

      {/* TAB SWITCHER */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="flex bg-white rounded-2xl shadow-md p-1.5 gap-2 max-w-md mx-auto border border-gray-100">
          {(["montessori", "plus2"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === tab
                  ? tab === "montessori"
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-md"
                    : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab === "montessori" ? "🌱 Montessori" : "🎓 +2 Programme"}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ADMISSION INFO CARD */}
        <div
          className={`rounded-3xl overflow-hidden shadow-xl border-2 ${info.accentColor} mb-10 transition-all duration-500`}
        >
          <div className={`bg-gradient-to-r ${info.headerGradient} p-6 text-white`}>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-4xl">{info.icon}</span>
                  <div>
                    <h2 className="text-2xl font-extrabold">{info.title}</h2>
                    <p className="text-white/80 text-sm">{info.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className={`${info.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1`}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  {info.badge}
                </span>
                <span className="text-white/80 text-sm font-medium">{info.seats}</span>
              </div>
            </div>
          </div>
          <div className={`bg-gradient-to-br ${info.bgGradient} p-6`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Monthly Fee", value: info.fee, icon: "💰" },
                { label: "Deadline", value: info.deadline, icon: "📅" },
                { label: "Available Seats", value: info.seats, icon: "💺" },
                { label: "Session", value: "2025/26", icon: "📚" },
              ].map((item) => (
                <div key={item.label} className="bg-white/70 backdrop-blur rounded-xl p-3 text-center border border-white/50">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs text-gray-500 font-medium">{item.label}</div>
                  <div className="text-sm font-bold text-gray-800 mt-0.5">{item.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-2">Required Documents</h3>
              <div className="flex flex-wrap gap-2">
                {info.requirements.map((req) => (
                  <span key={req} className="bg-white border border-gray-200 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                    ✓ {req}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT TEACHERS SECTION */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200"></div>
            <h2 className="text-xl font-extrabold text-gray-800 text-center whitespace-nowrap">
              📞 Contact Admission Teachers
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teacherList.map((teacher) => (
              <div
                key={teacher.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${teacher.color} p-5 flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center text-white text-xl font-black shadow-inner">
                    {teacher.avatar}
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-base leading-tight">{teacher.name}</div>
                    <div className="text-white/80 text-xs mt-0.5">{teacher.subject}</div>
                    <div className="text-white/70 text-xs mt-1 bg-white/20 px-2 py-0.5 rounded-full inline-block">
                      {teacher.classes}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-base">🕐</span>
                    <span className="font-medium">{teacher.available}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-base">📱</span>
                      <span className="text-sm font-semibold text-gray-800">{teacher.phone}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(teacher.phone, teacher.name)}
                      className="text-xs bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 active:scale-95 transition-all font-medium"
                    >
                      {copiedPhone === teacher.name ? "✓ Copied" : "Copy"}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <span className="text-base">✉️</span>
                    <span className="text-xs text-gray-600 truncate">{teacher.email}</span>
                  </div>

                  {/* CTA Buttons */}
                  <div
                    style={{
                      marginTop: "0.5rem",
                      borderTop: "1px solid #e5e7eb",
                      paddingTop: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "#6b7280",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.03em",
                        textTransform: "uppercase",
                      }}
                    >
                      Quick Contact
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.6rem",
                      }}
                    >
                      <a
                        href={`tel:${teacher.phone}`}
                        aria-label={`Call ${teacher.name}`}
                        style={{
                          display: "block",
                          textAlign: "center",
                          background: "#1d4ed8",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          padding: "0.7rem 0.5rem",
                          borderRadius: "0.75rem",
                          textDecoration: "none",
                          border: "2px solid #1e40af",
                        }}
                      >
                        📞 Call Now
                      </a>

                      <a
                        href={`https://wa.me/${teacher.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${teacher.name}`}
                        style={{
                          display: "block",
                          textAlign: "center",
                          background: "#16a34a",
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "0.9rem",
                          padding: "0.7rem 0.5rem",
                          borderRadius: "0.75rem",
                          textDecoration: "none",
                          border: "2px solid #15803d",
                        }}
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-extrabold mb-2">Have Questions?</h2>
            <p className="text-blue-200 mb-6 text-sm max-w-sm mx-auto">
              Visit us at school or call the main office for any admission-related queries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3 text-center">
                <div className="text-xs text-blue-300 font-medium">School Office</div>
                <div className="font-bold text-sm mt-0.5">+977-9841-000000</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3 text-center">
                <div className="text-xs text-blue-300 font-medium">Office Hours</div>
                <div className="font-bold text-sm mt-0.5">Sun–Fri · 9AM–4PM</div>
              </div>
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl px-5 py-3 text-center">
                <div className="text-xs text-blue-300 font-medium">Location</div>
                <div className="font-bold text-sm mt-0.5">Makalu-5, Sankhuwasabha</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-400 text-center text-xs py-6 mt-10">
        © 2025 Shree Singeswari Secondary School · Num, Makalu-5, Sankhuwasabha
      </footer>
    </div>
  );
}