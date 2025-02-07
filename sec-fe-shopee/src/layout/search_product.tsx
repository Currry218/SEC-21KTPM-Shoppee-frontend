import { ReactNode } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { FilterSidebar } from "../components/filter_sidebar";
import { FilterTop } from "../components/filter_top";

interface SearchProductLayoutProps {
    children: ReactNode;
}

export const SearchProductLayout = ({ children }: SearchProductLayoutProps) => {
    return (
        <div className="flex flex-col h-screen w-full">
            <Header />

            <div className="flex flex-1 w-full mx-auto my-5">
                <div className="w-1/5 bg-gray-100 pl-30">
                    <FilterSidebar />
                </div>

                <div className="w-4/5 bg-gray-100 overflow-auto px-20">
                    <FilterTop></FilterTop>
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
};

