import styles from "../topView.module.css";  // CSS モジュールを適用

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        {/* <Link to="/" className={styles.logo}>Grand Journey</Link> */}
        <a href="/" className={styles.logo}>Grand Journey</a>
      </h1>
      <h1>
        {/* <a href="/">ホーム</a> */}
        <a href="/projects" className={styles.projectLink}>案件一覧</a>
      </h1>
    </header>
  );
};

export default Header;
