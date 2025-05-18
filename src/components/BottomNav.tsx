"use client";

import { Home, Briefcase, CalendarDays, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Jobs", href: "/jobs", icon: Briefcase },
  { label: "Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Inbox", href: "/inbox", icon: Mail },
  { label: "Profile", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 md:hidden shadow-sm">
      <ul className="flex justify-around px-2 py-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                  {
                    "bg-gradient-to-t from-gray-300 to-white shadow-md text-black scale-105":
                      isActive,
                    "text-gray-500 hover:text-black hover:bg-gray-100": !isActive,
                  }
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="text-[13px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
