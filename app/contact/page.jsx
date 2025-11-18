"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from 'lucide-react'; 

export default function ContactInfo() {
  
  const EMAIL = "warspolinvest@gmail.com";
  const PHONE = "+48 888 656 680";
  const LOCATION = "Warsaw, Poland (HQ)";

  // The simplified mailto link
  const mailtoLink = `mailto:${EMAIL}?subject=Inquiry%20from%20WarsPolInvest%20Website`;

  return (
    <section className="min-h-screen flex items-center bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            We are ready to discuss your next project. Contact us directly via email or phone.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Email */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 text-center border border-gray-100 transition duration-300 hover:border-blue-600/50">
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-lg text-gray-700 font-medium">{EMAIL}</p>
          </div>
          
          {/* Phone */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 text-center border border-gray-100 transition duration-300 hover:border-blue-600/50">
            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-lg text-gray-700 font-medium">{PHONE}</p>
          </div>
          
          {/* Location */}
          <div className="bg-gray-50 rounded-2xl shadow-xl p-8 text-center border border-gray-100 transition duration-300 hover:border-blue-600/50">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-lg text-gray-700 font-medium">{LOCATION}</p>
          </div>
        </div>
        
        {/* Send Email Button (Primary CTA) */}
        <div className="text-center pt-8">
            <Link
              href={mailtoLink}
              target="_blank" // Opens in a new tab, usually triggering the mail client better
              className="inline-flex items-center bg-blue-700 text-white py-4 px-10 rounded-xl font-bold text-xl transition-all duration-200 transform shadow-xl hover:bg-blue-800 hover:scale-[1.03]"
            >
              <Mail className="w-6 h-6 mr-3" /> Send Email
            </Link>
        </div>

      </div>
    </section>
  );
}