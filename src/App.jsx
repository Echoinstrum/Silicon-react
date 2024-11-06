import './App.css'
import Brands from './components/Brands'
import Faq from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import Guide from './components/Guide'
import Header from './components/Header'
import Hero from './components/Hero'
import PaymentOverview from './components/PaymentOverview'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <body className='font-sans'>
        <div className='bg-custom-gradient mb-12'>
          <Header />
          <Hero />
        </div>
        <Brands />
        <Features />
        <Guide />
        <PaymentOverview />
        <Testimonials />
        <Faq />
        <Subscribe />
        <Footer />
      </body>
    </>
  )
}

export default App
