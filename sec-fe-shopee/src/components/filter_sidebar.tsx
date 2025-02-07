import { FaFilter, FaStar, FaRegStar } from 'react-icons/fa';

const ratings = [
    { stars: 5, label: "" },
    { stars: 4, label: "trở lên" },
    { stars: 3, label: "trở lên" },
    { stars: 2, label: "trở lên" },
    { stars: 1, label: "trở lên" }
];

export const FilterSidebar = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-center">
                <div className="flex flex-row items-center justify-center">
                    <FaFilter className="text-orange-500 mr-1" />
                    <p className='font-bold'>BỘ LỌC TÌM KIẾM</p>
                </div>
                
                <div className="mt-3">
                    <p>Theo Danh Mục</p>
                    <div className="flex flex-col mt-1">
                        {["Nội thất ngoài trời", "Nội thất ngoài trời", "Nội thất ngoài trời"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Nơi Bán</p>
                    <div className="flex flex-col mt-1">
                        {["TP Hồ Chí Minh", "TP Hồ Chí Minh", "TP Hồ Chí Minh"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Đơn Vị Vận Chuyển</p>
                    <div className="flex flex-col mt-1">
                        {["Nhanh", "Hỏa tốc", "Tiết kiệm"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Thương Hiệu</p>
                    <div className="flex flex-col mt-1">
                        {["HCMUS", "HCMUS", "HCMUS"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Khoảng giá</p>
                    <div className='flex flex-row items-center justify-center mt-1'>
                        <input
                            type="text"
                            placeholder="TỪ"
                            className="w-1/2 h-9 px-4 py-2 bg-white border border-gray-300 focus:outline"
                        />
                        <p className='mx-3 text-3xl'>-</p>
                        <input
                            type="text"
                            placeholder="ĐẾN"
                            className="w-1/2 h-9 px-4 py-2 bg-white border border-gray-300 focus:outline"
                        />
                    </div>
                    <button className="mt-2 flex justify-center items-center bg-orange-500 w-full mx-auto my-5 py-2 border border-gray-300 text-white hover:bg-orange-300 transition duration-300 cursor-pointer">
                        ÁP DỤNG
                    </button>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Loại Shop</p>
                    <div className="flex flex-col mt-1">
                        {["Shopee Mall", "Shopee Mall", "Shopee Mall"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Tình trạng</p>
                    <div className="flex flex-col mt-1">
                        {["Đã sử dụng", "Mới"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Các lựa chọn thanh toán</p>
                    <div className="flex flex-col mt-1">
                        {["0% TRẢ GÓP"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Đánh giá</p>
                    <div className="flex flex-col space-y-1 mt-1">
                        {ratings.map((rating, index) => (
                            <div key={index} className="flex items-center space-x-2 cursor-pointer">
                                {[...Array(5)].map((_, i) =>
                                    i < rating.stars ? (
                                        <FaStar key={i} className="text-yellow-500" />
                                    ) : (
                                        <FaRegStar key={i} className="text-gray-400" />
                                    )
                                )}
                                <span className="text-sm">{rating.label}</span>
                            </div>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <div className="mt-3">
                    <p>Dịch Vụ & Khuyến Mãi</p>
                    <div className="flex flex-col mt-1">
                        {["Đang giảm giá", "Gì cũng rẻ", "Hàng có sẵn", "Mua giá bán buôn/ bán sĩ"].map((item, index) => (
                            <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 accent-white text-orange-500" />
                                <span>{item}</span>
                            </label>
                        ))}
                    </div>
                    <div className="w-[218px] border-b-1 border-gray-300 mt-3"></div>
                </div>

                <button className="mt-3 flex justify-center items-center bg-orange-500 w-full mx-auto my-5 py-2 border border-gray-300 text-white hover:bg-orange-300 transition duration-300 cursor-pointer">
                    XÓA TẤT CẢ
                </button>
            </div>
        </>
    );
}