import React from 'react';

const products = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: '$59.99',
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_Pro.347_1.jpg?v=1737546044',
    link: 'https://www.amazon.com/s?k=wireless+headphones',
  },
  {
    id: 2,
    title: 'Smart Watch',
    price: '$129.99',
    image: 'https://sekyo.in/cdn/shop/files/Magic_pro_3.jpg?v=1742879539',
    link: 'https://www.amazon.com/s?k=smart+watch',
  },
  {
    id: 3,
    title: 'Gaming Mouse',
    price: '$39.99',
    image: 'https://images.meesho.com/images/products/471329513/hqjr2_512.webp',
    link: 'https://www.amazon.com/s?k=gaming+mouse',
  },
  {
    id: 4,
    title: 'Bluetooth Speaker',
    price: '$79.99',
    image: 'https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_b3503890-50f6-4cd1-9138-0bd90874391e.png?v=1709717442',
    link: 'https://www.amazon.com/s?k=bluetooth+speaker',
  },
  {
    id: 5,
    title: 'Smartphone Stand',
    price: '$14.99',
    image: 'https://www.fingers.co.in/secure/api/uploads/products/1684831056_Black1.png',
    link: 'https://www.amazon.com/s?k=phone+stand',
  },
  {
    id: 6,
    title: 'USB-C Hub',
    price: '$49.99',
    image: 'https://www.ugreenindia.com/cdn/shop/files/ugreen-10gbps-4-in-1-usb-c-hub-usb-32-adapter-with-2-usb-c-32-and-2-usb-a-32-splitter-extender-for-macbook-proair-ipad-pro-iphone-1515-pro-max-surface-pc-laptop-2372221.jpg',
    link: 'https://www.amazon.com/s?k=usb+c+hub',
  },
  {
    id: 7,
    title: 'Laptop Bag',
    price: '$39.99',
    image: 'https://www.fgear.in/cdn/shop/files/1_24e83df2-e351-4200-9455-4be1655dbd19.jpg?v=1709705768&width=1946',
    link: 'https://www.amazon.com/s?k=laptop+bag',
  },
  {
  id: 8,
  title: 'Mechanical Keyboard',
  price: '$99.99',
  image: 'https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  link: 'https://www.amazon.com/s?k=mechanical+keyboard',
},
  {
    id: 9,
    title: 'Webcam',
    price: '$69.99',
    image: 'https://5.imimg.com/data5/YO/UV/MY-16999644/web-cam-500x500.jpg',
    link: 'https://www.amazon.com/s?k=webcam',
  },
];

const ProductGrid = () => {
  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Shop Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-300 flex flex-col"
          >
            {/* Product Image */}
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-t-xl">
               <div className="aspect-w-4 aspect-h-3 w-full">
  <img
    src={product.image}
    alt={product.title}
    className="object-cover object-center w-full h-full transition duration-300 hover:scale-105"
  />
</div>

            </a>

            {/* Product Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg text-center transition duration-300 hover:bg-blue-700"
                >
                  Buy Now
                </a>
                <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg transition duration-300 hover:bg-gray-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;







