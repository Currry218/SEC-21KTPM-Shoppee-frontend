// Component
import "../../css/user/coin.css";
import { useState, useEffect } from "react";
export const ShopeeCoin = () => {
  const [hasCoin, setHasCoin] = useState(false);
  useEffect(() => {
    setHasCoin(true); 
  }, []);

  return (
  <div style={{ display: "contents" }}>
    <div>
      <div className="lkwJtG">
        <img
          className="xRnpg_"
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/coins/75efaf1b556a8e2fac6a.png"
        />
        <div className="YRMUSY">0</div>
        <div>
          <div className="F683nJ">
            <div className="S2jaSi">Xu đang có</div>
            <div className="shopee-drawer" id="pc-drawer-id-1" tabIndex={0}>
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x={0}
                y={0}
                className="shopee-svg-icon gYOMjx icon-help"
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
          <div className="F683nJ">
            <div className="pbfywM">
              <a href="/user/coin/expiration/">
                0 Shopee Xu sẽ hết hạn vào{" "}
                <svg
                  enableBackground="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  x={0}
                  y={0}
                  className="shopee-svg-icon rEiraU icon-arrow-right"
                >
                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <a className="z3kSK9" href="">
          Nhận thêm Xu!
          <svg
            enableBackground="new 0 0 11 11"
            viewBox="0 0 11 11"
            x={0}
            y={0}
            className="shopee-svg-icon i14aAZ icon-arrow-right"
          >
            <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
          </svg>
        </a>
      </div>
      { hasCoin ? (
         <div className="n8307W">
          <p>Bạn chưa có Xu nào.</p>
          <a className="q_Ltjm">Làm sao để kiếm Xu?</a>
        </div> 
       ) : ( 
        <div>
          <div className="mw4smb">
            <div className="HtRjAY Lmb8Qr">TẤT CẢ LỊCH SỬ</div>
            <div className="HtRjAY">ĐÃ NHẬN</div>
            <div className="HtRjAY">ĐÃ DÙNG</div>
          </div>
          <div className="MIs3RN">
            <div>
              <div>
                <div className="MfcbPl">
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="{0}"
                    y="{0}"
                    className="shopee-svg-icon CQS6kv"
                  >
                    <linearGradient
                      id="coingold-a"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="2.9694"
                      x2="12.0447"
                      y1="-811.8111"
                      y2="-823.427"
                    >
                      <stop offset="{0}" stopColor="#f6c430" />
                      <stop offset=".5281" stopColor="#ffecaa" />
                      <stop offset=".6639" stopColor="#fdde82" />
                      <stop offset=".9673" stopColor="#f7bc1e" />
                      <stop offset="{1}" stopColor="#f6b813" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-b"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="7.5"
                      x2="7.5"
                      y1="-810.2517"
                      y2="-824.9919"
                    >
                      <stop offset="{0}" stopColor="#e49b00" />
                      <stop offset=".9416" stopColor="#d67b00" />
                      <stop offset="{1}" stopColor="#d57900" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-c"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="4.0932"
                      x2="10.9068"
                      y1="-813.5499"
                      y2="-821.6702"
                    >
                      <stop offset="{0}" stopColor="#f99d00" />
                      <stop offset=".1752" stopColor="#eea10b" />
                      <stop offset=".5066" stopColor="#fcd21f" />
                      <stop offset=".6657" stopColor="#f2ba10" />
                      <stop offset="{1}" stopColor="#d57900" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-d"
                      gradientUnits="userSpaceOnUse"
                      x1="5.4204"
                      x2="9.7379"
                      y1="5.0428"
                      y2="10.188"
                    >
                      <stop offset="{0}" stopColor="#ffec88" />
                      <stop offset=".5003" stopColor="#fdf4cb" />
                      <stop offset=".7556" stopColor="#fceba4" />
                      <stop offset="{1}" stopColor="#fae17a" />
                    </linearGradient>
                    <g>
                      <circle cx="7.5" cy="7.5" fill="url(#coingold-a)" r="7.4" />
                      <path
                        d="m7.5.4c3.9 0 7.1 3.2 7.1 7.1s-3.2 7.1-7.1 7.1-7.1-3.2-7.1-7.1 3.2-7.1 7.1-7.1m0-.3c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4z"
                        fill="url(#coingold-b)"
                      />
                      <path
                        d="m14.4 7.7c0-.1 0-.1 0-.2 0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v.2c.1-3.7 3.1-6.7 6.9-6.7s6.8 3 6.9 6.7z"
                        fill="#fff5c9"
                      />
                      <circle cx="7.5" cy="7.5" fill="url(#coingold-c)" r="5.3" />
                      <path
                        d="m11.4 4c1.1 1 1.8 2.4 1.8 3.9 0 2.9-2.4 5.3-5.3 5.3-1.6 0-3-.7-3.9-1.8.9.8 2.2 1.4 3.5 1.4 2.9 0 5.3-2.4 5.3-5.3 0-1.4-.5-2.6-1.4-3.5z"
                        fill="#ffeead"
                      />
                      <path
                        d="m11.4 4c-1-1.1-2.4-1.8-3.9-1.8-2.9 0-5.3 2.4-5.3 5.3 0 1.6.7 3 1.8 3.9-.8-.9-1.4-2.2-1.4-3.5 0-2.9 2.4-5.3 5.3-5.3 1.4 0 2.6.5 3.5 1.4z"
                        fill="#c97201"
                      />
                      <path
                        d="m6.2 4.8c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.1-1.2-.5-1.6c-.5-.5-2-1-2.4-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                        fill="#c67830"
                      />
                      <path
                        d="m6.1 4.5c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.2-1.2-.6-1.6c-.5-.5-1.9-1-2.3-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                        fill="url(#coingold-d)"
                      />
                    </g>
                  </svg>
                  <div className="YBwiJC">
                    <div className="zs5dk4">Nhiệm vụ hàng ngày</div>
                    <div className="xX9jxJ">
                      <div className="c4I_Je">
                        Hoàn thành Xem và nhấn vào sản phẩm (3)
                      </div>
                    </div>
                    <div className="A0xKoZ">02:04 19-01-2025</div>
                  </div>
                  <div className="V4NzHd X5kf07">+100</div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="MfcbPl">
                  <svg
                    enableBackground="new 0 0 15 15"
                    viewBox="0 0 15 15"
                    x="{0}"
                    y="{0}"
                    className="shopee-svg-icon CQS6kv"
                  >
                    <linearGradient
                      id="coingold-a"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="2.9694"
                      x2="12.0447"
                      y1="-811.8111"
                      y2="-823.427"
                    >
                      <stop offset="{0}" stopColor="#f6c430" />
                      <stop offset=".5281" stopColor="#ffecaa" />
                      <stop offset=".6639" stopColor="#fdde82" />
                      <stop offset=".9673" stopColor="#f7bc1e" />
                      <stop offset="{1}" stopColor="#f6b813" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-b"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="7.5"
                      x2="7.5"
                      y1="-810.2517"
                      y2="-824.9919"
                    >
                      <stop offset="{0}" stopColor="#e49b00" />
                      <stop offset=".9416" stopColor="#d67b00" />
                      <stop offset="{1}" stopColor="#d57900" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-c"
                      gradientTransform="matrix(1 0 0 -1 0 -810.11)"
                      gradientUnits="userSpaceOnUse"
                      x1="4.0932"
                      x2="10.9068"
                      y1="-813.5499"
                      y2="-821.6702"
                    >
                      <stop offset="{0}" stopColor="#f99d00" />
                      <stop offset=".1752" stopColor="#eea10b" />
                      <stop offset=".5066" stopColor="#fcd21f" />
                      <stop offset=".6657" stopColor="#f2ba10" />
                      <stop offset="{1}" stopColor="#d57900" />
                    </linearGradient>
                    <linearGradient
                      id="coingold-d"
                      gradientUnits="userSpaceOnUse"
                      x1="5.4204"
                      x2="9.7379"
                      y1="5.0428"
                      y2="10.188"
                    >
                      <stop offset="{0}" stopColor="#ffec88" />
                      <stop offset=".5003" stopColor="#fdf4cb" />
                      <stop offset=".7556" stopColor="#fceba4" />
                      <stop offset="{1}" stopColor="#fae17a" />
                    </linearGradient>
                    <g>
                      <circle cx="7.5" cy="7.5" fill="url(#coingold-a)" r="7.4" />
                      <path
                        d="m7.5.4c3.9 0 7.1 3.2 7.1 7.1s-3.2 7.1-7.1 7.1-7.1-3.2-7.1-7.1 3.2-7.1 7.1-7.1m0-.3c-4.1 0-7.4 3.3-7.4 7.4s3.3 7.4 7.4 7.4 7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4z"
                        fill="url(#coingold-b)"
                      />
                      <path
                        d="m14.4 7.7c0-.1 0-.1 0-.2 0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9v.2c.1-3.7 3.1-6.7 6.9-6.7s6.8 3 6.9 6.7z"
                        fill="#fff5c9"
                      />
                      <circle cx="7.5" cy="7.5" fill="url(#coingold-c)" r="5.3" />
                      <path
                        d="m11.4 4c1.1 1 1.8 2.4 1.8 3.9 0 2.9-2.4 5.3-5.3 5.3-1.6 0-3-.7-3.9-1.8.9.8 2.2 1.4 3.5 1.4 2.9 0 5.3-2.4 5.3-5.3 0-1.4-.5-2.6-1.4-3.5z"
                        fill="#ffeead"
                      />
                      <path
                        d="m11.4 4c-1-1.1-2.4-1.8-3.9-1.8-2.9 0-5.3 2.4-5.3 5.3 0 1.6.7 3 1.8 3.9-.8-.9-1.4-2.2-1.4-3.5 0-2.9 2.4-5.3 5.3-5.3 1.4 0 2.6.5 3.5 1.4z"
                        fill="#c97201"
                      />
                      <path
                        d="m6.2 4.8c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.1-1.2-.5-1.6c-.5-.5-2-1-2.4-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                        fill="#c67830"
                      />
                      <path
                        d="m6.1 4.5c-.5.4-.6 1.1-.5 1.7.1.5.5 1 1.1 1.3.7.4 2.4.8 2.4 1.7 0 .2-.1.5-.2.6-.3.4-.8.5-1.3.5-.3 0-.7-.1-1-.2s-.6-.3-.9-.5c-.2-.1-.4 0-.5.1-.1.2 0 .4.1.5.5.4 1 .7 1.7.8.6.1 1.3.1 1.8-.2.5-.2.9-.6 1-1.2s-.2-1.2-.6-1.6c-.5-.5-1.9-1-2.3-1.3-.3-.2-.6-.5-.6-1 .1-.6.5-.9 1.1-.9.5 0 1.1.1 1.6.4.4.3.8-.4.4-.7-1-.6-2.5-.7-3.3 0z"
                        fill="url(#coingold-d)"
                      />
                    </g>
                  </svg>
                  <div className="YBwiJC">
                    <div className="zs5dk4">Đăng nhập mỗi ngày</div>
                    <div className="xX9jxJ">
                      <div className="c4I_Je">Shopee Xu từ Đăng nhập mỗi ngày</div>
                    </div>
                    <div className="A0xKoZ">07:46 09-11-2024</div>
                  </div>
                  <div className="V4NzHd X5kf07">+100</div>
                </div>
              </div>
            </div>
            <div className="xabX6m">
              <div className="d_Q5IH" />
            </div>
            <div className="AsKLmj">
              <div className="i8u9bH">
                Only transactions within the past year are displayed
              </div>
            </div>
          </div>
        </div>

      )} 
    </div>
  </div>
    );
}