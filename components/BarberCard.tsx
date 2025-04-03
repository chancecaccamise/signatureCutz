type Barber = {
    name: string
    level: string
    instagram: string
    imageUrl: string
    bookingUrl?: string
  }
  
  export default function BarberCard({ name, level, instagram, imageUrl, bookingUrl }: Barber) {
    return (
      <div className="flex flex-col w-full max-w-sm">
        {/* Image Card with border */}
        <div className="rounded-xl border-2 border-blue-900 overflow-hidden">
          <div className="relative">
            <img
              src={imageUrl}
              alt={name}
              className="object-cover w-full h-96"
            />
            <div className="absolute bottom-2 right-2 bg-blue-900 text-white text-xs px-2 py-1 rounded">
              LEVEL {level}
            </div>
          </div>
        </div>
  
        {/* Info below the card */}
        <div className="mt-4 text-left">
          <h3 className="text-xl font-bold text-black">{name}</h3>
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline text-sm block mt-1"
          >
            {instagram}
          </a>
          <a
            href={bookingUrl || '#'}
            target="_blank"
            className="mt-4 inline-block bg-blue-900 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    )
  }
  