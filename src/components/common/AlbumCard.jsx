import { Link, useLocation } from "react-router";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cart/cartSlice";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const AlbumCard = ({ album }) => {
    const { titulo, artista, images, _id } = album;
    const { setShowModal } = useContext(CartContext) || {};
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCart = () => {
        setShowModal(true);
        dispatch(addToCart(album));
    };

    if (location.pathname === "/albums") {
        return (
            <Link to={`/albums/${_id}`} style={{ width: "100%", height: "100%" }}>
                <img src={images[0].url} alt={titulo} style={{ width: "100%" }} />
                <p>{titulo}</p>
                <p>{artista}</p>
                <Button onClick={handleCart}>Añadir al carrito</Button>
            </Link>
        );
    }

    return (
        <Link to={`/dashboard/catalog/${_id}`} style={{ width: "100%", height: "100%" }}>
            <img src={images[0].url} alt={titulo} style={{ width: "100%" }} />
            <p>{titulo}</p>
            <p>{artista}</p>
        </Link>
    );
};
