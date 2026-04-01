import './globals.css'

export const metadata = {
  title: 'Kennedy C — Virtual Assistant & Operations Specialist',
  description: 'Virtual Assistant, Operations Specialist, and Technical Support Professional. Organised, precise, and ready to work.',
  keywords: ['virtual assistant', 'operations specialist', 'technical support', 'remote work'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('unhandledrejection', (event) => {
                if (event.reason && (event.reason.message && event.reason.message.includes('MetaMask') || (typeof event.reason === 'string' && event.reason.includes('MetaMask')))) {
                  event.preventDefault();
                }
              });
            `
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
