import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <nav>
      <h1>Hoonplayer</h1>
      <button onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
        Library{"  "}
        {isLibraryOpen ? (
          <FontAwesomeIcon icon={faWindowClose} />
        ) : (
          <FontAwesomeIcon icon={faMusic} />
        )}
      </button>
    </nav>
  );
};

export default Nav;
