import React from 'react';

const ProductSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8 bg-white mt-20">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          alt="Product"
          className="w-full h-auto rounded-xl shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Amazing Product</h2>
        <p className="text-gray-600 mb-6">
          This is a high-quality product designed to meet your needs and exceed expectations.
          Crafted with care and built to last, it's the perfect choice for anyone looking for both
          performance and style.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
