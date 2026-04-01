import React, { useState } from 'react';
import PricingFeatures from './PricingFeatures';
import { toast } from 'react-toastify';

const ModelsCard = ({model, carts, setCarts}) => {
     const {name, price, period, description, features, tagType, icon} = model;

     const badgeStyle = {
        new: { text: "New Arrival", className: "badge-info " },         
        popular: { text: "Most Popular", className: "badge-warning" }, 
        bestseller: { text: "Best Seller", className: "badge-success" }, 
        sale: { text: "On Sale", className: "badge-error" }
};
const currentStyle = badgeStyle[tagType];

const [isSubscribe, setIsSubscribe] = useState(false);
const handleSubscription = () => {
    setIsSubscribe(true);

    const isFound = carts.find(item => item.id === model.id)
    if(isFound) {
        toast.error("Item already in the cart", {
        duration: 500,
        style: {
       background: '#14161f',
       color: '#fff',
       border: '1px solid #374151'
      }
    });
    return
    };

    setCarts([...carts, model]);
    toast.success("Item added to cart", {
    duration: 500,
    style: {
      background: '#14161f',
      color: '#fff',
      border: '1px solid #374151'
      }
    });
};

    return (
         <div className="card w-full bg-(--surface) shadow-sm">
                <div className="card-body">
         { tagType
             &&
             <span className={`badge badge-xs  px-2 font-bold ${currentStyle.className}`}>
                {currentStyle.text}
             </span>
         }
         <p className='text-2xl'>{icon}</p>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}/{period}</span>
     </div>
        <div>
            <p className='text-(--text2)'>{description}</p>
        </div>
         <ul className="mt-6 flex flex-col gap-2 text-xs">
       {
        features.map((feature, index) => 
        <PricingFeatures
        key={index}
        feature={feature}>

        </PricingFeatures>
        )
       }
     </ul>
        <div className="mt-6">
      <button onClick={() => handleSubscription()} className="btn btn-primary btn-block">
        {
            isSubscribe ? "Subscribed" : "Subscribe Now"
        }
      </button>
         </div>
      </div>
        </div>
    );
};

export default ModelsCard;