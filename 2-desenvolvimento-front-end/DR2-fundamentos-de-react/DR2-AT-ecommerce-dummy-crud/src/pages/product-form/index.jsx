import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.css';

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (id) {
      const buscarProduto = async () => {
        try {
          setCarregando(true);
          const response = await axios.get(`https://dummyjson.com/products/${id}`);
          reset({
            title: response.data.title,
            price: response.data.price,
            description: response.data.description,
            category: response.data.category
          });
        } catch (error) {
          console.error('Erro ao buscar produto:', error);
        } finally {
          setCarregando(false);
        }
      };
      buscarProduto();
    }
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
      const produtoData = {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        category: data.category
      };

      if (id) {
        // Modo de edição - requisição PUT
        const response = await axios.put(`https://dummyjson.com/products/${id}`, produtoData);
        console.log('Produto atualizado:', response.data);
        navigate(`/produtos/${id}`);
      } else {
        // Modo de criação - requisição POST
        const response = await axios.post('https://dummyjson.com/products/add', produtoData);
        console.log('Produto cadastrado:', response.data);
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
    }
  };

  return (
    <div className={style.container}>
      <h1>{id ? 'Editar Produto' : 'Cadastrar Produto'}</h1>
      
      {carregando ? (
        <p className={style.carregando}>Carregando produto...</p>
      ) : (
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.campo}>
          <label htmlFor="title">Título:</label>
          <input
            id="title"
            type="text"
            {...register('title', { required: 'O título é obrigatório' })}
          />
          {errors.title && <span className={style.erro}>{errors.title.message}</span>}
        </div>

        <div className={style.campo}>
          <label htmlFor="price">Preço:</label>
          <input
            id="price"
            type="number"
            {...register('price', { required: 'O preço é obrigatório' })}
          />
          {errors.price && <span className={style.erro}>{errors.price.message}</span>}
        </div>

        <div className={style.campo}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            rows="4"
            {...register('description', { required: 'A descrição é obrigatória' })}
          />
          {errors.description && <span className={style.erro}>{errors.description.message}</span>}
        </div>

        <div className={style.campo}>
          <label htmlFor="category">Categoria:</label>
          <input
            id="category"
            type="text"
            {...register('category')}
          />
        </div>

        <button type="submit" className={style.botao}>
          {id ? 'Atualizar Produto' : 'Cadastrar Produto'}
        </button>
      </form>
      )}
    </div>
  );
}