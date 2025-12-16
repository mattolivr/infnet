import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './style.module.css';

export default function ProductForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://dummyjson.com/products/add', {
        title: data.title,
        price: parseFloat(data.price),
        description: data.description,
        category: data.category
      });
      
      console.log('Produto cadastrado:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <div className={style.container}>
      <h1>Cadastrar Produto</h1>
      
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
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}