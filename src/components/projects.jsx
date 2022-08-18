import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const username = "apozinn";
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setProjects(data);
      });
  }, []);

  function ProjectImg({ pj }) {
    var pjImg = pj.owner.avatar_url;

    const link = `https://raw.githubusercontent.com/${pj.owner.login}/${pj.name}/main/image.png`;
    fetch(link).then((res) => {
      if (res.status === 200) {
        pjImg = link;
      } else {
        try {
          var localImg = require(`../assets/${pj.name}.png`);
          if (localImg) pjImg = localImg.default.src;
        } catch (err) {}
      }
    });

    return <Image src={pjImg} alt="" width="200rem" height="150rem" />;
  }

  return (
    <div className={styles.projectsContainer} id="projects">
      {projects.map((pj, index) => {
        if (pj.description)
          return (
            <div key={index} className={styles.project}>
              <ProjectImg pj={pj} />
              <div>
                <p className={styles.pjName}>{pj.name}</p>
                <p className={styles.pjDescription}>{pj.description}</p>
                <div className={styles.pjAbout}>
                  <p>Owner: {pj.owner.login}</p>
                  <p>Tags: {pj.topics.join(", ")}</p>
                  <p>Language: {pj.language}</p>
                </div>
                <div className={styles.pjButtons}>
                  <a
                    href={pj.homepage}
                    className={styles.pjButton}
                    id={styles.pjVisit}
                  >
                    Visit
                  </a>
                  <a
                    href={pj.html_url}
                    className={styles.pjButton}
                    id={styles.pjCode}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
}
