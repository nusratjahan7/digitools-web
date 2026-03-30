import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Models from './Components/Models/Models'

import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'

const getModels = async () => {
  const res = fetch("/public/models.json")
  return (await res).json()
}

function App() { 

 const modelsPromise = getModels()

  return (
    <>
          <header>
            <Navbar></Navbar>
          </header>
          <main>
            <Banner></Banner>
            <Stats></Stats>

            <Suspense>
            <Models modelsPromise={modelsPromise}></Models>  
            </Suspense>  
          </main>    
    </>
  )
}

export default App;
