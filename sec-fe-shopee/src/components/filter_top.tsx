import { useState } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const FilterTop = () => {
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [language, setLanguage] = useState("Giá");

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsLanguageOpen(false);
    }

    return (
        <>
            <div className="flex items-center justify-between w-full bg-gray-200 p-5">
                <div className="flex gap-2">
                    <button className="flex justify-center items-center whitespace-nowrap bg-orange-500 w-auto py-2 px-3 border border-gray-300 text-white hover:bg-orange-300 transition duration-300 cursor-pointer">
                        Liên Quan
                    </button>
                    <button className="flex justify-center items-center whitespace-nowrap bg-white w-auto py-2 px-3 border border-gray-300 text-black cursor-pointer">
                        Mới Nhất
                    </button>
                    <button className="flex justify-center items-center whitespace-nowrap bg-white w-auto py-2 px-3 border border-gray-300 text-black cursor-pointer">
                        Bán Chạy
                    </button>

                    <div className="relative">
                        <div
                            className="bg-white flex items-center gap-1 cursor-pointer border border-gray-300 py-2 px-3 w-50 justify-between"
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                        >
                            <span>{language}</span>
                            <FaChevronDown size={12} className={`transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`} />
                        </div>

                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-50 bg-white text-black shadow-lg rounded-lg z-50">
                                <ul className="py-2">
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                        onClick={() => handleLanguageChange("Giá: Thấp đến Cao")}>
                                        Giá: Thấp đến Cao
                                    </li>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                                        onClick={() => handleLanguageChange("Giá: Cao đến Thấp")}>
                                        Giá: Cao đến Thấp
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex flex-row justify-center items-center'>
                    <p className='mr-1'>1/17</p>
                    <button className="flex justify-center items-center bg-white w-10 mx-auto my-5 py-2 border border-gray-300 text-black shadow-md transition-transform duration-300 hover:scale-120 hover:shadow-lg cursor-pointer">
                        <FaChevronLeft />
                    </button>
                    <button className="flex justify-center items-center bg-white w-10 mx-auto my-5 py-2 border border-gray-300 text-black shadow-md transition-transform duration-300 hover:scale-120 hover:shadow-lg cursor-pointer">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

        </>
    );
}