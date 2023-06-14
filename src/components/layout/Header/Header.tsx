// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Sistema Admin - Example</h1>
      </div>
    </header>
  );
};

export default Header;
