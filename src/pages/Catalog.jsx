import axios from "axios";
import { useEffect, useState } from "react";
import { albums, baseUrl } from "../App";
import { AlbumCard } from "../components/common/AlbumCard";
import GridColsWrapper from "../components/ui/GridColWrapper";
import GridCol from "../components/ui/GridCol";

export const Catalog = () => {
    const [error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getAlbums = async () => {
            setisLoading(true);

            try {
                const res = await axios.get(`${baseUrl}${albums}`);
                setData(res.data);
            } catch (e) {
                setError(e);
            } finally {
                setisLoading(false);
            }
        };
        getAlbums();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <GridColsWrapper cols="repeat(4, minmax(0, 1fr))">
            <GridCol>
                {data.map(({ _id, titulo, artista, images }) => (
                    <AlbumCard key={_id} titulo={titulo} artista={artista} imagen={images[0]} />
                ))}
            </GridCol>
        </GridColsWrapper>
    );
};
