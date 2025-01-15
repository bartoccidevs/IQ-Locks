import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import Hoverables from "./hoverables/Hoverables";

export default function Layout({ children }) {
    return (
        <>
        <Header />
        <div className="h-20 bg-theme-background-dark"></div>
        <main className="min-h-page bg-theme-page">
            {children}
        </main>
        <Footer />
        <Hoverables />
        </>
    )
}