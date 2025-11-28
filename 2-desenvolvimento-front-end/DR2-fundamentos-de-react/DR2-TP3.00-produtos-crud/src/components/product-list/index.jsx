import Product from '../product';
import './styles.css';

export default function ProductList({ products, handleEdit, handleDelete }) {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <Product key={index} {...product} index={index} handleDelete={handleDelete} handleEdit={handleEdit} />
            ))}
        </div>
    )
}