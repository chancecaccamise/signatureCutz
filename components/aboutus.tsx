'use client'

export default function AboutUs() {
  const timeline = [
    {
      name: 'Founded Signature Cutz',
      description:
        'Signature Cutz was founded with the mission to provide top-tier grooming services with a focus on precision and personalized care.',
      date: 'Aug 2010',
      dateTime: '2010-08',
    },
    {
      name: 'Opened New Location',
      description:
        'We expanded to a larger location in the heart of Buffalo to accommodate the growing demand for our expert barbers.',
      date: 'Nov 2015',
      dateTime: '2015-11',
    },
    {
      name: 'Celebrated 10 Years',
      description:
        'In 2020, we celebrated our 10th anniversary, having built a strong community of loyal clients and barbers who truly care.',
      date: 'Aug 2020',
      dateTime: '2020-08',
    },
  ]

  return (
    <main className="isolate bg-[#0a0f1c]">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg]"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:col-span-2 xl:col-auto">
              Signature Cutz: A Legacy of Precision and Style
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg font-medium text-white sm:text-xl">
                From a small shop to a staple in Buffalo&apos;s grooming scene, we&apos;ve been committed to making sure you look your best.
              </p>
            </div>
            <img
              alt="Signature Cutz Barbershop"
              src="/sigCutz.jpeg"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 sm:h-32" />
      </div>

      {/* Timeline section */}
      <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.name}>
              <time dateTime={item.dateTime} className="flex items-center text-sm font-semibold text-white">
                <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-white sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg font-semibold tracking-tight text-white">{item.name}</p>
              <p className="mt-1 text-base text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-24 pb-40 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Book Your Appointment?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
            Whether you need a quick trim or a complete style overhaul, we&apos;re here for you. Click below to book your appointment now.
          </p>
          <div className="mt-16">
            <a href="/contact">
              <button className="rounded-md bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-300 transition">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
