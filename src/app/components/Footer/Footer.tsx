import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-grey-100 py-10 px-12">
      <div className="max-w-[100rem] flex">
          {/* Column 1 */}
          <div className="w-[25%]">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-story"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/showroom"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Showroom
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/where-to-buy"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Where to Buy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-[25%]">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/care-maintenance"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Care & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  href="/warranty"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/trade-portal"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Trade Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-[25%]">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/retail-rep-finder"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Retail Rep Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/contract-rep-finder"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Contract Rep Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/dealer-sign-in"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Dealer Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogs"
                  className="text-[1.5rem] font-roboto text-grey-200 hover:underline"
                >
                  Catalogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-[25%]">
            <div className="mb-4">
              <Link
                href="tel:8008772290"
                className="text-[1.8rem] font-roboto text-grey-200 hover:underline"
              >
                800.877.2290
              </Link>
            </div>
            <div className="flex ">
              <Link href="https://instagram.com" aria-label="Instagram" className="mr-6 w-[2.6rem] h-[2.6rem] rounded-full border border-grey-200 flex items-center justify-center">
                  <i className="fa-brands fa-instagram text-grey-200 hover:underline text-[1.6rem]"></i>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook" className="mr-6 w-[2.6rem] h-[2.6rem] rounded-full border border-grey-200 flex items-center justify-center">
                  <i className="fa-brands fa-facebook-f text-grey-200 hover:underline text-[1.6rem]"></i>
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="w-[2.6rem] h-[2.6rem] rounded-full border border-grey-200 flex items-center justify-center">
                  <i className="fa-brands fa-linkedin-in text-grey-200 hover:underline text-[1.6rem]"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-4">
          <p className="text-[1.2rem] font-roboto">
            © 2025 Woodard Furniture |
            <Link href="/terms" className="hover:underline">
              {" "}
              Terms & Conditions
            </Link>{" "}
            |
            <Link href="/privacy" className="hover:underline">
              {" "}
              Privacy Policy
            </Link>{" "}
            | Site protected by reCAPTCHA. Google
            <Link href="https://policies.google.com/privacy" className="hover:underline">
              {" "}
              Privacy
            </Link>{" "}
            and
            <Link href="https://policies.google.com/terms" className="hover:underline">
              {" "}
              Terms
            </Link>{" "}
            apply.
          </p>
      </div>
    </footer>
  )
}
