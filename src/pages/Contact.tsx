// import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us for appointments and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-primary-600 mb-6">
              Contact Information
            </h2>
            <div className="space-y-6">
            <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Map</h3>
                  <a
                    href="https://goo.gl/maps/wAVWm6PuiC8fXWYX7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+212 6 56 30 13 38</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">nailchemybyk@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary-500 mr-4" />
                <div>
                  <h3 className="font-semibold">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 22:00 PM
                    <br />
                    Sunday: 10:00 AM - 20:00 PM
                  </p>
                </div>
              </div>
            
            </div>
          </div>

{/* Image Section */}
<div className="flex justify-center">
  <img
    src="/nailchemy.by.k_qr.png"
    alt="Contact Us"
    className="rounded-lg shadow-md max-w-xs h-auto"
  />
</div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
