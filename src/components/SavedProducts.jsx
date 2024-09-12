import React from 'react';

function SavedProducts() {
  const [savedCars, setSavedCars] = React.useState([]);

  React.useEffect(() => {
    const cars = JSON.parse(localStorage.getItem('savedCars')) || [];
    setSavedCars(cars);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-4">Saved Products</h1>
      <div className="flex flex-wrap gap-12">
        {savedCars.length > 0 ? (
          savedCars.map((car, index) => (
            <div
              key={index}
              className="w-[351px] rounded-lg p-4 shadow-lg bg-white text-black"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-48 object-contain rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{car.model}</h2>
              <p className="mb-2">Brand: {car.brand}</p>
              <p className="mb-2">Year: {car.year}</p>
              <p className="mb-2">Horsepower: {car.horsepower} HP</p>
              <p className="mb-2">Price: {car.price}</p>
            </div>
          ))
        ) : (
          <p>No saved products</p>
        )}
      </div>
    </div>
  );
}

export default SavedProducts;
