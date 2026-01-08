// app/layout.tsx
// NO "use client"; here if you want generateMetadata to work as expected at the root.

import { Metadata } from 'next';
import { MantineProvider } from "@mantine/core"; // Keep
import { theme } from "../theme"; // Keep
import Header from "./components/Header/Header"; // Keep
import Footer from "./components/Footer/Footer"; // Keep
import { Providers } from "./Providers"; // Keep
import AOSContainer from "./components/AOS/AOS"; // Keep
import ClientSpecificLogic from './components/Client-Layout'; // NEW: Component for client-side logic

// Your global CSS imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import "./global.css";
import "react-multi-carousel/lib/styles.css";

// Define your default metadata
export const metadata: Metadata = {
  // It's good practice to set metadataBase
  metadataBase: new URL('https://mediend.com'),
  title: {
    default: 'mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More', // Fallback title
    template: '%s | mediEND', // %s will be replaced by title from inner routes
  },
  description: 'We offer expert surgical care from experienced surgeons, specializing in Lipoma, Gynecomastia, Bariatric, Piles, Lasik, and more. Enjoy affordable pricing and our free pick-up & drop facility for a seamless experience.',
  // Viewport is usually handled by Next.js, but you can customize if needed
  // viewport: 'minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no',
  openGraph: {
    title: 'mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More',
    description: 'We offer expert surgical care from experienced surgeons...',
    url: '/', // This will be relative to metadataBase if set
    siteName: 'mediEND',
    images: [
      {
        url: '/logo.png', // Assuming logo.png is in your /public folder
        width: 1200, // Optional
        height: 630, // Optional
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mediEND - Expert Surgical Care | Gynecomastia, Lipoma Surgery & More',
    description: 'We offer expert surgical care from experienced surgeons...',
    images: ['/logo.png'], // Assuming logo.png is in your /public folder
  },
  robots:{
    index:true,
    follow:true,
  }
  // Add other global meta tags here if needed
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // The useEffect for document.title is REMOVED from here.
  // The logic for mainClasses and isAdsPage will move to ClientSpecificLogic.

  return (
    <html lang="en" suppressHydrationWarning> {/* suppressHydrationWarning may be needed if Mantine/other libs cause issues without "use client" at root */}
      <head>
        {/*
          Meta tags like viewport, description, OG tags defined above via `export const metadata`
          will be automatically handled by Next.js.
          You only need to include things here that Next.js doesn't handle via the Metadata API,
          like custom font links or external scripts.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" // Use "anonymous" for crossOrigin with fonts
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics Script - This is fine here */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-29YDLX52BY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-29YDLX52BY');
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <AOSContainer>
            <MantineProvider defaultColorScheme="light" theme={theme}>
              {/* Wrap parts that need client-side logic */}
              <ClientSpecificLogic>
                {children}
              </ClientSpecificLogic>
            </MantineProvider>
          </AOSContainer>
        </Providers>
      </body>
    </html>
  );
}