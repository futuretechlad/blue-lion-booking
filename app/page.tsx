import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🦁 Blue Lion Booking Engine
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional booking platform for restaurants and appointment-based businesses
          </p>
          <div className="space-x-4">
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Login to Dashboard
            </Link>
            <Link 
              href="/book" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            >
              Make a Booking
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}