import { Inter } from 'next/font/google'

export const metadata = {
    title: 'Phrase',
    description: 'molde para letras em EVA',
}
const inter = Inter({ subsets: ['latin'] })

export default function PhraseLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
