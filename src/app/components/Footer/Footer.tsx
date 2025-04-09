import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slateBlue py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1 */}
          <div className="md:col-span-3">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/showroom"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/where-to-buy"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Where to Buy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:col-span-3">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/care-maintenance"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Care & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/trade-portal"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Trade Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-3">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/retail-rep-finder"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Retail Rep Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/contract-rep-finder"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Contract Rep Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-sign-in"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Dealer Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogs"
                  className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
                >
                  Catalogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="md:col-span-3">
            <div className="mb-4">
              <Link
                href="tel:8008772290"
                className="text-[1.6rem] font-roboto text-grey-200 hover:text-beige transition-colors"
              >
                800.877.2290
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link href="https://instagram.com" aria-label="Instagram">
                <div className="w-8 h-8 rounded-full border border-grey-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-grey-200"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <div className="w-8 h-8 rounded-full border border-grey-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-grey-200"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <div className="w-8 h-8 rounded-full border border-grey-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-grey-200"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <p className="text-[1.2rem] text-grey-300 font-roboto">
            © 2025 Woodard Furniture |
            <Link href="/terms" className="hover:text-grey-200 transition-colors">
              {" "}
              Terms & Conditions
            </Link>{" "}
            |
            <Link href="/privacy" className="hover:text-grey-200 transition-colors">
              {" "}
              Privacy Policy
            </Link>{" "}
            | Site protected by reCAPTCHA. Google
            <Link href="https://policies.google.com/privacy" className="hover:text-grey-200 transition-colors">
              {" "}
              Privacy
            </Link>{" "}
            and
            <Link href="https://policies.google.com/terms" className="hover:text-grey-200 transition-colors">
              {" "}
              Terms
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </footer>
  )
}
