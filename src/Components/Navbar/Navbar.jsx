import { Menu, ShoppingCart, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from './Link';
import './Navbar.css';

const navgationData = [
    {
      id: 1,
      name: "Products",
      path: "/products"
    },
    {
      id: 2,
      name: "Features",
      path: "/features"
    },
    {
      id: 3,
      name: "Pricing",
      path: "/pricing"
    },
    {
      id: 4,
      name: "Testimonials",
      path: "/testimonials"
    },
    {
      id: 5,
      name: "FAQ",
      path: "/FAQ"
    }
  ];

const Navbar = ({ carts }) => {
    const [open, setOpen] = useState(false);
    const links = navgationData.map(route => <Link  key={route.id} route = {route}></Link>)
    return (
        <nav className='flex items-center justify-between sticky top-0 navStyle p-4'>
            <span className='flex justify-between' onClick={() => setOpen(!open)}>
                {
                    open ? 
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }
            </span>
            
            <ul className={`absolute duration-1000 bg-[rgba(10,11,16,0.85)] ${open ? 'top-16' : '-top-40'}`}>
                {links}
            </ul>
            <div className='nav-logo text-4xl font-bold flex items-center gap-2'>
                <div className='logo-dot w-2 h-2 rounded-full bg-(--accent) inline-block'></div>
                <h1>Digi <span className='text-(--accent2)'>Tools</span></h1>
            </div>
            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
            <div className='flex justify-between'>
            <div >
                <button className='cart-btn btn'>
                    <ShoppingCart></ShoppingCart>
                </button>
                <span className=" bg-(--accent) font-bold h-5 w-5 rounded-full flex items-center justify-center absolute p-2 top-2.5 sm:right-36" id="cartCount">{carts.length}</span>
            </div>
            <button className='hidden sm:block ml-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 rounded-full nav-cta'>Get Started</button>
            </div>
        </nav>
    );
};

export default Navbar;