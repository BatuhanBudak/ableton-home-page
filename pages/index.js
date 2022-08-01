import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import studiopic from "../public/studio.jpeg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <Image src={studiopic} alt="Man creating music in studio" />
        </div>

        <h1>My ableton page</h1>
      </main>
      <Footer />
    </>
  );
}
