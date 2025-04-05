import Link from 'next/link'; // Importing Link from Next.js

export default function Services() {
  return (
    <section className="bg-[#0a0f1c] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Explore our premium grooming services tailored to help you look sharp and feel confident every day.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Service 1 - Signature Cut */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
              Signature Cut
            </h2>
            <p className="text-gray-300 max-w-3xl mb-6">
              Our Signature Cut is designed to deliver precision and style. Whether you're preparing for a big day or just a casual outing, this haircut will leave you feeling confident and refreshed. <br />
              <span className="text-white font-semibold">Includes:</span> Detailed consultation, customized cut based on your face shape and hair texture, nape taper, nape shave, and styling with your choice of products.
            </p>
            <Link href="https://app.thecut.co/barbers/kennyh">
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </Link>
          </div>

          {/* Service 2 - Ed Up / Shape Up */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
              Edge Up / Shape Up
            </h2>
            <p className="text-gray-300 max-w-3xl mb-6">
              Keep your beard looking sharp with our Edge Up / Shape Up service. Whether you're maintaining a clean beard or shaping it up for a polished look, our barbers will ensure it’s perfect every time. <br />
              <span className="text-white font-semibold">Includes:</span> Thorough consultation, beard trim, straight razor line-up, hot towel treatment, and styling with the beard product of your choice.
            </p>
            <Link href="https://app.thecut.co/barbers/kennyh">
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </Link>
          </div>

        </div>
        <hr className="border-gray-700 my-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Service 3 - Fade and Beard */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
              Fade and Beard
            </h2>
            <p className="text-gray-300 max-w-3xl mb-6">
              The Fade and Beard service combines the precision of a fade haircut with the artistry of beard shaping. This look is ideal for those who want to maintain a sharp, edgy appearance. <br />
              <span className="text-white font-semibold">Includes:</span> Fade haircut, detailed beard shaping, straight razor line-up, hot towel treatment, and styling with the beard product of your choice.
            </p>
            <Link href="https://app.thecut.co/barbers/kennyh">
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </Link>
          </div>

          {/* Service 4 - Wavecut Taper */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
              Wavecut Taper
            </h2>
            <p className="text-gray-300 max-w-3xl mb-6">
              Our Wavecut Taper is a trendy and clean look, featuring a subtle fade and a well-defined wave pattern, perfect for those who appreciate a modern, sharp appearance. <br />
              <span className="text-white font-semibold">Includes:</span> Detailed consultation, wavecut with a taper fade, precision beard trimming, straight razor line-up, and styling with the hair and beard product of your choice.
            </p>
            <Link href="https://app.thecut.co/barbers/kennyh">
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
