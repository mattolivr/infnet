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
    <div className={style.lista}>
      { produtos.length 
        ? produtos.map((produto) => (
          <div key={produto.id} className={style.produto}>
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
            <p>Preço: R$ {produto.price}</p>
          </div>
        ))
        : <p>Carregando produtos...</p>
      }
    </div>
  );
}