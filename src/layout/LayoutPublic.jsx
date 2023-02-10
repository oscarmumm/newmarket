import { Outlet } from "react-router-dom";
import NavBar from '../components/NavBar/NavBar';
import '../styles/LayoutPublic.css';


const LayoutPublic = () => {
  return (
    <div>
      <NavBar />
      <main className="main-container">
        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default LayoutPublic;