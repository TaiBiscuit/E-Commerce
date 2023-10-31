import { useState } from 'react'
import '../dist/output.css'
import { MainRoutes } from './routes/MainRoutes';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <>
    <UserContextProvider>
      <CartContextProvider>
        <MainRoutes />
      </CartContextProvider>
    </UserContextProvider>
    </>
  )
}

export default App
