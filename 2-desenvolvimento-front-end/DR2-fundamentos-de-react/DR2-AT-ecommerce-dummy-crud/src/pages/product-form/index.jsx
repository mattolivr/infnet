import { useForm } from 'react-hook-form';
import style from './style.module.css';

export default function ProductForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            {...register('title')}
          />
        </div>

        <div className={style.campo}>
          <label htmlFor="price">Preço:</label>
          <input
            id="price"
            type="number"
            {...register('price')}
          />
        </div>

        <div className={style.campo}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            rows="4"
            {...register('description')}
          />
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