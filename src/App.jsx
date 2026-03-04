
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import AllCard from './Components/Cards/AllCard/AllCard'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'


const customerPromise = fetch("../Customer.json")
.then(res=>res.json())

function App() {


  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <Suspense fallback="<p>card is Loading...</p>">
      <AllCard customerPromise ={customerPromise} ></AllCard>
     </Suspense>
     <Footer></Footer>
    </>
  )
}

export default App
