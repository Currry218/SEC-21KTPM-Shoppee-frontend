import { SearchProductLayout } from "../layout/search_product";
import { ProductDisplay } from "../components/features/product_display";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const SearchProductPage = () => {
    return (
        <SearchProductLayout>
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
