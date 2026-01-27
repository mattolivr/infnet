import Input from "../input";
import "./styles.css";

export default function ProductForm({ handleNew, product, setProduct, editIndex }) {
    function handleChange(value, name) {
        setProduct({...product, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (handleNew) {
            const success = handleNew(product);
            if (success !== false) {
                setProduct({});
            }
        }
    }

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <Input type="text" value={product.name ?? ""} setter={(value) => handleChange(value, "name")} id="product-name" name="name" label="Nome do Produto" />
            <Input type="text" value={product.category ?? ""} setter={(value) => handleChange(value, "category")} id="product-category" name="category" label="Categoria do Produto" />
            <Input type="number" value={product.price ?? ""} setter={(value) => handleChange(value, "price")} id="product-price" name="price" label="Preço do Produto" />
            <button type="submit">{editIndex !== null ? 'Atualizar Produto' : 'Adicionar Produto'}</button>
        </form>
    )
}