import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        </>
    );
}
export default Layout;