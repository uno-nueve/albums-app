import axios from "axios";
import { useEffect, useState } from "react";
import { ALBUMS, BASE_URL, SALES } from "../utils/urls";
import { useAxios } from "../hooks/useAxios";

export const ListItem = ({ orden }) => {
    const { ordenNumero, nombreCliente, monto, album, _id } = orden;
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState();
    const { handleAxios, error } = useAxios();

    const getAlbumData = async () => {
        setisLoading(true);

        const res = await handleAxios(() => axios.get(`${BASE_URL}${ALBUMS}/${album}`));
        setData(res);

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

    const handleDelete = async (id) => {
        await handleAxios(() => axios.delete(`${BASE_URL}${SALES}/${id}`));
    };

    return (
        <li>
            #{ordenNumero} | {nombreCliente} | ${monto}
            {data?.titulo}
            <button onClick={() => handleDelete(_id)}>X</button>
        </li>
    );
};
