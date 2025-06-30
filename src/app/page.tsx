"use client";
// import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaDesktop, FaPrint, FaWifi, FaEnvelope, FaShieldAlt, FaHome, FaLock, FaUserTie, FaMale, FaFemale } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      {/* Header */}
      <header className="w-full bg-header-blue text-white flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-2xl font-bold font-sans" style={{letterSpacing: '1px'}}>Geek Services</Link>
        </div>
        <div className="flex items-center gap-4 text-lg font-semibold font-sans">
          <a href="tel:+1-470-988-9515" className="flex items-center gap-2">
            <img src="/usa.png" alt="US Flag" className="h-5 w-5" />
            <span>+1-470-988-9515</span>
          </a>
        </div>
      </header>

      {/* Hero/Banner */}
      <section className="flex flex-col items-center text-center py-12 px-4 bg-white">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Choose Product Category</h1>
        <div className="w-32 h-1 bg-header-blue mx-auto mb-8 rounded-full" />
        <p className="max-w-4xl mx-auto text-lg mb-2 font-normal">
          We believe technology should work for everyone. That&apos;s why we offer a full range of tech &amp; appliances repair solutions to keep you connected from protection and repair to installation and expert support.
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-12 font-normal">How can we help you today?</p>
        <div className="mt-2 text-3xl md:text-4xl font-extrabold mb-2">
          For Quick Assistance : <span className="text-header-blue">+1-470-988-9515</span>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 pb-12">
        {[
          { title: "Computers & Tablet", icon: FaDesktop, color: "#1f2937", hoverColor: "#2563eb" },
          { title: "Printers", icon: FaPrint, color: "#1f2937", hoverColor: "#2563eb" },
          { title: "WiFI & Network", icon: FaWifi, color: "#1f2937", hoverColor: "#2563eb" },
          { title: "Email Help", icon: FaEnvelope, color: "#3b82f6", hoverColor: "#2563eb" },
          { title: "Antivirus & Security", icon: FaShieldAlt, color: "#facc15", hoverColor: "#f59e42" },
          { title: "Smart Home", icon: FaHome, color: "#1f2937", hoverColor: "#2563eb" },
          { title: "Home Security", icon: FaLock, color: "#1f2937", hoverColor: "#2563eb" },
          { title: "Ask Experts", icon: FaUserTie, color: "#a21caf", hoverColor: "#2563eb" },
        ].map(cat => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.06, boxShadow: "0 8px 32px rgba(6,102,220,0.10)", y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-10 shadow transition cursor-pointer hover:border-sky-400 hover:bg-gradient-to-br hover:from-white/80 hover:to-sky-50 hover:shadow-xl group"
            >
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.15 }}
                animate={{ color: cat.color }}
                whileTap={{ scale: 1.1 }}
              >
                <Icon size={64} color={cat.color} />
              </motion.div>
              <div className="text-lg font-semibold text-black mt-2 group-hover:text-sky-700 transition-colors duration-300 text-center">
                {cat.title}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Book Your Appointment / Ask an Experts Section (moved above Who We Are) */}
      <section className="w-full bg-header-blue py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-32">
          <a href="/contactus" className="flex items-center gap-4 no-underline group">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" stroke="#ffcc00" strokeWidth="4" fill="none" />
              <circle cx="18" cy="20" r="2" fill="#ffcc00" />
              <circle cx="30" cy="20" r="2" fill="#ffcc00" />
              <path d="M18 28c1.5 2 6.5 2 8 0" stroke="#ffcc00" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-bold text-white">Book Your Appointment</span>
          </a>
          <a href="#" className="flex items-center gap-4 no-underline group">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <path d="M24 24c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7z" stroke="#ffcc00" strokeWidth="3" fill="none" />
              <path d="M12 38c0-4.418 5.373-8 12-8s12 3.582 12 8" stroke="#ffcc00" strokeWidth="3" fill="none" />
            </svg>
            <span className="text-2xl font-bold text-white">Ask an Experts</span>
          </a>
        </div>
      </section>

      {/* About/Who We Are */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h2 className="text-5xl font-light mb-8 text-left">Fast repairs, right in your neighborhood</h2>
            <p className="mb-8 text-xl text-left max-w-2xl">
              Our experts can fix your tech &amp; appliances easily. Make your appointment today and let us come to you. And our appliance repairs are just as simple. In select cities, we can have your device working after one visit to your home.
            </p>
            <ul className="mb-8 space-y-2 list-disc pl-6 font-bold">
              <li>Thousands of local repair experts ready to help</li>
              <li>Most repairs done in same day</li>
            </ul>
            <a href="/contactus" className="inline-block font-bold text-xl border border-[#0666dc] text-[#0666dc] px-8 py-3 rounded-full hover:bg-[#0666dc] hover:text-white transition">Book Your Appointment</a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/bceur1q9.png" alt="Tech and Appliances repair services" className="rounded-2xl w-full max-w-xl object-cover" />
          </div>
        </div>
      </section>
      {/* Book Your Appointment / Ask an Experts Section (moved above Who We Are) */}
      <section className="w-full bg-header-blue py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-32">
          <a href="/contactus" className="flex items-center gap-4 no-underline group">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" stroke="#ffcc00" strokeWidth="4" fill="none" />
              <circle cx="18" cy="20" r="2" fill="#ffcc00" />
              <circle cx="30" cy="20" r="2" fill="#ffcc00" />
              <path d="M18 28c1.5 2 6.5 2 8 0" stroke="#ffcc00" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-bold text-white">Book Your Appointment</span>
          </a>
          <a href="#" className="flex items-center gap-4 no-underline group">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48">
              <path d="M24 24c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7 3.582 7 8 7z" stroke="#ffcc00" strokeWidth="3" fill="none" />
              <path d="M12 38c0-4.418 5.373-8 12-8s12 3.582 12 8" stroke="#ffcc00" strokeWidth="3" fill="none" />
            </svg>
            <span className="text-2xl font-bold text-white">Ask an Experts</span>
          </a>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-extrabold mb-8 text-center">Who we are?</h2>
            <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Geek Services is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances. Specializing in services for Computers &amp; Tablets, Mobile Devices, Printers, WiFi &amp; Networking, TV &amp; Home Theater, and more.
            </p>
            <a href="/aboutus" className="inline-block mt-4 px-8 py-3 border-2 border-sky-400 text-sky-600 font-bold rounded-full hover:bg-sky-50 hover:text-sky-800 transition text-xl shadow-sm">Read More</a>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/image.png" alt="Who we are" className="rounded-2xl w-full max-w-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="overflow-x-auto w-full">
          <motion.div
            className="flex gap-8 min-w-[1200px]"
            animate={{ x: [0, -1800] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          >
            {/* 5 testimonials, now with gender and infinite loop */}
            {[
              {
                name: "Jose Mendez",
                gender: "male",
                title: "Operations Management",
                stars: 5,
                quote: "Geek Services exceeded my expectations with their TV mounting service. They were meticulous in their work, ensuring the TV was securely mounted and all cables were neatly organized. My living room looks fantastic now!",
              },
              {
                name: "Danielle Williams",
                gender: "female",
                title: "Business Analyst",
                stars: 5,
                quote: "I had a complicated issue with my home security system, but Geek Services tackled it with ease. Their knowledgeable technician identified the problem quickly and implemented a solution that restored my peace of mind. I highly recommend their services!",
              },
              {
                name: "David Miller",
                gender: "male",
                title: "Sr. Manager",
                stars: 4,
                quote: "Geek Services saved the day when my refrigerator suddenly stopped cooling. Their technician arrived promptly, diagnosed a faulty compressor, and had it replaced in no time. Thanks to them, I didn't have to worry about spoiled groceries!",
              },
              {
                name: "Jeffrey York",
                gender: "male",
                title: "Real Estate",
                stars: 5,
                quote: "I've relied on Geek Services for all my tech needs, from computer repairs to smart home installations, and they've never disappointed. Their team is reliable, knowledgeable, and always goes the extra mile to ensure customer satisfaction. I wouldn't trust anyone else with my devices!",
              },
              {
                name: "Veronica Hannon",
                gender: "female",
                title: "Store Manager",
                stars: 4,
                quote: "When my WiFi signal was constantly dropping, I called Geek Services for help. Their team optimized my network setup, and now I enjoy seamless connectivity throughout my home. Thanks to them, streaming and gaming have never been smoother!",
              },
            // Duplicate for infinite loop
            ].concat([
              {
                name: "Jose Mendez",
                gender: "male",
                title: "Operations Management",
                stars: 5,
                quote: "Geek Services exceeded my expectations with their TV mounting service. They were meticulous in their work, ensuring the TV was securely mounted and all cables were neatly organized. My living room looks fantastic now!",
              },
              {
                name: "Danielle Williams",
                gender: "female",
                title: "Business Analyst",
                stars: 5,
                quote: "I had a complicated issue with my home security system, but Geek Services tackled it with ease. Their knowledgeable technician identified the problem quickly and implemented a solution that restored my peace of mind. I highly recommend their services!",
              },
              {
                name: "David Miller",
                gender: "male",
                title: "Sr. Manager",
                stars: 4,
                quote: "Geek Services saved the day when my refrigerator suddenly stopped cooling. Their technician arrived promptly, diagnosed a faulty compressor, and had it replaced in no time. Thanks to them, I didn't have to worry about spoiled groceries!",
              },
              {
                name: "Jeffrey York",
                gender: "male",
                title: "Real Estate",
                stars: 5,
                quote: "I've relied on Geek Services for all my tech needs, from computer repairs to smart home installations, and they've never disappointed. Their team is reliable, knowledgeable, and always goes the extra mile to ensure customer satisfaction. I wouldn't trust anyone else with my devices!",
              },
              {
                name: "Veronica Hannon",
                gender: "female",
                title: "Store Manager",
                stars: 4,
                quote: "When my WiFi signal was constantly dropping, I called Geek Services for help. Their team optimized my network setup, and now I enjoy seamless connectivity throughout my home. Thanks to them, streaming and gaming have never been smoother!",
              },
            ])
            .map((t, i) => (
              <div key={i} className="min-w-[380px] bg-white border rounded-xl p-8 shadow flex flex-col items-center mx-2">
                <div className="flex items-center gap-2 mb-4">
                  {t.gender === "male" ? <FaMale size={48} color="#3b82f6" /> : <FaFemale size={48} color="#ec4899" />}
                </div>
                <div className="font-extrabold text-xl mb-1 text-gray-900 flex items-center gap-2">
                  {t.name}
                </div>
                <div className="text-lg font-semibold mb-3 text-sky-700">{t.title}</div>
                <div className="flex mb-3">
                  {[...Array(t.stars)].map((_, j) => (
                    <svg key={j} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 0 0-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 0 0 .95-.69l1.286-3.967z"/></svg>
                  ))}
                </div>
                <p className="text-center text-lg text-gray-700 font-medium">&quot;{t.quote}&quot;</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Membership Banner */}
      <section className="bg-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between min-h-[320px]">
          <div className="max-w-xl w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 leading-tight">
              Become a member and save money on
              today&apos;s service.
            </h2>
            <p className="text-lg md:text-xl text-white font-normal">
              Plus, get unlimited help with all your devices and 100+ included or discounted services.
            </p>
          </div>
          <a
            href="#"
            className="mt-10 md:mt-0 md:ml-16 bg-yellow-400 text-white font-bold text-2xl py-6 px-12 rounded transition duration-300 hover:bg-yellow-500 shadow-lg text-center"
            style={{ minWidth: '200px' }}
          >
            Chat Now
          </a>
        </div>
      </section>

      {/* Footer (already centered and styled) */}
      <footer className="bg-[#2e2e2e] text-white py-8 px-4 mt-auto w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-8 text-base font-sans justify-center">
            <a href="/aboutus" className="hover:underline">About Us</a>
            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/refundpolicy" className="hover:underline">Refund Policy</a>
            <a href="/contactus" className="hover:underline">Contact Us</a>
          </div>
          <hr className="w-full border-t border-dotted border-white/40 my-4 block" />
          <div className="text-sm font-sans text-center">Copyrights © 2025 Geek Services. All Rights Reserved</div>
          <div className="text-center text-2xl font-bold mt-2 font-sans">Geek Services</div>
        </div>
      </footer>
    </div>
  );
}
