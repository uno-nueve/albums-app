import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
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
import { Provider } from "react-redux";
import { store } from "./state/store.js";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="albums" element={<Store />}>
                            <Route index element={<Catalog />} />
                        </Route>
                        <Route path="returns" element={<Returns />} />
                        <Route path="dashboard" element={<Dashboard />}>
                            <Route index element={<Catalog />} />
                            <Route index path="catalog" element={<Catalog />} />
                            <Route path="orders" element={<Orders />} />
                        </Route>
                    </Route>

                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
