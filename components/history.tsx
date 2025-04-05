import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link' // Import the Link component

const historyFeatures = [
  {
    name: 'Our Beginning.',
    description:
      'Signature Cutz started with a simple goal: to provide exceptional haircuts and create a space where clients feel like family. From our humble beginnings, we’ve grown into a trusted name, especially among NFL players.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'A Commitment to Quality.',
    description:
      'With every haircut, we prioritize quality and precision. Our team of skilled barbers are dedicated to delivering outstanding styles that keep our clients looking sharp, game day ready, and feeling confident.',
    icon: LockClosedIcon,
  },
]

export default function History() {
  return (
    <div className="overflow-hidden bg-[#0a0f1c] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center lg:flex-row flex-col gap-x-16 gap-y-16 sm:gap-y-20">
          
          {/* Left Side Image */}
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <img
              src="/sigCutz.jpeg" // Replace with the image of your barbershop's history or photo
              alt="Barbershop history"
              className="w-full h-[500px] object-cover object-center rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side Text */}
          <div className="px-6 md:px-0 lg:pl-10">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                A History of Excellence
              </p>
              <p className="mt-6 text-lg text-white">
                Signature Cutz has been serving the community with precision and style for years. We've made a name for ourselves in the world of professional athletes and everyday customers alike, creating an experience that goes beyond just a haircut.
              </p>
              <dl className="mt-10 space-y-8 text-base text-white">
                {historyFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 size-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <Link href="/aboutus">
                  <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
