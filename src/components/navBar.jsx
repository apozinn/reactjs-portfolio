import { useEffect } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function NavBar() {
  useEffect(() => {
    const navBar = document.getElementsByClassName(styles.navBar)[0];
    if (navBar) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 10) {
          navBar.classList.add(styles.floatingNav);
        } else navBar.classList.remove(styles.floatingNav);
      });
    }
  }, []);

  function MobileMenu() {
    const menu = document.getElementsByClassName(styles.mobileMenu)[0];
    if (menu) {
      switch (menu.style.visibility) {
        case "hidden":
          menu.style.visibility = "visible";
          break;
        case "visible":
          menu.style.visibility = "hidden";
          break;
        default:
          menu.style.visibility = "visible";
          break;
      }
    }
  }
  return (
    <div className={styles.navBar}>
      <Image src="/logo.svg" alt="" width="45rem" height="45rem" />
      <li className={styles.liLinks} id={styles.linksNavBar}>
        <Link href="/#contact">Contact</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">About me</Link>
        <Link
          href="https://github.com/apozinn/reactjs-portfolio"
          target="blank"
        >
          <a className={styles.gitCloneButtons} id={styles.gitCloneButton}>
            <Icon icon="bi:git" width="20" /> Clone
          </a>
        </Link>
      </li>
      <div className={styles.navBarMenu} onClick={() => MobileMenu()}>
        <Icon icon="gg:menu-left-alt" width="35" rotate={2} />
      </div>
    </div>
  );
}
