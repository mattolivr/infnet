import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.css';

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const buscaProdutos = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProdutos(response.data.products);
      } catch (error) {
        new Error(error);
      } finally {
        setCarregando(false);
      }
    };
    buscaProdutos();
  }, []);

  const handleExcluir = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
      return;
    }

    try {
      await axios.delete(`https://dummyjson.com/products/${id}`);
      setProdutos(produtos.filter(produto => produto.id !== id));
      console.log('Produto excluído com sucesso');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  if (carregando) {
    return <div className={style.carregando}>Carregando produtos...</div>;
  }

  return (
    <div className={style.lista}>
      { produtos.map((produto) => (
          <div key={produto.id} className={style.produto}>
            <img src={produto.thumbnail} alt={produto.title} className={style.thumbnail} />
            <div className={style.conteudo}>
              <h3>
                <Link to={`/produtos/${produto.id}`}>{produto.title}</Link>
              </h3>
              <p className={style.preco}>Preço: R$ {produto.price.toString().replace(".", ",")}</p>
            </div>
            <div className={style.acoes}>
              <button 
                className={style.botaoEditar}
                onClick={() => navigate(`/novo/${produto.id}`)}
              >
                Editar
              </button>
              <button 
                className={style.botaoExcluir}
                onClick={() => handleExcluir(produto.id)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))
      }
    </div>
  );
}