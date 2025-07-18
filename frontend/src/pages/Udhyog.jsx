
import React, { useState } from 'react';

const Udhyog = () => {
  // Your API data - ideally fetched, but hardcoded for this example
  const products = [
    { product_id: 1001, product_name: '1HP Induction Motor', category: 'Electrical Motors', price: 4200, status: 'Active' },
    { product_id: 1002, product_name: '25mm Ball Valve - Brass', category: 'Plumbing Hardware', price: 185, status: 'Active' },
    { product_id: 1003, product_name: 'M12 High-Tensile Bolt (50 pcs)', category: 'Fasteners', price: 460, status: 'Active' },
    { product_id: 1004, product_name: '4" Cutting Wheel (Metal)', category: 'Abrasives', price: 22, status: 'Active' },
    { product_id: 1005, product_name: 'Mild Steel L-Angle (3m)', category: 'Structural Material', price: 780, status: 'Inactive' },
    { product_id: 1006, product_name: 'Heavy-Duty Caster Wheel (4 pcs)', category: 'Material Handling', price: 1250, status: 'Active' },
    { product_id: 1007, product_name: '63A 4-Pole MCB - Schneider', category: 'Electrical Components', price: 1950, status: 'Active' },
    { product_id: 1008, product_name: 'Industrial Safety Helmet - Yellow', category: 'Safety Gear', price: 160, status: 'Active' },
    { product_id: 1009, product_name: 'HDPE Pipe - 2" x 30m', category: 'Plumbing Hardware', price: 2150, status: 'Inactive' },
    { product_id: 1010, product_name: 'Electric Angle Grinder 750W', category: 'Power Tools', price: 2999, status: 'Active' },
    // Add more products here if you want to test with a larger dataset
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Derive unique categories and statuses for filters
  const categories = ['All', ...new Set(products.map(product => product.category))].sort();
  const statuses = ['All', ...new Set(products.map(product => product.status))].sort();

  // Apply filters
  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.product_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || product.status === selectedStatus;
    return matchesSearchTerm && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 md:p-10 lg:p-12">
      <div className="container mx-auto bg-white rounded-xl shadow-2xl p-6 md:p-8 lg:p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 leading-tight">
          Udhyog Product Catalog
        </h1>

        {/* Filter Section */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mb-10 flex flex-col md:flex-row md:items-center justify-center gap-5">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-200 ease-in-out text-gray-700 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-200 ease-in-out text-gray-700 text-lg md:w-auto"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <select
            className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-3 focus:ring-blue-400 transition duration-200 ease-in-out text-gray-700 text-lg md:w-auto"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        {/* Product Display Grid - Enforced Minimum Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 min-h-[400px]"> {/* Added min-h to prevent layout shift */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div
                key={product.product_id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{product.product_name}</h2>
                  <p className="text-base text-gray-600 mb-2">
                    <span className="font-semibold text-blue-700">Category:</span> {product.category}
                  </p>
                  <p className="text-base text-gray-600 mb-2">
                    <span className="font-semibold text-green-700">Price:</span> ₹{product.price.toLocaleString()}
                  </p>
                  <p className="text-base text-gray-600">
                    <span className="font-semibold text-purple-700">Status:</span>{' '}
                    <span className={`font-bold ${product.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                      {product.status}
                    </span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xl font-medium">No products found for your selection.</p>
              <p className="text-md text-gray-400">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Udhyog;
