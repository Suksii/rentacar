import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchUserProfile = async () => {
            setLoading(true);
            try {
                const response = await axios.get('/users/profile');
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user:", error)
            } finally {
                setLoading(false);
            }
        }
        if (!user) {
            fetchUserProfile();
        }
    }, []);

    useEffect(() => {
        if (user && typeof user.admin !== 'undefined') {
            setIsAdmin(user.admin);
            console.log(user.admin)
        } else {
            setIsAdmin(false);
        }
    }, [user]);

    const logout = async () => {
        try {
            await axios.post('/users/logout');
            setUser(null);
            setIsAdmin(false);
        } catch (error) {
            console.error("Failed to logout:", error)
        }
    }
    return (
        <UserContext.Provider value={{ user, setUser, logout, isAdmin, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);

export default UserContext;