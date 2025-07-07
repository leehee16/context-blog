// src/app/layout.tsx  전역 레이아웃 정의

import './globals.css';
import type { ReactNode } from 'react';
import Header from '@/widgets/header';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';

export const metadata = {
  title: 'Context Blog',
  description: 'FSD 구조,Next.js 블로그',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-white dark:bg-neutral-800">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Header />
          {children} {/* page.tsx 파일 렌더링 */}
        </ThemeProvider>
      </body>
    </html>
  );
}
