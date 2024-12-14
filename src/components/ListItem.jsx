import { useAxios } from "../hooks/useAxios";
import { SALES } from "../utils/urls";

export const ListItem = ({ orden }) => {
    const { ordenNumero, nombreCliente, monto, album, _id } = orden;
    const { handleDelete } = useAxios();

    const onDelete = async (id) => {
        await handleDelete(`${SALES}/${id}`);
    };

    return (
        <li>
            #{ordenNumero} | {nombreCliente} | ${monto}
            {album.titulo}
            <button onClick={() => onDelete(_id)}>X</button>
        </li>
    );
};
