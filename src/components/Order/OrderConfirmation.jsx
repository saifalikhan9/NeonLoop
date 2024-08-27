import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/UserContext";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const { user, url, token } = useContext(UserContext);

  const orderFetch = async () => {
    try {
      const res = await axios.get(`${url}/api/v1/payment/userOrder`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOrders(res.data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    orderFetch();
  }, [user]);

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Order History</h1>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="mb-6 bg-gray-100 rounded-lg overflow-hidden shadow-md">
            <div className="px-6 py-4 bg-gray-200 border-b border-gray-300">
              <h2 className="text-xl font-semibold text-gray-800">
                Order #{order.orderId.slice(-6)}
              </h2>
              <p className="text-sm text-gray-600">
                {new Date(order.orderDate).toLocaleDateString()}
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Status:</span>{" "}
                  <span className={`capitalize ${order.payStatus === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {order.payStatus}
                  </span>
                </p>
                <p className="text-sm">
                  <span className="font-medium text-gray-700">Total:</span>{" "}
                  <span className="text-gray-900 font-semibold">₹{order.amount}</span>
                </p>
              </div>
              <details className="mt-4">
                <summary className="text-sm font-medium text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                  View Details
                </summary>
                <div className="mt-4 space-y-2 text-gray-700 bg-gray-50 p-4 rounded-md border border-gray-200">
                  <p className="text-sm"><span className="font-medium">Payment ID:</span> {order.paymentId}</p>
                  <div>
                    <p className="text-sm font-medium mb-1">Shipping Address:</p>
                    <p className="text-sm">{order.shippingAddress.addressLine}</p>
                    <p className="text-sm">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                    <p className="text-sm">{order.shippingAddress.country}</p>
                  </div>
                </div>
              </details>
            </div>
            <div className="px-6 py-4 bg-gray-50">
              <h3 className="text-sm font-medium mb-3 text-gray-700">Order Items</h3>
              <div className="space-y-3">
                {order.orderItems.map((item) => (
                  <div key={item._id} className="flex items-center space-x-4 bg-white p-3 rounded-md shadow-sm">
                    <img 
                      src={item.imageUrl} 
                      alt="Product" 
                      className="w-16 h-16 object-cover rounded cursor-pointer"
                      onClick={() => handleImageClick(item.imageUrl)}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-800">{item.text}</p>
                      <p className="text-xs text-gray-600">
                        {item.font}, {item.color}, {item.size}
                      </p>
                      <p className="text-xs text-gray-700">₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No orders found.</p>
      )}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setPreviewImage(null)}>
          <img src={previewImage} alt="Preview" className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default OrderDetails;