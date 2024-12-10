import { useState } from "react";

export const useAuth = () => {
    const [error, setError] = useState("");

    const handleSubmit = (formData, mockUsers, navigate) => {
        const user = mockUsers.find(
            (user) =>
                user.credentials.email === formData.email &&
                user.credentials.password === formData.password
        );
        if (user) {
            localStorage.setItem("session", JSON.stringify(user));
            navigate("/dashboard");
        } else {
            setError("Email o contraseña no válidos. Intente de nuevo");
        }
    };

    return { handleSubmit, error };
};
