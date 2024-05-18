import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { sansFont } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { SHeader } from "@/components/layout/header"
import getNavLinks, { getNavLinksV2 } from "./links"
import { getCurrentUser } from "@/lib/session"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
