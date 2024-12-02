import React from 'react';
import { Star, Clock3 } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  deliveryTime: string;
  priceForTwo: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  image,
  rating,
  cuisine,
  deliveryTime,
  priceForTwo,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-medium text-gray-700">
          ${priceForTwo} for two
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{cuisine}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{rating}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock3 className="w-4 h-4" />
            <span className="text-sm">{deliveryTime} mins</span>
          </div>
        </div>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-300">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;