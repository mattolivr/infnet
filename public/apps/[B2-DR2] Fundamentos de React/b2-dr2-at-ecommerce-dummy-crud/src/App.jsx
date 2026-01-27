import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/product-list';
import ProductForm from './pages/product-form';
import ProductDetail from './pages/product-detail';
import Header from './components/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/novo" element={<ProductForm />} />
          <Route path="/novo/:id" element={<ProductForm />} />
          <Route path="/produtos/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
