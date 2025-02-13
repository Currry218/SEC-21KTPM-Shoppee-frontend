
import "../css/userPage.css";
// import "../css/pf.css";
import React, { useState, useEffect } from "react";

import { HeaderProduct } from "../components/header_product.tsx";
import {Purchase} from "../components/user_page/purchase.tsx";
import {ShopeeCoin} from "../components/user_page/shopee_coin.tsx";
import {VoucherWallet} from "../components/user_page/voucher_wallet.tsx";

import {WalletUpdate} from "../components/user_page/notifications/wallet_updates.tsx";
import {ShopeeUpdate} from "../components/user_page/notifications/shopee_updates.tsx";
import {OrderUpdate} from "../components/user_page/notifications/order_updates.tsx";
import {Promotions} from "../components/user_page/notifications/promotions.tsx";

interface LinkItem {
  text: string;
  href?: string; // Optional for external links
  component?: React.ReactNode; // Optional for component switching
}

const DropdownItem = ({ title, imageSrc, links, setActiveComponent }: { 
  title: string; 
  imageSrc: string; 
  links: LinkItem[];
  setActiveComponent: (component: React.ReactNode) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`stardust-dropdown ${isOpen ? "open" : ""}`}>
      {/* Dropdown Header */}
      <div className="stardust-dropdown__item-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="jHbobZ">
          <div className="U7dHrp">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="mY8KSl">
            <span className="fnmbfn">{title}</span>
          </div>
        </div>
      </div>

      {/* Dropdown Body */}
      {isOpen && (
        <div className="stardust-dropdown__item-body">
          <div className="hGOWVP">
            {links.map((link, index) => (
              <div
                key={index}
                className="HVZpoT cursor-pointer"
                onClick={() => {
                  if (link.href) {
                    window.location.href = link.href; // Navigate to external link
                  } else if (link.component) {
                    console.log("COMPONENT");
                    setActiveComponent(link.component); // Switch component
                  }
                }}
              >
                <span className="PcLlJr">{link.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState<React.ReactNode>(<VoucherWallet/>);
  return (
    <>
      <HeaderProduct />
      <div className="kr8eST">
        <div className="_9auf1">
          <div className="container BtZOqO">
            <div className="epUsgf">
              <div className="u6SDuY">
                <a className="w37kB7" href="/user/account/user">
                  <div className="shopee-avatar">
                    <div className="shopee-avatar__placeholder">
                      <svg
                        enableBackground="new 0 0 15 15"
                        viewBox="0 0 15 15"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-headshot"
                      >
                        <g>
                          <circle
                            cx="7.5"
                            cy="4.5"
                            fill="none"
                            r="3.8"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                          />
                        </g>
                      </svg>
                    </div>
                    <img
                      className="shopee-avatar__img"
                      src="../assets/avatar_default.png"
                    />
                  </div>
                </a>
                <div className="vDMlrj">
                  <div className="HtUK6o">USERNAME</div>
                  <div>
                    <a className="Kytn1s" href="/user/account/user">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginRight: 4 }}
                      >
                        <path
                          d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"
                          fill="#9B9B9B"
                          fillRule="evenodd"
                        />
                      </svg>
                      Sửa hồ sơ
                    </a>
                  </div>
                </div>
              </div>
              <div className="WDmP96">
            <DropdownItem
              title="Thông báo"
              imageSrc="https://down-vn.img.susercontent.com/file/e10a43b53ec8605f4829da5618e0717c"
              links={[
                { text: "Cập nhật đơn hàng", component: <OrderUpdate/> },
                { text: "Khuyến mãi", component: <Promotions/>},
                { text: "Cập nhật Ví", component: <WalletUpdate/>},
                { text: "Cập nhật Shopee", component: <ShopeeUpdate/> }
              ]}
              setActiveComponent={setActiveComponent}
              
            />
            
            <DropdownItem
              title="Tài khoản của tôi"
              imageSrc="https://down-vn.img.susercontent.com/file/ba61750a46794d8847c3f463c5e71cc4"
              links={[
                { text: "Hồ sơ" },
                { text: "Ngân hàng" },
                { text: "Địa chỉ" },
                { text: "Đổi mật khẩu" },
                { text: "Cài đặt thông báo" },
                { text: "Những thiết lập riêng tư" }
              ]}
              setActiveComponent={setActiveComponent}
            />


            <div className="stardust-dropdown"  onClick={() => setActiveComponent(<Purchase/>)}>
              <div className="stardust-dropdown__item-header">
                <div className="jHbobZ">
                  <div className="U7dHrp">
                    <img src="https://down-vn.img.susercontent.com/file/f0049e9df4e536bc3e7f140d071e9078" alt="Đơn Mua" />
                  </div>
                  <div className="mY8KSl">
                    <span className="fnmbfn">Đơn Mua</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="stardust-dropdown"   onClick={() => setActiveComponent(<VoucherWallet />)}>
              <div className="stardust-dropdown__item-header" >
                <div className="jHbobZ">
                  <div className="U7dHrp">
                    <img src="https://down-vn.img.susercontent.com/file/84feaa363ce325071c0a66d3c9a88748" alt="Kho Voucher" />
                  </div>
                  <div className="mY8KSl">
                    <span className="fnmbfn">Kho Voucher</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="stardust-dropdown"  onClick={() => setActiveComponent(<ShopeeCoin />)}>
              <div className="stardust-dropdown__item-header">
                <div className="jHbobZ">
                  <div className="U7dHrp">
                    <img src="https://down-vn.img.susercontent.com/file/a0ef4bd8e16e481b4253bd0eb563f784" alt="Shopee Xu" />
                  </div>
                  <div className="mY8KSl">
                    <span className="fnmbfn">Shopee Xu</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
            </div>
            <div className="fkIi86">
                  {activeComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}