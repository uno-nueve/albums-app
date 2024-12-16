import { useLocation, useParams } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ALBUMS } from "../utils/urls";
import { FlexContainer } from "../components/ui/FlexContainer";
import { AlbumDetails } from "../components/AlbumDetails";
import { CartModal } from "../components/common/CartModal";
import { CartContext } from "../contexts/CartContext";
import { ModalContext } from "../contexts/ModalContext";
import { Modal } from "../components/common/Modal";

export const Details = () => {
    const [data, setData] = useState();
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const params = useParams();
    const { handleGet, isLoading } = useAxios();

    const getAlbum = async () => {
        const res = await handleGet(`${ALBUMS}/${params.id}`);
        setData(res);
    };

    useEffect(() => {
        getAlbum();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            <CartContext.Provider value={{ showModal, setShowModal }}>
                <FlexContainer items="center" justify="center" h="calc(100vh - 80px)" column>
                    <AlbumDetails data={data} location={location} />
                    {location.pathname.includes("/albums") ? <CartModal /> : <Modal />}
                </FlexContainer>
            </CartContext.Provider>
        </ModalContext.Provider>
    );
};
