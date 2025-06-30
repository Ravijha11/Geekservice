"use client";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section className="py-10 md:py-16 bg-white flex flex-col md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="flex-1 flex flex-col items-start justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-serif text-left">Who we are?</h1>
          <p className="mb-4 md:mb-6 text-base sm:text-lg font-serif text-left max-w-2xl">
            Geek Services is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances. Specializing in services for Computers &amp; Tablets, Mobile Devices, Printers, WiFi &amp; Networking, TV &amp; Home Theater, Video Games &amp; Entertainment, Cameras &amp; Camcorders, Smart Home, Home Security, Drones, Audio &amp; Video, TV Mounting, Major Appliances, Small Appliances, and more, Geek Services aims to address the diverse repair service needs of its customers.
          </p>
          <p className="mb-4 md:mb-6 text-base sm:text-lg font-serif text-left max-w-2xl">
            One notable feature of Geek Services is their commitment to prompt and efficient service. Customers can conveniently book appointments for repairs, installations, troubleshooting, or device pickups. The company&apos;s experts are equipped with the knowledge and skills to swiftly diagnose and address a wide array of tech-related issues, ensuring that customers can get back to using their devices without unnecessary delays.
          </p>
          <p className="mb-4 md:mb-6 text-base sm:text-lg font-serif text-left max-w-2xl">
            Geek Services also emphasizes the importance of keeping customers connected. In addition to repair services, they offer protection plans to safeguard devices from potential damage. Whether it&apos;s a cracked screen on a mobile device, a malfunctioning appliance, or a networking issue, Geek Services strives to provide comprehensive solutions that cover the entire spectrum of tech and appliances care.
          </p>
          <p className="mb-0 text-base sm:text-lg font-serif text-left max-w-2xl">
            With a broad range of services covering various tech and appliance categories, Geek Services positions itself as a one-stop solution for individuals seeking reliable and expert assistance with their electronic devices and appliances. Whether it&apos;s enhancing the performance of a computer, fixing a smartphone glitch, setting up a home theater system, or addressing issues with smart home devices, Geek Services is dedicated to making technology accessible and functional for all.
          </p>
        </div>
        <div className="flex-1 flex justify-center w-full max-w-xl mx-auto">
          <img src="/image.png" alt="Who we are" className="rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-xl object-cover" />
        </div>
      </section>
    </div>
  );
} 