import Link from "next/link";
import styles from "./nav.module.css";

function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a className={styles.hakkımda}>About Me</a>
      </Link>{" "}
      <Link href="/">
        <a className={styles.anasayfa}>Home Page</a>
      </Link>
      {/* <p>Lorem ipsum dolor sit amet.</p> */}
    </nav>
  );
}

export default Navigation;
