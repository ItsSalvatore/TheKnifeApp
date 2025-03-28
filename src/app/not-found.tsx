import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl font-cupcake text-olive-900 dark:text-white mb-4">
          404 - Not Found
        </h2>
        <p className="text-olive-800 dark:text-olive-100 mb-8">
          Sorry, we couldn't find what you were looking for.
        </p>
        <Link 
          href="/"
          className="btn-primary px-6 py-2 rounded-full inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 