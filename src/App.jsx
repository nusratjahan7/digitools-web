import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import PremiumSection from './Components/PremiumSection/PremiumSection'
import Stats from './Components/Stats/Stats'

function App() { 

  return (
    <>
          <header>
            <Navbar></Navbar>
          </header>
          <main>
            <Banner></Banner>
            <Stats></Stats>
            <PremiumSection></PremiumSection>
          </main>
          
    </>
  )
}

export default App
