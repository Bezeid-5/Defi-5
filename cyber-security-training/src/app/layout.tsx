
import "./globals.css";

import Navbar from "@/components/Navbar";
import ChatbotIcon from "@/components/ChatbotIcon";

export const metadata = {
  title: "Accueil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <ChatbotIcon />
      </body>
    </html>
  );
}
