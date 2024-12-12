import axios from "axios";
import { useEffect, useState } from "react";
import { ALBUMS, BASE_URL } from "../utils/urls";

export const ListItem = ({ orden }) => {
    const { ordenNumero, nombreCliente, monto, album } = orden;
    const [error, setError] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState();

    const getAlbumData = async () => {
        setisLoading(true);

        try {
            const res = await axios.get(`${BASE_URL}${ALBUMS}/${album}`);
            setData(res.data);
        } catch (e) {
            console.error(e);
            setError(e);
        }
        setisLoading(false);
    };

    useEffect(() => {
        getAlbumData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <li>
            #{ordenNumero} | {nombreCliente} | ${monto}
            {data?.titulo}
        </li>
    );
};
