import  { useState, useEffect} from 'react';
import axios from 'axios';

import UserContext from './UserContext';

export const UserContextProvider  = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const checkAuth = async () => {
        const Token = localStorage.getItem('accessToken', 'refreshToken');
        if (Token) {
          try {
            const response = await axios.get('http://localhost:8000/api/v1/users/current-user', {
              headers: {
                Authorization: `Bearer ${Token}`,
              },
            });
            setUser(response.data.data);
            console.log(response.data.data);
          } catch (error) {
            console.error('Failed to fetch user:', error);
          }
        }
        setLoading(false);
      };
      checkAuth();
    }, [setUser]);
  
    const login = async (email, password) => {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/users/login', {email, password});
        const newUser = response.data.data.user;
        const accessToken = response.data.data.accessToken;
        const refreshToken = response.data.data.refreshToken;
  
        setUser(newUser);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        
        return true;
      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    };

    const signUpfn = async (mobNum,email,fullName,password) => {
      try {
        await axios.post('http://localhost:8000/api/v1/users/register', {mobNum,email,fullName,password})
       
        alert("Welcome! Please Log In ")
        return true;
        

      } catch (error) {
        console.error('Login error:', error);
        return false;
      }
    }
  
    const logout = () => {
      setUser(null);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    };
  
    const value = {
      user,
      login,
      logout,
      signUpfn,
      loading,
    };
  
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider ;
