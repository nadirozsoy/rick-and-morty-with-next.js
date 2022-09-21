import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import slug from "slug";
import styles from "./index.module.css";

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>THE RİCK AND MORTY</h1>
      <ul className={styles.ul}>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a className={styles.index}>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
// npm i isomorphic-unfetch
// hem aşağıdaki function içine hemde yukarda function içine fetch yazabilmek için entegre ediyoruz
export async function getStaticProps() {
  // data fetch
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await data.json();
  return {
    props: {
      characters, //sadece characters yazsakta yeterli
    },
  };
}
export default HomePage;
