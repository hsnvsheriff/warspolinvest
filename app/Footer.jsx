"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">WarsPolInvest</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern architecture with precision and excellence since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#projects" className="hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Construction</li> 
              <li>Engineering</li> 
              <li>Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:warspolinvest@gmail.com" className="hover:text-white break-all">
                  warspolinvest@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+48888656680" className="hover:text-white">
                  +48 888 656 680
                </a>
              </li>

              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Warsaw, Poland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
<div className="border-t border-gray-800 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">

    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} WarsPolInvest. All rights reserved.
    </p>

    <div className="flex gap-6">

      {/* TikTok */}
      <a 
        href="https://www.tiktok.com/@warspolinvest.pl"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <svg className="w-6 h-6" fill="white" viewBox="0 0 48 48">
          <path d="M30.4 6a10 10 0 0 0 6.6 6V18a16.2 16.2 0 0 1-7.2-1.8V30a12 12 0 1 1-12-12c.7 0 1.4.1 2 .2v6.4a6 6 0 1 0 4 5.7V6h6.6z"/>
        </svg>
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/warspolinvest.pl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <svg 
          className="w-6 h-6"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.3-3.8a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2z"/>
        </svg>
      </a>

      {/* Facebook */}
      <a 
        href="https://www.facebook.com/profile.php?id=61583090218841"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition"
      >
        <svg 
          className="w-6 h-6"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.1c-1 0-1.3.6-1.3 1.2V12h2.4l-.4 3h-2v7A10 10 0 0 0 22 12"/>
        </svg>
      </a>

    </div>

  </div>
</div>

      </div>
    </footer>
  );
}
