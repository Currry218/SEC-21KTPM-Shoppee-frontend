import { SearchProductLayout } from "../layout/search_product";
import { ProductDisplay } from "../components/features/product_display";
import { FaChevronLeft, FaChevronRight, FaInfoCircle } from 'react-icons/fa';

export const SearchProductPage = () => {
    return (
        <SearchProductLayout>
            <div className="flex flex-row mt-5 items-center">
                <FaInfoCircle className="text-orange-500 mr-1" size={22} />
                Kết quả tìm kiếm cho từ khóa
                <div className="text-orange-500 ml-1">'abc'</div>
            </div>
            <ProductDisplay />
            <div className="flex justify-center items-center space-x-2 my-5">
                <button className="p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">
                    <FaChevronLeft />
                </button>

                <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 ${page === 1 ? 'bg-orange-500 text-white cursor-pointer' : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'}`}
                        >
                            {page}
                        </button>
                    ))}
                    <span>...</span>
                </div>

                <button className="p-2 bg-gray-200 hover:bg-gray-300 cursor-pointer">
                    <FaChevronRight />
                </button>
            </div>
        </SearchProductLayout>
    );
};
