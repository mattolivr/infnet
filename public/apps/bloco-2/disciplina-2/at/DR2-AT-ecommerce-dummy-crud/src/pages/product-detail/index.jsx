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
      <div className={style.topo}>
        <h1>{produto.title}</h1>
        <h3>{produto.brand}</h3>
      </div>
      
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

      <div className={style.centro}>
        <p className={style.preco}>R$ {produto.price?.toString().replace(".", ",")}</p>
        <span className={style.restantes}>Restam apenas {produto.stock} unidades!</span>
      </div>

      <div className={style.info}>
        <p className={style.descricao}>{produto.description}</p>
        <span>{produto.category}</span>
        <span>{produto.rating} ⭐</span>
      </div>
    </div>
  );
}