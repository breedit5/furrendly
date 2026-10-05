import type { Metadata } from 'next'
import { Fredoka, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { ThemeProvider } from '@/components/theme-provider'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import PageTracker from '@/components/PageTracker'
import DynamicFavicon from '@/components/DynamicFavicon'
import { BiscuitChatWidget } from '@/components/biscuit-chat-widget'
import './globals.css'
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Furrendly - Pet Care & Adoption Platform',
  description: 'Find, care, and adopt pets with Furrendly.',

  // ❌ Prevent Next.js from forcing favicon.ico in browser
  icons: {
    icon: [],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fredoka.variable} ${poppins.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {/* ✅ Google Analytics */}
        {GA_ID && (
          <>
            <Script id="clarity" strategy="afterInteractive">
{`
  (function(c,l,a,r,i,t,y){
    // 🔥 FORCE FIX: reset if corrupted
    if (typeof c[a] !== "function") {
      c[a] = function(){(c[a].q=c[a].q||[]).push(arguments)};
    }

    t=l.createElement(r);
    t.async=1;
    t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];

    if (y && y.parentNode) {
      y.parentNode.insertBefore(t,y);
    }
  })(window, document, "clarity", "script", "wlx8m9m3se");
`}
</Script>

          </>
        )}
        {CLARITY_ID && (
  <Script id="clarity" strategy="afterInteractive">
    {`
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_ID}");
    `}
  </Script>
)}

        <ThemeProvider>
          <Providers>

            {/* ✅ Force dynamic favicon */}
            <DynamicFavicon />

            <PageTracker />
            <Header />

            <main className="min-h-screen">
              {children}
            </main>

            <Footer />

          </Providers>
        </ThemeProvider>

        <Analytics />
        <BiscuitChatWidget />
      </body>
    </html>
  )
}