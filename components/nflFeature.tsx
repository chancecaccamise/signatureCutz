import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link' // Import the Link component

const features = [
  {
    name: 'Exclusive player cuts.',
    description:
      'Signature Cutz has earned a reputation for delivering top-notch haircuts to NFL players. From Ed Oliver to Keon Coleman, players trust us to keep their look sharp both on and off the field.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Attention to detail.',
    description:
      'Our barbers understand the importance of precision. Whether it’s a clean fade or a custom design, we make sure every cut stands out with the quality it deserves.',
    icon: LockClosedIcon,
  },
]

export default function NflFeature() {
  return (
    <div className="overflow-hidden bg-[#0a0f1c] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side */}
          <div className="px-6 md:px-0 lg:pr-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Haircuts that turn heads in the NFL
              </p>
              <p className="mt-6 text-lg text-white">
                Signature Cutz has become a go-to destination for NFL players, especially those in the Buffalo Bills organization. From sharp fades to custom designs, our cuts are as stylish as they are professional.
              </p>
              <dl className="mt-10 space-y-8 text-base text-white">
                {features.map((feature) => (
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
                <Link href="/gallery">
                  
                    <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
                      Check Out Our Gallery
                    </button>
                  
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full h-full overflow-hidden rounded-2xl">
            <img
              src="/gallery1.jpg"
              alt="NFL player haircut"
              className="w-full h-[450px] object-cover object-center rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
