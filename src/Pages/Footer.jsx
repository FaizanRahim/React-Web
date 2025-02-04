import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <img src="https://i.pinimg.com/736x/71/b3/e4/71b3e4159892bb319292ab3b76900930.jpg" alt="Company Logo" className="h-12 mb-4" />
            <p className="text-sm">Lorem ipsum dolor sit amet. Lorem is a dummy text used worldwide in websites.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="text-sm">
              <li className="mb-2">Overview</li>
              <li className="mb-2">Features</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Releases</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="text-sm">
              <li className="mb-2">Category1</li>
              <li className="mb-2">Category2</li>
              <li className="mb-2">Category3</li>
              <li className="mb-2">Category4</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="text-sm">
              <li className="mb-2">About us</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Contact</li>
              <li className="mb-2">Events</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="text-sm">
              <li className="mb-2">Help centre</li>
              <li className="mb-2">Tutorials</li>
              <li className="mb-2">Support</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Terms of service</li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center md:justify-start space-x-4 mt-8">
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBKsVy8QSdQz5XwYxnhUtNwyorph8M9n-vQ&s" alt="Facebook" className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGxcOAdx2ts2pf1Guy9cZhFcijBsiVDE5y0XuFN2hotbUk_loRBKnTwCMZocfPKe4Ng0E&usqp=CAU" alt="Twitter" className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSuIWGSSdkWl6S-dJnDCKQMTuty3MvhbrJw&s" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqBoYL6pnLsULaqXxLr99lHLTn4q8QPnRWw&s" alt="LinkedIn" className="h-6 w-6" />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2020 Company Name. All rights reserved.</p>
          
          {/* Decorative Element with Animation */}
          <div className="mt-4 md:mt-0 animate-bounce">
            <svg className="h-8 w-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7 7 7M5 19l7-7 7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;