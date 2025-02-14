import "./globals.css";
import Slidebar from "@/components/Slidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* Sidebar */}
        <Slidebar />

        {/* Main Content - Takes full remaining width */}
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="flex-1 bg-white text-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
