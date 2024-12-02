const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 h-[400px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60"
          alt="Food background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hungry?
          <span className="block">Order food to your door</span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white">
          Order food from the best local restaurants. Fast delivery to your home or office.
        </p>
        <div className="mt-10 max-w-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your delivery address"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600">
              Find Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;