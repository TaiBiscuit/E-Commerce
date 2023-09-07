import { useState } from 'react'
import '../dist/output.css'
import { ProductContextProvider, UserContextProvider, CartProvider } from './context';
import { MainRoutes } from './routes/MainRoutes';

function App() {

  return (
    <>
    <CartProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <MainRoutes />
        </ProductContextProvider>
      </UserContextProvider>
    </CartProvider>
    </>
  )
}

export default App
