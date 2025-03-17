import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-8">About Village Life</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Village Life is dedicated to preserving and enhancing rural communities while promoting sustainable development and traditional values. Our mission is to bridge the gap between traditional village life and modern opportunities.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              We envision thriving village communities that maintain their cultural heritage while embracing sustainable progress and economic opportunities.
            </p>

            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower rural communities through education, sustainable agriculture, and preservation of traditional crafts while creating economic opportunities for villagers.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900">Location</h3>
                  <p className="text-gray-600">123 Village Road, Rural District</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p className="text-gray-600">contact@villagelife.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;