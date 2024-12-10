import { useState } from "react";

export const useForm = (initialForm) => {
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        if (name === "url") {
            setFormData({
                ...formData,
                images: [{ url: value, height: 600, width: 600 }],
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSelection = (e) => {
        const formValues = JSON.parse(e.currentTarget.value);
        setFormData(formValues);
    };

    return { formData, setFormData, handleChange, handleSelection };
};
