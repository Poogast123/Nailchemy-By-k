// import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary-600 mb-4">Nailchemy By-k</h3>
            <p className="text-gray-600">Transform your nails into works of art.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-600 mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600"><Phone className="h-4 w-4 mr-2" /> +212 6 56 30 13 38</p>
              <p className="flex items-center text-gray-600"><MapPin className="h-4 w-4 mr-2" /> <a
                    href="https://goo.gl/maps/wAVWm6PuiC8fXWYX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View on Google Maps
                  </a></p>
              <p className="flex items-center text-gray-600"><Mail className="h-4 w-4 mr-2" /> nailchemybyk@gmail.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-600 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/nailchemy.by.k/" className="text-gray-600 hover:text-primary-500" title="Follow us on Instagram"><Instagram className="h-6 w-6" /></a>
              <a href="https://www.facebook.com/share/1514GcNaZK/" className="text-gray-600 hover:text-primary-500" title="Follow us on Facebook"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Nailchemy By-k. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;