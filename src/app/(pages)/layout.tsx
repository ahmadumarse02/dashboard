import Slidebar from "@/components/Slidebar";
import Navbar from "@/components/Navbar";
import { LayerProps } from "recharts";

export default function Layout({ children }:LayerProps) {
  return (
    <html lang="en">
      <body>
        <aside className="fixed left-0 top-0 h-screen w-56 bg-[#E4E4E4] shadow-md z-50">
          <Slidebar />
        </aside>
        <div className={"flex flex-col flex-1 ml-56"}>
          <header className="fixed top-0 left-56 right-0 bg-white shadow-md z-50">
            <Navbar />
          </header>
          <main className={"mt-16 max-h-screen overflow-auto"}>{children}</main>
        </div>
      </body>
    </html>
  );
}