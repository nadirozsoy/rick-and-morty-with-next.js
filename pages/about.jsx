import Layout from "../components/layout";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./about.module.css";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
      </Head>
      <h1>Hi I'm Nadir</h1>
      <a target={"_blank"}
        className={styles.a}
        href="http://www.linkedin.com/in/thisisnadirozsoy"
      >
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
    </Layout>
  );
}

export default HomePage;
