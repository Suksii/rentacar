import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);
    useEffect( () => {
        if(!user) {
            axios.get('/users/profile').then(response => {
                setUser(response.data);
                console.log(response.data)
                if(response.data.admin === true) {
                    setAdmin(true)
                }
            })
        }
    },[])
    const logout = async () => {
        try {
            await axios.post('/users/logout');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout, admin }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);

export default UserContext;