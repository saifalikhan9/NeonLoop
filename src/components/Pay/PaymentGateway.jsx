import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "../../Contexts/UserContext";

const PayButn = ({ amount }) => {
  const [orders, setOrders] = useState();
  const [apiKey, setApiKey] = useState("");

  const { url, user, token, cart, selectedAddress } = useContext(UserContext);
  const userID = user?._id;

  // Fetch the orders
  // const fetchOrders = async () => {
  //   try {
  //     const res = await axios.get(`${url}/api/v1/orderitem/getOrders`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setOrders(res.data.data);
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };

  // Fetch the Razorpay API key
  const fetchApiKey = async () => {
    try {
      const res = await axios.get(`${url}/api/v1/payment/apiKey`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setApiKey(res.data.keyid);
    } catch (error) {
      console.error("Error fetching API key:", error);
    }
  };

  useEffect(() => {
    // fetchOrders();
    fetchApiKey();
  }, []);

  console.log(amount, "amount");
  console.log(cart, "cart");
  console.log(selectedAddress, "address");
  console.log(userID, "userId");

  // Assuming you want to use the first order's ID for payment
  const orderID = cart?.length > 0 ? cart?.map((product) => product._id) : null;
  const handlePayment = async () => {
    if (!orderID) {
      console.error("No valid order ID found");
      return;
    }

    try {
      const res = await axios.post(
        `${url}/api/v1/payment/pay`,
        { amount, selectedAddress, userID, cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res);

      const options = {
        key: apiKey,
        amount: amount * 100,
        currency: "INR",
        name: "Neon Loop",
        description: `Payment for Order ID: ${orderID}`,
        order_id: res.data.razorpayOrderId,
        handler: async (response) => {
          console.log("Payment Success:", response);
          // Capture payment or update order status in your backend
        },
        prefill: {
          name: user?.fullName,
          email: user?.email,
          contact: user?.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PayButn;
