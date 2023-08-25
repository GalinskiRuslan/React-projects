import TheHeader from '@/components/layouts/TheHeader'
import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheFooter } from '@/components/layouts/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AzpulMat',
  description: 'Money money',
  icons: "../favicon.ico",

}

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: any
}) {
  let messages;
  const locale = useLocale();
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>

      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TheHeader />
          <main className='container'>
            {children}
          </main>
          <TheFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
