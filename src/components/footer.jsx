import styles from "../../styles/Home.module.css";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCredits} id="contact">
        <p>Make for</p>
        <a href="http://github.com/apozinn/">Apozinn</a>
      </div>
      <a
        href="http://github.com/apozinn/reactjsportfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit the repository
        <Icon icon="akar-icons:github-fill" width="15" />
      </a>
      <p>@ 2022</p>
    </footer>
  );
}
