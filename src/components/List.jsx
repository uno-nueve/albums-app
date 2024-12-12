import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL, SALES } from "../utils/urls";
import { ListItem } from "./ListItem";

export const List = () => {
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);

    const getSales = async () => {
        setisLoading(true);

        try {
            const res = await axios.get(`${BASE_URL}${SALES}`);
            setData(res.data);
            // return res.data;
        } catch (e) {
            setError(e);
            console.error(e);
        } finally {
            setisLoading(false);
        }
    };

    useEffect(() => {
        getSales();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <div>
            <ul>
                {data.map((orden) => (
                    <ListItem key={orden._id} orden={orden} />
                ))}
            </ul>
        </div>
    );
};
