import styles from "../topView/topView.module.css";  // CSS モジュールを適用
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <Link to="/privacy-policy" className={styles.footerLink}>プライバシーポリシー</Link>
        <Link to="/contact" className={styles.footerLink}>お問い合わせ</Link>
        <Link to="/company" className={styles.footerLink}>運営会社</Link>
      </nav>
    </footer>
  );
};

export default Footer;

