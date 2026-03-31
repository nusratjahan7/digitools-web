import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingSection = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    return (
        <section className='w-11/12 mx-auto py-9'>
            <div className='text-center space-y-2'>
                <h2 className=' text-4xl font-bold'>
                    Simple, Transparent Pricing
                </h2>
                <p className='text-sm text-(--text2)'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-8 mt-9'>
                {
                    pricingData.map((pricing, index) => <PricingCard
                    key={index}
                    pricing={pricing}>
                    </PricingCard>)
                }
            </div>
       </section>
    );
};

export default PricingSection;