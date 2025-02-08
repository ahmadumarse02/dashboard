"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FiClock,
  FiClipboard,
  FiCalendar,
  FiVideo,
  FiMessageCircle,
  FiFolder,
  FiFileText,
  FiDownload,
  FiUsers,
  FiBook,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", icon: <FiClock />, path: "/Dashboard" },
  { name: "Assignments", icon: <FiClipboard />, path: "/Assignments" },
  { name: "Schedule", icon: <FiCalendar />, path: "/schedule" },
  { name: "Recordings", icon: <FiVideo />, path: "/Recordings" },
  { name: "Discussions", icon: <FiMessageCircle />, path: "/Discussions" },
  { name: "Resources", icon: <FiFolder />, path: "/resources" },
  { name: "Notes", icon: <FiFileText />, path: "/Notes" },
  { name: "Downloads", icon: <FiDownload />, path: "/Downloads" },
  { name: "Classes", icon: <FiUsers />, path: "/Classes" },
  { name: "Courses", icon: <FiBook />, path: "/Courses" },
  { name: "Settings", icon: <FiSettings />, path: "/Settings" },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white shadow-lg p-4">
      <h1 className="text-2xl font-bold flex items-center mb-6">
        <span className="text-orange-500 text-4xl mr-2">■</span> DESIGNO
      </h1>
      <nav>
        <ul className="list-none p-0">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`flex items-center px-4 py-3 my-1 rounded-lg transition-all no-underline ${
                  pathname === item.path
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
