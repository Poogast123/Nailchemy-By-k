// import React from 'react';

const services = [
  {
    name: "Classic Manicure",
    price: "$30",
    description: "Includes nail shaping, cuticle care, hand massage, and polish",
    duration: "45 mins"
  },
  {
    name: "Gel Manicure",
    price: "$45",
    description: "Long-lasting gel polish with all the benefits of our classic manicure",
    duration: "60 mins"
  },
  {
    name: "Nail Art Design",
    price: "from $15",
    description: "Custom nail art designs to match your style",
    duration: "30-60 mins"
  },
  {
    name: "Luxury Pedicure",
    price: "$55",
    description: "Complete foot care with extended massage and premium products",
    duration: "75 mins"
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">Discover our range of professional nail care services</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-primary-600 mb-2">{service.name}</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">{service.price}</p>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">Duration: {service.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;