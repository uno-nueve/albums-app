import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./components/common/Header";
import { UserContext } from "./contexts/UserContext";
import { useEffect, useState } from "react";

export const baseUrl = import.meta.env.VITE_BASE_URL;
export const albums = import.meta.env.VITE_ALBUMS;
export const sales = import.meta.env.VITE_SALES;
export const searchAlbum = import.meta.env.VITE_SEARCH;
export const buyAlbum = import.meta.env.VITE_BUY;
export const returnAlbum = import.meta.env.VITE_RETURN;

function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const session = localStorage.getItem("session");
        console.log("There is a session", JSON.parse(session));

        if (!session) {
            console.error("Session not found");
        }
        setUser(JSON.parse(session));
    }, []);

    let navLinks = [];

    if (!user) {
        navLinks.push(
            {
                label: "Catálogo",
                to: "/albums",
            },
            {
                label: "Devoluciones",
                to: "/returns",
            },
            {
                label: "Inicia sesión",
                to: "/login",
            }
        );
    } else {
        navLinks.push({ label: "Cerrar sesión", to: "/logout" });
    }

    return (
        <UserContext.Provider value={user}>
            <Header navLinks={navLinks} />
            <Outlet />
        </UserContext.Provider>
    );
}

export default App;
