import Navigation from "./Navigation";
import QrCodeGenerator from "./QrCodeGenerator";
import QrCodeScanner from "./QrCodeScanner";
import { Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />}/>
        <Route path="/scan" element={<QrCodeScanner />}>
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
