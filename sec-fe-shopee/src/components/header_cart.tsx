import logoShopee from "../assets/logo_shopee_2.png";
import { FaSearch, FaCommentDots, FaChevronDown, FaTicketAlt } from "react-icons/fa";
import { Header } from "./header";
import { useState } from 'react';
import { QuantitySelector } from "./common/quantity_selector";

const products = [
    {
        type: "Ghế văn phòng 1",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp09rsokn9e6e7@resize_w450_nl.webp"
    },
    {
        type: "Ghế văn phòng 2",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop2zgb2be@resize_w450_nl.webp"
    },
    {
        type: "Ghế văn phòng 3",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop2zgb2be@resize_w450_nl.webp"
    }
];

export const HeaderCart = () => {
    const [isDnTypeProductOpen, setIsDnTypeProductOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const handleConfirmSelection = () => {
        setIsDnTypeProductOpen(false); // Đóng dropdown
    };

    return (
        <>
            <Header />
            <div className="px-30 flex justify-between items-center text-orange-500 bg-white">
                <div className="flex justify-center items-center cursor-pointer p-5">
                    <img src={logoShopee} alt="Avatar" className="w-15 h-15 pb-1" />
                    <span className="text-3xl">Shopee</span>
                    <div className="w-[1px] h-10 bg-orange-500 mx-5"></div>
                    <div className="text-2xl">Giỏ hàng</div>
                </div>

                <div className="relative w-1/2 text-black border-2 border-orange-500">
                    <input
                        type="text"
                        placeholder="Tìm sản phẩm, thương hiệu và tên shop"
                        className="w-full px-4 py-2 bg-white outline-none focus:placeholder-transparent"
                    />

                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-2 cursor-pointer w-15 h-full flex justify-center items-center">
                        <FaSearch />
                    </button>
                </div>
            </div>

            <div className="mx-30 p-5 mt-5 bg-white flex flex-row items-center justify-between ">
                <div className="flex flex-row items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                    Sản phẩm
                </div>
                <div className="flex flex-row pr-5 text-gray-400">
                    <div className="flex flex-row gap-25 mr-17.5">
                        <p className="text-center">Đơn giá</p>
                        <p className="text-center">Số lượng</p>
                    </div>

                    <div className="flex flex-row gap-25 mr-3">
                        <p className="text-center">Số tiền</p>
                        <p className="text-center">Thao tác</p>
                    </div>
                </div>
            </div>

            <div className="mx-30 mt-5 bg-white flex flex-col">
                <div className="">
                    <div className="flex flex-row items-center gap-3 p-5">
                        <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                        QingQing
                        <div className="text-orange-500 cursor-pointer">
                            <FaCommentDots />
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-gray-200"></div>

                    <div className="p-5 flex flex-row items-center justify-between">
                        <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                        <img src={selectedProduct.img} className="w-35 h-30" />
                        <p>{selectedProduct.type}</p>

                        <div className="relative">
                            <div
                                className="flex items-center gap-1 cursor-pointer"
                                onClick={() => setIsDnTypeProductOpen(!isDnTypeProductOpen)}
                            >
                                <div className="flex flex-col">
                                    <span>Phân loại hàng:</span>
                                    <span>{selectedProduct.type}</span>
                                </div>
                                <FaChevronDown size={12} className={`transition-transform duration-300 ${isDnTypeProductOpen ? "rotate-180" : ""}`} />
                            </div>

                            {isDnTypeProductOpen && (
                                <div className="absolute flex flex-wrap gap-x-4 border w-100 bg-white p-2 shadow-md">
                                    <div>Loại ghế</div>
                                    {products.map((product) => (
                                        <div
                                            key={product.type}
                                            className={`p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 transition ${selectedProduct.type === product.type ? "bg-gray-200" : ""}`}
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            {product.type}
                                        </div>
                                    ))}
                                    <button
                                        className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        onClick={handleConfirmSelection}
                                    >
                                        Confirm
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-row">
                            <div className="flex flex-row items-center text-gray-400 line-through mr-1">
                                <div className="underline underline-offset-2 text-xs">đ</div>
                                <div className="text-xs">748.500</div>
                            </div>

                            <div className="flex flex-row items-center text-black">
                                <div className="underline underline-offset-2 text-xs">đ</div>
                                <div className="text-xs">480.000</div>
                            </div>
                        </div>

                        <QuantitySelector size="small" />

                        <div className="flex flex-row items-center text-orange-500">
                            <div className="underline underline-offset-2 text-xs">đ</div>
                            <div className="text-xs">480.000</div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center">Xóa</p>
                            <div className="text-orange-500 flex flex-row justify-center items-center gap-1 w-30 text-center">
                                Tìm sản phẩm tương tự
                                <FaChevronDown size={12} className={`transition-transform duration-300 ${isDnTypeProductOpen ? "rotate-180" : ""}`} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full h-0.5 bg-gray-200"></div>

                <div className="p-5 flex flex-row gap-7 justify-start items-center">
                    <FaTicketAlt size={20} className="text-orange-500" />
                    <p className="text-blue-500">Thêm Shop Voucher</p>
                </div>

                <div className="w-full h-0.5 bg-gray-200"></div>

            </div>

            <div className="mx-30 mt-5 bg-white flex flex-col">
                <div className="flex flex-row gap-7 justify-between items-center h-auto">
                    <div className="flex flex-row items-center gap-3 p-5">
                        <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                        <p>Chọn tất cả (5)</p>
                        <p>Xóa</p>
                    </div>

                    <div className="flex flex-row items-center gap-3 p-5">
                        <p>Tổng thanh toán (1 sản phẩm):</p>
                        <div className="flex flex-row">
                            <div className="flex flex-col gap-1 items-center text-orange-500 mt-5">
                                <div className="flex flex-row items-center gap-1">
                                    <div className="underline underline-offset-2 text-xs">đ</div>
                                    <div className="text-2xl text-center">480.000</div>
                                </div>
                                <div className="flex flex-row items-center">
                                    <div className="text-xs text-black mr-2">Tiết kiệm</div>
                                    <div className="underline underline-offset-2 text-xs mr-0.5">đ</div>
                                    <div className="text-xs text-orange-500">34k</div>
                                </div>
                            </div>
                        </div>
                        <button className="w-30 h-10 bg-orange-500 text-white">Mua hàng</button>
                    </div>
                </div>
            </div>
        </>
    );
}