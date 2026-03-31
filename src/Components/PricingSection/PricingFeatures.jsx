import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <li className='flex mt-4'><CircleCheckBig color="#258327" className='mr-2' />{feature}</li>
    );
};

export default PricingFeatures;