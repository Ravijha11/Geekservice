"use client";

// Country code to flag image mapping
const countryCodeToFlag: { [key: string]: string } = {
  '1': '/image copy.png', // US flag
  // Add more mappings as needed
};

// Utility to extract country code from phone number
function getCountryCode(phone: string): string {
  const match = phone.match(/\+(\d{1,3})/);
  return match ? match[1] : '';
}

export default function About() {
  const phoneNumber = '+1-470-988-9515';
  const countryCode: string = getCountryCode(phoneNumber);
  const flagSrc = countryCodeToFlag[countryCode as string] || '/image copy.png'; // fallback to US flag

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="w-full bg-header-blue text-white flex items-center justify-between pl-20 pr-20 py-10 fixed top-0 left-0 z-50">
        <div className="flex items-center pr-10">
          <span className="text-3xl font-extrabold font-sans">Geek Services</span>
        </div>
        <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 text-2xl font-extrabold font-sans hover:underline pl-10">
          <img src={flagSrc} alt="Country Flag" className="w-10 h-7 object-cover rounded-sm" />
          <span>{phoneNumber}</span>
        </a>
      </header>
      <div className="h-32" />

      {/* Who We Are Section */}
      <section className="py-16 bg-white flex flex-col md:flex-row items-center gap-12 px-4 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-5xl font-bold mb-8 font-serif text-left">Who we are?</h1>
          <p className="mb-6 text-lg font-serif text-left max-w-2xl">
            Geek Services is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances. Specializing in services for Computers &amp; Tablets, Mobile Devices, Printers, WiFi &amp; Networking, TV &amp; Home Theater, Video Games &amp; Entertainment, Cameras &amp; Camcorders, Smart Home, Home Security, Drones, Audio &amp; Video, TV Mounting, Major Appliances, Small Appliances, and more, Geek Services aims to address the diverse repair service needs of its customers.
          </p>
          <p className="mb-6 text-lg font-serif text-left max-w-2xl">
            One notable feature of Geek Services is their commitment to prompt and efficient service. Customers can conveniently book appointments for repairs, installations, troubleshooting, or device pickups. The company&apos;s experts are equipped with the knowledge and skills to swiftly diagnose and address a wide array of tech-related issues, ensuring that customers can get back to using their devices without unnecessary delays.
          </p>
          <h2 className="text-3xl font-bold mb-4 font-serif text-left">About Us</h2>
          <p className="mb-6 text-lg font-serif text-left max-w-2xl">
            Geek Services also emphasizes the importance of keeping customers connected. In addition to repair services, they offer protection plans to safeguard devices from potential damage. Whether it&apos;s a cracked screen on a mobile device, a malfunctioning appliance, or a networking issue, Geek Services strives to provide comprehensive solutions that cover the entire spectrum of tech and appliances care.
          </p>
          <p className="mb-0 text-lg font-serif text-left max-w-2xl">
            With a broad range of services covering various tech and appliance categories, Geek Services positions itself as a one-stop solution for individuals seeking reliable and expert assistance with their electronic devices and appliances. Whether it&apos;s enhancing the performance of a computer, fixing a smartphone glitch, setting up a home theater system, or addressing issues with smart home devices, Geek Services is dedicated to making technology accessible and functional for all.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/image.png" alt="Who we are" className="rounded-2xl w-full max-w-xl object-cover" />
        </div>
      </section>

      {/* Footer (fixed) */}
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
      {/* Spacer for fixed footer */}
      <div className="h-32" />
    </div>
  );
} 