'use client'

export default function FontVariables() {
  return (
    <style jsx global>{`
      :root {
        --font-sans: var(--font-poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif);
        --font-cupcake: var(--font-cupcakes, "CupCakes", cursive);
      }
    `}</style>
  )
} 