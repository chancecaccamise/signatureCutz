// components/Gallery.tsx
"use client";

import Image from "next/image";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery14.jpg"
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 px-4 bg-[#0a0f1c]">
      {/* Soft blurred background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-sm">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 backdrop-blur-sm bg-white/60"
            >
              <Image
                src={src}
                alt={`Haircut ${index + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-[400px] transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}