
import './App.css'
import Navbar from './components/Navbar/navbar'
import Banner from './components/Banner/banner'
import MainSection from './components/MainSection/MainSection'
import Footer from './components/Footer/Footer'

const fetchCustomer = async () => {
  const res = await fetch("/customer.json")
  return res.json()

}

const customersPromise = fetchCustomer();

function App() {
  
  return (
    <>
    <div className='bg-gray-300'>

      <Navbar></Navbar>
      <Banner></Banner>
      <MainSection customersPromise={customersPromise}></MainSection>
      <Footer></Footer>
      
    </div>
      
      
      
    </>
  )
}

export default App
