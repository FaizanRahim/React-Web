import React from 'react';
import images from '../assets/images/boy.png';

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <div className="flex flex-col lg:flex-row items-center justify-evenly max-w-[100%] mx-auto my-12 lg:my-24 p-4">
        {/* Right Section */}
        <div className="right text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Find a job that suits <br /> your{' '}
            <span className="font-serif text-purple-700">interest & skills.</span>
          </h1>
          <p className="my-5 text-sm sm:text-base text-gray-600">
            Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, <br />
            eget sollicitudin velit bestibulum.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Job Title, Keyword..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 py-2 bg-purple-700 text-white border border-gray-300 rounded-md hover:bg-purple-800">
              Find Job
            </button>
          </div>
          <h6 className="mt-2 text-xs text-gray-500">
            Suggestions : Designer,<span className='text-purple-700'> Digital Marketer</span>, Video, Animation
          </h6>
        </div>

        {/* Left Section (Image) */}
        <div className="left">
          <img
            src={images}
            alt="Job Illustration"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

