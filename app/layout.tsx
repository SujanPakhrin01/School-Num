import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
          }
          body {
            padding-top: 68px;
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer logoSrc="/logo.png" />
      </body>
    </html>
  );
}