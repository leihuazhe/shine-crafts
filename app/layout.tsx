import "@/styles/globals.css"
import { Metadata, Viewport } from "next"

import { siteConfig } from "@/config/site"
import { sansFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { SHeader } from "@/components/layout/header"
import { getNavLinksV2 } from "./links"
import { getCurrentUser } from "@/lib/session"
import { SiteFooter } from "@/components/site-footer"

const seo = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: 'Ethan, Huazhe, Huazhe Lei, FullStack, Developer',
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: {
      default: seo.title,
      template: '%s | Huazhe Lei',
    },
    description: seo.description,
    siteName: 'Huazhe Lei',
    locale: 'zh_CN',
    type: 'website',
    url: 'https://tts.317318.xyz',
    images: [
      {
        url: 'https://tts.317318.xyz/opengraph-image.png',
      },
    ],
  },
  twitter: {
    site: '@youjier',
    creator: '@youjier',
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const navResources = await getNavLinksV2();
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })
  const user = await getCurrentUser()
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            // "min-h-screen bg-background font-sans antialiased",
            "min-h-screen font-sans antialiased",
            sansFont.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <SHeader navItems={navItems} user={user} />
            {children}
            {/* <TailwindIndicator /> */}
            <SiteFooter />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
