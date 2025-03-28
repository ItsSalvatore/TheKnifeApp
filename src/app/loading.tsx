export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-honey-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-cupcake text-olive-900 dark:text-white">Loading...</p>
      </div>
    </div>
  )
} 