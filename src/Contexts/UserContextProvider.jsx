import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";

const url = import.meta.env.VITE_API_URL;
 // process is not defined

export const UserContextProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null); // New state for selected address
   
  const [cartDetails, setCartDetails] = useState({
    text: "Type your text here!",
    font: "brittany",
    color: { name: "white", color: "white" },
    textSize: { fontSize: "48px", price: "3699", actualSize: "Medium" },
    price: "00",
    capturedImage: null,
    totalAmount: 0,
  });
  const [userOrder, setUserOrder] = useState()
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const checkAuth = async () => {
      if (token) {
        try {
          const response = await axios.get(`${url}/api/v1/users/current-user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data.data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (user) {
      cartFn(); 
      getAddress();
      userOrderFn();
    }
  }, [user]);

  const cartFn = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/cart/items`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart(response.data.data);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
      setCart([]);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${url}/api/v1/users/login`, {
        email,
        password,
      });
      const { user: newUser, accessToken, refreshToken } = response.data.data;

      setUser(newUser);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const signUpfn = async (phone, email, fullName, password) => {
    // there is problem with this function when i register the user it says user already exist
    try {
      await axios.post(`${url}/api/v1/users/register`, {
        phone,
        email,
        fullName,
        password,
      });

      alert("Welcome! Please Log In");
      return true;
    } catch (error) {
      console.error("Sign up error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const getAddress = async () => {
    try {
      const response = await axios.get(`${url}/api/v1/address/getAllAddress`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAddress(response.data.data);
    } catch (error) {
      console.error("Failed to fetch addresses:", error);
      setAddress([]);
    }
  };

  const clearCart = async () => {
    try {
      const res = await axios.delete(`${url}/api/v1/cart/clear`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCart([]); // Clear the cart in the context
      console.log("Cart cleared successfully");
    } catch (error) {
      console.error("Failed to clear the cart", error);
    }
  };

  const userOrderFn = async () => {
    const res = await axios.get(`${url}/api/v1/payment/userorder`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    //  console.log("user order ", api.data);
    // setUserOrder(res)
    console.log("user order = ", res.data.data);
    
  };


  const value = {
    user,
    login,
    logout,
    signUpfn,
    address,
    selectedAddress, // Add selectedAddress to context value
    setSelectedAddress, // Add setSelectedAddress to context value
    token,
    loading,
    cartDetails,
    setCartDetails,
    orders,
    setOrders,
    url,
    cart,
    setCart,
    cartFn,
    getAddress,
    clearCart,
    userOrder
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
