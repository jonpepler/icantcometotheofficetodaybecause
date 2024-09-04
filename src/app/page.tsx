import { createExcuse } from "@/util/createExcuse";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>i cant come to the office today because</h1>
      <h1>{createExcuse()}.</h1>
    </main>
  );
}
