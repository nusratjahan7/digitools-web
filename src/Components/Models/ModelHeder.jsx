import { ShoppingBag } from 'lucide-react';
import React from 'react';

const ModelHeder = () => {
    return (
        <div className='section-header text-center space-y-4'>
                <div className='inline-flex gap-1 items-center justify-center bg-[ rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] rounded-full w-1/2 py-2 text-(--accent2) uppercase'><ShoppingBag></ShoppingBag> Marketplace</div>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-base w-11/12 mx-auto text-(--text2)'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
    );
};

export default ModelHeder;