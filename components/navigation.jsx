import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/about">
        <a>Hakkımda</a>
      </Link>{" "}
      <Link href="/">
        <a>Ana Sayfa</a>
      </Link>
    </nav>
  );
}

export default Navigation;
