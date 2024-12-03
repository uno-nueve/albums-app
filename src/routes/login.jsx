import Button from "../components/ui/Button";
import LayoutWrapper from "../components/ui/LayoutWrapper";
import FormWrapper from "../components/ui/FormWrapper";
import InputGroup from "../components/ui/InputGroup";
import Input from "../components/ui/Input";
import { Link } from "react-router";

export const Login = () => {
    return (
        <LayoutWrapper>
            <FormWrapper>
                <h3>Inicia Sesión de Administrador</h3>
                <InputGroup>
                    <label htmlFor="email">
                        Email
                        <Input type="text" id="email" name="email" />
                    </label>
                    <label htmlFor="password">
                        Contraseña
                        <Input type="password" id="password" name="password" />
                    </label>
                    <Link to="/">Volver a la página principal</Link>
                </InputGroup>
                <Button>Iniciar sesión</Button>
            </FormWrapper>
        </LayoutWrapper>
    );
};
