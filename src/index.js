import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// product provider
import ProductProvider from './contexts/ProductContext';

// slide provider
import SlidebarProvider from './contexts/SidebarContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SlidebarProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </SlidebarProvider>
  
);

