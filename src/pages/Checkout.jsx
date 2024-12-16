import styled from "styled-components";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useSelector } from "react-redux";
import { CheckoutForm } from "../components/CheckoutForm";
import { FlexContainer } from "../components/ui/FlexContainer";
import { CartItem } from "../components/CartItem";

const ImageCol = styled(FlexContainer)`
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

    return (
        <FlexContainer h="calc(100vh - 80px)">
            <GridColsWrapper cols="repeat(2, minmax(0, 1fr))">
                <FlexContainer p="1.25rem" gap="1.25rem" column>
                    <h1>FINALIZAR COMPRA</h1>
                    <FlexContainer gap="1.25rem" w="680px" column>
                        {data?.map((album) => (
                            <CartItem album={album} key={album._id} />
                        ))}
                        <CheckoutForm />
                    </FlexContainer>
                </FlexContainer>
                <ImageCol>
                    <BgImage
                        src="https://images.unsplash.com/photo-1565619624098-cf4168a7cd9d?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="abstract blob"
                    />
                </ImageCol>
            </GridColsWrapper>
        </FlexContainer>
    );
};
