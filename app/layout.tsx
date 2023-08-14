"use client"
import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import { Analytics } from '@vercel/analytics/react';
import WithSubnavigation from "@/components/Navbar"
import SmallWithSocial from "@/components/Footer"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <CSSReset />
          <div style={{ backgroundColor: "#1E1E1E" }}>
            <WithSubnavigation />
            {children}
            <Analytics />
            <SmallWithSocial />
            
          </div>
        </ChakraProvider>
      </body>
    </html>
  );
}

