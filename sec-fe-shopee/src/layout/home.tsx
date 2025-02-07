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
            <main className="flex-1 mx-30 my-5">{children}</main>
            <button className="flex justify-center items-center bg-white w-79 mx-auto mb-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-300 transition duration-300 cursor-pointer">
                Xem Thêm
            </button>
            <Footer/>
        </div>
    );
};