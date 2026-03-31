import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="relative py-10 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-10">
        <div className="grid text-center sm:text-left sm:grid-cols-2 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6 justify-center sm:justify-normal">
             <div className='nav-logo text-4xl font-bold flex items-center gap-2 '>
                <div className='logo-dot w-2 h-2 rounded-full bg-(--accent) inline-block'></div>
                <h1>Digi <span className='text-(--accent2)'>Tools</span></h1>
            </div>
            
            </div>

            <p className="text-(--text2) text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-(--accent2) font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-(--text2)">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                 Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-(--accent2) font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-(--text2)">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-(--accent2) font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-(--text2)">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} © 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-(--accent2) transition">
              Privacy Policy ● Terms of Service ● Cookies
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;