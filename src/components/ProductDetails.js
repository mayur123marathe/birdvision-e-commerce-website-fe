import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      setError('Failed to load product details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="text-3xl mb-4">{product.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img src={product.images[0]} alt={product.title} className="w-full h-60 object-cover" />
        <div>
          <p className="text-xl mb-2">${product.price}</p>
          <p>{product.description}</p>
          <p className="mt-4">Discount: {product.discountPercentage}%</p>
          <p>Rating: {product.rating}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
