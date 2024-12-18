import { useLocation, useParams } from "react-router";
import { useAxios } from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { ALBUMS } from "../utils/urls";
import { FlexContainer } from "../components/ui/FlexContainer";
import { AlbumDetails } from "../components/AlbumDetails";
import { CartModal } from "../components/common/CartModal/CartModal";
import { CartContext } from "../contexts/CartContext";
import { ModalContext } from "../contexts/ModalContext";
import { Modal } from "../components/common/Modal/Modal";
import { EditAlbumForm } from "../components/EditAlbumForm";
import { useDispatch, useSelector } from "react-redux";
import { setAlbum } from "../state/albums/albumDetailsSlice";
import { BarsScaleFade } from "react-svg-spinners";

export const Details = () => {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const params = useParams();
    const { handleGet, isLoading } = useAxios();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.details);
    console.log(data);

    const getAlbum = async () => {
        const res = await handleGet(`${ALBUMS}/${params.id}`);
        dispatch(setAlbum(res));
    };

    useEffect(() => {
        getAlbum();
    }, []);

    if (isLoading) {
        return (
            <FlexContainer w="100%" h="100%" items="center" justify="center">
                <BarsScaleFade width={"4rem"} height={"auto"} />
            </FlexContainer>
        );
    }

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            <CartContext.Provider value={{ showModal, setShowModal }}>
                <FlexContainer items="center" justify="center" h="calc(100vh - 80px)" column>
                    <AlbumDetails data={data} location={location} />
                    {location.pathname.includes("/albums") ? (
                        <CartModal />
                    ) : (
                        <Modal>
                            <EditAlbumForm album={data} />
                        </Modal>
                    )}
                </FlexContainer>
            </CartContext.Provider>
        </ModalContext.Provider>
    );
};
