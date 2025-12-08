
import './App.css'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import MainSection from './components/MainSection/MainSection'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

const fetchCustomer = async () => {
  const res = await fetch("/customer.json")
  return res.json()

}

const customersPromise = fetchCustomer();



function App() {
  const [customerData,setCustomerData] = useState([])
  const [purchasedTicket,setPurchasedTicket]= useState([])
  const [resolvedTicket,setResolvedTicket]= useState([])

  customersPromise.then(data=>setCustomerData(data))

  const handleTicket=(ticket) =>{
    if(!purchasedTicket.find(t => t.id === ticket.id)){
      setPurchasedTicket([...purchasedTicket,ticket])
    
    }

  }

  const handleComplete = (id) =>{
    const done = purchasedTicket.find(t => t.id === id)
    setPurchasedTicket(purchasedTicket.filter(t => t.id !== id))
    
    
    setResolvedTicket([...resolvedTicket,done])

    const customerIndex = customerData.findIndex(c=> c.id === id )
    if(customerIndex !== -1){
      customerData.splice(customerIndex,1)
      
    }

  }
  
  return (
    <>
    <div className='bg-gray-300'>

      <Navbar></Navbar>
      <Banner purchasedTicket={purchasedTicket.length} resolvedTicket={resolvedTicket.length}></Banner>
      <MainSection 
      purchasedTicket={purchasedTicket}
      resolvedTicket={resolvedTicket}
      customerData={customerData}
      handleTicket={handleTicket}
      handleComplete={handleComplete}
      
      ></MainSection>
      <Footer></Footer>
      
    </div>
      
      
    </>
  )
}

export default App
