import Link from "next/link";

const NAV_ITEMS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Venues", href: "#" },
  { label: "Packages", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-semibold text-xl text-gray-800"
          >
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 text-lg font-bold text-gray-700">
              L
            </div>
            The Luxury Resort
          </Link>

          {/* hidden on small screens for simplicity; mobile menu could be added later */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
