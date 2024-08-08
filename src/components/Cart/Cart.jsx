import { useContext, useEffect } from "react";
import UserContext from "@/Contexts/UserContext";
import { Trash } from 'lucide-react'
import axios from "axios";




const Cart = () => {
  const { user, orders , setOrders } = useContext(UserContext)

  const deleteOrderFromApi = async (orderId) => {
    try {
      const token = localStorage.getItem("accessToken", "refreshToken");
      const res = await axios.delete(`/api/v1/delete/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}` // Assuming user object has a token property
        },
        data: {
          userId: user._id
        }
      });
      return res.status === 200;
    } catch (error) {
      console.error("Failed to delete the order", error);
      return false;
    }
  };

  

  // Function to handle removal of an order
  const handleRemove = async (id) => {
    const success = await deleteOrderFromApi(id);
    if (success) {
      setOrders((prevOrders) => prevOrders.filter(order => order._id !== id));
    }
  };


  return (
    <div className="mx-auto h-screen flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2 text-white ">
      <h2 className="text-3xl font-bold">Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {orders.map((product) => (
          <li key={product._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.imageUrl}
                alt=""
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.text}</h3>
                    <p className="text-sm">{product.color}</p>
                    <p className="text-sm">{product.font}</p>
                    <p className="text-sm">{product.textSize}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" onClick={() => handleRemove(product._id)} className="flex items-center space-x-2 px-2 py-1 pl-0">
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>  { /* make this butoon work for delting the order form the database */ }
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹48,967</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </button>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart 
