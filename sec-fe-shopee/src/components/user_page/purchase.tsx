import "../../css/user/my_purchase.css";
import "../../css/user/order_details.css";
import React, { useState, useEffect } from "react";
export const Purchase = () => {
  const [selectedTab, setSelectedTab] = useState("Tất cả");
  const [hasPurchase, setHasPurchase] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  // List of tabs
  const tabs = [
    "Tất cả",
    "Chờ thanh toán",
    "Vận chuyển",
    "Chờ giao hàng",
    "Hoàn thành",
    "Đã hủy",
    "Trả hàng/Hoàn tiền",
  ];

  // Function to handle tab click
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
    // console.log(`Selected tab: ${tabName}`);
  };
  return (
    <>
      {!showDetails ? (
        <div style={{ display: "contents" }}>
          <title />
          <h1 className="a11y-hidden" />
          <div className="ashFMQ">
            <div />
            <section className="QmO3Bu" role="tablist">
              <h2 className="a11y-hidden"></h2>
              {tabs.map((tab) => (
                <div
                  key={tab}
                  className={`KI5har ${selectedTab === tab ? "mRVNLm" : ""}`}
                  role="tab"
                  aria-selected={selectedTab === tab}
                  onClick={() => handleTabClick(tab)}
                >
                  <span className="NoH9rC">{tab}</span>
                </div>
              ))}
            </section>
            <section>
              <div className="Gv8cvd">
                <svg width="19px" height="19px" viewBox="0 0 19 19">
                  <g id="Search-New" strokeWidth={1} fill="none" fillRule="evenodd">
                    <g
                      id="my-purchase-copy-27"
                      transform="translate(-399.000000, -221.000000)"
                      strokeWidth={2}
                    >
                      <g
                        id="Group-32"
                        transform="translate(400.000000, 222.000000)"
                      >
                        <circle id="Oval-27" cx={7} cy={7} r={7} />
                        <path
                          d="M12,12 L16.9799555,16.919354"
                          id="Path-184"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <input
                  aria-label=""
                  role="search"
                  autoComplete="off"
                  placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
                  defaultValue=""
                />
              </div>
            </section>
            <main
              aria-role="tabpanel"
              aria-labelledby="olp_tab_id-0.08515605628440892"
              id="olp_panel_id-0.08515605628440892"
            >
              <section>
                {!hasPurchase ? (
                  <div className="toZ7En">
                    <div className="VJ0a8O">
                      <div className="E_bH9K" />
                      <h2 className="JDtdsv">Chưa có đơn hàng</h2>
                    </div>
                  </div>
                ) : (
                  <div className="YL_VlX">
                    <div>
                      <div className="J632se">
                        <section>
                          <h3 className="a11y-hidden" />
                          <div className="P2JMvg">
                            <div className="RBPP9y">
                              <div className="Koi0Pw">
                                <svg width={70} height={16} fill="none">
                                  <path
                                    fill="#EE4D2D"
                                    fillRule="evenodd"
                                    d="M0 2C0 .9.9 0 2 0h66a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                                    clipRule="evenodd"
                                  />
                                  <g clipPath="url(#clip0)">
                                    <path
                                      fill="#fff"
                                      d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                                    />
                                  </g>
                                  <g clipPath="url(#clip1)">
                                    <path
                                      fill="#fff"
                                      d="M63 8.2h2.2v1.6H63V12h-1.6V9.8h-2.2V8.2h2.2V6H63v2.3z"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0">
                                      <path
                                        fill="#fff"
                                        d="M0 0h55v16H0z"
                                        transform="translate(4)"
                                      />
                                    </clipPath>
                                    <clipPath id="clip1">
                                      <path
                                        fill="#fff"
                                        d="M0 0h7v16H0z"
                                        transform="translate(59)"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className="UDaMW3" tabIndex={0}>
                                Tên Shop
                              </div>
                              <div className="B2SOGC">
                                <button className="stardust-button stardust-button--primary">
                                  <svg
                                    viewBox="0 0 17 17"
                                    className="shopee-svg-icon icon-btn-chat"
                                    style={{ fill: "white" }}
                                  >
                                    <g fillRule="evenodd">
                                      <path
                                        d="M13.89 0C14.504 0 15 .512 15 1.144l-.003.088-.159 2.117.162.001c.79 0 1.46.558 1.618 1.346l.024.15.008.154v9.932a1.15 1.15 0 01-1.779.963l-.107-.08-1.882-1.567-7.962.002a1.653 1.653 0 01-1.587-1.21l-.036-.148-.021-.155-.071-.836h-.01L.91 13.868a.547.547 0 01-.26.124L.556 14a.56.56 0 01-.546-.47L0 13.429V1.144C0 .512.497 0 1.11 0h12.78zM15 4.65l-.259-.001-.461 6.197c-.045.596-.527 1.057-1.106 1.057L4.509 11.9l.058.69.01.08a.35.35 0 00.273.272l.07.007 8.434-.001 1.995 1.662.002-9.574-.003-.079a.35.35 0 00-.274-.3L15 4.65zM13.688 1.3H1.3v10.516l1.413-1.214h10.281l.694-9.302zM4.234 5.234a.8.8 0 011.042-.077l.187.164c.141.111.327.208.552.286.382.131.795.193 1.185.193s.803-.062 1.185-.193c.225-.078.41-.175.552-.286l.187-.164a.8.8 0 011.042 1.209c-.33.33-.753.579-1.26.753A5.211 5.211 0 017.2 7.4a5.211 5.211 0 01-1.706-.28c-.507-.175-.93-.424-1.26-.754a.8.8 0 010-1.132z"
                                        fillRule="nonzero"
                                      />
                                    </g>
                                  </svg>
                                  <span>chat</span>
                                </button>
                              </div>
                              <a
                                className="Mr26O7  cursor-pointer"
                                // href=""
                              >
                                <div className="stardust-button">
                                  <svg
                                    enableBackground="new 0 0 15 15"
                                    viewBox="0 0 15 15"
                                    x={0}
                                    y={0}
                                    className="shopee-svg-icon icon-btn-shop"
                                  >
                                    <path d="m15 4.8c-.1-1-.8-2-1.6-2.9-.4-.3-.7-.5-1-.8-.1-.1-.7-.5-.7-.5h-8.5s-1.4 1.4-1.6 1.6c-.4.4-.8 1-1.1 1.4-.1.4-.4.8-.4 1.1-.3 1.4 0 2.3.6 3.3l.3.3v3.5c0 1.5 1.1 2.6 2.6 2.6h8c1.5 0 2.5-1.1 2.5-2.6v-3.7c.1-.1.1-.3.3-.3.4-.8.7-1.7.6-3zm-3 7c0 .4-.1.5-.4.5h-8c-.3 0-.5-.1-.5-.5v-3.1c.3 0 .5-.1.8-.4.1 0 .3-.1.3-.1.4.4 1 .7 1.5.7.7 0 1.2-.1 1.6-.5.5.3 1.1.4 1.6.4.7 0 1.2-.3 1.8-.7.1.1.3.3.5.4.3.1.5.3.8.3zm.5-5.2c0 .1-.4.7-.3.5l-.1.1c-.1 0-.3 0-.4-.1s-.3-.3-.5-.5l-.5-1.1-.5 1.1c-.4.4-.8.7-1.4.7-.5 0-.7 0-1-.5l-.6-1.1-.5 1.1c-.3.5-.6.6-1.1.6-.3 0-.6-.2-.9-.8l-.5-1-.7 1c-.1.3-.3.4-.4.6-.1 0-.3.1-.3.1s-.4-.4-.4-.5c-.4-.5-.5-.9-.4-1.5 0-.1.1-.4.3-.5.3-.5.4-.8.8-1.2.7-.8.8-1 1-1h7s .3.1.8.7c.5.5 1.1 1.2 1.1 1.8-.1.7-.2 1.2-.5 1.5z" />
                                  </svg>
                                  <span>Xem Shop</span>
                                </div>
                              </a>
                            </div>
                            <div className="jgIyoX">
                              <div className="LY5oll">
                                <a
                                  className="lXbYsi  cursor-pointer"
                                  // href=""
                                  onClick={() => setShowDetails(true)}
                                >
                                  <span className="O2yAdQ">
                                    <svg
                                      enableBackground="new 0 0 15 15"
                                      viewBox="0 0 15 15"
                                      x={0}
                                      y={0}
                                      className="shopee-svg-icon icon-free-shipping-line"
                                    >
                                      <g>
                                        <line
                                          fill="none"
                                          strokeLinejoin="round"
                                          strokeMiterlimit={10}
                                          x1="8.6"
                                          x2="4.2"
                                          y1="9.8"
                                          y2="9.8"
                                        />
                                        <circle
                                          cx={3}
                                          cy="11.2"
                                          fill="none"
                                          r={2}
                                          strokeMiterlimit={10}
                                        />
                                        <circle
                                          cx={10}
                                          cy="11.2"
                                          fill="none"
                                          r={2}
                                          strokeMiterlimit={10}
                                        />
                                        <line
                                          fill="none"
                                          strokeMiterlimit={10}
                                          x1="10.5"
                                          x2="14.4"
                                          y1="7.3"
                                          y2="7.3"
                                        />
                                        <polyline
                                          fill="none"
                                          points="1.5 9.8 .5 9.8 .5 1.8 10 1.8 10 9.1"
                                          strokeLinejoin="round"
                                          strokeMiterlimit={10}
                                        />
                                        <polyline
                                          fill="none"
                                          points="9.9 3.8 14 3.8 14.5 10.2 11.9 10.2"
                                          strokeLinejoin="round"
                                          strokeMiterlimit={10}
                                        />
                                      </g>
                                    </svg>{" "}
                                    Giao hàng thành công
                                  </span>
                                </a>
                                <div
                                  className="shopee-drawer"
                                  id="pc-drawer-id-1"
                                  tabIndex={0}
                                >
                                  <svg
                                    enableBackground="new 0 0 15 15"
                                    viewBox="0 0 15 15"
                                    x={0}
                                    y={0}
                                    className="shopee-svg-icon icon-help"
                                  >
                                    <g>
                                      <circle
                                        cx="7.5"
                                        cy="7.5"
                                        fill="none"
                                        r="6.5"
                                        strokeMiterlimit={10}
                                      />
                                      <path
                                        d="m5.3 5.3c.1-.3.3-.6.5-.8s.4-.4.7-.5.6-.2 1-.2c.3 0 .6 0 .9.1s.5.2.7.4.4.4.5.7.2.6.2.9c0 .2 0 .4-.1.6s-.1.3-.2.5c-.1.1-.2.2-.3.3-.1.2-.2.3-.4.4-.1.1-.2.2-.3.3s-.2.2-.3.4c-.1.1-.1.2-.2.4s-.1.3-.1.5v.4h-.9v-.5c0-.3.1-.6.2-.8s.2-.4.3-.5c.2-.2.3-.3.5-.5.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5s.1-.4.1-.7c0-.4-.2-.7-.4-.9s-.5-.3-.9-.3c-.3 0-.5 0-.7.1-.1.1-.3.2-.4.4-.1.1-.2.3-.3.5 0 .2-.1.5-.1.7h-.9c0-.3.1-.7.2-1zm2.8 5.1v1.2h-1.2v-1.2z"
                                        stroke="none"
                                      />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="bv3eJE" tabIndex={0}>
                                Hoàn thành
                              </div>
                            </div>
                          </div>
                        </section>
                        <div className="kG_yF0" />
                        <section>
                          <h3 className="a11y-hidden" />
                          <a
                             className=" cursor-pointer" 
                            aria-label=""
                            // href=""
                            onClick={() => setShowDetails(true)}
                          >
                            <div>
                              <div className="bdAfgU">
                                <div className="FNHV0p">
                                  <div>
                                    <section>
                                      <div className="mZ1OWk">
                                        <div className="dJaa92">
                                          <img
                                            src="../../assets/logo_shopee_1.png"
                                            className="gQuHsZ"
                                            alt=""
                                            tabIndex={0}
                                          />
                                          <div className="nmdHRf">
                                            <div>
                                              <div className="zWrp4w">
                                                <span
                                                  className="DWVWOJ"
                                                  tabIndex={0}
                                                >
                                                  Tên sản phẩm 
                                                </span>
                                              </div>
                                            </div>
                                            <div>
                                              <div className="j3I_Nh" tabIndex={0}>
                                                xSL
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ylYzwa" tabIndex={0}>
                                          <div className="YRp1mm">
                                            <span className="q6Gzj5">₫9.000</span>
                                            <span className="nW_6Oi PNlXhK">
                                              ₫5.500
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </section>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </section>
                      </div>
                    </div>
                    <div className="vOQBhV">
                      <div className="SEVp9k ngSTcE"> </div>
                      <div className="SEVp9k tJeibe"> </div>
                    </div>
                    <div className="LwXnUQ">
                      <div className="NWUSQP">
                        <label className="juCcT0">Thành tiền:</label>
                        <div
                          className="t7TQaf"
                          tabIndex={0}
                          aria-label="Thành tiền: ₫58.500"
                        >
                          ₫5.500xSL
                        </div>
                      </div>
                    </div>
                    <div className="yyqgYp">
                      <div className="iwUeSD">
                        <div>
                          <span
                            className="CDsaN0"
                            aria-label="Đánh giá sản phẩm trước 21-02-2025"
                            tabIndex={0}
                          >
                            Đánh giá sản phẩm trước{" "}
                            <div
                              className="shopee-drawer"
                              id="pc-drawer-id-2"
                              tabIndex={0}
                            >
                              <u
                                className="GQOPby"
                                aria-describedby="0.64417656326394"
                              >
                                21-02-2025
                              </u>
                            </div>
                          </span>
                        </div>
                        <span className="f423Cb">Đánh giá ngay và nhận 200 Xu</span>
                      </div>
                      <section className="po9nwN">
                        <h3 className="a11y-hidden" />
                        <div className="aAXjeK">
                          <div>
                            <button className="stardust-button stardust-button--primary QY7kZh">
                              Đánh giá
                            </button>
                          </div>
                        </div>
                        <div className="hbQXWm">
                          <div>
                            <button className="stardust-button stardust-button--secondary QY7kZh">
                              Liên hệ Người bán
                            </button>
                          </div>
                        </div>
                        <div className="hbQXWm">
                          <div>
                            <button className="stardust-button stardust-button--secondary QY7kZh">
                              Mua lại
                            </button>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                )}
              </section>
            </main>
          </div>
        </div>
      ) : (
        <div className="ashFMQ">
        <main className="gZSLwa">
            <section>
            <div className="yHE9Y5">
                <button className="yMANId" onClick={() => setShowDetails(false)}>
                <svg
                    enableBackground="new 0 0 11 11"
                    viewBox="0 0 11 11"
                    x={0}
                    y={0}
                    className="shopee-svg-icon icon-arrow-left"
                >
                    <g>
                    <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                    </g>
                </svg>
                <span>TRỞ LẠI</span>
                </button>
                <div className="a_0nqh">
                <span tabIndex={0}>MÃ ĐƠN HÀNG. 250118TJYYXNF8</span>
                <span className="ewYlfp">|</span>
                <span
                    className="f4gWe1"
                    aria-role="region"
                    aria-live="polite"
                    tabIndex={0}
                >
                    Đơn hàng đã hoàn thành
                </span>
                </div>
            </div>
            </section>
            <section>
            <div className="vOQBhV">
                <div className="SEVp9k ngSTcE"> </div>
                <div className="SEVp9k tJeibe"> </div>
            </div>
            <div className="RgsTlq">
                <div className="stepper">
                <div
                    className="stepper__step stepper__step--finish"
                    aria-label="Đơn hàng đã đặt, , 22:35 18-01-2025"
                    tabIndex={0}
                >
                    <div className="stepper__step-icon stepper__step-icon--finish">
                    <svg
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-order-order"
                    >
                        <g>
                        <path
                            d="m5 3.4v23.7c0 .4.3.7.7.7.2 0 .3 0 .3-.2.5-.4 1-.5 1.7-.5.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1s1.7.4 2.2 1.1c.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.9 0 1.7.4 2.2 1.1.2.2.3.4.5.4s.3-.2.5-.4c.5-.7 1.4-1.1 2.2-1.1.7 0 1.2.2 1.7.5.2.2.3.2.3.2.3 0 .7-.4.7-.7v-23.7z"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <g>
                            <line
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            x1={10}
                            x2={22}
                            y1="11.5"
                            y2="11.5"
                            />
                            <line
                            fill="none"
                            strokeLinecap="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            x1={10}
                            x2={22}
                            y1="18.5"
                            y2="18.5"
                            />
                        </g>
                        </g>
                    </svg>
                    </div>
                    <div className="stepper__step-text">Đơn hàng đã đặt</div>
                    <div className="stepper__step-date">22:35 18-01-2025</div>
                </div>
                <div
                    className="stepper__step stepper__step--finish"
                    aria-label="Đơn hàng đã thanh toán (₫58.500), , 22:36 18-01-2025"
                    tabIndex={0}
                >
                    <div className="stepper__step-icon stepper__step-icon--finish">
                    <svg
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-order-paid"
                    >
                        <g>
                        <path
                            clipRule="evenodd"
                            d="m24 22h-21c-.5 0-1-.5-1-1v-15c0-.6.5-1 1-1h21c .5 0 1 .4 1 1v15c0 .5-.5 1-1 1z"
                            fill="none"
                            fillRule="evenodd"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <path
                            clipRule="evenodd"
                            d="m24.8 10h4.2c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1h-21c-.6 0-1-.4-1-1v-4"
                            fill="none"
                            fillRule="evenodd"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <path
                            d="m12.9 17.2c-.7-.1-1.5-.4-2.1-.9l.8-1.2c.6.5 1.1.7 1.7.7.7 0 1-.3 1-.8 0-1.2-3.2-1.2-3.2-3.4 0-1.2.7-2 1.8-2.2v-1.3h1.2v1.2c.8.1 1.3.5 1.8 1l-.9 1c-.4-.4-.8-.6-1.3-.6-.6 0-.9.2-.9.8 0 1.1 3.2 1 3.2 3.3 0 1.2-.6 2-1.9 2.3v1.2h-1.2z"
                            stroke="none"
                            fill="#2dc258"
                        />
                        </g>
                    </svg>
                    </div>
                    <div className="stepper__step-text">
                    Đơn hàng đã thanh toán (₫58.500)
                    </div>
                    <div className="stepper__step-date">22:36 18-01-2025</div>
                </div>
                <div
                    className="stepper__step stepper__step--finish"
                    aria-label="Đã giao cho ĐVVC, , 15:16 20-01-2025"
                    tabIndex={0}
                >
                    <div className="stepper__step-icon stepper__step-icon--finish">
                    <svg
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-order-shipping"
                    >
                        <g>
                        <line
                            fill="none"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            x1="18.1"
                            x2="9.6"
                            y1="20.5"
                            y2="20.5"
                        />
                        <circle
                            cx="7.5"
                            cy="23.5"
                            fill="none"
                            r={4}
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <circle
                            cx="20.5"
                            cy="23.5"
                            fill="none"
                            r={4}
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <line
                            fill="none"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            x1="19.7"
                            x2={30}
                            y1="15.5"
                            y2="15.5"
                        />
                        <polyline
                            fill="none"
                            points="4.6 20.5 1.5 20.5 1.5 4.5 20.5 4.5 20.5 18.4"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <polyline
                            fill="none"
                            points="20.5 9 29.5 9 30.5 22 24.7 22"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        </g>
                    </svg>
                    </div>
                    <div className="stepper__step-text">Đã giao cho ĐVVC</div>
                    <div className="stepper__step-date">15:16 20-01-2025</div>
                </div>
                <div
                    className="stepper__step stepper__step--finish"
                    aria-label="Đã nhận được hàng, , 17:44 22-01-2025"
                    tabIndex={0}
                >
                    <div className="stepper__step-icon stepper__step-icon--finish">
                    <svg
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-order-received"
                    >
                        <g>
                        <polygon
                            fill="none"
                            points="2 28 2 19.2 10.6 19.2 11.7 21.5 19.8 21.5 20.9 19.2 30 19.1 30 28"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <polyline
                            fill="none"
                            points="21 8 27 8 30 19.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <polyline
                            fill="none"
                            points="2 19.2 5 8 11 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                        />
                        <line
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit={10}
                            strokeWidth={3}
                            x1={16}
                            x2={16}
                            y1={4}
                            y2={14}
                        />
                        <path
                            d="m20.1 13.4-3.6 3.6c-.3.3-.7.3-.9 0l-3.6-3.6c-.4-.4-.1-1.1.5-1.1h7.2c.5 0 .8.7.4 1.1z"
                            fill="#2dc258"
                        />
                        </g>
                    </svg>
                    </div>
                    <div className="stepper__step-text">Đã nhận được hàng</div>
                    <div className="stepper__step-date">17:44 22-01-2025</div>
                </div>
                <div
                    className="stepper__step stepper__step--pending"
                    aria-label="đánh giá: "
                    tabIndex={0}
                >
                    <div className="stepper__step-icon stepper__step-icon--pending">
                    <svg
                        enableBackground="new 0 0 32 32"
                        viewBox="0 0 32 32"
                        x={0}
                        y={0}
                        className="shopee-svg-icon icon-order-rating"
                    >
                        <polygon
                        fill="none"
                        points="16 3.2 20.2 11.9 29.5 13 22.2 19 24.3 28.8 16 23.8 7.7 28.8 9.8 19 2.5 13 11.8 11.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        strokeWidth={3}
                        />
                    </svg>
                    </div>
                    <div className="stepper__step-text">đánh giá</div>
                    <div className="stepper__step-date" />
                </div>
                <div className="stepper__line">
                    <div
                    className="stepper__line-background"
                    style={{ background: "rgb(224, 224, 224)" }}
                    />
                    <div
                    className="stepper__line-foreground"
                    style={{
                        width: "calc(100% - 140px)",
                        background: "rgb(45, 194, 88)"
                    }}
                    />
                </div>
                </div>
            </div>
            </section>
            <section>
            <div className="vOQBhV">
                <div className="SEVp9k ngSTcE"> </div>
                <div className="SEVp9k tJeibe"> </div>
            </div>
            <div>
                <div className="TCV5k7">
                <div className="CwM4QF" tabIndex={0}>
                    <span>
                    Đánh giá sản phẩm trước ngày{" "}
                    <div
                        className="stardust-popover FXi2TT"
                        id="stardust-popover9"
                        tabIndex={0}
                    >
                        <div role="button" className="stardust-popover__target">
                        <div>
                            <u>21-02-2025</u>
                        </div>
                        </div>
                    </div>{" "}
                    để nhận 200 Shopee xu!
                    </span>
                    <br />
                    <br />
                </div>
                <div className="m4BV8O">
                    <div>
                    <button className="stardust-button stardust-button--primary QY7kZh">
                        Đánh giá
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section>
            <div className="vOQBhV">
                <div className="SEVp9k ngSTcE"> </div>
                <div className="SEVp9k tJeibe"> </div>
            </div>
            <div>
                <div className="TCV5k7">
                <div className="CwM4QF" />
                <div className="m4BV8O">
                    <div>
                    <button className="stardust-button stardust-button--secondary QY7kZh">
                        Liên hệ Người bán
                    </button>
                    </div>
                </div>
                </div>
                <div className="TCV5k7">
                <div className="CwM4QF" />
                <div className="m4BV8O">
                    <div>
                    <button className="stardust-button stardust-button--secondary QY7kZh">
                        Mua lại
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section>
            <div>
                <div className="TWLNg9">
                <div className="MOYo7t" />
                </div>
                <div className="As_i5J">
                <div className="sZoQ_a">
                    <div className="S2fAjM" tabIndex={0}>
                    Địa chỉ nhận hàng
                    </div>
                    <div className="ECYCKw">
                    <div className="Azh6RS">
                        <div>
                        <div>SPX Express</div>
                        <div>SPXVN058571789451</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="PC1hTf">
                    <div className="jXhS5s">
                    <div className="BWtzco" tabIndex={0}>
                        Username
                    </div>
                    <div className="rRE7pF">
                        <span tabIndex={0}>(+84) 123456789123456789</span>
                        <br />
                        <span tabIndex={0}>
                        227 Nguyễn Văn Cừ
                        </span>
                    </div>
                    </div>
                    <div className="vI5S3N">
                    <div>
                        <div className="J5ACWV I7tulI">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <img
                                className="ZreXno"
                                title="image"
                                alt="Đã giao"
                                src="https://cf.shopee.vn/file/delivered_parcel_active_3x"
                            />
                            </div>
                            <div className="e73NiD">11:34 22-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks">Đã giao</p>
                            <p>Giao hàng thành công</p>
                            <div>
                                <span>Người nhận hàng: Uyên Phương--. </span>
                            </div>
                            <p />
                            </div>
                        </div>
                        </div>
                        <div className="J5ACWV">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <img
                                className="ZreXno"
                                title="image"
                                alt="Đang vận chuyển"
                                src="https://cf.shopee.vn/file/domestic_transit_3x"
                            />
                            </div>
                            <div className="e73NiD">07:10 22-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks">Đang vận chuyển</p>
                            <p>
                                Đơn hàng sẽ sớm được giao, vui lòng chú ý điện thoại
                            </p>
                            <div />
                            <p />
                            </div>
                        </div>
                        </div>
                        <div className="J5ACWV">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <div className="VEkEcn" />
                            </div>
                            <div className="e73NiD">07:10 22-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks" />
                            <p>Đã sắp xếp tài xế giao hàng</p>
                            <div />
                            <p />
                            </div>
                        </div>
                        </div>
                        <div className="J5ACWV">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <div className="VEkEcn" />
                            </div>
                            <div className="e73NiD">22:38 21-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks" />
                            <p>
                                Đơn hàng đã đến trạm giao hàng tại khu vực của bạn
                                Thành Phố Thủ Đức, TP. Hồ Chí Minh
                                và sẽ được giao trong vòng 24 giờ tiếp theo
                            </p>
                            <div />
                            <p />
                            </div>
                        </div>
                        </div>
                        <div className="J5ACWV">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <div className="VEkEcn" />
                            </div>
                            <div className="e73NiD">19:41 21-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks" />
                            <p>Đơn hàng đã rời kho phân loại</p>
                            <div />
                            <p />
                            </div>
                        </div>
                        </div>
                        <div className="J5ACWV">
                        <div className="SFVZ1q" />
                        <div className="qhDYac">
                            <div className="OFUToM">
                            <div className="VEkEcn" />
                            </div>
                            <div className="e73NiD">21:18 20-01-2025</div>
                            <div className="LKrsme">
                            <p className="bVaMks" />
                            <p>
                                Đơn hàng đã đến kho phân loại Xã Tân Phú Trung, Huyện Củ
                                Chi, TP. Hồ Chí Minh
                            </p>
                            <div />
                            <p />
                            </div>
                        </div>
                        </div>
                    </div>
                    <span className="fQNud3">Xem thêm</span>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section>
            <div>
                <section>
                <h3 className="a11y-hidden" />
                <div className="qj8u7l">
                    <div className="P2JMvg">
                    <div className="RBPP9y">
                        <div className="Koi0Pw">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={70}
                            height={16}
                            fill="none"
                        >
                            <title>Preferred Seller Plus</title>
                            <path
                            fill="#EE4D2D"
                            fillRule="evenodd"
                            d="M0 2C0 .9.9 0 2 0h66a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2z"
                            clipRule="evenodd"
                            />
                            <g clipPath="url(#clip0)">
                            <path
                                fill="#fff"
                                d="M8.7 13H7V8.7L5.6 6.3A828.9 828.9 0 004 4h2l2 3.3a1197.3 1197.3 0 002-3.3h1.6L8.7 8.7V13zm7.9-1.7h1.7c0 .3-.2.6-.5 1-.2.3-.5.5-1 .7l-.6.2h-.8c-.5 0-1 0-1.5-.2l-1-.8a4 4 0 01-.9-2.4c0-1 .3-1.9 1-2.6a3 3 0 012.4-1l.8.1a2.8 2.8 0 011.3.7l.4.6.3.8V10h-4.6l.2 1 .4.7.6.5.7.1c.4 0 .7 0 .9-.2l.2-.6v-.1zm0-2.3l-.1-1-.3-.3c0-.2-.1-.2-.2-.3l-.8-.2c-.3 0-.6.2-.9.5l-.3.5a4 4 0 00-.3.8h3zm-1.4-4.2l-.7.7h-1.4l1.5-2h1.1l1.5 2h-1.4l-.6-.7zm8.1 1.6H25V13h-1.7v-.5.1H23l-.7.5-.9.1-1-.1-.7-.4c-.3-.2-.4-.5-.6-.8l-.2-1.3V6.4h1.7v3.7c0 1 0 1.6.3 1.7.2.2.5.3.7.3h.4l.4-.2.3-.3.3-.5.2-1.4V6.4zM34.7 13a11.2 11.2 0 01-1.5.2 3.4 3.4 0 01-1.3-.2 2 2 0 01-.5-.3l-.3-.5-.2-.6V7.4h-1.2v-1h1.1V5h1.7v1.5h1.9v1h-2v3l.2 1.2.1.3.2.2h.3l.2.1c.2 0 .6 0 1.3-.3v1zm2.4 0h-1.7V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.4.4.2.7V13h-1.6V9.3 8.1l-.4-.6-.6-.2a1 1 0 00-.4.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.1.5-.1.9V13zm5.4-6.6H44V13h-1.6V6.4zm-.8-.9l1.8-2h1.8l-2.1 2h-1.5zm7.7 5.8H51v.5l-.4.5a2 2 0 01-.4.4l-.6.3-1.4.2c-.5 0-1 0-1.4-.2l-1-.7c-.3-.3-.5-.7-.6-1.2-.2-.4-.3-.9-.3-1.4 0-.5.1-1 .3-1.4a2.6 2.6 0 011.6-1.8c.4-.2.9-.3 1.4-.3.6 0 1 .1 1.5.3.4.1.7.4 1 .6l.2.5.1.5h-1.6c0-.3-.1-.5-.3-.6-.2-.2-.4-.3-.8-.3s-.8.2-1.2.6c-.3.4-.4 1-.4 2 0 .9.1 1.5.4 1.8.4.4.8.6 1.2.6h.5l.3-.2.2-.3v-.4zm4 1.7h-1.6V3.5h1.7v3.4a3.7 3.7 0 01.2-.1 2.8 2.8 0 013.4 0l.3.4.3.7V13h-1.6V9.3L56 8.1c-.1-.3-.2-.5-.4-.6l-.6-.2a1 1 0 00-.3.1 2 2 0 00-.4.2l-.3.3a3 3 0 00-.3.5l-.2.5V13z"
                            />
                            </g>
                            <g clipPath="url(#clip1)">
                            <path
                                fill="#fff"
                                d="M63 8.2h2.2v1.6H63V12h-1.6V9.8h-2.2V8.2h2.2V6H63v2.3z"
                            />
                            </g>
                            <defs>
                            <clipPath id="clip0">
                                <path
                                fill="#fff"
                                d="M0 0h55v16H0z"
                                transform="translate(4)"
                                />
                            </clipPath>
                            <clipPath id="clip1">
                                <path
                                fill="#fff"
                                d="M0 0h7v16H0z"
                                transform="translate(59)"
                                />
                            </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <div className="UDaMW3" tabIndex={0}>
                        Bánh tráng Lý Phì
                        </div>
                        <div className="B2SOGC">
                        <button className="stardust-button stardust-button--primary">
                            <svg
                            viewBox="0 0 17 17"
                            className="shopee-svg-icon icon-btn-chat"
                            style={{ fill: "white" }}
                            >
                            <g fillRule="evenodd">
                                <path
                                d="M13.89 0C14.504 0 15 .512 15 1.144l-.003.088-.159 2.117.162.001c.79 0 1.46.558 1.618 1.346l.024.15.008.154v9.932a1.15 1.15 0 01-1.779.963l-.107-.08-1.882-1.567-7.962.002a1.653 1.653 0 01-1.587-1.21l-.036-.148-.021-.155-.071-.836h-.01L.91 13.868a.547.547 0 01-.26.124L.556 14a.56.56 0 01-.546-.47L0 13.429V1.144C0 .512.497 0 1.11 0h12.78zM15 4.65l-.259-.001-.461 6.197c-.045.596-.527 1.057-1.106 1.057L4.509 11.9l.058.69.01.08a.35.35 0 00.273.272l.07.007 8.434-.001 1.995 1.662.002-9.574-.003-.079a.35.35 0 00-.274-.3L15 4.65zM13.688 1.3H1.3v10.516l1.413-1.214h10.281l.694-9.302zM4.234 5.234a.8.8 0 011.042-.077l.187.164c.141.111.327.208.552.286.382.131.795.193 1.185.193s.803-.062 1.185-.193c.225-.078.41-.175.552-.286l.187-.164a.8.8 0 011.042 1.209c-.33.33-.753.579-1.26.753A5.211 5.211 0 017.2 7.4a5.211 5.211 0 01-1.706-.28c-.507-.175-.93-.424-1.26-.754a.8.8 0 010-1.132z"
                                fillRule="nonzero"
                                />
                            </g>
                            </svg>
                            <span>chat</span>
                        </button>
                        </div>
                        <a
                        className="Mr26O7  cursor-pointer"
                        // href=""
                        >
                        <div className="stardust-button">
                            <svg
                            enableBackground="new 0 0 15 15"
                            viewBox="0 0 15 15"
                            x={0}
                            y={0}
                            className="shopee-svg-icon icon-btn-shop"
                            >
                            <path d="m15 4.8c-.1-1-.8-2-1.6-2.9-.4-.3-.7-.5-1-.8-.1-.1-.7-.5-.7-.5h-8.5s-1.4 1.4-1.6 1.6c-.4.4-.8 1-1.1 1.4-.1.4-.4.8-.4 1.1-.3 1.4 0 2.3.6 3.3l.3.3v3.5c0 1.5 1.1 2.6 2.6 2.6h8c1.5 0 2.5-1.1 2.5-2.6v-3.7c.1-.1.1-.3.3-.3.4-.8.7-1.7.6-3zm-3 7c0 .4-.1.5-.4.5h-8c-.3 0-.5-.1-.5-.5v-3.1c.3 0 .5-.1.8-.4.1 0 .3-.1.3-.1.4.4 1 .7 1.5.7.7 0 1.2-.1 1.6-.5.5.3 1.1.4 1.6.4.7 0 1.2-.3 1.8-.7.1.1.3.3.5.4.3.1.5.3.8.3zm.5-5.2c0 .1-.4.7-.3.5l-.1.1c-.1 0-.3 0-.4-.1s-.3-.3-.5-.5l-.5-1.1-.5 1.1c-.4.4-.8.7-1.4.7-.5 0-.7 0-1-.5l-.6-1.1-.5 1.1c-.3.5-.6.6-1.1.6-.3 0-.6-.2-.9-.8l-.5-1-.7 1c-.1.3-.3.4-.4.6-.1 0-.3.1-.3.1s-.4-.4-.4-.5c-.4-.5-.5-.9-.4-1.5 0-.1.1-.4.3-.5.3-.5.4-.8.8-1.2.7-.8.8-1 1-1h7s .3.1.8.7c.5.5 1.1 1.2 1.1 1.8-.1.7-.2 1.2-.5 1.5z" />
                            </svg>
                            <span>Xem Shop</span>
                        </div>
                        </a>
                    </div>
                    <div className="jgIyoX">
                        <div
                        className="stardust-popover n9Tl39"
                        id="stardust-popover10"
                        tabIndex={0}
                        >
                        <div role="button" className="stardust-popover__target">
                            <div>
                            <svg
                                width={16}
                                height={16}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                clipRule="evenodd"
                                d="M8 15A7 7 0 108 1a7 7 0 000 14z"
                                stroke="#000"
                                strokeOpacity=".54"
                                />
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 6a1 1 0 100-2 1 1 0 000 2zM7.25 7.932v3.636c0 .377.336.682.75.682s.75-.305.75-.682V7.932c0-.377-.336-.682-.75-.682s-.75.305-.75.682z"
                                fill="#000"
                                fillOpacity=".54"
                                />
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="ElUDW8" />
                    <div className="FNHV0p">
                    <div>
                        <section>
                        <a
                            className="mZ1OWk cursor-pointer"
                            aria-label=""
                            // href=""
                        >
                            <div className="dJaa92">
                            <img
                                src="https://down-vn.img.susercontent.com/file/7bef7876c841659a7a9f70726efa23b9_tn"
                                className="gQuHsZ"
                                alt=""
                                tabIndex={0}
                            />
                            <div className="nmdHRf">
                                <div>
                                <div className="zWrp4w">
                                    <span className="DWVWOJ" tabIndex={0}>
                                    Bánh Tráng Bơ Tứ Vị
                                    </span>
                                </div>
                                </div>
                                <div>
                                <div className="j3I_Nh" tabIndex={0}>
                                    x10
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="ylYzwa" tabIndex={0}>
                            <div className="YRp1mm">
                                <span className="q6Gzj5">₫90.000</span>
                                <span className="nW_6Oi PNlXhK">₫55.000</span>
                            </div>
                            </div>
                        </a>
                        </section>
                    </div>
                    <div className="PB3XKx" />
                    </div>
                </div>
                <div className="wGEXn5">
                    <div className="kW3VDc">
                    <div className="Vg5MF2">
                        <span>Tổng tiền hàng</span>
                    </div>
                    <div className="Tfejtu">
                        <div>₫55.000</div>
                    </div>
                    </div>
                    <div className="kW3VDc">
                    <div className="Vg5MF2">
                        <span>Phí vận chuyển</span>
                    </div>
                    <div className="Tfejtu">
                        <div>₫18.300</div>
                    </div>
                    </div>
                    <div className="kW3VDc">
                    <div className="Vg5MF2">
                        <span>Giảm giá phí vận chuyển</span>
                        <div
                        className="stardust-popover R3s_PT"
                        id="stardust-popover11"
                        tabIndex={0}
                        >
                        <div role="button" className="stardust-popover__target">
                            <div>
                            <span>
                                <svg
                                width={16}
                                height={16}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    clipRule="evenodd"
                                    d="M8 15A7 7 0 108 1a7 7 0 000 14z"
                                    stroke="#000"
                                    strokeOpacity=".54"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 6a1 1 0 100-2 1 1 0 000 2zM7.25 7.932v3.636c0 .377.336.682.75.682s.75-.305.75-.682V7.932c0-.377-.336-.682-.75-.682s-.75.305-.75.682z"
                                    fill="#000"
                                    fillOpacity=".54"
                                />
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="Tfejtu">
                        <div>-₫14.800</div>
                    </div>
                    </div>
                    <div className="kW3VDc WKCLpC">
                    <div className="Vg5MF2 oKK6bX">
                        <span>Thành tiền</span>
                    </div>
                    <div className="Tfejtu">
                        <div className="PUZuMi">₫58.500</div>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            </section>
            <section>
            <div className="OrQ7SU">
                <div className="vOQBhV">
                <div className="SEVp9k ngSTcE"> </div>
                <div className="SEVp9k tJeibe"> </div>
                </div>
                <div className="kW3VDc">
                <div className="Vg5MF2">
                    <span>
                    <span className="jy0lDq">Phương thức Thanh toán</span>
                    </span>
                </div>
                <div className="Tfejtu">
                    <div>SPayLater</div>
                    <div className="mRXz_o" />
                </div>
                </div>
            </div>
            </section>
        </main>
        </div>
      )}
    </>

  );
};
