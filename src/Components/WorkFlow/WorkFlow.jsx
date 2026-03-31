import React from 'react';

const WorkFlow = () => {
   
    return (
        <div className=' px-10 py-10 flex flex-col items-center justify-center text-center space-y-4 bg-(--bg2)'>
            <div className='space-y-2'> 
                <h1 className='text-4xl font-bold'>Ready to Transform Your Workflow?</h1>
                <p className='text-sm text-(--text2)'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className='flex justify-between items-center gap-6'>
                
                <button className='btn btn-primary'>Explore Products</button>
                
                <button className='btn btn-outline btn-primary border'> View Pricing</button>  
            </div>
            <div>
                <p className='text-sm text-(--text2)'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkFlow;