import "./globals.css";
import Topbar from "./Topbar";

export const metadata = {
  title: "WarsPolInvest | Warsaw Construction Company",
  description: "WarsPolInvest is a Warsaw-based construction company.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900 min-h-screen antialiased">
        <Topbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
