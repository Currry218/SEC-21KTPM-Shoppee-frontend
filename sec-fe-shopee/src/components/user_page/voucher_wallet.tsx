// Component
// = My voucher
import "../../css/user/vouchers.css";
import { useState } from "react";

export const VoucherWallet = () => {
  const [selectedTab, setSelectedTab] = useState("Tất Cả (535)");
  const [isHistory, setIsHistory] = useState(false);
  const [hasUsedVoucher, setHasUsedVoucher] = useState(true);
  const tabs = [
    "Tất Cả ",
    "Shopee ",
    "Shop ",
    "Nạp thẻ & Dịch vụ ",
    "Scan & Pay ",
    "Dịch vụ Tài chính ",
    "Từ đối tác",
  ];
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <>
      {!isHistory ? (
        <div style={{ display: "contents" }}>
          <div>
            <div />
            <div className="oew2LY">
              <div className="hWUaUt">
                <div className="z0UVJ6">
                  <div className="cyEwuw">Kho Voucher</div>
                  <div className="NYVBxq">
                    <div className="hwenAr">
                      <a
                        href="" // /voucher
                        className="vlSLUa"
                      >
                        Tìm thêm voucher
                      </a>
                    </div>
                    <div className="hwenAr">
                      <a
                        className="vlSLUa cursor-pointer"
                        onClick={() => setIsHistory(true)}
                      >
                        Xem lịch sử voucher
                      </a>
                    </div>
                    <div className="hwenAr">
                      <a
                        className="vlSLUa rUUQkr"
                        href="https://help.shopee.vn/vn/s/article/T%E1%BA%A1i-sao-t%C3%B4i-kh%C3%B4ng-d%C3%B9ng-%C4%91%C6%B0%E1%BB%A3c-m%C3%A3-gi%E1%BA%A3m-gi%C3%A1-1542942386648"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tìm hiểu
                      </a>
                    </div>
                  </div>
                </div>
                <div className="cgZ5D3">
                  <div className="xA7wpu">Mã Voucher</div>
                  <div className="input-with-validator-wrapper">
                    <div className="input-with-validator">
                      <input
                        type="text"
                        placeholder="Nhập mã voucher tại đây"
                        maxLength={255}
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <button disabled className="OWDDBc">
                    Lưu
                  </button>
                </div>
                <div className="yTtyMi">
                  <div className="daMk0k">
                    <nav
                      className="stardust-tabs-header-wrapper"
                      style={{ height: 46, background: "rgb(255, 255, 255)" }}
                    >
                      <ul className="stardust-tabs-header">
                        {tabs.map((tab) => (
                          <li
                            key={tab}
                            className={`stardust-tabs-header__tab ${
                              selectedTab === tab
                                ? "stardust-tabs-header__tabactive"
                                : ""
                            }`}
                            onClick={() => handleTabClick(tab)}
                          >
                            <div className="HeNAOg">
                              <div className="UVOQYJ">{tab}</div>
                              <hr className="yDaM4g" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="SGDYm5">
                  <div className="Qa6lJ0">
                    <div className="kxI6jR">
                      <div className="x1V6zh">
                        <div className="FcXANd oYXxYR MbcRKM hhMi2w">
                          <div className="q2pjG9">
                            <div className="P8Mfoo">
                              <div className="PcmVqR" />
                            </div>
                            <div className="hPIn_I" />
                            <div className="MShxuW" />
                            <div className="EAMMai" role="presentation">
                              <div
                                className="QqwAWp xhmy_j"
                                role="presentation"
                              >
                                <div className="vm3TF0" data-target="shop_icon">
                                  <img
                                    className="e52C78 nh7RxM"
                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                    alt="Logo"
                                  />
                                </div>
                                <div
                                  className="GZ_QY_ RGUZev wcZL9e"
                                  style={{ textTransform: "initial" }}
                                >
                                  SHOPEE
                                </div>
                              </div>
                              <div className="ZvtffU" role="presentation">
                                <div className="XF46UZ">
                                  <span aria-label="voucher #" />
                                </div>
                                <div className="xu9UIY">
                                  <div className="UsdMJE ZbLqtU">
                                    Giảm 15% Giảm tối đa ₫15k
                                  </div>
                                </div>
                                <div className="FI_cTo liTyw2">
                                  Đơn Tối Thiểu ₫99k
                                </div>
                                <div className="VWeV_W" />
                                <div className="MAHVi3">
                                  <div className="QxJU53">
                                    <div className="R3vm95 lVIsCZ">
                                      <span className="eT2hlo">
                                        HSD: 14.02.2025
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="_hsjbR n8iYL8"
                                    role="navigation"
                                  >
                                    <a href="/voucher/details?evcode=U0dQVkFMRU5USU5F&from_source=voucher-wallet&promotionId=1088922806030340&signature=02a96ca26c603fe79d774240c66fb62e7529a4f63961eeb03070bd77f8a940db">
                                      <span>Điều Kiện</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="UBy_Of" role="presentation">
                                <div className="V8mIhB">
                                  <div className="vDRPuk">
                                    <div
                                      className="yJxAds A0Wyw3 C3vgCO"
                                      role="button"
                                      aria-label="Dùng ngay"
                                      tabIndex={0}
                                      style={{
                                        color: "rgb(238, 77, 45)",
                                        background: "white",
                                        border: "1px solid rgb(238, 77, 45)",
                                      }}
                                    >
                                      Dùng ngay
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="kxI6jR">
                      <div className="x1V6zh">
                        <div className="FcXANd oYXxYR MbcRKM hhMi2w">
                          <div className="q2pjG9">
                            <div className="P8Mfoo">
                              <div className="PcmVqR" />
                            </div>
                            <div className="hPIn_I" />
                            <div className="MShxuW" />
                            <div className="EAMMai" role="presentation">
                              <div
                                className="QqwAWp xhmy_j"
                                role="presentation"
                              >
                                <div className="vm3TF0" data-target="shop_icon">
                                  <img
                                    className="e52C78 nh7RxM"
                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                    alt="Logo"
                                  />
                                </div>
                                <div
                                  className="GZ_QY_ RGUZev wcZL9e"
                                  style={{ textTransform: "initial" }}
                                >
                                  SHOPEE
                                </div>
                              </div>
                              <div className="ZvtffU" role="presentation">
                                <div className="XF46UZ">
                                  <span aria-label="voucher #" />
                                </div>
                                <div className="xu9UIY">
                                  <div className="UsdMJE ZbLqtU">
                                    Giảm 10% Giảm tối đa ₫50k
                                  </div>
                                </div>
                                <div className="FI_cTo liTyw2">
                                  Đơn Tối Thiểu ₫250k
                                </div>
                                <div className="VWeV_W" />
                                <div className="MAHVi3">
                                  <div className="WQXeTy SaXamW" tabIndex={0}>
                                    <svg
                                      enableBackground="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      role="img"
                                      className="stardust-icon stardust-icon-response-time O8bR7H"
                                    >
                                      <path
                                        d="m7.2 3.5v4.3h3.3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={10}
                                      />
                                      <circle
                                        cx="7.5"
                                        cy="7.5"
                                        fill="none"
                                        r="6.5"
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                    Có hiệu lực sau: 1 giờ
                                  </div>
                                  <div
                                    className="_hsjbR n8iYL8"
                                    role="navigation"
                                  >
                                    <a href="/voucher/details?evcode=U0dQMkI1MEtB&from_source=voucher-wallet&promotionId=1088929080709120&signature=2d3337b77b6adc27c5a4e0168e54cf8326b1318a1de80773aadeeb276c8ebea8">
                                      <span>Điều Kiện</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="UBy_Of" role="presentation">
                                <div className="V8mIhB">
                                  <div className="vDRPuk">
                                    <div
                                      className="yJxAds A0Wyw3 n05hF2 C3vgCO"
                                      role="button"
                                      aria-label="Dùng sau"
                                      tabIndex={0}
                                      style={{
                                        color: "rgb(238, 77, 45)",
                                        background: "white",
                                        border: "1px solid rgb(238, 77, 45)",
                                      }}
                                    >
                                      Dùng sau
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="kxI6jR">
                      <div className="x1V6zh">
                        <div className="FcXANd oYXxYR MbcRKM hhMi2w">
                          <div className="q2pjG9">
                            <div className="P8Mfoo">
                              <div className="PcmVqR" />
                            </div>
                            <div className="hPIn_I" />
                            <div className="MShxuW" />
                            <div className="EAMMai" role="presentation">
                              <div
                                className="QqwAWp xhmy_j"
                                role="presentation"
                              >
                                <div className="vm3TF0" data-target="shop_icon">
                                  <img
                                    className="e52C78 nh7RxM"
                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                    alt="Logo"
                                  />
                                </div>
                                <div
                                  className="GZ_QY_ RGUZev wcZL9e"
                                  style={{ textTransform: "initial" }}
                                >
                                  SHOPEE
                                </div>
                              </div>
                              <div className="ZvtffU" role="presentation">
                                <div className="XF46UZ">
                                  <span aria-label="voucher #" />
                                </div>
                                <div className="xu9UIY">
                                  <div className="UsdMJE ZbLqtU">
                                    Giảm 10% Giảm tối đa ₫35k
                                  </div>
                                </div>
                                <div className="FI_cTo liTyw2">
                                  Đơn Tối Thiểu ₫150k
                                </div>
                                <div className="VWeV_W" />
                                <div className="MAHVi3">
                                  <div className="WQXeTy SaXamW" tabIndex={0}>
                                    <svg
                                      enableBackground="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      role="img"
                                      className="stardust-icon stardust-icon-response-time O8bR7H"
                                    >
                                      <path
                                        d="m7.2 3.5v4.3h3.3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={10}
                                      />
                                      <circle
                                        cx="7.5"
                                        cy="7.5"
                                        fill="none"
                                        r="6.5"
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                    Có hiệu lực sau: 1 giờ
                                  </div>
                                  <div
                                    className="_hsjbR n8iYL8"
                                    role="navigation"
                                  >
                                    <a href="/voucher/details?evcode=U0dQMkIzNUtB&from_source=voucher-wallet&promotionId=1088929071665152&signature=407feef989e7e685b2ea6b947f7046b19520997d675fecab78146262f5565e16">
                                      <span>Điều Kiện</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="UBy_Of" role="presentation">
                                <div className="V8mIhB">
                                  <div className="vDRPuk">
                                    <div
                                      className="yJxAds A0Wyw3 n05hF2 C3vgCO"
                                      role="button"
                                      aria-label="Dùng sau"
                                      tabIndex={0}
                                      style={{
                                        color: "rgb(238, 77, 45)",
                                        background: "white",
                                        border: "1px solid rgb(238, 77, 45)",
                                      }}
                                    >
                                      Dùng sau
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="kxI6jR">
                      <div className="x1V6zh">
                        <div className="FcXANd oYXxYR MbcRKM hhMi2w">
                          <div className="q2pjG9">
                            <div className="P8Mfoo">
                              <div className="PcmVqR" />
                            </div>
                            <div className="hPIn_I" />
                            <div className="MShxuW" />
                            <div className="EAMMai" role="presentation">
                              <div
                                className="QqwAWp xhmy_j"
                                role="presentation"
                              >
                                <div className="vm3TF0" data-target="shop_icon">
                                  <img
                                    className="e52C78 nh7RxM"
                                    src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                    alt="Logo"
                                  />
                                </div>
                                <div
                                  className="GZ_QY_ RGUZev wcZL9e"
                                  style={{ textTransform: "initial" }}
                                >
                                  SHOPEE
                                </div>
                              </div>
                              <div className="ZvtffU" role="presentation">
                                <div className="XF46UZ">
                                  <span aria-label="voucher #" />
                                </div>
                                <div className="xu9UIY">
                                  <div className="UsdMJE ZbLqtU">
                                    Giảm 10% Giảm tối đa ₫25k
                                  </div>
                                </div>
                                <div className="FI_cTo liTyw2">
                                  Đơn Tối Thiểu ₫99k
                                </div>
                                <div className="VWeV_W" />
                                <div className="MAHVi3">
                                  <div className="WQXeTy SaXamW" tabIndex={0}>
                                    <svg
                                      enableBackground="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      role="img"
                                      className="stardust-icon stardust-icon-response-time O8bR7H"
                                    >
                                      <path
                                        d="m7.2 3.5v4.3h3.3"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit={10}
                                      />
                                      <circle
                                        cx="7.5"
                                        cy="7.5"
                                        fill="none"
                                        r="6.5"
                                        strokeMiterlimit={10}
                                      />
                                    </svg>
                                    Có hiệu lực sau: 1 giờ
                                  </div>
                                  <div
                                    className="_hsjbR n8iYL8"
                                    role="navigation"
                                  >
                                    <a href="/voucher/details?evcode=U0dQMkIyNUtB&from_source=voucher-wallet&promotionId=1088929072320512&signature=52867fbbe4b6062359e9426c7a2633a627dd79ea9a0cba023802a204b04ed95c">
                                      <span>Điều Kiện</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="UBy_Of" role="presentation">
                                <div className="V8mIhB">
                                  <div className="vDRPuk">
                                    <div
                                      className="yJxAds A0Wyw3 n05hF2 C3vgCO"
                                      role="button"
                                      aria-label="Dùng sau"
                                      tabIndex={0}
                                      style={{
                                        color: "rgb(238, 77, 45)",
                                        background: "white",
                                        border: "1px solid rgb(238, 77, 45)",
                                      }}
                                    >
                                      Dùng sau
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="MkV187">
              <div className="v7aXZx">
                <div className="EXTxSt" style={{ display: "none" }}>
                  {/* <shopee-banner-closable-stateful
              spacekey="PC-VN-VOUCHER_FLOATING_MY_VOUCHER"
              baseurl="https://shopee.vn"
            /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // HISTORY
        <div style={{ display: "contents" }}>
          <div className="wj9Y7C">
            <div>
              <div className="gkXu2L">
                <div className="gwPQMX">Lịch sử voucher</div>
              </div>
              <div className="gA1poJ">
                <nav
                  className="stardust-tabs-header-wrapper"
                  style={{ height: 46, background: "rgb(255, 255, 255)" }}
                >
                  <ul className="stardust-tabs-header">
                    <li className="stardust-tabs-header__tab stardust-tabs-header__tab--active">
                      <div>Hết hiệu lực</div>
                    </li>
                    <li className="stardust-tabs-header__tab">
                      <div>Đã sử dụng</div>
                    </li>
                  </ul>
                  <i
                    className="stardust-tabs-header__tab-indicator"
                    style={{
                      display: "block",
                      width: 174,
                      transform: "translateX(0px)",
                    }}
                  />
                </nav>
              </div>
              <div className="Jq1PZK">
              {hasUsedVoucher ? (
                <div className="Qa6lJ0">
                  <div className="kxI6jR">
                    <div className="x1V6zh">
                      <div className="FcXANd oYXxYR MbcRKM hhMi2w oDYaPK">
                        <div className="q2pjG9">
                          <div className="P8Mfoo">
                            <div className="PcmVqR" />
                          </div>
                          <div className="hPIn_I" />
                          <div className="MShxuW" />
                          <div className="EAMMai" role="presentation">
                            <div className="QqwAWp xhmy_j" role="presentation">
                              <div className="vm3TF0" data-target="shop_icon">
                                <img
                                  className="e52C78 nh7RxM _vFE6y"
                                  src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                  alt="Logo"
                                />
                              </div>
                              <div
                                className="GZ_QY_ RGUZev wcZL9e"
                                style={{ textTransform: "initial" }}
                              >
                                SHOPEE
                              </div>
                            </div>
                            <div className="IEGk0c ZvtffU" role="presentation">
                              <div className="XF46UZ">
                                <span aria-label="" />
                                <span aria-label="Hết lượt sử dụng" />
                              </div>
                              <div className="xu9UIY">
                                <div className="UsdMJE ZbLqtU">
                                  Giảm 12% Giảm tối đa ₫200k
                                </div>
                              </div>
                              <div className="FI_cTo liTyw2">
                                Đơn Tối Thiểu ₫1tr
                              </div>
                              <div className="VWeV_W" />
                              <div className="MAHVi3">
                                <div className="S3RmEH" tabIndex={0}>
                                  HSD: 12.02.2025
                                </div>
                                <div
                                  className="_hsjbR n8iYL8"
                                  role="navigation"
                                >
                                  <a href="/voucher/details?evcode=MTIyR0lBTTIwMEs%3D&from_source=voucher-wallet&promotionId=1088199473139712&signature=0194657bb238b3b7cd11affbbaa671b19296019b491a5e19f3ea80a5d6f90f60">
                                    <span>Điều Kiện</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="My0PlS cZn6M6 SCwXep">
                              <div className="JDVAKL">Hết lượt sử dụng</div>
                            </div>
                            <div className="cnFM7k owyP4s">
                              <svg
                                width={6}
                                height={6}
                                viewBox="0 0 6 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="izn8vl oHnnYi"
                              >
                                <path
                                  d="M1.50391 0.716797L2.50977 2.46973L3.53516 0.716797H4.8291L3.22754 3.30957L4.89258 6H3.59863L2.52441 4.17383L1.4502 6H0.151367L1.81152 3.30957L0.214844 0.716797H1.50391Z"
                                  fill="#EE4D2D"
                                />
                              </svg>
                              <div>4</div>
                            </div>
                          </div>
                        </div>
                        <div className="Xjagg4">
                          <div
                            className="cIkDPv"
                            style={{
                              borderRight:
                                "0.0625rem dashed rgb(232, 232, 232)",
                              background: "rgb(238, 77, 45)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kxI6jR">
                    <div className="x1V6zh">
                      <div className="FcXANd oYXxYR MbcRKM hhMi2w oDYaPK">
                        <div className="q2pjG9">
                          <div className="P8Mfoo">
                            <div className="PcmVqR" />
                          </div>
                          <div className="hPIn_I" />
                          <div className="MShxuW" />
                          <div className="EAMMai" role="presentation">
                            <div className="QqwAWp xhmy_j" role="presentation">
                              <div className="vm3TF0" data-target="shop_icon">
                                <img
                                  className="e52C78 nh7RxM _vFE6y"
                                  src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                  alt="Logo"
                                />
                              </div>
                              <div
                                className="GZ_QY_ RGUZev wcZL9e"
                                style={{ textTransform: "initial" }}
                              >
                                SHOPEE
                              </div>
                            </div>
                            <div className="IEGk0c ZvtffU" role="presentation">
                              <div className="XF46UZ">
                                <span aria-label="" />
                                <span aria-label="Hết lượt sử dụng" />
                              </div>
                              <div className="xu9UIY">
                                <div className="UsdMJE ZbLqtU">
                                  Giảm 10% Giảm tối đa ₫50k
                                </div>
                              </div>
                              <div className="FI_cTo liTyw2">
                                Đơn Tối Thiểu ₫250k
                              </div>
                              <div className="VWeV_W" />
                              <div className="MAHVi3">
                                <div className="S3RmEH" tabIndex={0}>
                                  HSD: 12.02.2025
                                </div>
                                <div
                                  className="_hsjbR n8iYL8"
                                  role="navigation"
                                >
                                  <a href="/voucher/details?evcode=MTIyR0lBTTUwSw%3D%3D&from_source=voucher-wallet&promotionId=1088199464882176&signature=7efbc84d0ba85c013d3cd93131cc6b71369fcf563d76014407aa941af528d998">
                                    <span>Điều Kiện</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="My0PlS cZn6M6 SCwXep">
                              <div className="JDVAKL">Hết lượt sử dụng</div>
                            </div>
                            <div className="cnFM7k owyP4s">
                              <svg
                                width={6}
                                height={6}
                                viewBox="0 0 6 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="izn8vl oHnnYi"
                              >
                                <path
                                  d="M1.50391 0.716797L2.50977 2.46973L3.53516 0.716797H4.8291L3.22754 3.30957L4.89258 6H3.59863L2.52441 4.17383L1.4502 6H0.151367L1.81152 3.30957L0.214844 0.716797H1.50391Z"
                                  fill="#EE4D2D"
                                />
                              </svg>
                              <div>4</div>
                            </div>
                          </div>
                        </div>
                        <div className="Xjagg4">
                          <div
                            className="cIkDPv"
                            style={{
                              borderRight:
                                "0.0625rem dashed rgb(232, 232, 232)",
                              background: "rgb(238, 77, 45)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kxI6jR">
                    <div className="x1V6zh">
                      <div className="FcXANd oYXxYR MbcRKM hhMi2w oDYaPK">
                        <div className="q2pjG9">
                          <div className="P8Mfoo">
                            <div className="PcmVqR" />
                          </div>
                          <div className="hPIn_I" />
                          <div className="MShxuW" />
                          <div className="EAMMai" role="presentation">
                            <div className="QqwAWp xhmy_j" role="presentation">
                              <div className="vm3TF0" data-target="shop_icon">
                                <img
                                  className="e52C78 nh7RxM _vFE6y"
                                  src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                  alt="Logo"
                                />
                              </div>
                              <div
                                className="GZ_QY_ RGUZev wcZL9e"
                                style={{ textTransform: "initial" }}
                              >
                                Khỏe &amp; Đẹp
                              </div>
                            </div>
                            <div className="IEGk0c ZvtffU" role="presentation">
                              <div className="XF46UZ">
                                <span aria-label="voucher #" />
                                <span aria-label="Đã Hết Hạn" />
                              </div>
                              <div className="xu9UIY">
                                <div className="UsdMJE ZbLqtU">
                                  Giảm 12% Giảm tối đa ₫150k
                                </div>
                              </div>
                              <div className="FI_cTo liTyw2">
                                Đơn Tối Thiểu ₫500k
                              </div>
                              <div className="VWeV_W" />
                              <div className="MAHVi3">
                                <div className="S3RmEH" tabIndex={0}>
                                  HSD: 11.02.2025
                                </div>
                                <div
                                  className="_hsjbR n8iYL8"
                                  role="navigation"
                                >
                                  <a href="/voucher/details?evcode=MTEwMkhCMTUw&from_source=voucher-wallet&promotionId=1088092182188032&signature=635f0bbb62f4614944089da51455b4dde86f86163e93217cb8c0c39c7d964d55">
                                    <span>Điều Kiện</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="My0PlS cZn6M6 SCwXep">
                              <div className="JDVAKL">Đã Hết Hạn</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="kxI6jR">
                    <div className="x1V6zh">
                      <div className="FcXANd oYXxYR MbcRKM hhMi2w oDYaPK">
                        <div className="q2pjG9">
                          <div className="P8Mfoo">
                            <div className="PcmVqR" />
                          </div>
                          <div className="hPIn_I" />
                          <div className="MShxuW" />
                          <div className="EAMMai" role="presentation">
                            <div className="QqwAWp xhmy_j" role="presentation">
                              <div className="vm3TF0" data-target="shop_icon">
                                <img
                                  className="e52C78 nh7RxM _vFE6y"
                                  src="https://down-vn.img.susercontent.com/file/e6a3b7beffa95ca492926978d5235f79"
                                  alt="Logo"
                                />
                              </div>
                              <div
                                className="GZ_QY_ RGUZev wcZL9e"
                                style={{ textTransform: "initial" }}
                              >
                                Khỏe &amp; Đẹp
                              </div>
                            </div>
                            <div className="IEGk0c ZvtffU" role="presentation">
                              <div className="XF46UZ">
                                <span aria-label="voucher #" />
                                <span aria-label="Đã Hết Hạn" />
                              </div>
                              <div className="xu9UIY">
                                <div className="UsdMJE ZbLqtU">
                                  Giảm 12% Giảm tối đa ₫70k
                                </div>
                              </div>
                              <div className="FI_cTo liTyw2">
                                Đơn Tối Thiểu ₫200k
                              </div>
                              <div className="VWeV_W" />
                              <div className="MAHVi3">
                                <div className="S3RmEH" tabIndex={0}>
                                  HSD: 11.02.2025
                                </div>
                                <div
                                  className="_hsjbR n8iYL8"
                                  role="navigation"
                                >
                                  <a href="/voucher/details?evcode=MTEwMkhCNzA%3D&from_source=voucher-wallet&promotionId=1088092182974464&signature=df983d694748016280246fef3d831b058d0cdb87d85a61d1ed0c7e9a447a7415">
                                    <span>Điều Kiện</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="My0PlS cZn6M6 SCwXep">
                              <div className="JDVAKL">Đã Hết Hạn</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="gdae0Q">
                  <div className="mVa4WB">
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/voucher/0e8c07c8449d8d509f72.png"
                      className="rHTvPx"
                    />
                    <div className="uUJzqx">
                      <span>Không tìm thấy lịch sử voucher</span>
                    </div>
                    <div className="IImpDC">
                      <span>Không có voucher nào trong mục này</span>
                    </div>
                  </div>
                </div>
              )}
                <div>
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
