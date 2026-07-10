
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/admiComponents/dashboard/dashboard'
import { ProductFormContainer } from './components/admiComponents/productFormContainer'
import { ProductSuccess } from './components/admiComponents/productSucess'
import { Carts } from './components/card/card'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Login } from './components/loguin/Loguin'
import { ProtectedRoute } from './components/protectedRoute/protectedRoute'
import {AdmiLayout} from  './layouts/AdmiLayout'
import { PublicLayout } from './layouts/PublicLayout'

function App() {
  

  return (
    < >
    <div  className=' app-background text-decoration-none'>
     <Routes>
      <Route  element={<PublicLayout />}>
    <Route path='/' element={<ItemListContainer />}   /> 
    <Route path="/category/:category" element={<ItemListContainer />} />
    <Route path='/product/:id' element={<ItemDetailContainer />} ></Route>
    <Route path='/cart' element={ <Carts />}></Route>
</Route>


<Route path='/admi/loguin' element={<Login />}></Route>
    <Route path='/admi' element={<ProtectedRoute > <AdmiLayout />  </ProtectedRoute>}>
    <Route index element={<Dashboard />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="products/new" element={<ProductFormContainer />} />
    <Route path="products/success/:id" element={<ProductSuccess />} />
      </Route> 

    </Routes>
  
</div>
   </>
  )
}

export default App
