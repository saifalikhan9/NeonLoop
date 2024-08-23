import { useContext, useEffect, useState } from "react";
import UserContext from "@/Contexts/UserContext";
import { Trash } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user, cart, setCart, url } = useContext(UserContext);
  const [totalAmount, setTotalAmount] = useState(0);

  const token = localStorage.getItem("accessToken");
  
  

  useEffect(() => {
    
    let price = 0;
    if (cart) {
      for (let i = 0; i < cart?.length; i++) {
        
        price += cart[i].price;
      }
    }
    setTotalAmount(price);
    
  }, [cart]);

  const deleteOrderFromApi = async (cartId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const res = await axios.delete(`${url}/api/v1/cart/delete/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          userId: user._id,
        },
      });
      return res.status === 200;
    } catch (error) {
      console.error("Failed to delete the order", error);
      return false;
    }
  };

  const handleRemove = async (id) => {
    const success = await deleteOrderFromApi(id);
    if (success) {
      setCart((prevOrders) => prevOrders.filter((order) => order._id !== id));
    }
  };


  

  return (
    <div className="mx-auto min-h-screen flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2 text-white">
      <h2 className="text-6xl font-bold text-purple-400 text-center">
        Your cart
      </h2>{" "}
      {/* Centered text */}
      <ul className="flex flex-col divide-y divide-gray-200">
        {cart?.map((product) => (
          <li
            key={product._id} // i want to hold this ids in the constant so i can use it for another time
            className="flex flex-col py-6 sm:flex-row sm:justify-between"
          >
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={product.imageUrl}
                alt=""
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                      {product.text}
                    </h3>
                    <p className="text-sm">{product.color}</p>
                    <p className="text-sm">{product.font}</p>
                    <p className="text-sm">{product.textSize}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">₹{product.price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button
                    type="button"
                    onClick={() => handleRemove(product._id)}
                    className="flex items-center space-x-2 px-2 py-1 pl-0"
                  >
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold"> ₹{totalAmount}</span>
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to={"/customize"}>
          <button
            type="button"
            className="rounded-md border border-purple-400 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Back to shop
          </button>
        </Link>
        <Link to={"/checkout"}>
          <button
            type="button"
            
            className="rounded-md border border-purple-400  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
