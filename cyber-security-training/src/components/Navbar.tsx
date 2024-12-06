// components/Navbar.jsx
import Link from "next/link";
import "./Navbar.css"; // 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href={"/"}>
          Accueil
        </Link>
        <Link href={"/Quizs"}>
          Quizzes
        </Link>
        <Link href={"/learn"}>
          Modèle
        </Link>
      </div>
      <button className="connect-btn">Connecté / Déconnecté</button>
    </nav>
  );
};

export default Navbar;
