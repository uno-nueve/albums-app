import { useParams } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ALBUMS, BASE_URL } from "../utils/urls";

export const Details = () => {
    const [data, setData] = useState();

    const params = useParams();
    const { handleGet, isLoading } = useAxios();

    const getAlbum = async () => {
        const res = await handleGet(`${BASE_URL}${ALBUMS}/${params.id}`);
        setData(res);
    };

    useEffect(() => {
        getAlbum();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{data?.titulo}</h1>
        </div>
    );
};
