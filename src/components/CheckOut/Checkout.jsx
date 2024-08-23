import React from 'react';
import AddressPage from '../Cart/AddressPage.jsx';
import OrderReviewPage from '../Order/Order.jsx';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 overflow-auto">
        <div className="overflow-auto">
          <AddressPage />
        </div>
        <div className="overflow-auto">
          <OrderReviewPage />
        </div>
      </div>
      {/* Footer can be added here */}
    </div>
  );
};

export default Checkout;
