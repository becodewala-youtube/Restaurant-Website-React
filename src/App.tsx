
import RestaurantCard from './components/RestaurantCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  

  const restaurants = [
    {
      id: 1,
      name: "Artisan's Kitchen",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
      rating: 4.5,
      cuisine: "Italian, Continental",
      deliveryTime: "30-35",
      priceForTwo: 40
    },
    {
      id: 2,
      name: "Sushi Master",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60",
      rating: 4.8,
      cuisine: "Japanese, Sushi",
      deliveryTime: "25-30",
      priceForTwo: 55
    },
    {
      id: 3,
      name: "Spice Route",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60",
      rating: 4.3,
      cuisine: "Indian, Asian",
      deliveryTime: "35-40",
      priceForTwo: 35
    },
    {
      id: 4,
      name: "Green Bowl",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60",
      rating: 4.6,
      cuisine: "Healthy, Salads",
      deliveryTime: "20-25",
      priceForTwo: 30
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;