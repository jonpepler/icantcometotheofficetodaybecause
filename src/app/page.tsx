"use client";

import { createExcuse } from "@/util/createExcuse";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [excuse, setExcuse] = useState(createExcuse());

  const newExcuse = () => setExcuse(createExcuse());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("beforeunload", newExcuse);
      return () => window.removeEventListener("beforeunload", newExcuse);
    }
  }, []);

  return (
    <main className={styles.main}>
      <h1>i cant come to the office today because</h1>
      <h1 suppressHydrationWarning>{excuse}.</h1>
    </main>
  );
}
