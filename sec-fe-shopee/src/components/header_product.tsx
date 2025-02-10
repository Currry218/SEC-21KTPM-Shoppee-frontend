import logoShopee from "../assets/logo_shopee_1.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Header } from "./header";

export const HeaderProduct = () => {
    return (
        <>
            <Header/>
            <div className="bg-orange-500 px-30 flex justify-between items-center text-white">
                <div className="flex justify-center items-center cursor-pointer">
                    <img src={logoShopee} alt="Avatar" className="w-15 h-15 rounded-full pb-1" />
                    <span className="text-3xl">Shopee</span>
                </div>

                <div className="relative w-[1024px] text-black">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm"
                        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-2 cursor-pointer w-12 flex justify-center items-center">
                        <FaSearch />
                    </button>
                </div>

                <div className="relative cursor-pointer mr-10">
                    <FaShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        3
                    </span>
                </div>
            </div>
        </>
    );
}