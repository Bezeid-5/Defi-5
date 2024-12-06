// components/Navbar.jsx
import Link from "next/link";
import "./Navbar.css"; 
import Image from "next/image"; // Import de la balise Image
import Profile from "../images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={Profile} alt="Logo" width={40} height={40} />
      </div>
      <div className="nav-links">
        <Link href={"/"}>Accueil</Link>
        <Link href={"/Quizs"}>Quizzes</Link>
        <Link href={"/learn"}>Modèles</Link>
      </div>
      <button className="connect-btn">Se Connecter</button>
    </nav>
  );
};

export default Navbar;
