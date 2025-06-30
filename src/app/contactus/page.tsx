"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header (fixed) */}
      <header className="w-full bg-header-blue text-white flex items-center justify-between px-6 py-4 fixed top-0 left-0 z-50">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold font-serif">Geek Services</span>
        </div>
        <div className="flex items-center gap-6 text-base font-semibold">
          <span className="hidden sm:inline">info@allitexpert.com</span>
          <span className="flex items-center gap-1"><span role="img" aria-label="US Flag">🇺🇸</span>+1-(888)-404-6710</span>
        </div>
      </header>
      {/* Spacer for fixed header */}
      <div className="h-20" />

      <section className="py-16 bg-white px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-serif text-center mb-2">Contact Us</h1>
        <div className="w-32 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-center text-lg mb-12 font-serif">Please use the contact form or mail us for any of your questions or requests, concerning our services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Get In Touch */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">Get In Touch</h2>
            <p className="mb-4 font-serif">Contact us today for your tech and appliances repair services. Book a service today! We&apos;re committed to your complete satisfaction with our service.</p>
            <p className="mb-2 font-serif font-bold">Address : <span className="font-normal">24th St, Coral Springs, FL 33065, United States</span></p>
            <p className="mb-6 font-serif font-bold">Email : <span className="font-normal">support@geek-services.com</span></p>
            <button className="bg-yellow-400 text-white font-bold text-xl px-12 py-4 rounded-lg shadow hover:bg-yellow-500 transition border-2 border-blue-600">Chat Now</button>
          </div>
          {/* Right: Request Free Consultation Form */}
          <div>
            <h2 className="text-2xl font-bold font-serif mb-4">Request Free Consultation</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-serif font-semibold">Your Name:</label>
                <input type="text" className="w-full border rounded px-4 py-2 font-serif" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold">Email address:</label>
                <input type="email" className="w-full border rounded px-4 py-2 font-serif" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold">Your Phone:</label>
                <input type="text" className="w-full border rounded px-4 py-2 font-serif" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold">Your Message:</label>
                <textarea className="w-full border rounded px-4 py-2 font-serif" rows={4} placeholder="Type here..." />
              </div>
              <button type="submit" className="bg-blue-600 text-white font-bold px-8 py-2 rounded hover:bg-blue-700 transition">Submit</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (fixed) */}
      <footer className="bg-[#2e2e2e] text-white py-8 px-4 mt-auto w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap gap-8 text-base font-serif justify-center">
            <a href="/aboutus" className="hover:underline">About Us</a>
            <a href="/privacypolicy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms & Conditions</a>
            <a href="/refundpolicy" className="hover:underline">Refund Policy</a>
            <a href="/contactus" className="hover:underline">Contact Us</a>
          </div>
          <div className="text-sm font-serif text-center">Copyrights © 2025 Geek Services. All Rights Reserved</div>
          <div className="text-center text-2xl font-bold mt-2 font-serif">Geek Services</div>
        </div>
      </footer>
      {/* Spacer for fixed footer */}
      <div className="h-32" />
    </div>
  );
} 