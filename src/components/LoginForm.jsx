import { useNavigate } from "react-router";
import styled from "styled-components";
import FormWrapper from "./ui/FormWrapper";
import Select from "./ui/Select";
import { mockUsers } from "../utils/mockUsers";
import Input from "./ui/Input";
import { ArrowNarrowLeft } from "./ui/svgs";
import { Button } from "./ui/Button";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { FlexContainer } from "./ui/FlexContainer";
import { ToastedLink } from "./ui/Link";
import { ErrorToast } from "./Toast";

const IconContainer = styled.div`
    width: 1.25rem;
    heigth: 100%;
    display: flex;
    align-items: center;
`;

const FormLayout = styled(FormWrapper)`
    @media (max-width: 500px) {
        min-width: auto;
        width: 100vw;
        border-radius: 0;
    }
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
        <FlexContainer maxw="500px" w="100%">
            <FormLayout>
                <h3>Inicia Sesión como Administrador</h3>
                <FlexContainer gap="1.25rem" w="100%" column>
                    <label htmlFor="select">
                        Usuarios predeterminados
                        <Select id="select" name="select" onChange={handleSelection}>
                            <option value="" hidden></option>
                            {mockUsers?.map(({ username, credentials }) => (
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
                    {error && <ErrorToast>{error}</ErrorToast>}
                    <ToastedLink to="/">
                        <IconContainer>
                            <ArrowNarrowLeft />
                        </IconContainer>
                        Volver a la página principal
                    </ToastedLink>
                </FlexContainer>
                <Button onClick={onSubmit}>Iniciar sesión</Button>
            </FormLayout>
        </FlexContainer>
    );
};
