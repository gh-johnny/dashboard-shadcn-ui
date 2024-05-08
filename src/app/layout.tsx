import './globals.css'

import { QueryClientProvider } from '@tanstack/react-query'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { queryClient } from '@/lib/react-query'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Dashboard - DAE',
    description: 'Dashboard criado para a DAE',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <QueryClientProvider client={queryClient}>
                <body className={inter.className}>{children}</body>
            </QueryClientProvider>
        </html>
    )
}
