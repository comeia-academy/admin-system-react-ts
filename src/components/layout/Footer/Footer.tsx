// ** Imports do React
import React from "react";

// ** Imports de estilos
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy;{`${new Date().getFullYear()} 
        Admin System Example. All rights reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
