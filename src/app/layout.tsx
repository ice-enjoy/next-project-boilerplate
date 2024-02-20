import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const APP_NAME = 'Next-Project';

export const metadata: Metadata = {
  title: APP_NAME,
  applicationName: APP_NAME,
  description: APP_NAME,
  authors: {
    url: '',
    name: '',
  },
  keywords: [''],
  // openGraph: {},
  // twitter: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-background`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}

