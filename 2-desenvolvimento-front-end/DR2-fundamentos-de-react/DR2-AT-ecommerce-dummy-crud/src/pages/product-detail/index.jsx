import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        setCarregando(true);
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduto(response.data);
      } catch (error) {
        new Error(error);
      } finally {
        setCarregando(false);
      }
    };
    buscarProduto();
  }, [id]);

  if (carregando) {
    return <div className={style.carregando}>Carregando produto...</div>;
  }

  return (
    <div className={style.container}>
      <h1>{produto.title}</h1>
      
      <div className={style.imagens}>
        {produto.images?.map((imagem, index) => (
          <img 
            key={index} 
            src={imagem} 
            alt={`${produto.title} - ${index + 1}`} 
            className={style.imagem}
          />
        ))}
      </div>

      <div className={style.info}>
        <p className={style.descricao}>{produto.description}</p>
        <p className={style.preco}>Preço: R$ {produto.price?.toString().replace(".", ",")}</p>
        <p>Marca: {produto.brand}</p>
        <p>Categoria: {produto.category}</p>
        <p>Avaliação: {produto.rating} ⭐</p>
        <p>Em estoque: {produto.stock} unidades</p>
      </div>
    </div>
  );
}