import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import Notification from './components/notification';
import ProductForm from './components/product-form';
import ProductList from './components/product-list';

function App() {
  const [products, setProducts] = useState(retornaProdutos());
  const [newProduct, setProduct] = useState({});
  const [editIndex, setEditIndex] = useState(null);
  const [notification, setNotification] = useState({ message: null, type: 'success' });
  const [search, setSearch] = useState('');

  const productsFilter = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  function showNotification(message, type = 'success') {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: null, type: 'success' }), 3000);
  }

  function handleNew(product) {
    if (!product.name || !product.category || !product.price) {
      showNotification('Por favor, preencha todos os campos', 'error');
      return false;
    }

    if (editIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = product;
      setProducts(updatedProducts);
      setEditIndex(null);
      showNotification('Produto atualizado com sucesso');
    } else {
      setProducts([...products, product]);
      showNotification('Produto adicionado com sucesso');
    }
    
    return true;
  }

  function handleEdit(index) {
    setProduct(products[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    setProducts(products.filter((product, i) => i !== index));
    showNotification('Produto removido', 'info');
  }

  return (
    <>
      <Header/>
      <ProductForm handleNew={handleNew} product={newProduct} setProduct={setProduct} editIndex={editIndex} />
      <Filter search={search} setSearch={setSearch} />
      <ProductList products={productsFilter} handleEdit={handleEdit} handleDelete={handleDelete} />
      <Notification message={notification.message} type={notification.type} />
    </>
  )
}

function retornaProdutos() {
  return [
    { name: 'Processador Ryzen 7 5800X', category: 'Processadores', price: 1349.90 },
    { name: 'Placa de Vídeo GeForce RTX 3080', category: 'Placas de Vídeo', price: 4999.90 },
    { name: 'Memória RAM Corsair Vengeance 16GB', category: 'Memórias RAM', price: 799.90 }
  ]
}

export default App;
