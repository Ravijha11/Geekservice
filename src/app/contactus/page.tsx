"use client";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Content */}
      <section className="flex-1 py-10 md:py-16 bg-white px-2 sm:px-4 max-w-6xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-center mb-2">Contact Us</h1>
        <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />
        <p className="text-center text-base sm:text-lg mb-8 sm:mb-12 font-serif">Please use the contact form or mail us for any of your questions or requests, concerning our services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Get In Touch */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif mb-4">Get In Touch</h2>
            <p className="mb-4 font-serif text-sm sm:text-base">Contact us today for your tech and appliances support services. Book a service today! We&apos;re committed to your complete satisfaction with our service.</p>
            <p className="mb-2 font-serif font-bold text-sm sm:text-base">Address : <span className="font-normal">24th St, Coral Springs, FL 33065, United States</span></p>
            <p className="mb-6 font-serif font-bold text-sm sm:text-base">Email : <span className="font-normal">support@geek-services.com</span></p>
            <button className="brand-button w-full sm:w-auto bg-yellow-400 text-white font-bold text-lg sm:text-xl px-6 sm:px-12 py-3 sm:py-4 rounded-lg shadow hover:bg-yellow-500 transition border-2 border-blue-600 mt-2">Chat Now</button>
          </div>
          {/* Right: Request Free Consultation Form */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif mb-4">Request Free Consultation</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-serif font-semibold text-sm sm:text-base">Your Name:</label>
                <input type="text" className="w-full border rounded px-3 sm:px-4 py-2 font-serif text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold text-sm sm:text-base">Email address:</label>
                <input type="email" className="w-full border rounded px-3 sm:px-4 py-2 font-serif text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold text-sm sm:text-base">Your Phone:</label>
                <input type="text" className="w-full border rounded px-3 sm:px-4 py-2 font-serif text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Type here..." />
              </div>
              <div>
                <label className="block mb-1 font-serif font-semibold text-sm sm:text-base">Your Message:</label>
                <textarea className="w-full border rounded px-3 sm:px-4 py-2 font-serif text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-200" rows={4} placeholder="Type here..." />
              </div>
              <button type="submit" className="contact-button w-full sm:w-auto bg-blue-600 text-white font-bold px-6 sm:px-8 py-2 rounded hover:bg-blue-700 transition text-base sm:text-lg">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 