import { useState } from 'react'
import '../dist/output.css'
import '../dist/home.css'
import { MainRoutes } from './routes/MainRoutes';
import { UserContextProvider } from './context/UserContext';
import { CartContextProvider } from './context/CartContext';
import { SavedContextProvider } from './context/SavedContext';

function App() {

  return (
    <>
    <UserContextProvider>
      <CartContextProvider>
        <SavedContextProvider>
          <MainRoutes />
        </SavedContextProvider>
      </CartContextProvider>
    </UserContextProvider>
    </>
  )
}

export default App
