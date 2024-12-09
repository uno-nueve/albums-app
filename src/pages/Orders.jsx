import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl, sales } from "../App";

export const Orders = () => {
    const [error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);
    console.log(data);

    const getSales = async () => {
        setisLoading(true);

        try {
            const res = await axios.get(`${baseUrl}${sales}`);
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
                {data.map(({ _id, ordenNumero, nombreCliente, monto }) => (
                    <li key={_id}>
                        #{ordenNumero} | {nombreCliente} | ${monto}
                    </li>
                ))}
            </ul>
        </div>
    );
};
