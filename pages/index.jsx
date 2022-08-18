import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Icon } from "@iconify/react";
import NavBar from "../src/components/navBar";
import AboutMe from "../src/components/aboutme";
import Projects from "../src/components/projects";
import Footer from "../src/components/footer";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const text = document.getElementsByClassName(styles.progressText)[0];
    var words = ["full stack", "mobile", "desktop"],
      part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 15,
      speed = 70;
    var wordflick = function () {
      setInterval(function () {
        if (forwards) {
          if (offset >= words[i].length) {
            ++skip_count;
            if (skip_count == skip_delay) {
              forwards = false;
              skip_count = 0;
            }
          }
        } else {
          if (offset == 0) {
            forwards = true;
            i++;
            offset = 0;
            if (i >= len) {
              i = 0;
            }
          }
        }
        part = words[i].substr(0, offset);
        if (skip_count == 0) {
          if (forwards) {
            offset++;
          } else {
            offset--;
          }
        }
        text.innerText = `Hi! i'm a ${part} developer!`;
      }, speed);
    };

    wordflick();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Apozinn | portfolio</title>
        <meta name="description" content="Template de portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.mobileMenu}>
          <li className={styles.liLinks} id={styles.linksMobileMenu}>
            <Link href="/#contact">Contact</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#about">About me</Link>
            <Link
              href="https://github.com/apozinn/reactjs-portfolio"
              target="blank"
            >
              <a className={styles.gitCloneButtons}>
                <Icon icon="bi:git" width="20" /> Clone
              </a>
            </Link>
          </li>
        </div>
        <div className={styles.row}>
          <div>
            <h3 className={styles.animateCharcter}>Hello world!</h3>
          </div>
          <p className={styles.progressText}></p>
          <button
            className={styles.showmemore}
            onClick={() => window.scrollTo(0, 700)}
          >
            <span></span>
            <div>
              <Icon icon="humbleicons:rocket" width="20" />
            </div>
            <text>Show me more!</text>
          </button>
        </div>
      </main>
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
