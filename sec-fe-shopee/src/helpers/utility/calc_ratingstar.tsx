import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const RatingStars = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating); // Số sao đầy
    const hasHalfStar = rating % 1 !== 0; // Có sao nửa hay không
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Số sao rỗng còn lại

    return (
        <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(fullStars)].map((_, index) => (
                <FaStar key={index} />
            ))}
            {hasHalfStar && <FaStarHalfAlt />}
            {[...Array(emptyStars)].map((_, index) => (
                <FaRegStar key={index} />
            ))}
        </div>
    );
};