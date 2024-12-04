import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import Hoverables from "./hoverables/Hoverables";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        <Hoverables />
        </>
    )
}