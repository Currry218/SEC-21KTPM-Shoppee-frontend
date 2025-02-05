import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Header = () => {
    return (
        <>
            <div className="flex flex-row">
                <div>Kênh người bán</div>
                <div>Tải ứng dụng</div>
                <div className="flex flex-row">
                    <p>Kết nối</p>
                    <FaFacebook size={15} color="blue" />
                    <FaInstagram size={15} color="purple" />
                </div>
            </div>
        </>
    );
}
