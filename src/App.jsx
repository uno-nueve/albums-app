import { Outlet } from "react-router";
import "./App.css";
import { Header } from "./components/common/Header";

const navLinks = [
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
    },
];

function App() {
    return (
        <>
            <Header navLinks={navLinks} />
            <Outlet />
        </>
    );
}

export default App;
