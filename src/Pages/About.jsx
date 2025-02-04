import React from 'react';

const About = () => {
  return (
    <div className="px-6 py-8">
      <h1 className= "  text-black ml-20 mr-20 text-2xl mb-6 text-start font-bold">Most Popular Vacancies</h1>
      
      <div className="display-flex justify-center ml-20 mr-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {[
          { title: "Surgeons", positions: "50,365" },
          { title: "Anesthesiologist", positions: "45,365" },
          { title: "Maxillofacial", positions: "77,365" },
          { title: "Software Developer", positions: "67,365" },
          { title: "Financial Manager", positions: "21,365" },
          { title: "Management", positions: "93,365" },
          { title: "Banker", positions: "54,365" },
          { title: "Doctors", positions: "52,365" },
          { title: "Specialist", positions: "59,365" },
          { title: "IT Manager", positions: "70,365" },
          { title: "Khushali", positions: "67,365" },
          { title: "Principal", positions: "52,205" },
        ].map((job, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
            <h2 className='text-gray-800 text-lg font-bold'>{job.title}</h2>
            <p className='text-gray-600'>{job.positions} Open Positions</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
