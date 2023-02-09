import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
