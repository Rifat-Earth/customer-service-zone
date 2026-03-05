
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import AllCard from './Components/Cards/AllCard/AllCard'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const customerPromise = fetch("../Customer.json")
  .then(res => res.json())

function App() {

  const [status, setStatus] = useState([]);
  const [resolved, setResolved] = useState([]);
 

  const handleCustomer = (customerStatus) => {
    toast("Task is added")
    setStatus([...status, customerStatus])

  }

  const handleCompleteBtn = (task) => {
   const {id} = task
    const UpdatedTask = status.filter(newTask => newTask.id !== id)
    const resolvedData =status.find(resolved =>resolved.id === id  )
    setStatus(UpdatedTask)
    setResolved([...resolved ,resolvedData])
    toast("complete button clicked")
  }


  return (
    <>
      <Navbar></Navbar>
      <Banner status={status} resolved ={resolved}></Banner>
      <Suspense fallback="<p>card is Loading...</p>">
        <AllCard customerPromise={customerPromise} resolved={resolved} handleCustomer={handleCustomer} handleCompleteBtn={handleCompleteBtn} status={status}></AllCard>
      </Suspense>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  )
}

export default App
