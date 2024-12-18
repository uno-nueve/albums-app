import { useContext, useEffect } from "react";
import { AlbumCard } from "../components/common/AlbumCard/AlbumCard";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useDispatch, useSelector } from "react-redux";
import { indexAlbums } from "../state/albums/albumsSlice";
import styled from "styled-components";
import { ALBUMS } from "../utils/urls";
import { useLocation } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { FlexContainer } from "../components/ui/FlexContainer";
import { Button, ButtonContainer } from "../components/ui/Button";
import { CartContext } from "../contexts/CartContext";
import { BarsScaleFade } from "react-svg-spinners";

const GridLayout = styled(GridColsWrapper)`
    gap: 1rem;
`;

export const Catalog = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.albums);
    const { handleGet, isLoading, error } = useAxios();
    const location = useLocation();
    const { setShowModal } = useContext(CartContext);

    const getAlbums = async () => {
        const res = await handleGet(`${ALBUMS}`);
        dispatch(indexAlbums(res));
    };

    useEffect(() => {
        getAlbums();
    }, []);

    if (isLoading) {
        return (
            <FlexContainer w="100%" h="100%" items="center" justify="center">
                <BarsScaleFade width={"4rem"} height={"auto"} />
            </FlexContainer>
        );
    }

    if (error) {
        return <div>Something went wrong. Please try again</div>;
    }

    return (
        <>
            <FlexContainer items="center" justify="space-between" p="0 1rem">
                <h1>{location.pathname === "/albums" ? "ALBUMS" : "CATALOGO"}</h1>
                {location.pathname === "/albums" && (
                    <ButtonContainer w="max-content" h="max-content">
                        <Button onClick={() => setShowModal(true)}>Carrito</Button>
                    </ButtonContainer>
                )}
            </FlexContainer>
            <GridLayout cols="repeat(auto-fit, minmax(20.5ch, 1fr))">
                {data?.map((album) => (
                    <AlbumCard key={album._id} album={album} />
                ))}
            </GridLayout>
        </>
    );
};
