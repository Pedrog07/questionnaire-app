import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { getAllTopics } from '../../topics'
import TopicsProvider from '@/components/TopicProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Questionnaire App',
  description: 'Answer different topics questions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopicsProvider
          topics={[
            ...getAllTopics(),
            {
              id: 'frontend',
              description: 'Web design, front facing applications, styling.',
              children: [
                'css',
                'html',
                'package-managers',
                'pick-a-framework',
                'vcs-hosting',
                'version-control-system',
              ],
            },
            {
              id: 'fullstack',
              description:
                'Web design, front facing applications, styling, as well as database management, server maintenance, processes.',
              children: ['javascript', 'react'],
            },
          ]}
        >
          <div className="flex justify-center items-center">{children}</div>
        </TopicsProvider>
      </body>
    </html>
  )
}
