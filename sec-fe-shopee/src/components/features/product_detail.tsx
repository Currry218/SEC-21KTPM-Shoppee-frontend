import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaFacebookMessenger, FaRegHeart, FaHeart } from 'react-icons/fa';
import { RatingStars } from "../../helpers/utility/calc_ratingstar";
import { QuantitySelector } from "../common/quantity_selector";

export const DetailProduct = () => {
    // State để lưu ảnh lớn đang hiển thị
    const [liked, setLiked] = useState(false);
    const [selectedImage, setSelectedImage] = useState("https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp09rsokn9e6e7@resize_w450_nl.webp");
    const [selected, setSelected] = useState("Ghế văn phòng");

    // Danh sách ảnh nhỏ
    const thumbnails = [
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp09rsokn9e6e7@resize_w450_nl.webp",
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop2zgb2be@resize_w450_nl.webp",
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpx5x7nf30luf8@resize_w450_nl.webp",
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop352kuc8@resize_w450_nl.webp",
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop36h5aca@resize_w450_nl.webp"
    ];

    const products = [
        {
            name: "Ghế văn phòng",
            img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lp09rsokn9e6e7@resize_w450_nl.webp"
        },
        {
            name: "Phiên bản dày",
            img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lowegop2zgb2be@resize_w450_nl.webp"
        }
    ];

    return (
        <div className="flex flex-1 w-full mx-auto my-5">
            {/* Ảnh lớn */}
            <div className="w-2/5 bg-white p-5">
                <div className="flex flex-col">
                    <img
                        src={selectedImage}
                        alt="Product"
                        className="w-[450px] h-[450px] object-cover"
                    />

                    {/* Danh sách ảnh nhỏ */}
                    <div className="flex flex-row mt-2 w-[450px] justify-between">
                        {thumbnails.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                className="w-auto h-[82px] cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
                                onMouseEnter={() => setSelectedImage(image)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-row items-center justify-center mt-5">
                    <div className="flex flex-row justify-between items-center gap-1">
                        Chia sẻ:
                        <FaFacebookMessenger size={30} className="text-blue-500 cursor-pointer" />
                        <FaFacebook size={30} className="text-blue-500 cursor-pointer" />
                        <FaInstagram size={30} className="text-pink-500 cursor-pointer" />
                        <FaTwitter size={30} className="text-blue-500 cursor-pointer" />
                    </div>

                    <div className="h-6 w-[1px] bg-gray-400 mx-10"></div>

                    <div className="flex flex-row justify-center items-center">
                        <button onClick={() => setLiked(!liked)} className="text-red-500 text-2xl mr-2">
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </button>
                        Đã thích (764)
                    </div>
                </div>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="w-3/5 bg-white overflow-auto p-5">
                <div className="text-xl">Ghế Xoay Văn Phòng Tựa Đầu, Ghế Văn Phòng Chân Xoay Lưng xương cá, ngả lưng gật gù, thư giãn êm ái</div>
                <div className="flex flex-row justify-between w-full mt-2">
                    <div className="flex flex-row">
                        <div id='star' className="flex flex-row gap-1">
                            <div className="underline underline-offset-4">4.6</div>
                            <RatingStars rating={4.6} />
                        </div>

                        <div className="h-6 w-[1px] bg-gray-400 mx-5"></div>

                        <div id='review' className="flex flex-row gap-1">
                            <div className="underline underline-offset-4">1.2k</div>
                            Đánh giá
                        </div>

                        <div className="h-6 w-[1px] bg-gray-400 mx-5"></div>

                        <div id='sold' className="flex flex-row gap-1">
                            <div className="underline underline-offset-4">4.7k</div>
                            Đã bán
                        </div>
                    </div>

                    <div className="cursor-pointer text-gray-500">Tố cáo</div>
                </div>

                <div className="bg-gray-100 p-5 mt-5 flex flex-row">
                    <div className="flex flex-row gap-1 text-3xl items-center mr-3 text-red-500">
                        <div className="underline underline-offset-2 text-xl">đ</div>
                        <div className="">480.000</div>
                    </div>

                    <div className="flex flex-row gap-1 items-center text-gray-400 line-through mr-1">
                        <div className="underline underline-offset-2 text-xs">đ</div>
                        <div className="text-base">748.500</div>
                    </div>

                    <div className="flex flex-row items-center text-red-500 font-medium bg-red-100 m-2">
                        <div className="text-xs">-36%</div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="flex flex-row items-center gap-3">
                        <p className="text-gray-500">Combo Khuyến Mãi:</p>
                        <div className="p-1 border border-orange-500 text-red-500 text-xs">Mua 2 & giảm 1%</div>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="flex flex-row items-center gap-3">
                        <p className="text-gray-500">Vận Chuyển:</p>
                        <p className="text-gray-500 text-xs">Nhận từ 9 Th02 - 14 Th02, phí giao ₫0</p>
                    </div>
                </div>

                <div className="mt-5">
                    <div className="flex flex-row items-center gap-3">
                        <p className="text-gray-500">Loại:</p>
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className={`p-2 border text-xs flex flex-row items-center gap-1 cursor-pointer transition-all duration-300 
                        ${selected === product.name ? "border-orange-500 bg-orange-100 text-orange-600 font-semibold" : "border-gray-300 text-gray-500 hover:border-orange-400"}`}
                                onClick={() => setSelected(product.name)}
                            >
                                <img src={product.img} alt={product.name} className="w-[24px] h-[24px] object-cover rounded" />
                                {product.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5">
                    <QuantitySelector/>
                </div>

                <div className="mt-5 flex flex-row gap-2">
                    <div className="border border-orange-500 p-3 text-orange-500 bg-orange-100 cursor-pointer hover:bg-orange-200">
                        Thêm Vào Giỏ Hàng
                    </div>
                    <div className="border border-orange-500 p-3 w-36 text-white bg-red-500 text-center cursor-pointer">
                        Mua Ngay
                    </div>
                </div>
            </div>
        </div>
    );
};
