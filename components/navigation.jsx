import Link from "next/link";
import styles from "./nav.module.css";

function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a className={styles.rodi}>Hakkımda</a>
      </Link>{" "}
      <Link href="/">
        <a style={{ color: "purple" }}>Ana Sayfa</a>
      </Link>
      <p>Lorem ipsum dolor sit amet.</p>
    </nav>
  );
}

export default Navigation;
