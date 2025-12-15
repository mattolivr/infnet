import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './style.module.css';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const buscaProdutos = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProdutos(response.data.products);
      } catch (error) {
        new Error(error);
      }
    };
    buscaProdutos();
  }, []);

  return (
    <div>ProductList</div>
  );
}