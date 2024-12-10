import { NavLink, Outlet, useNavigate } from "react-router";
import GridCol from "../components/ui/GridCol";
import GridColsWrapper from "../components/ui/GridColWrapper";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Avatar, AvatarContainer, ProfileWrapper } from "../components/ui/Profile.js";
import Button from "../components/ui/Button.js";
import { Modal } from "../components/common/Modal";
import { ModalContext } from "../contexts/ModalContext.js";
import FormWrapper from "../components/ui/FormWrapper.js";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import styled from "styled-components";
import InputGroup from "../components/ui/InputGroup.js";
import { XClose } from "../components/ui/svgs";

const FormContainer = styled(FormWrapper)`
    min-width: 100%;
    height: 100%;
    padding: 0;
    border: none;
`;

const IconContainer = styled.div`
    width: 20px;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

const ModalButton = styled(Button)`
    position: absolute;
    width: 40px;
    left: 20px;
    top: 20px;
`;

export const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const user = useContext(UserContext) || localStorage.getItem("session");

    if (!user) {
        return navigate("/login");
    }

    return (
        <ModalContext.Provider value={showModal}>
            <GridColsWrapper cols="1fr 3fr">
                <GridCol>
                    <ProfileWrapper>
                        <AvatarContainer>
                            <Avatar src={user.avatar} alt={user.username} />
                        </AvatarContainer>
                        <p>{user.username}</p>
                    </ProfileWrapper>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            paddingBottom: "20px",
                            borderBottom: "1px solid #9e9e9e",
                        }}
                    >
                        <NavLink to="/dashboard/catalog">Catálogo</NavLink>
                        <NavLink to="/dashboard/orders">Ordenes</NavLink>
                    </div>
                    <Button onClick={() => setShowModal(true)}>Añadir album</Button>
                </GridCol>
                <GridCol>
                    <Outlet />
                    <Modal>
                        <FormContainer>
                            <h3>Nuevo Album</h3>
                            <InputGroup>
                                <label htmlFor="titulo">
                                    Título
                                    <Input id="title" name="title" />
                                </label>
                                <label htmlFor="artista">
                                    Artista
                                    <Input id="artista" name="artist" />
                                </label>
                                <label htmlFor="genero">
                                    Género
                                    <Select>
                                        <option value="" hidden></option>
                                        <option value="rap">Rap</option>
                                        <option value="rock">Rock</option>
                                        <option value="pop">Pop</option>
                                        <option value="r&b">R&B</option>
                                        <option value="tango">Tango</option>
                                    </Select>
                                </label>
                                <label htmlFor="stock">
                                    Stock
                                    <Input id="stock" name="stock" type="number" />
                                </label>
                            </InputGroup>
                            <Button>Añadir</Button>
                        </FormContainer>
                        <ModalButton onClick={() => setShowModal(false)}>
                            <IconContainer>
                                <XClose />
                            </IconContainer>
                        </ModalButton>
                    </Modal>
                </GridCol>
            </GridColsWrapper>
        </ModalContext.Provider>
    );
};
