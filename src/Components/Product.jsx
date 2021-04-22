import React from 'react'
import caseImage from '../Assets/_images/case-1.png'

function Product() {
  return (
    <div className="flex items-center justify-center p-8 w-56 flex-col text-sm hover:bg-gray-200 rounded-sm duration-150 shadow-lg">
      <h1 className="mb-4">Corsair 275R</h1>
      <img className="w-full" src={caseImage} alt="product__image" />
      <button className="mt-8 w-36 h-8 border border-gray-500 hover:bg-gray-500 rounded-sm hover:text-white active:bg-gray-800">
        Add to basket
      </button>
    </div>
  )
}

export default Product
