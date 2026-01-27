import './styles.css';

export default function ProductList({ products, handleEdit, handleDelete }) {
    return (
        <table className="product-list">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>R$ {product.price && !isNaN(product.price) ? Number(product.price).toFixed(2) : product.price}</td>
                        <td>
                            <button onClick={() => handleEdit(index)} style={{marginRight: '8px'}}>Editar</button>
                            <button onClick={() => handleDelete(index)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}