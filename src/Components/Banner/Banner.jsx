import { Play } from 'lucide-react';
import React from 'react';
import banner from "../../assets/assets/banner.png";
import './Banner.css'

const Banner = () => {
    return (
        <section className='banner w-11/12 py-20 mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div className='banner-content space-y-4'>
                <p className='banner-badge flex items-center bg-[rgba(108,99,255,0.15)] border border-[rgba(108,99,255,0.35)] px-3 py-1 md:w-1/2 w-2/4 rounded-full'>
                    <span className='animate-pulse opacity-10 mr-2'>✦</span>
                    <p>New: AI-Powered Tools Available</p>
                </p>
                <h1 className='banner-title text-5xl font-bold text-(--text)'>Supercharge Your <br /> <span className='highlight'> Digital Workflow</span></h1>
                <p>Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products</p>
                <div class="banner-btns flex gap-3.5">
                <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full banner-cta'>Explore Products</button>
                <button className='flex px-4 py-2 rounded-full banner-cta btn-outline btn-primary btn'><Play className='mr-2'></Play> Watch Demo</button>
            </div>
            </div>   
            <div>
                <img className='w-full mt-8 md:mt-0 ' src={banner} alt="" />
            </div>        
        </section>
    );
};

export default Banner;