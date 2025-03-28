'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-cupcake text-olive-900 dark:text-white mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={reset}
          className="btn-primary px-6 py-2 rounded-full"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 