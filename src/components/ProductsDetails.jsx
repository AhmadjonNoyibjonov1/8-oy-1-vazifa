import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProductDetails() {
  const { model } = useParams();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

//   const data = [
    
//   ];

  const product = data.find((item) => item.model === model);

  return (
    <div className={`min-h-screen p-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Back
      </button>
      {product ? (
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <img src={product.image} alt={product.model} className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.model}</h2>
            <p className="mb-2">Brand: {product.brand}</p>
            <p className="mb-2">Year: {product.year}</p>
            <p className="mb-2">Horsepower: {product.horsepower} HP</p>
            <p className="mb-2">Price: {product.price}</p>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetails;
