import React from 'react'
import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'
import '@/data/style/main.css'

import { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'

import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import LayoutWrapper from '@/layouts/LayoutWrapper'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
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
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href={`${basePath}/static/favicons/favicon-64x64.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href={`${basePath}/static/favicons/favicon-96x96.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href={`${basePath}/static/favicons/apple-57x57-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href={`${basePath}/static/favicons/apple-60x60-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href={`${basePath}/static/favicons/apple-72x72-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-76x76-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={`${basePath}/static/favicons/apple-114x114-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${basePath}/static/favicons/apple-120x120-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={`${basePath}/static/favicons/apple-144x144-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${basePath}/static/favicons/apple-152x152-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${basePath}/static/favicons/apple-180x180-touch-icon.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body
        dir={siteMetadata.dir ? siteMetadata.dir : 'rtl'}
        className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white"
      >
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
            <LayoutWrapper>{children}</LayoutWrapper>
          </SearchProvider>
        </ThemeProviders>
      </body>
    </html>
  )
}
