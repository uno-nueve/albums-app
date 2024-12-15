import styled from "styled-components";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CheckoutForm } from "../components/CheckoutForm";

const ImageCol = styled(GridCol)`
    padding: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

const BgImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Checkout = () => {
    const data = useSelector((state) => state.cart.items);
    const [response, setResponse] = useState(null);
    console.log("HERE", response);

    return (
        <>
            <GridColsWrapper cols="repeat(2, minmax(0, 1fr))">
                <GridCol>
                    <h3>Finalizar compra</h3>
                    <div>
                        Tu carrito:
                        {data?.map((item) => (
                            <span key={item._id}>{item.titulo}</span>
                        ))}
                    </div>
                    <CheckoutForm setResponse={setResponse} />
                    {response &&
                        response?.map(({ venta, album }) => (
                            <div key={venta?._id}>
                                <h3>Compra exitosa</h3>
                                Orden #{venta?.ordenNumero}
                                Compraste {album?.titulo} de {album?.artista}
                            </div>
                        ))}
                </GridCol>
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
            </GridColsWrapper>
        </>
    );
};
