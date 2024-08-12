import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="test">{children}</main>
      </body>
    </html>
  );
}

/*
layout.tsxを置いた場所と、その配下はこのlayoutの影響を受ける
appディレクトリ直下に置いた場合、全ページ適用と考えて良い。
*/
