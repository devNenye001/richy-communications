import './App.css'
import FeaturedBrands from './components/featuredBrands'
import Footer from './components/footer'
import Navbar from './components/navbar'
import HeroSection from './components/sections/heroSection'
import NotFound from './pages/not-found'

function App() {


  return (
    <>
     <Navbar />
     <HeroSection />
      <FeaturedBrands />
     <Footer />
    </>
  )
}

export default App
