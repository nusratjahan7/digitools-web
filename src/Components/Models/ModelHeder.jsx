import { ShoppingBag } from 'lucide-react';
import React from 'react';

const ModelHeder = () => {
    return (
        <div className='section-header text-center space-y-4'>
                <div class="section-tag inline-flex items-center bg-[rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] rounded-full py-1 px-3.5 text-(--accent2) uppercase"><ShoppingBag className='mr-1.5'></ShoppingBag> Marketplace</div>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-base w-11/12 mx-auto text-(--text2)'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
    );
};

export default ModelHeder;