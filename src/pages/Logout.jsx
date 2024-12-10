import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.removeItem("session");
        navigate("/login");
    }, []);
};
