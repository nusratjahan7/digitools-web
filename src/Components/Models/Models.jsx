import React from 'react';
import ModelsCard from './ModelsCard';

const Models = ({ models, carts, setCarts }) => {
   
    
    return (

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
            {
                models.map(model => 
                   <ModelsCard
                   key={model.id}
                   model={model}
                   carts={carts} 
                   setCarts={setCarts}>          
                   </ModelsCard>
                )
            }
        </div>

    );
};

export default Models;