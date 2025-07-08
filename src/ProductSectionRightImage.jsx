import React from 'react';

const ProductSectionRightImage = () => {
  return (
    <div className="flex flex-col-reverse  md:flex-row items-center justify-between p-6 md:p-12 gap-8 mt-30">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Next-Gen Product</h2>
        <p className="text-gray-600 mb-6">
          Experience the innovation of our next-gen product. Engineered for performance, style, and durability — perfect for tech-savvy users and professionals alike.
        </p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all">
          Discover Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
          alt="Product"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

export default ProductSectionRightImage;
