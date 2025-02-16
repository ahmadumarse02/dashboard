import "./globals.css";
import Slidebar from "@/components/Slidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <div className="fixed z-50 left-0 top-0 h-screen bg-[#E4E4E4] w-[14rem]">
          <Slidebar />
        </div>

        <div className="ml-[14rem] flex-1 flex flex-col">
          <div className="fixed top-0 right-0 left-[14rem] z-50">
            <Navbar />
          </div>

          <div className="mt-[65px] p-4 bg-white text-black">{children}</div>
        </div>
      </body>
    </html>
  );
}
