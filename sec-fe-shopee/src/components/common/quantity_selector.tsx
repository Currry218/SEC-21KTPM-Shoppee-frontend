import { useState } from "react";

interface QuantitySelectorProps {
    size?: "small" | "medium" | "large"; // Thêm prop để xác định kích thước
}

export const QuantitySelector = ({ size = "medium" }: QuantitySelectorProps) => {
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity < 99) setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    // Các kích thước tuỳ chỉnh
    const sizeClasses = {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-lg",
        large: "px-6 py-3 text-xl",
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button
                    className={`bg-gray-100 hover:bg-gray-200 transition ${sizeClasses[size]}`}
                    onClick={decrease}
                >
                    -
                </button>
                <div className={`text-center ${sizeClasses[size]}`}>{quantity}</div>
                <button
                    className={`bg-gray-100 hover:bg-gray-200 transition ${sizeClasses[size]}`}
                    onClick={increase}
                >
                    +
                </button>
            </div>
        </div>
    );
};
