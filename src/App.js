import cx from "classnames";

import { Layout } from "./components/Layout";
import { MoviesList } from "./components/MoviesList";
import { Title } from "./components/Title";
import styles from "./App.module.css";
import movies from "./data/movies.json";

const description =
  "A collection of fantastical films you now get to enjoy because of peer pressure.";
const title = "Josh's Movies!";

export default function App() {
  return (
    <Layout>
      <Title>
        <span className={styles.unbroken}>Welcome to</span>{" "}
        <span
          className={cx(styles.me, styles.unbroken)}
          href="https://nextjs.org"
        >
          {title}
        </span>
      </Title>

      <p className={styles.description}>{description}</p>

      <MoviesList movies={movies} />
    </Layout>
  );
}
