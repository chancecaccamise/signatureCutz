// components/Services.tsx
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
    
            {/* Service 1 - Short Haircut */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
                Short Haircut
              </h2>
              <p className="text-gray-300 max-w-3xl mb-6">
                A haircut should instill confidence. We believe confidence is essential to conquering your day and a great haircut can send you off down the road of greatness. <br />
                <span className="text-white font-semibold">Includes:</span> Thorough Consultation, Precise and Detailed Removal of Excess Hair Using the Art of Either Manual or Mechanical Tonsorial Device, Optional Nape and Temporal Taper, Nape Shave and Style with Recommended/Your Choice of Product.
              </p>
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </div>
    
            {/* Service 2 - Detailed Beard Service */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
                Detailed Beard Service
              </h2>
              <p className="text-gray-300 max-w-3xl mb-6">
                It’s perfectly okay to take pride in your beard. Matter of fact, we absolutely believe you should. Our Detailed Beard Service is designed to keep facial hair at legendary status. <br />
                <span className="text-white font-semibold">Includes:</span> Thorough Consultation, Removal of Excess Length, Custom Precision Shaping, Hot Towel, Straight Razor Line-Up, Style with Beard Conditioner of Choice.
              </p>
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </div>
    
          </div>
          <hr className="border-gray-700 my-8" />
    
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    
            {/* Service 3 - Detailed Beard Service */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
                Detailed Beard Service
              </h2>
              <p className="text-gray-300 max-w-3xl mb-6">
                It’s perfectly okay to take pride in your beard. Matter of fact, we absolutely believe you should. Our Detailed Beard Service is designed to keep facial hair at legendary status. <br />
                <span className="text-white font-semibold">Includes:</span> Thorough Consultation, Removal of Excess Length, Custom Precision Shaping, Hot Towel, Straight Razor Line-Up, Style with Beard Conditioner of Choice.
              </p>
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </div>
    
            {/* Service 4 - Detailed Beard Service */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase mb-4">
                Detailed Beard Service
              </h2>
              <p className="text-gray-300 max-w-3xl mb-6">
                It’s perfectly okay to take pride in your beard. Matter of fact, we absolutely believe you should. Our Detailed Beard Service is designed to keep facial hair at legendary status. <br />
                <span className="text-white font-semibold">Includes:</span> Thorough Consultation, Removal of Excess Length, Custom Precision Shaping, Hot Towel, Straight Razor Line-Up, Style with Beard Conditioner of Choice.
              </p>
              <button className="bg-white text-black px-6 py-2 font-bold rounded hover:bg-gray-200 transition">
                Book Now &rarr;
              </button>
            </div>
    
          </div>
    
        </div>
      </section>
    );
  }
  