import { useState } from 'react'
import '../dist/output.css'
import { ProductContextProvider, UserContextProvider } from './context';
import { MainRoutes } from './routes/MainRoutes';

function App() {

  return (
    <>
    <UserContextProvider>
      <ProductContextProvider>
        <MainRoutes />
      </ProductContextProvider>
    </UserContextProvider>
    </>
  )
}

export default App
