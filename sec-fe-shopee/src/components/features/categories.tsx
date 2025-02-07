import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
    { id: 19, name: "Bách Hóa Online", image: logoShopee },
    { id: 20, name: "Nhà sách Online", image: logoShopee },
    { id: 21, name: "Balo & Túi Ví Nam", image: logoShopee },
    { id: 22, name: "Đồ Chơi", image: logoShopee },
    { id: 23, name: "Chăm Sóc Thú Cưng", image: logoShopee },
    { id: 24, name: "Dụng Cụ & Thiết Bị Tiện Ích", image: logoShopee },
    { id: 25, name: "Thời Trang Trẻ Em", image: logoShopee },
    { id: 26, name: "Giặt giũ & Chăm Sóc Nhà Cửa", image: logoShopee },
    { id: 27, name: "Voucher & Dịch Vụ", image: logoShopee },
];

export const Categories = () => {
    const [showExtended, setShowExtended] = useState(false);
    const visibleCategories = showExtended
        ? [...categories.slice(4, 10), ...categories.slice(14, 20), ...categories.slice(20, 27)]
        : categories.slice(0, 20);

    return (
        <div className="relative bg-white">
            <p className="text-base p-3">Danh mục</p>
            <div className="relative flex items-center">
                {showExtended && (
                    <button
                        className="absolute left-[-20px] z-10 bg-white p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-120 hover:shadow-lg cursor-pointer"
                        onClick={() => setShowExtended(false)}
                    >
                        <FaChevronLeft size={15} />
                    </button>
                )}

                <div className="grid grid-cols-10">
                    {visibleCategories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white shadow-md p-1 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        >
                            <img src={category.image} alt={category.name} className="w-15 h-20 mx-auto object-cover" />
                            <p className="mt-2 text-xs">{category.name}</p>
                        </div>
                    ))}
                </div>

                {!showExtended && (
                    <button
                        className="absolute right-[-20px] z-10 bg-white p-2 rounded-full shadow-md transition-transform duration-300 hover:scale-120 hover:shadow-lg cursor-pointer"
                        onClick={() => setShowExtended(true)}
                    >
                        <FaChevronRight size={15} />
                    </button>
                )}
            </div>
        </div>
    );
};
