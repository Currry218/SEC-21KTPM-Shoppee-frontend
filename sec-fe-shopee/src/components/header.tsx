import { FaFacebook, FaInstagram, FaBell, FaGlobe, FaQuestionCircle, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';
import avatarDefault from "../assets/avatar_default.png";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [language, setLanguage] = useState("Tiếng Việt");

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsLanguageOpen(false);
    }

    return (
        <div className="flex flex-col bg-orange-500 text-white">
            <div className="px-30 py-3 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div>Kênh người bán</div>
                    <div>Tải ứng dụng</div>
                    <div className="flex items-center gap-2">
                        <p>Kết nối</p>
                        <div className='flex flex-row pt-0.75 gap-1'>
                            <FaFacebook size={15} />
                            <FaInstagram size={15} />
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <div className="relative mr-1.5">
                            <FaBell size={15} />
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[9px] px-1 py-0 rounded-full ">
                                3
                            </span>
                        </div>
                        <span>Thông báo</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FaQuestionCircle size={15} />
                        <span>Hỗ trợ</span>
                    </div>

                    <div className="relative">
                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        >
                            <FaGlobe size={15} />
                            <span>{language}</span>
                            <FaChevronDown size={12} className={`transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`} />
                        </div>

                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-30 bg-white text-black shadow-lg rounded-lg z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleLanguageChange("Tiếng Việt")}>
                                        Tiếng Việt
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleLanguageChange("English")}>
                                        English
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img src={avatarDefault} alt="Avatar" className="w-7 h-7 rounded-full" />
                            <span className="">nguyenqui0911</span>
                        </div>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Tài khoản của tôi</li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Đơn mua</li>
                                    <li className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">Đăng xuất</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
