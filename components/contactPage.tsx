"use client";

import { PiCheckCircle } from "react-icons/pi";
import { ExampleForm } from "./exampleForm";

const Meeting = () => {
  return (
    <div className="flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#0a0f1c]">

      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto text-white">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Get in Touch </h1>
          <p className="text-lg text-gray-300 py-4">
            Have questions or ready to book your next appointment? We’d love to hear from you! 
            Whether you're looking for a fresh cut, beard grooming, or simply need advice on your style, 
            our team at Signature Cutz is here to help.
          </p>

          

          {[ 
            {
              title: "Easy Booking",
              description: "Fill out the form to schedule an appointment at your convenience, and we’ll confirm your slot.",
            },
            {
              title: "Expert Stylists",
              description: "Our experienced barbers are here to provide you with a personalized and professional grooming experience.",
            },
            {
              title: "Walk-ins Welcome",
              description: "No need to schedule in advance—just walk in and we’ll take care of you as soon as possible!",
            },
          ].map((item, index) => (
            <div key={index} className="flex gap-x-4 py-4">
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-gray-200">
                  {item.title}
                </h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 p-10">
          <ExampleForm />
        </div>
      </div>

      {/* Google Map section */}
      <div className="flex justify-center mt-16 mb-12">
        <iframe
          title="Signature Cutz Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.1324439322198!2d-78.84838117344441!3d42.933334648690796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d312ae5fcf6a13%3A0x5362c6b4a864c31c!2s2312%20Main%20St%2C%20Buffalo%2C%20NY%2014214!5e0!3m2!1sen!2sus!4v1743882742281!5m2!1sen!2sus"
          width="800"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>

    </div>
  );
};

export default Meeting;
