import { Star } from 'lucide-react';
import React from 'react';


const Stats = () => {
    return (
        <section className='mb-14 px-3 bg-(--bg2) border-y border-y-(--border)'>
            <div className='w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-1'>
                <div className='px-7 py-8 text-center border-r border-(--border)'>
                    <h1 className='text-3xl font-extrabold'>50K+</h1>
                    <p className='text-sm'>Active Users</p>
                </div>
                <div className='px-7 py-8 text-center md:border-r border-(--border)'>
                    <h1 className='text-3xl font-extrabold'>200+</h1>
                    <p className='text-sm'> Premium Tools</p>
                </div>
                <div className='px-7 py-8 text-center border-t md:border-t-0 border-r border-(--border)'>
                    <h1 className='text-3xl font-extrabold inline-flex items-center gap-1'><Star></Star> 4.9</h1>
                    <p className='text-sm'>Rating</p>
                </div>
                <div className='px-7 py-8 text-center border-t md:border-none border-(--border)'>
                    <h1 className='text-3xl font-extrabold'>24/7</h1>
                    <p className='text-sm'>Customer Support</p>
                </div>
            </div>
        </section>
    );
};

export default Stats;