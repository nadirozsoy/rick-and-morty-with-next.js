import Link from "next/link";
import styles from "./nav.module.css";

function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a className={styles.rodi}>Hakkımda</a>
      </Link>{" "}
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
    </nav>
  );
}

export default Navigation;
