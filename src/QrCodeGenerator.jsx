import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./QrStyle.module.css";

const QrCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [isShowQRcode, setIsShowQRcode] = useState(false);
  function onClickHandler(event) {
    setIsShowQRcode(true);
  }
  function onChangeHandler(event) {
    setValue(event.target.value);
    setIsShowQRcode(false);
  }
  return (
    <div className={s.container}>
      <div className={s.qr}>{isShowQRcode && <QRCodeSVG value={value} size={200}/>}</div>
      <input placeholder="Введите данные для генерации" type="text" value={value} onChange={onChangeHandler} />
      <button onClick={onClickHandler} type="button">
        Сгенерировать QR
      </button>
    </div>
  );
};

export default QrCodeGenerator;
