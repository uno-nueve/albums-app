import { useLocation } from "react-router";
import Button from "../ui/Button";

export const AlbumCard = ({ titulo, artista, imagen }) => {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <img src={imagen.url} alt={titulo} style={{ width: "100%" }} />
            <p>{titulo}</p>
            <p>{artista}</p>
            {location.pathname === "/albums" && <Button>Añadir al carrito</Button>}
        </div>
    );
};
