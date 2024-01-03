import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-4xl font-bold text-red-500 mb-8">404 - Page Not Found</h2>
                <p className="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed or is
                    temporarily unavailable.
                </p>
                <Link href="/" className="inline-block py-3 px-6 bg-fuchsia-950 hover:bg-fuchsia-900 text-white rounded-lg font-semibold">
                    Go back to homepage
                </Link>
            </div>
        </div>
    )
}