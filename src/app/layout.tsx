import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import '@/app/RootLayout.css';
import GSAPWrapper from '@/app/_component/GSAPWrapper.tsx';
import { MSWComponent } from '@/app/_component/MSWComponent.tsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '이원형 멤버쉽 사이트',
  description: '이원형에 대한 개인적인 후원을 통해 멤버쉽 혜택을 받아보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <MSWComponent />
        <GSAPWrapper>
          <main>{children}</main>
        </GSAPWrapper>
      </body>
    </html>
  );
}
