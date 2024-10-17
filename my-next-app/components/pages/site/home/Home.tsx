import Footer from "@/components/layouts/site/footer/Footer";
import Header from "@/components/layouts/site/header/Header";
import styles from "./Home.module.scss";
export default function Home() {
  return (
    <div>
      <Header />
      <div id={styles.home_page}>
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the app.</p>
      </div>
      <Footer />
    </div>
  );
}
