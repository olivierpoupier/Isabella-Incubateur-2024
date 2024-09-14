import "./globals.css";
import { Fraunces, Montserrat } from 'next/font/google'
import Head from 'next/head';


const fraunces = Fraunces({
  weight: '400',
  subsets: ['latin']
});

const montserrat = Montserrat({
  weight: '200',
  subsets: ['latin']
});

export const metadata = {
  title: "Let Them Eat Cake",
  description: "Surpriiiise!!!!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${fraunces.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
