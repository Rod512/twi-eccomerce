import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// product provider
import ProductProvider from './contexts/ProductContext';

// slide provider
import SlidebarProvider from './contexts/SidebarContext'

// cart provider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SlidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SlidebarProvider>
  
);

