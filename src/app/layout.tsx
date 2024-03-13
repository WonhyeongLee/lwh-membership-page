import type { Metadata } from 'next';

import localFont from 'next/font/local';

import '@/styles/reset.css.ts';
import GSAPWrapper from '@/app/_component/GSAPWrapper.tsx';
import { MSWComponent } from '@/app/_component/MSWComponent.tsx';

import * as styles from '@/app/RootLayout.css.ts';

const pretendRegular = localFont({
  src: '../../public/fonts/Pretendard-Regular.subset.woff2',
  weight: '400',
  display: 'swap',
  preload: true,
});

const pretendBold = localFont({
  src: '../../public/fonts/Pretendard-Bold.subset.woff2',
  weight: '700',
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
      <body
        className={`${pretendRegular.className} ${pretendBold.className} antialiased ${styles.MainContainer}`}
      >
        <MSWComponent />
        <GSAPWrapper>
          <main>{children}</main>
        </GSAPWrapper>
      </body>
    </html>
  );
}
