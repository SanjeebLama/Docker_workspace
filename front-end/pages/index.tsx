import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  type Data = {
    id: string;
    title: string;
  };

  const initialData: Data[] = [];

  const [data, setData] = useState<Data[]>(initialData);

  const fetchData = async () => {
    const res = await fetch("http://localhost:4000/");
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Contents here:
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <h1>{item.id}</h1>
                <p>{item.title}</p>
              </div>
            ))}
        </p>
      </main>
    </div>
  );
}