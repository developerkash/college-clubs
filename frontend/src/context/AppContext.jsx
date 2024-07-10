const { createContext, useState, useContext, useEffect } = require("react");
 // Assuming you are using Next.js

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState(null);
    const [loggedin, setloggedin] = useState(false);

    useEffect(() => {
        const user = sessionStorage.getItem("user");
        if (user) {
            setcurrentUser(JSON.parse(user));
            setloggedin(true);
        }
    }, []);

    const logout = () => {
        setcurrentUser(null);
        sessionStorage.removeItem("user");
        setloggedin(false);
        router.push("/login");
    }

    return (
        <AppContext.Provider value={{ currentUser, setcurrentUser, loggedin, setloggedin, logout }}>
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => useContext (AppContext)
export default useAppContext