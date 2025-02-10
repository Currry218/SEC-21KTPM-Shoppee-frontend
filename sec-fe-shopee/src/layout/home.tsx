import { ReactNode } from "react";
import { HeaderProduct } from "../components/header_product";
import { Footer } from "../components/footer";
import '../App.css';

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderProduct/>
            <main className="flex-1 mx-30 my-5">{children}</main>
            <Footer/>
        </div>
    );
};