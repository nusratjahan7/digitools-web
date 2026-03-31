import React from 'react';
import user from "../../assets/assets/user.png";
import pack from "../../assets/assets/package.png";
import rocket from "../../assets/assets/rocket.png";
import './stepnum.css'

const GetStarted = () => {
    const steps =  [
    { id: 1, 
      title: "Create Account", 
      description: "Sign up for free in seconds. No credit card required to get started.",
      img: user 
    },
    { id: 2, 
      title: "Choose Products", 
      description: "Browse our catalog and select the tools that fit your needs.",
      img: pack 
    },
    { id: 3, 
      title: "Start Creating", 
      description: "Download and start using your premium tools immediately.",
      img: rocket
    }
  ];
    return (
        <section className='bg-(--bg2)'>
            <div className='py-10 px-[5%] border-y border-y-(--border)'>
                <div className='steps-header text-center space-y-3'>
                <div class="section-tag inline-flex items-center bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] rounded-full py-1 px-3.5 text-(--accent2) uppercase">⚡ How it Works</div>
                <h1 className='text-4xl font-bold'>Get Started in 3 Steps</h1>
                <p className='text-sm text-(--text2)'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-9 '>
                {
                    steps.map(step => (
                        <div key={step.id} className='border border-(--border) bg-(--bg3) rounded-2xl px-4 py-5'>
                            <div class="step-num">0{step.id}</div>
                            <div className='flex flex-col  items-center justify-center space-y-2'>
                                <img  src={step.img} alt="" />
                            <h2 className='text-2xl font-bold'>{step.title}</h2>
                            <p className='text-sm text-(--text2)'>{step.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </section>
    );
};

export default GetStarted;