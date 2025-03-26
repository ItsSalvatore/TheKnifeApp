# The Knife - Landing Page

A modern, responsive landing page for The Knife iOS app, built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🌐 Bilingual support (English and Dutch)
- 🌓 Dark mode support
- ✨ Smooth animations and transitions
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Language switching without page refresh

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- next-i18next
- next-themes

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-knife-site.git
   cd the-knife-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
the-knife-site/
├── public/
│   └── locales/
│       ├── en/
│       │   └── common.json
│       └── nl/
│           └── common.json
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── LanguageSwitcher.tsx
├── next-i18next.config.js
├── tailwind.config.ts
└── package.json
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
