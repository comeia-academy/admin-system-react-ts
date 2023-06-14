// Imports do React
import React from "react";

// Imports de pacotes
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

// Imports de estilos
import styles from "./Login.module.css";

// Imports de componentes
import Form from "../../components/forms/Form";
import Input from "../../components/forms/Input";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";

// Imports de serviços
import { User, login as loginService } from "../../services/authService";

// Imports de contextos
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const initialValues: User = {
        email: "",
        password: "",
    };
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters long")
            .required("Password is required"),
    });

    const onSubmit = async (values: User) => {
        try {
            const user = await loginService(values);
            login(user);
            navigate("/");
        } catch (error) {
            alert("Error when logging in");
        }
    };

    return (
        <div className={styles.loginWrapper}>
            <Form
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <>
                        <Title>ADMIN SYSTEM EXAMPLE</Title>

                        <Input
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            touched={touched.email}
                        />

                        <Input
                            label="Password"
                            name="password"
                            type="password"
                            errors={errors.password}
                            touched={touched.password}
                        />

                        <Button type="submit">Sign in</Button>
                    </>
                )}
            </Form>
        </div>
    );
};

export default Login;
