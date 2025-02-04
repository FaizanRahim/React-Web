import React from 'react'

const Contact = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center font-bold text-xl mb-6">Recent Jobs Posted</div>

      <div className="flex flex-wrap justify-center gap-6">
        {Array(6).fill().map((_, index) => (
          <div key={index} className="w-full sm:w-5/12 lg:w-1/3 border p-4 bg-white rounded-lg shadow-lg">
            <h1 className='font-bold mb-2 text-lg'>
              Technical Support Special <span className='text-green-600'>Internship</span> Salary $2500 - $3000
            </h1>
            <h5 className='mb-3 text-sm'>
              Category: <span className='text-pink-700'>Education...</span> Organization: <span className='text-pink-700'>Technology</span>
            </h5>
            <h3 className='font-bold text-md'>Job Description</h3>
            <p className='text-sm text-gray-700'>
              Lorem ipsum dolor sit, amet consectetur adipisicing it. Itaque quo architecto, assumenda impedit veritatised deleniti ea aut earum aliquid corporis so you.
            </p>
            <h5 className='flex items-center gap-2 mt-3 text-sm'>
              <img src="data:image/png;base64,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" alt="Image" className="w-12 h-12 rounded-full" />
              <span className='font-bold'>Visionary Tech Group</span>
              <span className='text-pink-800'>Posted 1hr Ago</span>
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
