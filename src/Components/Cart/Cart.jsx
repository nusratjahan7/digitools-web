import { ShoppingCart, X } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successful",
            {
            duration: 500,
            style: {
            background: '#14161f',
            color: '#fff',
            border: '1px solid #374151'
            }
        });
    }
    
   return (
    <div className='pt-7 sm:mx-10 md:mx-28 lg:mx-64'>
      <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>

      {carts.length === 0 ? (
        <div className="flex justify-center items-center bg-(--surface) border border-(--border) rounded-2xl p-8">
      <div className="text-center max-w-md w-full">
        <div className="mb-6 flex items-center justify-center ">
            <ShoppingCart className="w-20 h-20"/>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-3">
          Your cart is empty.
        </h2>
        
        <p className="text-(--text2) mb-8 leading-relaxed">
          Browse products and add items to get started.
        </p>
        
        <button 
          onClick={() => window.location.href = '/products'}
          className="bg-(--accent)  text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Browse Products
        </button>
      </div>
    </div>
      ) : (
        <>
          {/* Cart Items */}
          {carts.map(cart => (
            <div
              key={cart.id}
              className='flex justify-between items-center bg-(--surface) border border-(--border) p-4 rounded-2xl mb-2'
            >
              <div className='flex items-center gap-4'>
                <div className='bg-(--bg2) p-2 rounded-2xl border
                 border-(--border)'>
                  <p className='text-3xl'>{cart.icon}</p>
                </div>

                <div>
                  <h2 className='text-2xl font-bold'>{cart.name}</h2>
                  <span className='text-sm text-(--text2)'>
                    ${cart.price}/{cart.period}
                  </span>
                </div>
              </div>

              <div>
                <button
                  className='btn btn-outline btn-error font-semibold border flex items-center gap-2'
                  onClick={() => {
                    setCarts(carts.filter(c => c.id !== cart.id));
                    toast.error("Item Removed", {
                        duration: 500,
                        style: {
                          background: '#14161f',
                          color: '#fff',
                          border: '1px solid #374151'
                          }
                        });
                  }}
                >
                  <X className='w-5 h-5' /> <span className='hidden sm:block'>Remove</span>
                </button>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className='mt-4 bg-(--surface) border border-(--border) p-5 rounded-2xl'>
            <div className='flex justify-between'>
              <h1 className='text-xl font-bold text-(--text2)'>Total Amount</h1>
              <p className='text-2xl font-bold'>${totalPrice}</p>
            </div>

            <button
              onClick={handlePayment}
              className='btn w-full mt-4 bg-(--accent) py-6'
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;