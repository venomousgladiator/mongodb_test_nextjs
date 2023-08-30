import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Research Cell Registration",
  description:
    "Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Research Cell</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

