import HeroExample from "../../components/hero/HeroExample";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <HeroExample />
    </div>
  );
};

export default HomePage;
