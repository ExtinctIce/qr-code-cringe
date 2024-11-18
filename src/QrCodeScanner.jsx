import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";
import s from "./QRScannerStyle.module.css";
import { SCAN_DATA } from "./constData";

const QrCodeScanner = () => {
  const [ScRes, useScRes] = useState(null);
  function scanHandler(result) {
    useScRes(result[0].rawValue);
  }
  console.log(SCAN_DATA)
  return (
    <div className={s.container}>
      <p className={s.txt}>Наведите QR-код на камеру</p>
      <Scanner
        allowMultiple
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: { width: 250, height: 250 },
        }}
      />
      <p className={s.txt}>{ScRes}</p>
    </div>
  );
};

export default QrCodeScanner;
