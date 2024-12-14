import LayoutWrapper from "../components/ui/LayoutWrapper";
import { LoginForm } from "../components/LoginForm";
import { useTitle } from "../hooks/useTitle";

export const Login = () => {
    useTitle("Inicio de sesión");
    return (
        <LayoutWrapper>
            <LoginForm />
        </LayoutWrapper>
    );
};
