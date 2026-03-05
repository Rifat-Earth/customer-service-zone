
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import AllCard from './Components/Cards/AllCard/AllCard'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const customerPromise = fetch("../Customer.json")
.then(res=>res.json())

function App() {
 
 const [status , setStatus] = useState([]);

    const handleCustomer = (customerStatus) => {
            toast("Task is added")
         setStatus([...status ,customerStatus]) 
         
    }
  return (
    <>
     <Navbar></Navbar>
     <Banner status={status}></Banner>
     <Suspense fallback="<p>card is Loading...</p>">
      <AllCard customerPromise ={customerPromise} handleCustomer={handleCustomer} status={status}></AllCard>
     </Suspense>
      <ToastContainer></ToastContainer>
     <Footer></Footer>
    </>
  )
}

export default App
