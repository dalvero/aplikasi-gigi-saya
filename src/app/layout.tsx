
import { Poppins } from 'next/font/google'; // MENGIMPOR FONT POPPINS DARI GOOGLE
import "./globals.css";

// FONT STYLE
const poppins = Poppins({
  subsets: ['latin'],
   // REGULAR, MEDIUM, SEMIBOLD, DAN BOLD
  weight: ['400', '500', '600', '700'], 
});

export const metadata = {
  title: 'Aplikasi Edukasi Gigi',
  description: 'Aplikasi Edukasi Gigi Pengguna',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#949191'
        }}
        className={poppins.className} suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
