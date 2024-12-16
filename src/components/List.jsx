import { useEffect, useState } from "react";
import { SALES } from "../utils/urls";
import { ListItem } from "./ListItem";
import { useAxios } from "../hooks/useAxios";

export const List = () => {
    const [data, setData] = useState([]);
    const { handleGet, isLoading, error } = useAxios();

    const getSales = async () => {
        const res = await handleGet(`${SALES}`);
        setData(res);
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
        <>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {data?.map((orden) => (
                    <ListItem key={orden._id} order={orden} />
                ))}
            </ul>
        </>
    );
};
