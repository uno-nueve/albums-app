import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Login } from "./pages/Login.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";
import { Catalog } from "./pages/Catalog.jsx";
import { Orders } from "./pages/Orders.jsx";
import { Store } from "./pages/Store.jsx";
import { Returns } from "./pages/Returns.jsx";
import { Home } from "./pages/Home.jsx";
import { Logout } from "./pages/Logout.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store.js";
import { Checkout } from "./pages/Checkout.jsx";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "albums",
                element: <Store />,
                children: [
                    {
                        element: <Catalog />,
                        index: true,
                    },
                ],
            },
            {
                path: "returns",
                element: <Returns />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
                children: [
                    {
                        element: <Catalog />,
                        index: true,
                    },
                    {
                        path: "catalog",
                        element: <Catalog />,
                    },
                    {
                        path: "orders",
                        element: <Orders />,
                    },
                ],
            },
            {
                path: "checkout",
                element: <Checkout />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "logout",
        element: <Logout />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </StrictMode>
);
