"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/pages/BusSelection" },
  { name: "Color", href: "/pages/BookingProfile" },
  { name: "Contact", href: "/pages/Contactus" },
  { name: "Explore", href: "/pages/Auth" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 ${
            pathname === link.href ? "bg-gray-100 text-blue-600" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
