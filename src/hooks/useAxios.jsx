import { useState } from "react";

export const useAxios = () => {
    const [error, setError] = useState("");

    const handleAxios = async (axiosMethod) => {
        try {
            () => axiosMethod();
        } catch (e) {
            console.log(e);
            setError("Error enviando formulario");
        }
    };

    return { handleAxios, error };
};
