import { useState } from "react";
import { DetailProduct } from "../components/features/product_detail";
import { HomeLayout } from "../layout/home";

export const DetailProductPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <HomeLayout>
                <DetailProduct />
                <div className="mt-5 p-5 flex flex-1 bg-white">
                    <div className="w-2/5">
                        <div className="flex flex-row items-center justify-start">
                            <img
                                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp09rsokn9e6e7@resize_w450_nl.webp"
                                alt="Shop Avatar"
                                className="w-25 h-25 object-cover p-3 rounded-full"
                            />
                            <div className="flex flex-col justify-items-start">
                                <div id="shop_name">okmua.com.vn</div>
                                <div className="text-gray-500 text-xs">Online 13 phút trước</div>
                                <div className="flex flex-row gap-2 mt-2">
                                    <div className="border border-orange-500 px-3 h-10 flex items-center justify-center text-orange-500 bg-orange-100 cursor-pointer hover:bg-orange-200 transition">
                                        Chat ngay
                                    </div>
                                    <div className="border border-orange-500 px-3 h-10 flex items-center justify-center text-orange-500 bg-orange-100 cursor-pointer hover:bg-orange-200 transition">
                                        Xem shop
                                    </div>
                                    <div
                                        className="border border-orange-500 px-3 h-10 flex items-center justify-center text-white bg-red-500 cursor-pointer hover:bg-red-600 transition"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Xem voucher
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[1px] h-auto bg-gray-400 ml-[-5px]"></div>

                    <div className="w-3/5 overflow-auto p-5 flex">
                        <div className="flex-1 p-3 text-center">
                            <div className="flex flex-col">
                                <label className="text-gray-500">Đánh giá:</label>
                                <p className="text-orange-500">87.7k</p>
                            </div>
                        </div>
                        <div className="flex-1 p-3 text-center">
                            <div className="flex flex-col">
                                <label className="text-gray-500">Sản phẩm:</label>
                                <p className="text-orange-500">77</p>
                            </div>
                        </div>
                        <div className="flex-1 p-3 text-center">
                            <div className="flex flex-col">
                                <label className="text-gray-500">Người theo dõi:</label>
                                <p className="text-orange-500">40.3k</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-5 flex flex-col bg-white mt-5">
                    <div className="p-3 bg-gray-200 font-medium text-xl">
                        CHI TIẾT SẢN PHẨM
                    </div>

                    <div className="flex flex-col gap-2 mt-5 ml-1">
                        <div className="flex flex-row items-center">
                            <p className="font-medium w-28">Danh mục</p>
                            <p className="text-gray-600">Nội thất văn phòng</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="font-medium w-28">Kho</p>
                            <p className="text-gray-600">1899</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <p className="font-medium w-28">Gửi từ</p>
                            <p className="text-gray-600">TP Hồ Chí Minh</p>
                        </div>
                    </div>

                    <div className="p-3 bg-gray-200 font-medium text-xl mt-5 ml-1">
                        MÔ TẢ SẢN PHẨM
                    </div>

                    <div className="div">
                        
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                        <div className="bg-white p-6 shadow-lg w-96">
                            <h2 className="text-lg font-semibold mb-4">Voucher của Shop</h2>
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <p className="text-xs border w-auto flex items-center justify-center text-white bg-orange-500 px-2 py-1 rounded">
                                        50% Giảm
                                    </p>
                                    <p className="text-gray-600 text-sm">Giảm 50% cho đơn hàng trên 500K!</p>
                                </div>

                                <div className="w-full border-t border-gray-300"></div>

                                <div className="flex flex-row justify-center items-center gap-2">
                                    <p className="text-xs border w-auto flex items-center justify-center text-white bg-orange-500 px-2 py-1 rounded">
                                        50% Giảm
                                    </p>
                                    <p className="text-gray-600 text-sm">Giảm 50% cho đơn hàng trên 500K!</p>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button
                                    className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </HomeLayout>
        </>
    );
}
