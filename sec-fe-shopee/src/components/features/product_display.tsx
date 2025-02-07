
import logoShopee from "../../assets/logo_shopee.png";

const categories = [
    { id: 1, name: "Thời Trang Nam", image: logoShopee },
    { id: 2, name: "Điện Thoại & Phụ Kiện", image: logoShopee },
    { id: 3, name: "Thiết Bị Điện Tử", image: logoShopee },
    { id: 4, name: "Máy Tính & Laptop", image: logoShopee },
    { id: 5, name: "Máy Ảnh & Máy Quay Phim", image: logoShopee },
    { id: 6, name: "Đồng Hồ", image: logoShopee },
    { id: 7, name: "Giày Dép Nam", image: logoShopee },
    { id: 8, name: "Thiết Bị Điện Gia Dụng", image: logoShopee },
    { id: 9, name: "Thể Thao & Du Lịch", image: logoShopee },
    { id: 10, name: "Ô Tô & Xe Máy & Xe Đạp", image: logoShopee },
    { id: 11, name: "Thời Trang Nữ", image: logoShopee },
    { id: 12, name: "Mẹ & Bé", image: logoShopee },
    { id: 13, name: "Nhà cửa & Đời sống", image: logoShopee },
    { id: 14, name: "Sắc Đẹp", image: logoShopee },
    { id: 15, name: "Sức Khỏe", image: logoShopee },
    { id: 16, name: "Giày Dép Nữ", image: logoShopee },
    { id: 17, name: "Túi Ví Nữ", image: logoShopee },
    { id: 18, name: "Phụ Kiện & Trang Sức Nữ", image: logoShopee },
];

export const ProductDisplay = () => {
    return (
        <>
            <div className="relative mx-70 my-5">
                <div className="grid grid-cols-6 gap-1.5">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white shadow-md p-3 flex flex-col h-full justify-between group relative transition-all duration-300 ease-in-out border-2 border-transparent hover:border-orange-500 cursor-pointer"
                        >
                            <div className="flex flex-col justify-start flex-grow">
                                <div className="flex items-center justify-center">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-auto h-30 mx-auto object-cover"
                                    />
                                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1">
                                        -3%
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-left text-ellipsis overflow-hidden">{category.name}</p>
                            </div>

                            <div className="flex flex-col mt-2">
                                <div className="flex gap-1">
                                    <p className="mt-2 text-xs border border-red-500 px-1 text-red-500">Rẻ vô địch</p>
                                    <p className="mt-2 text-xs border w-auto flex justify-center text-white bg-orange-500 px-1">7% Giảm</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="mt-2 text-xs">699.000Đ</p>
                                    <p className="mt-2 text-xs">Đã bán 2.5k</p>
                                </div>
                            </div>

                            <button className="absolute bottom-[-25px] left-[-2px] z-10 w-[154.5px] py-2 bg-orange-500 text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
                                Tìm sản phẩm tương tự
                            </button>
                        </div>
                        
                    ))}
                </div>

                <button className="flex justify-center items-center bg-white w-79 mx-auto my-5 py-2 border border-gray-300 text-gray-700 hover:bg-gray-300 transition duration-300 cursor-pointer">
                    Xem Thêm
                </button>
            </div>
        </>
    );
};

