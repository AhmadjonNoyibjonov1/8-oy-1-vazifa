import React from 'react';
import { useSelector } from 'react-redux';

function CardList() {
  const [data, setData] = React.useState([
    
    {
        "brand": "BMW",
        "model": "BMW M5 CS",
        "year": 2022,
        "horsepower": 825,
        "price": "$243,600",
        "image": "https://paultan.org/image/2021/01/BMW-M5-CS-44-e1611714615569.jpg"
    },
    {
        "brand": "Mercedes-Benz",
        "model": "Mercedes-AMG E 63 S",
        "year": 2022,
        "horsepower": 603,
        "price": "$270,000",
        "image": "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/k3dd7jm4pkhmvcxt0kpq"
    },
    {
        "brand": "McLaren",
        "model": "McLaren Sabre",
        "year": 2021,
        "horsepower": 824,
        "price": "$210,000",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/15/2020_McLaren_Sabre_no._03%2C_front_left.jpg"
    },
    {
        "brand": "Bugatti",
        "model": "Bugatti Chiron Super Sport 300+",
        "year": 2021,
        "horsepower": 1578,
        "price": "$3,500,000",
        "image": "https://images.drive.ru/i/0/5d75ea9fec05c4a22a000015.jpg"
    },
    {
        "brand": "Koenigsegg",
        "model": "Koenigsegg Gemera",
        "year": 2023,
        "horsepower": 1700,
        "price": "$1,700,000",
        "image": "https://cdn.motor1.com/images/mgl/01nKp/s1/koenigsegg-gemera.webp"
    },
    {
        "brand": "Nissan GTR",
        "model": "Nissan Alpha Omega GT-R",
        "year": 2023,
        "horsepower": 2500,
        "price": "$400,000",
        "image": "https://nypost.com/wp-content/uploads/sites/2/2015/03/183868.jpg?quality=75&strip=all"
    },
]); 

  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`p-8 flex flex-wrap justify-center gap-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {data.map((item) => (
        <div
          key={item.model}
          className={`w-[351px] rounded-lg p-4 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        >
          <img
            src={item.image}
            alt={item.model}
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{item.model}</h2>
          <p className="mb-2">Brand: {item.brand}</p>
          <p className="mb-2">Year: {item.year}</p>
          <p className="mb-2">Horsepower: {item.horsepower} HP</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;

