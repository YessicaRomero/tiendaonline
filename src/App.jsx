
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header/Header'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Footer } from './components/footer/Footer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  

  return (
    <>
    <Header />
    <main>
     <Routes>
    <Route path='/' element={<ItemListContainer />}   > </Route>
    <Route path='/product/:id' element={<ItemDetailContainer />} ></Route>
    <Route path='/cart' element={ <Cart />}></Route>
     </Routes>
</main>
<Footer />
   </>
  )
}

export default App
