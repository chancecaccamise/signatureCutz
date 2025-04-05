import BarberCard from './BarberCard'

const barbers = [
  {
    name: 'Kenny',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/kennyh',
  },
  {
    name: 'Zwaythabarber',
    
    instagram: '@Zwaythabarber',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/zwaythabarber',
  },
  {
    name: 'Anthony Dyal',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/Mr716barber',
  },
  {
    name: 'Vaughn Gordon',
    
    instagram: '@vaughn_supremecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/vaughn-gordon-vg06zzb',
  },
  {
    name: 'Eliblends',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/eli-fox-efau6ub',
  },
  {
    name: 'Dion',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/DionBossedUp716',
  },
  {
    name: 'Travis Powell',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/travis-powell-tprapoe',
  },
  {
    name: 'Drip Sanchez',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/sanchezcuts',
  },
  {
    name: 'JuJu',
    
    instagram: '@signaturecutz',
    imageUrl: '/blankperson.jpg',
    bookingUrl: 'https://app.thecut.co/barbers/jujucut1',
  },
]

export default function MeetTheTeam() {
  return (
    <section className="bg-[#0a0f1c] py-20 px-6">
      <h2 className="text-center text-4xl font-extrabold text-white mb-2">MEET THE TEAM</h2>
      <p className="text-center text-lg text-white mb-12">Signature Cutz Barbers</p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {barbers.map((barber) => (
          <BarberCard key={barber.name} {...barber} />
        ))}
      </div>
    </section>
  )
}
