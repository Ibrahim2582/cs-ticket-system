import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  const companyLinks = ["About Us", "Our Mission", "Contact Sales"];
  const serviceLinks = [
    "Products & Services",
    "Customer Stories",
    "Download Apps",
  ];
  const infoLinks = ["Privacy Policy", "Terms & Conditions", "Join Us"];

  return (
    <footer className="w-full">
      {/* Background */}
      <div className="bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Section */}
          <div className="py-10 md:py-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
              {/* Brand */}
              <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-white">
                  CS — Ticket System
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  A digital ticket management system designed to simplify
                  customer service support, complaint tracking, and
                  communication between users and support teams.
                </p>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold text-white">Company</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {companyLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm font-semibold text-white">Services</h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {serviceLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Information */}
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Information
                </h4>
                <ul className="mt-4 space-y-3 text-sm">
                  {infoLinks.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-neutral-400 hover:text-white transition"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Social Links
                </h4>

                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="group flex items-center gap-3 text-neutral-400 hover:text-white transition"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition">
                        {/* X icon */}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M18.9 2H21l-4.6 5.3 5.4 7.7h-4.1l-3.2-4.7-4 4.7H6.4l5-5.8L6 2h4.2l2.9 4.2L18.9 2Zm-.7 11.3h1.1L9.1 3.1H8l10.2 10.2Z" />
                        </svg>
                      </span>
                      @CS — Ticket System
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="group flex items-center gap-3 text-neutral-400 hover:text-white transition"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition">
                        {/* Instagram */}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5ZM18 6.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.75Z" />
                        </svg>
                      </span>
                      @CS — Ticket System
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="group flex items-center gap-3 text-neutral-400 hover:text-white transition"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition">
                        {/* Facebook */}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v8h3.5Z" />
                        </svg>
                      </span>
                      @CS — Ticket System
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:support@csst.com"
                      className="group flex items-center gap-3 text-neutral-400 hover:text-white transition"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 group-hover:border-neutral-700 transition">
                        {/* Mail */}
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5-8-5V6l8 5 8-5v2.2Z" />
                        </svg>
                      </span>
                      support@csst.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-neutral-800/70" />

            {/* Bottom */}
            <div className="py-6 text-center text-sm text-neutral-400">
              © {year} CS — Ticket System. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
