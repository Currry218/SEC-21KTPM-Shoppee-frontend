import { useState } from "react";

export const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);
    const stock = 1019; // Số lượng sản phẩm có sẵn

    const increase = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="flex flex-row items-center gap-3">
            <p className="text-gray-500">Số lượng:</p>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                <button
                    className="px-4 py-2 text-xl bg-gray-100 hover:bg-gray-200 transition"
                    onClick={decrease}
                >
                    -
                </button>
                <div className="px-5 py-2 text-lg">{quantity}</div>
                <button
                    className="px-4 py-2 text-xl bg-gray-100 hover:bg-gray-200 transition"
                    onClick={increase}
                >
                    +
                </button>
            </div>
            <p className="text-gray-500">{stock} sản phẩm có sẵn</p>
        </div>
    );
};
