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

import { useDarkMode } from './context/DarkModeContext'

function App() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <body className={`${isDarkMode ? 'bg-gray-900 text-white' : ''} font-sans`}>
        <div className='bg-custom-gradient mb-12'>
          <Header />
          <Hero />
        </div>
        <Brands />
        <Features />
        <div className={`${isDarkMode ? 'bg-white bg-opacity-5' : 'bg-[#F3F6FF]'}`}>
        <Guide />
        </div>
        <PaymentOverview />
        <div className={`${isDarkMode ? 'bg-white bg-opacity-5' : 'bg-[#F3F6FF]'}`}>
        <Testimonials />
        </div>
        <Faq />
        <Subscribe />
        <Footer />
      </body>
    </>
  )
}

export default App
