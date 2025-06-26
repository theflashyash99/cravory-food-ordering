// GroceryPage.jsx
import React, { useState } from "react";

// sampleProducts.js
export const sampleProducts = [
  { name: "Avocados", price: 5.99, img: "https://media.istockphoto.com/id/1210634323/photo/avocado-on-old-wooden-table-in-bowl.jpg?s=612x612&w=0&k=20&c=yEPVRJU3_7tw_1zK5DB5SbvxEG-jsSWTet8tvWc0-pc=" },
  { name: "Strawberries", price: 3.49, img: "https://im.pluckk.in/unsafe/1920x0/uploads/30300-2.png" },
  { name: "Bananas", price: 2.99, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWojOu1VNVB-h8vdN5OQPrlcVaVTr8BZzaYqV-vOT-GQl8p4sjUeJsPSlN9RZGVO4cz7o&usqp=CAU" },
  { name: "Carrots", price: 1.99, img: "https://www.trustbasket.com/cdn/shop/articles/Carrot.jpg?v=1688378789" },
  { name: "Tomatoes", price: 4.29, img: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg" },
  { name: "Spinach", price: 2.79, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IUDvoyut-AZD9ItXygHR5Bqcb5rnFci4EVXf4W0f80xm_qWUi0Ipt1o4q8N2nvLojcc&usqp=CAU" },
  { name: "Potatoes", price: 3.59, img: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg" },
  { name: "Bell Peppers", price: 4.99, img: "https://media.istockphoto.com/id/172238110/photo/red-peppers.jpg?s=612x612&w=0&k=20&c=lnfJqRTOxnR3Mt52CrZDqVrAVy_CJXAiJblUNl0BqZM=" },
  { name: "Broccoli", price: 2.89, img: "https://t3.ftcdn.net/jpg/01/11/81/88/360_F_111818896_ujZFrfj9AADds35krQnpiAevtyEP3Tko.jpg" },
  { name: "Apples", price: 3.19, img: "https://media.istockphoto.com/id/614871876/photo/apple-isolated-on-wood-background.jpg?s=612x612&w=0&k=20&c=_8ShFA2p-xbTBMz0g7JUSsfd329GBkyj47dzW3F1mqc=" },
  { name: "Blueberries", price: 4.49, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TejSS69OcmZbKW_PZybESjv_q9YB3CgpJw&s" },
  { name: "Grapes", price: 3.79, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr9Ho2BT0qelydvceX9cWBBCXfFXNfDjofhg&s" },
  { name: "Lettuce", price: 1.99, img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/03/romaine-lettuce-1296x728-body.jpg?w=1155&h=1528" },
  { name: "Oranges", price: 3.49, img: "https://www.health.com/thmb/OZgW2YQtFb9qJ3PbySNei3YdgPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Stocksy_txp5e95690asrw300_Medium_934585-e870449543284eed8aa4be52fc09a4ed.jpg" },
  { name: "Cucumbers", price: 2.29, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMriQ2Dc83m7uIGof7qleHkyFG9wPWOzFmg&s" },
  { name: "Onions", price: 2.19, img: "https://plantix.net/en/library/assets/custom/crop-images/onion.jpeg" },

];


const generateProducts = () => {
  const list = [];
  for (let i = 0; i < 30; i++) {
    const p = sampleProducts[i % sampleProducts.length];
    list.push({ ...p, id: i + 1 });
  }
  return list;
};

const fullProducts = generateProducts();

const GroceryPage = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (prod) => setCart((prev) => [...prev, prod]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 mt-24">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-green-700">FreshCart</h1>
        <div className="bg-white shadow rounded-full px-4 py-2 flex items-center space-x-2">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13L17 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{cart.length} items</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fullProducts.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{p.name}</h2>
              <p className="text-gray-600 mb-4">${p.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(p)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GroceryPage;
