import BarberCard from './BarberCard'

const barbers = [
  {
    name: 'DOM MILLY',
    level: '3',
    instagram: '@dom.milly716',
    imageUrl: '/dommilly.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/kennyh',
  },
  {
    name: 'BLAKESTAR',
    level: '4',
    instagram: '@blakestarrrrr',
    imageUrl: '/dommilly.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/kennyh',
  },
]

export default function MeetTheTeam() {
  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-center text-4xl font-extrabold text-blue-900 mb-2">MEET THE TEAM</h2>
      <p className="text-center text-lg text-gray-600 mb-12">Dark Horse Master Barbers</p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {barbers.map((barber) => (
          <BarberCard key={barber.name} {...barber} />
        ))}
      </div>
    </section>
  )
}
