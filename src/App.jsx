
import './App.css'
import Achive from './components/Achive/Achive'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Headvid from './components/Headvid/Headvid'
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join'
import Plans from './components/Plans/Plans'
import Reasons from './components/Reasons/Reasons'
import Testimonials from './components/Testimonials/Testimonials'
import Programs from './components/programs/Programs'

function App() {
  

  return (
    <>
    <Header/>
    <Headvid/>
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Achive/>
      <Join/>
      <Footer/>
    </>
  )
}

export default App
