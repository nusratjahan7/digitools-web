import { useState, useEffect } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Models from './Components/Models/Models'

import Navbar from './Components/Navbar/Navbar'
import Stats from './Components/Stats/Stats'
import Cart from './Components/Cart/Cart'

import ModelHeder from './Components/Models/ModelHeder'
import GetStarted from './Components/getStarted/getStarted'


function App() { 
const [models, setModels] = useState([]);

useEffect(() => {
  fetch("/models.json")
    .then(res => res.json())
    .then(data => setModels(data));
}, []);

const [activeTab, setActiveTab] = useState("products");
const [carts, setCarts] = useState([])
  return (
    <>
          <header>
            <Navbar carts={carts}></Navbar>
          </header>
          <main>
            <Banner></Banner>
            <Stats></Stats>
           <section className='w-11/12 mx-auto pb-16 '>
           <ModelHeder></ModelHeder>
           
            <div className="tabs tabs-box bg-(--surface) border border-(--border) w-48 mx-auto my-4">
            <input type="radio" name="my_tabs_1" className={`tab flex-1  ${
          activeTab === "products" ? "[--tab-bg:var(--accent)] text-white" : ""}`} aria-label="Products"
             onClick={() => setActiveTab("products")}
            defaultChecked />
            <input type="radio" name="my_tabs_1" className={`tab flex-1 ${
          activeTab === "cart" ? "[--tab-bg:var(--accent)] text-white" : ""
        }`} aria-label={`Cart (${carts.length})`}
            onClick={() => setActiveTab("cart")} />
        </div>

        {
          activeTab === "products" && <Models  models={models}  carts={carts} setCarts={setCarts}></Models> 
        }
        {
          activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>
        }
           
          </section>           
          <GetStarted></GetStarted>
          </main>    
    </>
  )
}

export default App;
