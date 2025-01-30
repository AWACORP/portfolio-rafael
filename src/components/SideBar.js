import "../styles/Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faUser,
  faFolderTree,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  // Fonction pour scroller vers une section spécifique
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // Animation fluide
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        width: "80px",
        height: "100%",
        alignItems: "center",
      }}
    >
      <div
        className="flex-center"
        style={{
          width: "60px",
          position: "relative",
          background: "yellow",
          height: "450px",
          borderRadius: "0px 25px 25px 0px",
          top: "50%",
          transform: "translateY(-50%)",
          flexDirection: "column",
          fontSize: "24px",
          color: "#E6E6E6",
          backgroundColor: "#5653A8",
          gap: "4rem",
          cursor: "pointer", // Pour indiquer que c'est cliquable
        }}
      >
        <FontAwesomeIcon icon={faHouse} onClick={() => scrollToSection("home")} />
        <FontAwesomeIcon icon={faUser} onClick={() => scrollToSection("about")} />
        <FontAwesomeIcon icon={faFolderTree} onClick={() => scrollToSection("projects")} />
        <FontAwesomeIcon icon={faEnvelope} onClick={() => scrollToSection("contact")} />
      </div>
    </div>
  );
}

export default SideBar;