import axios from "axios";
import { useEffect, useState } from "react";
import { AlbumCard } from "../components/common/AlbumCard";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useDispatch, useSelector } from "react-redux";
import { indexAlbums } from "../state/albums/albumsSlice";
import styled from "styled-components";
import { BASE_URL, ALBUMS } from "../utils/urls";

const GridLayout = styled(GridColsWrapper)`
    min-height: calc(100% - 40px);
    gap: 20px;
`;

export const Catalog = () => {
    const [error, setError] = useState();
    const [isLoading, setisLoading] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.albums);
    console.log(data);

    const getAlbums = async () => {
        setisLoading(true);

        try {
            const res = await axios.get(`${BASE_URL}${ALBUMS}`);
            return res.data;
        } catch (e) {
            setError(e);
            console.error(e);
        } finally {
            setisLoading(false);
        }
    };

    const resolve = async () => {
        const response = await getAlbums();

        dispatch(indexAlbums(response));
    };

    useEffect(() => {
        resolve();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <GridLayout cols="repeat(4, minmax(0, 1fr))">
            {data.map(({ _id, titulo, artista, images }) => (
                <AlbumCard
                    key={_id}
                    titulo={titulo}
                    artista={artista}
                    imagen={images[0]}
                    id={_id}
                />
            ))}
        </GridLayout>
    );
};
