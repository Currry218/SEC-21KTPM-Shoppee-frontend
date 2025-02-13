import { useState, useEffect } from "react";
import "../../../css/user/noti.css";
export const OrderUpdate = () => {
  const [hasOrder, setHasOrder] = useState(false);
  useEffect(() => {
    setHasOrder(true); 
  }, []);
  const [hasDropdown, setHasDropdown] = useState(true);
  useEffect(() => {
    setHasDropdown(false); 
  }, []);

  return (
    <div className="IrZf_8">
    {hasOrder ? (
      <>
      <div className="O0Qwe1">
        <button className="hlJVPd">Đánh dấu Đã đọc tất cả</button>
      </div>
      <div className="">
        <div className="stardust-dropdown ggKF5j">
          <div className="stardust-dropdown__item-header">
            <div className="GcTO7X TMxIaH">
              <div className="aSYeAd C1ZEAN">
                <div className="hpnUjt S5e_vG">
                  <div
                    className="S5e_vG lI6EAf"
                    style={{
                      backgroundImage:
                        'url("https://down-vn.img.susercontent.com/file/7bef7876c841659a7a9f70726efa23b9_tn")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat"
                    }}
                  />
                </div>
              </div>
              <div className="GW05Oq x5N6B_">
                <h1 className="ybzrhK">Giao kiện hàng thành công</h1>
                <div className="z79imF">
                  Kiện hàng <b>SPXVN058571789451</b> của đơn hàng{" "}
                  <b>250118TJYYXNF8</b> đã giao thành công đến bạn.
                </div>
                <div className="wKtCwb">
                  <p className="P4C008">11:35 22-01-2025</p>
                  <span className="D_Rwfb" onClick={() => setHasDropdown(!hasDropdown)}>
                  {hasDropdown ? (
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x={0}
                      y={0}
                      className="shopee-svg-icon icon-arrow-up"
                    >
                      <g>
                        <path d="m11 8.5c0-.1 0-.2-.1-.3l-5-6c-.1-.1-.3-.2-.4-.2s-.3.1-.4.2l-5 6c-.2.2-.1.5.1.7s.5.1.7-.1l4.6-5.5 4.6 5.5c.2.2.5.2.7.1.1-.1.2-.3.2-.4z" />
                      </g>
                    </svg>

                  ) : (
                    <svg
                      enableBackground="new 0 0 11 11"
                      viewBox="0 0 11 11"
                      x={0}
                      y={0}
                      className="shopee-svg-icon icon-arrow-down"
                    >
                      <g>
                        <path d="m11 2.5c0 .1 0 .2-.1.3l-5 6c-.1.1-.3.2-.4.2s-.3-.1-.4-.2l-5-6c-.2-.2-.1-.5.1-.7s.5-.1.7.1l4.6 5.5 4.6-5.5c.2-.2.5-.2.7-.1.1.1.2.3.2.4z" />
                      </g>
                    </svg>

                  )}

                  </span>
                </div>
              </div>
              <div className="fGqoBg">
                <button className="uam1qn _fxJ8_">Xem chi tiết</button>
              </div>
            </div>
          </div>

          {hasDropdown && 
            <div className="stardust-dropdown__item-body">
              <div className="OJq78J TMxIaH">
                <div className="ldHyQb C1ZEAN">
                  <div className="Z9bROs BrFYFT" />
                </div>
                <div className="vwKthw x5N6B_">
                  <h1 className="mrSRRw">Xác nhận đã nhận hàng</h1>
                  <div className="OyEsaQ">
                    Vui lòng chỉ nhấn ‘Đã nhận được hàng’ khi đơn hàng{" "}
                    <b>250118TJYYXNF8</b> đã được giao đến bạn và sản phẩm không có
                    vấn đề nào. Đánh giá ngay và nhận <b>200</b> xu.
                  </div>
                  <p className="OvS3IX">11:35 22-01-2025</p>
                </div>
              </div>
              <div className="OJq78J TMxIaH">
                <div className="ldHyQb C1ZEAN">
                  <div className="Z9bROs" />
                </div>
                <div className="vwKthw x5N6B_">
                  <h1 className="mrSRRw">Bạn có đơn hàng đang trên đường giao</h1>
                  <div className="OyEsaQ">
                    📣Shipper bảo rằng: đơn hàng <b>250118TJYYXNF8</b> của bạn vẫn
                    đang trong quá trình vận chuyển và dự kiến được giao trong 1-2
                    ngày tới. Vui lòng bỏ qua thông báo này nếu bạn đã nhận được hàng
                    nhé!😊
                  </div>
                  <p className="OvS3IX">11:00 21-01-2025</p>
                </div>
              </div>
              <div className="OJq78J TMxIaH">
                <div className="ldHyQb C1ZEAN">
                  <div className="Z9bROs" />
                </div>
                <div className="vwKthw x5N6B_">
                  <h1 className="mrSRRw">Đang vận chuyển</h1>
                  <div className="OyEsaQ">
                    Đơn hàng <b>250118TJYYXNF8</b> với mã vận đơn{" "}
                    <b>SPXVN058571789451</b> đã được Người bán{" "}
                    <b>Bánh tráng Lý Phì</b> giao cho đơn vị vận chuyển qua phương
                    thức vận chuyển <b>SPX Express</b>.
                  </div>
                  <p className="OvS3IX">15:16 20-01-2025</p>
                </div>
              </div>
              <div className="OJq78J TMxIaH">
                <div className="ldHyQb C1ZEAN">
                  <div className="Z9bROs" />
                </div>
                <div className="vwKthw x5N6B_">
                  <h1 className="mrSRRw">Xác nhận đã thanh toán</h1>
                  <div className="OyEsaQ">
                    Thanh toán cho đơn hàng <b>250118TJYYXNF8</b> thành công. Vui lòng
                    kiểm tra thời gian nhận hàng dự kiến trong phần Chi tiết đơn hàng
                    và tin nhắn (nếu có) từ Người bán tại Shopee Chat - kênh liên hệ
                    duy nhất dành cho Người bán nhé!
                  </div>
                  <p className="OvS3IX">22:36 18-01-2025</p>
                </div>
              </div>
            </div>
          }
        </div>
        <div className="GcTO7X TMxIaH">
          <div className="aSYeAd C1ZEAN">
            <div className="hpnUjt S5e_vG">
              <div
                className="S5e_vG lI6EAf"
                style={{
                  backgroundImage:
                    'url("https://down-vn.img.susercontent.com/file/7bef7876c841659a7a9f70726efa23b9_tn")',
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat"
                }}
              />
            </div>
          </div>
          <div className="GW05Oq x5N6B_">
            <h1 className="ybzrhK">♥️ Voucher dành riêng cho bạn</h1>
            <div className="z79imF">
              Shopee gửi bạn Voucher <b>₫15.000</b> thay lời xin lỗi cho đơn đã giao
              sau ngày Shopee đảm bảo. Lưu Voucher ngay! *Lưu ý: Nếu đơn hàng bị hủy
              hoặc có phát sinh yêu cầu Trả hàng/Hoàn tiền trước khi giao hàng thành
              công, Voucher sẽ không được áp dụng
            </div>
            <div className="wKtCwb">
              <p className="P4C008">01:53 22-01-2025</p>
            </div>
          </div>
          <div className="fGqoBg">
            <button className="uam1qn _fxJ8_">Xem chi tiết</button>
          </div>
        </div>
      </div></>
    ) : (
      <div className="b9mXmi">
      <div className="hpnUjt gdRhxs">
        <img
          width="invalid-value"
          height="invalid-value"
          className="gdRhxs lI6EAf"
          style={{ objectFit: "contain" }}
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/4e653cf704e352fd.png"
        />
      </div>
      <p>No Order Updates yet</p>
    </div>   
    )}
    </div>
  );
}