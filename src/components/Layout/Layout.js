import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";

const Layout = () => {
    return (
        <>
            {window.location.pathname !== "/*" ? (<Header />) : null}
            <Outlet />
        </>
    );
};

export default Layout;