type Barber = {
    name: string
    
    instagram: string
    imageUrl: string
    bookingUrl?: string
  }
  
  export default function BarberCard({ name,  instagram, imageUrl, bookingUrl }: Barber) {
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
            
          </div>
        </div>
  
        {/* Info below the card */}
        <div className="mt-4 text-left">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <a
            href={`https://instagram.com/${instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline text-sm block mt-1"
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
  