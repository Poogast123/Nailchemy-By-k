import React from 'react';
import { Star, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="h-[600px] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to Nailchemy By-k</h1>
            <p className="text-xl mb-8">Where nail art meets magic</p>
            <a href="/contact" className="bg-primary-500 text-white px-8 py-3 rounded-full hover:bg-primary-600 transition">
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Using only the finest products for lasting results</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">Open 7 days a week for your convenience</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Staff</h3>
              <p className="text-gray-600">Experienced professional at your service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;