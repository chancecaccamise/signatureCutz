'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Services', href: '/services' },
  { name: 'Meet the Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md z-50 relative">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        {/* Left: Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Signature Cutz</span>
            <img
              alt="Logo"
              src="/CutzLogo.png"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Center: Nav links */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 whitespace-nowrap">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Phone Call Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:7165637235"
            className="inline-block rounded-md bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition"
          >
            (716)563-78235
          </a>
        </div>
      </nav>

      {/* Mobile Nav */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Signature Cutz</span>
              <img
                alt="Logo"
                src="/CutzLogo.png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Phone Button */}
                <a
                  href="tel:7165637235"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-black hover:bg-gray-100"
                >
                  (716) 563-7235
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
