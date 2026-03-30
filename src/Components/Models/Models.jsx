import { Key, ShoppingBag } from 'lucide-react';
import React, { use } from 'react';
import PricingFeatures from './PricingFeatures';
import PricingCard from './ModelsCard';
import ModelsCard from './ModelsCard';

const Models = ({modelsPromise}) => {
    const models = use(modelsPromise);
    
    return (
        <div>
             <section className='w-11/12 mx-auto pb-16 '>
            <div className='section-header text-center space-y-4'>
                <div className='inline-flex gap-1 items-center justify-center bg-[ rgba(108,99,255,0.1)] border border-[rgba(108,99,255,0.25)] rounded-full w-1/2 py-2 text-(--accent2) uppercase'><ShoppingBag></ShoppingBag> Marketplace</div>
                <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                <p className='text-base w-11/12 mx-auto text-(--text2)'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className='flex items-center justify-center gap-4 my-5 bg-(--surface) border border-(--border) rounded-lg w-48 px-3 py-2 mx-auto'>
                <button className='flex-1'>Products</button>
                <button className='flex-1'>Cart (<span id='cartCount'>0</span>)</button>
            </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {
                models.map(model => 
                   <ModelsCard
                   key={model.id}
                   model={model}>          
                   </ModelsCard>
                )
            }
        </div>

        </section>
        </div>
    );
};

export default Models;