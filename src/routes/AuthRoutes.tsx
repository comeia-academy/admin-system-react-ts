// ** Imports do React
import React from "react";

// ** Imports de pacotes
import { Navigate, Route, Routes } from "react-router-dom";

// ** Imports de páginas
import Dashboard from "../pages/dashboard";
import HandleUser from "../pages/users/HandleUser";
import HandleExample1 from "../pages/crud-example1/HandleExample1";
import HandleExample2 from "../pages/crud-example2/HandleExample2";
import ListUsers from "../pages/users/ListUsers/ListUsers";
import ListExample1 from "../pages/crud-example1/ListExample1";
import ListExample2 from "../pages/crud-example2/ListExample2";

// ** Imports de componentes
import Layout from "../components/layout";

// ** Imports de contextos
import { useAuth } from "../contexts/AuthContext";

const AppRoutes: React.FC = () => {
    const { authenticated, isLoading } =  useAuth();

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/signin" />;
    }

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users/insert" element={<HandleUser />} />
                <Route path="/users/update" element={<HandleUser />} />
                <Route path="/users/list" element={<ListUsers />} />
                <Route path="/crud-example1/insert" element={<HandleExample1 />} />
                <Route path="/crud-example1/update" element={<HandleExample1 />} />
                <Route path="/crud-example1/list" element={<ListExample1 />} />
                <Route path="/crud-example2/insert" element={<HandleExample2 />} />
                <Route path="/crud-example2/update" element={<HandleExample2 />} />
                <Route path="/crud-example2/list" element={<ListExample2 />} />
            </Routes>
        </Layout>
    );
};

export default AppRoutes;
