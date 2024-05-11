import React from 'react'

function Card({ name, department, college }) {
  return (
    <div
      className="border rounded-lg shadow-md overflow-hidden bg-gray-100 hover:bg-gray-200"
    >
      <div className="p-4">
        <h1 className="text-2xl font-medium text-gray-800">Naam: {name}</h1>
        <p className="text-base text-gray-600">Department: {department}</p>
        <p className="text-base text-gray-600">College: {college}</p>
      </div>
    </div>
  )
}

export default Card
