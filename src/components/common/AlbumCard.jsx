export const AlbumCard = ({ titulo, artista, imagen }) => {
    return (
        <div style={{ width: "100%" }}>
            <img src={imagen.url} alt={titulo} style={{ width: "100%" }} />
            <p>{titulo}</p>
            <p>{artista}</p>
        </div>
    );
};
