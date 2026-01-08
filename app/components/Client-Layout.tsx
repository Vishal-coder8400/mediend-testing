// app/ClientSpecificLogic.tsx
"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Notifications } from "@mantine/notifications";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import GlobalPopup from './GlobalPopup/GlobalPopup';

export default function ClientSpecificLogic({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // 🎯 PAGE WHERE GLOBAL HEADER + FOOTER MUST NOT SHOW
  const hideHeaderFooter =
    pathname?.startsWith("/gbn/gynecomastia-surgery-in-noida");

  // Your existing ads logic
  const isAdsPage = pathname.startsWith("/diseases");
  const mainClasses = isAdsPage ? "" : "relative lg:top-[84px] top-8 mt-6";

  return (
    <>
      <Notifications />

      {/* 🔥 Show global header only when NOT landing page */}
      {!hideHeaderFooter && <Header />}

      <main className={mainClasses}>
        {children}

        {/* Popup also disabled on landing page */}
        {!isAdsPage && !hideHeaderFooter && (
          <GlobalPopup scrollThreshold={500} />
        )}
      </main>

      {/* 🔥 Show global footer only when NOT landing page */}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}