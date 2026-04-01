import React from 'react';
import PricingFeatures from './PricingFeatures';
import './CardBg.css';


const PricingCard = ({pricing}) => {
    const {name, tagline, price, featured, cta, features} = pricing;

    const buttonStyle = {
    backgroundColor: featured ? '#6c63ff' : '', 
    color: 'white',
  };
    return (
    <div className={`pricing-card bg-(--surface) border border-(--border) rounded-2xl px-7 py-9 flex flex-col space-y-2 relative ${featured ? "cardBg" : ""} `} >
        <div className='flex items-center justify-center'>
            {
            featured && (
                <div className="inline-flex justify-center items-center rounded-full py-1 px-3.5 bg-(--accent) uppercase w-48 absolute -top-4 ">Most Popular</div>
            )
            
        }
        </div>
      <div className="pricing-name  text-2xl font-bold">{name}</div>
      <div className="pricing-desc text-sm text-(--text2)">{tagline}</div>
      <div className="pricing-amount text-5xl font-extrabold"><span className='text-sm align-super font-normal'>$</span>{price}</div>
      <div className="pricing-period text-sm text-(--text2)">per month, billed monthly</div>
      <ul className="pricing-features flex-1">
       {
        features.map((feature, index) =>
            <PricingFeatures
            key={index}
            feature={feature}
            />
        )
       }
      </ul>
      <button className="outline btn bg-(--bg3) mt-4 w-full rounded-xl py-2 " style={buttonStyle}>{cta}</button>
    </div>
    );
};

export default PricingCard;