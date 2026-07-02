
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/admiComponents/dashboard/dashboard'
import { ProductFormContainer } from './components/admiComponents/productFormContainer'
import { ProductSuccess } from './components/admiComponents/productSucess'
import { Carts } from './components/card/card'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Login } from './components/loguin/Loguin'
import { ProtectedRoute } from './components/protectedRoute/protectedRoute'
import { AdminLayout } from './layouts/admiLayout'

function App() {
  

  return (
    <>
    <Header />
    <main>
     <Routes>
    <Route path='/' element={<ItemListContainer />}   > </Route>
    <Route path='/product/:id' element={<ItemDetailContainer />} ></Route>
    <Route path='/cart' element={ <Carts />}></Route>

    
    <Route path='/admi/loguin' element={<Login />}></Route>
    <Route path='/admi' element={<ProtectedRoute > <AdminLayout />   </ProtectedRoute>}></Route> 
    <Route index element={<Navigate to={"Dashboard"} />} ></Route>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="products/new" element={<ProductFormContainer />} />
    <Route path="products/success/:id" element={<ProductSuccess />} />
       

    
  


     </Routes>
</main>
<Footer />
   </>
  )
}

export default App
