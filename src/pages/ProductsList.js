import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 15;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(currentPage - 1) * limit}`);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError('Failed to load products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="text-3xl mb-4 mt-10 text-center font-bold">Our Products</h1>
      <div class="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mr-2 ml-2 w-[1200px]  ">
        {products.map((product) => (
          <div key={product.id} className="border rounded-md p-4 bg-gray-50 transition-transform duration-150 hover:scale-110">
            <div class="flex justify-center bg-white">
            <img src={product.thumbnail} alt={product.title} className="" />
            </div>
            <h2 className="text-xl">{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500">View Details</Link>
          </div>
        ))}
      </div>
      </div>

      <div className="mt-6 mb-6 flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mr-4"
        >
          Previous
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ProductsList;
