import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect( () => {
        if(!user) {
            axios.get('/users/profile').then(response => {
                setUser(response.data);
                setIsAdmin(response.data.admin)
            })
        }
    },[])
    const logout = async () => {
        try {
            await axios.post('/users/logout');
            setUser(null);
            setIsAdmin(false);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser, logout, isAdmin }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);

export default UserContext;