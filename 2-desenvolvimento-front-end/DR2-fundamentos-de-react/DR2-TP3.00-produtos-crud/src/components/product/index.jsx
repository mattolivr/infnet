import './styles.css';

export default function Product({ name, category, price, index, handleDelete, handleEdit }) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Categoria: {category}</p>
      <p>Preço: R$ {price && !isNaN(price) ? Number(price).toFixed(2) : price}</p>
      <button onClick={() => handleDelete(index)} style={{marginRight: '8px'}}>Excluir</button>
      <button onClick={() => handleEdit(index)}>Editar</button>
    </div>
  )
}