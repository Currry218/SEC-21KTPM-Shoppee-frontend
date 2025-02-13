import { useState, useEffect } from "react";
import "../../../css/user/noti.css";
export const WalletUpdate = () => {
  const [hasUpdate, setHasUpdate] = useState(false);
  useEffect(() => {
    setHasUpdate(true);
  }, []);

  return (
    <div className="IrZf_8">
      {hasUpdate ? (
        <>
          <div className="O0Qwe1">
            <p className="H9A7A1">Đánh dấu Đã đọc tất cả</p>
          </div>
          <div className="">
            <div className="GcTO7X TMxIaH">
              <div className="aSYeAd C1ZEAN">
                <div className="hpnUjt S5e_vG">
                  <div
                    className="S5e_vG lI6EAf"
                    style={{
                      backgroundImage:
                        'url("https://down-vn.img.susercontent.com/file/sg-11134004-23030-vkwbpewuuwov8a_tn")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
              <div className="GW05Oq x5N6B_">
                <h1 className="ybzrhK">Giao dịch thanh toán thành công</h1>
                <div className="z79imF">
                  Giao dịch <b>4691608766033680</b> thanh toán thành công qua{" "}
                  <b>ShopeePay</b>. Số tiền <b>₫28,500</b> đã được trừ.
                </div>
                <div className="wKtCwb">
                  <p className="P4C008">01:02 10-02-2025</p>
                </div>
              </div>
              <div className="fGqoBg">
                <button className="uam1qn _fxJ8_">Xem chi tiết</button>
              </div>
            </div>
            <div className="GcTO7X TMxIaH">
              <div className="aSYeAd C1ZEAN">
                <div className="hpnUjt S5e_vG">
                  <div
                    className="S5e_vG lI6EAf"
                    style={{
                      backgroundImage:
                        'url("https://down-vn.img.susercontent.com/file/sg-11134004-23030-vkwbpewuuwov8a_tn")',
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
              <div className="GW05Oq x5N6B_">
                <h1 className="ybzrhK">Giao dịch thanh toán thành công</h1>
                <div className="z79imF">
                  Giao dịch <b>6657708113936680</b> thanh toán thành công qua{" "}
                  <b>ShopeePay</b>. Số tiền <b>₫110,288</b> đã được trừ.
                </div>
                <div className="wKtCwb">
                  <p className="P4C008">15:13 01-02-2025</p>
                </div>
              </div>
              <div className="fGqoBg">
                <button className="uam1qn _fxJ8_">Xem chi tiết</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="b9mXmi">
          <div className="hpnUjt gdRhxs">
            <img
              width="invalid-value"
              height="invalid-value"
              className="gdRhxs lI6EAf"
              style={{ objectFit: "contain" }}
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/71532df534188bbb.png"
            />
          </div>
          <p>No update yet</p>
        </div>
      )}
    </div>
  );
};
