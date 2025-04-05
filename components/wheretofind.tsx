import React from "react";
import { PiCheckCircle } from "react-icons/pi";

const WhereToFindUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full px-48 py-12 bg-white text-black">
      {/* Left Column - Text Content */}
      <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
        <h2 className="text-4xl font-semibold mb-4 text-gray-800">Visit Us at Signature Cutz</h2>
        <p className="text-lg text-gray-700 mb-4">
          We&apos;re conveniently located in the heart of Buffalo, NY, just off Main Street. Whether you&apos;re looking for a fresh haircut, a sharp beard trim, or a completely new style, our talented and experienced barbers are ready to help you look your best.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Come by our shop at 2312 Main Street—no appointment needed! We&apos;re open to walk-ins, or you can easily book ahead. Check out the map below to see exactly where we are, and feel free to stop in for a cut whenever it&apos;s convenient for you.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center text-gray-800">
            <PiCheckCircle className="text-2xl mr-2 text-[#3d80d7]" />
            <p>Expert Barbers with Years of Experience</p>
          </div>
          <div className="flex items-center text-gray-800">
            <PiCheckCircle className="text-2xl mr-2 text-[#3d80d7]" />
            <p>Walk-ins Welcome</p>
          </div>
        </div>
      </div>

      {/* Right Column - Google Map iframe */}
      <div className="md:w-1/2">
        <iframe
          title="Signature Cutz Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.1324439322198!2d-78.84838117344441!3d42.933334648690796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d312ae5fcf6a13%3A0x5362c6b4a864c31c!2s2312%20Main%20St%2C%20Buffalo%2C%20NY%2014214!5e0!3m2!1sen!2sus!4v1743882742281!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WhereToFindUs;
