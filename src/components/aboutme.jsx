import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function AboutMe() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const username = "apozinn";
    const cache = [];
    const complet = [];

    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          function percentage(partialValue, totalValue) {
            return Math.round((partialValue / totalValue) * 100);
          }

          data.forEach((pj, index) => {
            if (pj.language) cache.push(pj.language);
            if (index === data.length - 1) {
              cache.forEach((x) => {
                const length = cache.filter((p) => p === x).length;
                complet.push({
                  name: x,
                  percentage: percentage(length, cache.length),
                });
                setLanguages(complet);
              });
            }
          });
        }
      });
  }, []);

  return (
    <div className={styles.aboutmeContainer} id="about">
      <div className={styles.aboutMain}>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aliquam consectetur elit et massa gravida, in
          fermentum nisi convallis. Proin aliquet ante sit amet efficitur
          posuere. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Donec quis placerat nibh. Vivamus sed
          maximus nulla, a scelerisque turpis. Nullam sed condimentum velit, eu
          eleifend lectus. Mauris pellentesque augue tellus, sit amet porta
          mauris mollis vel. Ut sagittis lorem ac est lobortis, eget laoreet
          augue laoreet. Mauris a risus blandit, molestie elit in, gravida
          lectus
        </p>
        <div className={styles.userLanguages}>
          {languages.length === 0 ? (
            <></>
          ) : (
            <>
              {languages.map((pj, index) => (
                <div key={index} className={styles.language}>
                  {pj.name} {pj.percentage}%
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <div className={styles.aboutmeAvatar}>
        <Image
          src="https://avatars.githubusercontent.com/u/64103472?v=4"
          alt=""
          width="300rem"
          height="300rem"
        />
      </div>
    </div>
  );
}
