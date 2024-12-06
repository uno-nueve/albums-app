import Button from "../components/ui/Button";
import LayoutWrapper from "../components/ui/LayoutWrapper";
import FormWrapper from "../components/ui/FormWrapper";
import InputGroup from "../components/ui/InputGroup";
import Input from "../components/ui/Input";
import { Link, useNavigate } from "react-router";
import { ArrowNarrowLeft } from "../components/ui/svgs";
import styled from "styled-components";
import { useState } from "react";
import { mockUsers } from "../utils/mockUsers";
import Select from "../components/ui/Select";

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

export const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = mockUsers.find(
            (user) =>
                user.credentials.email === formData.email &&
                user.credentials.password === formData.password
        );
        if (user) {
            localStorage.setItem("session", JSON.stringify(user));
            navigate("/dashboard");
        } else {
            setError("Email o contraseña no válidos. Intente de nuevo");
        }

        setFormData({ email: "", password: "" });
    };

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleSelection = (e) => {
        const formValues = JSON.parse(e.currentTarget.value);
        setFormData(formValues);
    };

    return (
        <LayoutWrapper>
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
                <Button onClick={handleSubmit}>Iniciar sesión</Button>
            </FormWrapper>
        </LayoutWrapper>
    );
};
