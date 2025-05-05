/* components/BottomNav.tsx */
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
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 md:hidden">
      <ul className="flex justify-around py-2">
        {navItems.map(({ label, href, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
            >
              <Icon
                className={clsx("h-5 w-5 mb-1", {
                  "text-black": pathname === href,
                })}
              />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
