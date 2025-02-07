import { ReactNode } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import '../App.css';

interface HomeLayoutProps {
    children: ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
                <main className="flex-1">{children}</main>
            <Footer/>
        </div>
    );
};