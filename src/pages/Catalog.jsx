import { useEffect } from "react";
import { AlbumCard } from "../components/common/AlbumCard";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useDispatch, useSelector } from "react-redux";
import { indexAlbums } from "../state/albums/albumsSlice";
import styled from "styled-components";
import { ALBUMS } from "../utils/urls";
import { useLocation } from "react-router";
import { useAxios } from "../hooks/useAxios";

const GridLayout = styled(GridColsWrapper)`
    gap: 16px;
`;

export const Catalog = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.albums);
    const { handleGet, isLoading, error } = useAxios();
    const location = useLocation();

    const getAlbums = async () => {
        const res = await handleGet(`${ALBUMS}`);
        dispatch(indexAlbums(res));
    };

    useEffect(() => {
        getAlbums();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <>
            <h1>{location.pathname === "/albums" ? "Albums" : "Catálogo"}</h1>
            <GridLayout cols="repeat(4, minmax(0, 1fr))">
                {data?.map((album) => (
                    <AlbumCard key={album._id} album={album} />
                ))}
            </GridLayout>
        </>
    );
};
