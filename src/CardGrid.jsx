import React from 'react';

const data = [
  {
    title: 'Mountain View',
    description: 'Enjoy the serenity of the mountains.',
    image: 'https://media.istockphoto.com/id/475797033/photo/sunlight-on-himalayan-mountain-range.jpg?s=612x612&w=0&k=20&c=GSMWx0pbDDFl-uhfVYC5mxc5XKZPOTjUs7Nvn6SjAx8=',
  },
  {
    title: 'Beach Vibes',
    description: 'Feel the breeze and relax on the beach.',
    image: 'https://idecorwala.com/cdn/shop/products/WM00140_1200x1200.jpg?v=1440671735',
  },
  {
    title: 'City Lights',
    description: 'Experience the energy of the city at night.',
    image: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMGxpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Forest Trail',
    description: 'Walk through the quiet forest paths.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZm9yZXN0fGVufDB8fDB8fHww',
  },
  {
    title: 'Desert Safari',
    description: 'Adventure awaits in the dunes.',
    image: 'https://img.freepik.com/free-photo/beautiful-view-tranquil-desert-clear-sky-captured-morocco_181624-8496.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'Snowy Peaks',
    description: 'Breathe the cold, fresh air in the snow.',
    image: 'https://t4.ftcdn.net/jpg/00/74/83/05/360_F_74830586_jl5Tnx9gKamEQ3aqnuYJfoOGffyevvVV.jpg',
  },
  {
    title: 'Tropical Paradise',
    description: 'Live the island life.',
    image: 'https://i.pinimg.com/564x/b6/06/ca/b606ca4f682b1ce1a8562a12eddeb929.jpg',
  },
  {
    title: 'Historic Streets',
    description: 'Travel through time in old towns.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMeQuLf-La0pjuaJpBfU16bhsb8OmMzaZAew&s',
  },
  {
    title: 'Lake Escape',
    description: 'Find peace by the still waters.',
    image: 'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

const CardGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
