import axios from 'axios';
import './SectionProducts.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProductCard from '../ProductCard/ProductCard';

export default function SectionProducts() {
  const [products, setProducts] = useState([]);
  const { register } = useForm();

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      console.log(response.data);
      setProducts(response.data); // Array de productos  que obtuve desde mockapi
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  }

  return (
    <section className="section-products">
      <h2 className="section-title">Productos Destacados</h2>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
