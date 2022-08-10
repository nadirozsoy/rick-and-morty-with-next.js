import Head from "next/head";
import Navigation from "./navigation";

function layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* meta etiketi zaten responsive tasarım için gerekli */}
        <title>Nadir'in web sitesi</title>
        {/* eğer title belirtmezsem sayfalara boş olanların title ında bu yazacak */}
      </Head>
      <Navigation></Navigation>
      <main>{children}</main>
      <footer>design by Nadir</footer>
    </div>
  );
}

export default layout;
