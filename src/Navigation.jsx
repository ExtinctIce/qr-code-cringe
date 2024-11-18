import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'column'}}>
      <Link to="/generate">Генерация QR </Link>
      <Link to="/scan">Сканер </Link>
    </nav>
  );
};

export default Navigation;
