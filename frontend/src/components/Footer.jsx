import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1f1d1d] text-[#f7dfd6] py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#e29c8e] to-[#f7dfd6] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-900" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 0v8m0 0l-4 4m4-4l4 4" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold text-white tracking-tight">Touch of Joy</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience the pinnacle of luxury spa therapies. Rejuvenate your body, mind, and soul in our tranquil haven.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-[#e29c8e] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#e29c8e] transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-[#e29c8e] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#e29c8e] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-[#e29c8e] transition-colors cursor-pointer">Gentle Skincare</li>
              <li className="hover:text-[#e29c8e] transition-colors cursor-pointer">Spa Therapy</li>
              <li className="hover:text-[#e29c8e] transition-colors cursor-pointer">Beauty Secrets</li>
              <li className="hover:text-[#e29c8e] transition-colors cursor-pointer">Massage Therapies</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>123 Luxury Avenue, Suite 100<br/>New York, NY 10001</li>
              <li>hello@touchofjoy.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Touch of Joy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
