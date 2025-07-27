import React from 'react'

const HomeView = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-full mx-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Home View - Full Width</h1>
          <div className="w-full h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">This container takes full width</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeView;