import React from "react";
import { useSelector } from "react-redux";

function CardList() {
  const [data, setData] = React.useState([
    {
      "brand": "Mercedes-Benz",
      "model": "Mercedes-Benz CLS",
      "year": 2022,
      "horsepower": 429,
      "price": "$80,000",
      "image": "https://i.pinimg.com/736x/25/e6/6b/25e66b1baf7bde22d00e09a276be6907.jpg"
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-AMG E 63 S",
      year: 2022,
      horsepower: 603,
      price: "$270,000",
      image:
        "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/k3dd7jm4pkhmvcxt0kpq",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz S-Class",
      year: 2023,
      horsepower: 496,
      price: "$180,000",
      image:
        "https://klassen.de/media/images/vehicles/i/bpic/8335189456001018/202102171806540146.jpg",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-AMG GT 63 S",
      year: 2022,
      horsepower: 630,
      price: "$300,000",
      image:
        "https://i.ytimg.com/vi/0uCzpRL0KHw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA10UjqHiBTHkGuGbxeL2kJeLNGRw",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz G-Class",
      year: 2023,
      horsepower: 416,
      price: "$270,000",
      image:
        "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/01/mercedes-g-wagen.jpg",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-AMG A 45 S",
      year: 2021,
      horsepower: 416,
      price: "$76,000",
      image:
        "https://cdn.motor1.com/images/mgl/ZnGXeK/s1/mercedes-amg-a-45-s-2024-als-sondermodell-limited-edition.webp",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz EQS",
      year: 2023,
      horsepower: 516,
      price: "$125,000",
      image:
        "https://cdn.antaranews.com/cache/1200x800/2021/07/26/Mercedes-Benz-EQS-56.jpg",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-AMG CLA 45 S",
      year: 2022,
      horsepower: 421,
      price: "$85,000",
      image:
        "https://images.prismic.io/carwow/7bfa0281-18f6-438d-b9d7-5d11f83c567d_LHD+Mercedes-AMG+CLA+35+4MATIC+2023+Exterior-7.jpg?auto=format&cs=tinysrgb&fit=crop&q=60&w=750",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz GLS",
      year: 2022,
      horsepower: 603,
      price: "$330,000",
      image:
        "https://i.ytimg.com/vi/0p3o0RYNoGk/maxresdefault.jpg",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz E-Class",
      year: 2022,
      horsepower: 362,
      price: "$78,000",
      image:
        "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/fc0daf7a899288ffcf698982cf1fc2d2.png",
    },
    {
      brand: "Mercedes-Benz",
      model: "Mercedes-Benz SL-Class",
      year: 2022,
      horsepower: 577,
      price: "$140,000",
      image:
        "https://images.hgmsites.net/lrg/2024-mercedes-benz-sl-class-amg-sl-63-roadster-angular-front-exterior-view_100915748_l.webp",
    },
  ]);

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const saveToLocalStorage = (car) => {
    const savedCars = JSON.parse(localStorage.getItem("savedCars")) || [];
    savedCars.push(car);
    localStorage.setItem("savedCars", JSON.stringify(savedCars));
    alert(`${car.model} localStorage'ga saqlandi!`);
  };

  return (
    <div
      className={`p-8 flex flex-wrap justify-center gap-12 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {data.map((item) => (
        <div
          key={item.model}
          className={`w-[351px] rounded-lg p-4 shadow-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <img
            src={item.image}
            alt={item.model}
            className="w-full h-48 object-contain rounded-t-lg mb-4"
          />

          <h2 className="text-xl font-bold mb-2">{item.model}</h2>
          <p className="mb-2">Brand: {item.brand}</p>
          <p className="mb-2">Year: {item.year}</p>
          <p className="mb-2">Horsepower: {item.horsepower} HP</p>
          <p className="mb-2">Price: {item.price}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
            onClick={() => saveToLocalStorage(item)}
          >
            Saqlash
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardList;
