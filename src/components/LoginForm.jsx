import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import FormWrapper from "./ui/FormWrapper";
import InputGroup from "./ui/InputGroup";
import Select from "./ui/Select";
import { mockUsers } from "../utils/mockUsers";
import Input from "./ui/Input";
import { ArrowNarrowLeft } from "./ui/svgs";
import Button from "./ui/Button";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";

const IconContainer = styled.div`
    width: 20px;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

const StyledLink = styled(Link)`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
`;

const ErrorText = styled.span`
    color: #dc2626;
`;

export const LoginForm = () => {
    const { formData, setFormData, handleChange, handleSelection } = useForm({
        email: "",
        password: "",
    });
    const { handleSubmit, error } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(formData, mockUsers, navigate);
        setFormData({ email: "", password: "" });
    };

    return (
        <>
            <FormWrapper>
                <h3>Inicia Sesión como Administrador</h3>
                <InputGroup>
                    <label htmlFor="select">
                        Usuarios predeterminados
                        <Select id="select" name="select" onChange={handleSelection}>
                            <option value="" hidden></option>
                            {mockUsers.map(({ username, credentials }) => (
                                <option key={username} value={JSON.stringify(credentials)}>
                                    {username}
                                </option>
                            ))}
                        </Select>
                    </label>
                    <label htmlFor="email">
                        Email
                        <Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="[ johndoe@email.com ]"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="password">
                        Contraseña
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="[ ********* ]"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    {error && <ErrorText>{error}</ErrorText>}
                    <StyledLink to="/">
                        <IconContainer>
                            <ArrowNarrowLeft />
                        </IconContainer>
                        Volver a la página principal
                    </StyledLink>
                </InputGroup>
                <Button onClick={onSubmit}>Iniciar sesión</Button>
            </FormWrapper>
        </>
    );
};
