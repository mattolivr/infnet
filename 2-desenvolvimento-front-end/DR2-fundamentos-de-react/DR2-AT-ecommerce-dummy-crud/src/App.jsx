import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/product-list';
import ProductForm from './pages/product-form';
import ProductDetail from './pages/product-detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>DR2 - AT - E-commerce Dummy CRUD</h1>
        <h2>Sistema de Catálogo e Gestão de Produtos</h2>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/novo" element={<ProductForm />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
