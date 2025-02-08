import { Categories } from "../components/features/categories";
import { CrossBar } from "../components/common/crossbar";
import { ProductDisplay } from "../components/features/product_display";
import { HomeLayout } from "../layout/home";

export const HomePage = () => {
    return (
        <>
            <HomeLayout>
                <Categories />
                <CrossBar />
                <ProductDisplay />
                <button className="flex justify-center items-center bg-white w-79 mx-auto mb-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-300 transition duration-300 cursor-pointer">
                    Xem Thêm
                </button>
            </HomeLayout>
        </>
    );
}