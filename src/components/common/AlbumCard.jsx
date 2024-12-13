import { useLocation } from "react-router";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/cart/cartSlice";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const AlbumCard = ({ album }) => {
    const { titulo, artista, images } = album;
    const { setShowModal } = useContext(CartContext) || {};
    const location = useLocation();
    const dispatch = useDispatch();

    const handleCart = () => {
        setShowModal(true);
        dispatch(addToCart(album));
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <img src={images[0].url} alt={titulo} style={{ width: "100%" }} />
            <p>{titulo}</p>
            <p>{artista}</p>
            {location.pathname === "/albums" && (
                <Button onClick={handleCart}>Añadir al carrito</Button>
            )}
        </div>
    );
};
