import axios from "axios";
import { useState } from "react";

export const useAxios = () => {
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const handleGet = async (url) => {
        setisLoading(true);
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (e) {
            console.log(e);
            setError("Something went wrong");
        } finally {
            setisLoading(false);
        }
    };

    const handlePost = async (url, body) => {
        setisLoading(true);
        try {
            const res = await axios.post(url, body, {
                headers: { "Access-Control-Allow-Credentials": true },
            });
            return res.data;
        } catch (e) {
            console.log(e);
            setError("Something went wrong");
        } finally {
            setisLoading(false);
        }
    };

    const handlePut = async (url, body) => {
        setisLoading(true);
        try {
            const res = await axios.post(url, body, {
                headers: { "Access-Control-Allow-Credentials": true },
            });
            return res.data;
        } catch (e) {
            console.log(e);
            setError("Something went wrong");
        } finally {
            setisLoading(false);
        }
    };

    const handleDelete = async (url) => {
        setisLoading(true);
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (e) {
            console.log(e);
            setError("Something went wrong");
        } finally {
            setisLoading(false);
        }
    };

    return {
        handleGet,
        handlePost,
        handlePut,
        handleDelete,
        error,
        setError,
        isLoading,
        setisLoading,
    };
};
