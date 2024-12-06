import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Login } from "./routes/Login.jsx";
import { Dashboard } from "./routes/Dashboard.jsx";
import { Catalog } from "./routes/Catalog.jsx";
import { Orders } from "./routes/Orders.jsx";
import { Store } from "./routes/Store.jsx";
import { Returns } from "./routes/Returns.jsx";
import { Home } from "./routes/Home.jsx";
import { Logout } from "./routes/Logout.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
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
    </StrictMode>
);
