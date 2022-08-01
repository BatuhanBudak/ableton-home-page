import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <h1>My ableton page</h1>
      </main>
      <Footer />
    </>
  );
}
