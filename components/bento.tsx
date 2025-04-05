import Link from "next/link";

export default function BentoGrid() {
  return (
    <div className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="flex flex-col items-center">
          
          <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl text-center">
            Welcome to our barbershop
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 lg:grid-cols-6 lg:grid-rows-2">

          {/* Card 1 */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <Link href="/aboutus">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)] cursor-pointer">
                <img alt="Performance" src="/aboutusPicture.jpeg" className="h-52 object-cover object-left" />
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-indigo-600">About us</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Learn more about our team and what drives us to provide exceptional service.
                  </p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>

          {/* Card 2 */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <Link href="/services">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)] cursor-pointer">
                <img alt="Releases" src="/servicesimg.jpg" className="h-52 object-cover object-left lg:object-right" />
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-indigo-600">Services</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Our services are designed to help you move quickly and efficiently in every step of your journey.
                  </p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>

          {/* Card 3 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <Link href="/contact">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)] cursor-pointer">
                <img alt="Speed" src="/buffalo.jpg" className="h-52 object-cover object-left" />
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-indigo-600">Contact</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Get in touch with us directly for personalized support and expert advice.
                  </p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>

          {/* Card 4 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <Link href="/team">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] cursor-pointer">
                <img alt="Integrations" src="/sigcutz.jpeg" className="h-52 object-cover" />
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-indigo-600">Meet the Team</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Meet the dedicated professionals behind our service, all working to bring your ideas to life.
                  </p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>

          {/* Card 5 */}
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <Link href="/gallery">
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)] cursor-pointer">
                <img alt="Network" src="/edoliver.jpeg" className="h-52 object-cover" />
                <div className="p-6 pt-2">
                  <h3 className="text-lg font-semibold text-indigo-600">Gallery</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Explore our portfolio of work and see how we&apos;ve helped others achieve their goals.
                  </p>
                </div>
              </div>
            </Link>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>

        </div>
      </div>
    </div>
  );
}
