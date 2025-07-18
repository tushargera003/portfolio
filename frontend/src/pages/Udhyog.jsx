import { useEffect, useState } from "react";
import axios from "axios";

function Udhyog() {
  const [products, setProducts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.post(
          "https://cors-anywhere.herokuapp.com/https://api.udhhyog.com/v1/test",
          {
            key1: "value1",
            key2: "value2",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setProducts(response.data);
      } catch (error) {
        console.error("POST error:", error);
      }
    };

    postData();
  }, []);

  const filteredProducts = products.filter((prod) =>
    filterStatus === "All" ? true : prod.status === filterStatus
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        🛠️ Product Inventory
      </h1>

      {/* Filter */}
      <div className="flex justify-center mb-6">
        <label className="mr-4 text-lg font-medium text-gray-700">
          Filter by Status:
        </label>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      {/* Table Wrapper */}
      <div className="overflow-x-auto max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4 min-h-[400px]">
        {filteredProducts.length > 0 ? (
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price (₹)</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((prod) => (
                <tr
                  key={prod.product_id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4">{prod.product_id}</td>
                  <td className="px-6 py-4">{prod.product_name}</td>
                  <td className="px-6 py-4">{prod.category}</td>
                  <td className="px-6 py-4 font-medium text-blue-600">
                    ₹{prod.price}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      prod.status === "Active" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {prod.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-20">
            No products to display.
          </div>
        )}
      </div>
    </div>
  );
}

export default Udhyog;
