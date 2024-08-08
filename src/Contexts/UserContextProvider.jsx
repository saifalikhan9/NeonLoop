import { useState, useEffect } from "react";
import axios from "axios";
import UserContext from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    text: "Type your text here!",
    font: "brittany",
    color: { name: "white", color: "white" },
    textSize: { fontSize: "48px", price: "3699", actualSize: "Medium" },
    price: "00",
    capturedImage: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken", "refreshToken");
      if (token) {
        try {
          const response = await axios.get(
            "/api/v1/users/current-user",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setUser(response.data.data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("accessToken", "refreshToken");
      const response = await axios.get(
        "/api/v1/getOrders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(response.data.data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setOrders([]);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user ,orders]);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "/api/v1/users/login",
        { email, password }
      );
      const newUser = response.data.data.user;
      const accessToken = response.data.data.accessToken;
      const refreshToken = response.data.data.refreshToken;

      setUser(newUser);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return true;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const signUpfn = async (mobNum, email, fullName, password) => {
    try {
      await axios.post("/api/v1/users/register", {
        mobNum,
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

  const value = {
    user,
    login,
    logout,
    signUpfn,
    loading,
    orderDetails,
    setOrderDetails,
    fetchOrders,
    orders,
    setOrders
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
