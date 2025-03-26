import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: NextRequest) {
  // Skip for internal requests or static assets
  if (req.nextUrl.pathname.startsWith('/api') || 
      req.nextUrl.pathname.startsWith('/_next') || 
      req.nextUrl.pathname.includes('.')) {
    return
  }

  let lng
  const cookieLng = req.cookies.get('i18next')?.value
  const pathLng = req.nextUrl.pathname.split('/')[1]

  // Check if the path includes a supported language
  if (languages.includes(pathLng)) {
    // Path already includes a language - nothing to do
    return
  }

  // Determine language from cookie or header
  if (cookieLng && languages.includes(cookieLng)) {
    lng = cookieLng
  } else {
    const acceptLng = acceptLanguage.get(req.headers.get('Accept-Language'))
    lng = acceptLng || fallbackLng
  }

  // Redirect to URL with language prefix
  return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
} 