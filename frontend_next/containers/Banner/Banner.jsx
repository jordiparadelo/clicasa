import React from "react";
// styles
import styles from "styles/Banner.module.scss";

const Banner = ({ title, description, cta, background }) => {
  const backgroundFormat = background.src
    ? `url(${background.src}); mix-blend-mode: multiply`
    : background;

  return (
    <section className={`${styles.Banner}`}>
      <div className="wrapper">
        <h2 className={`${styles.Banner__title}`}>{title}</h2>
        <p className={`${styles.Banner__description}`}>{description}</p>
        <a className={`${styles.Banner__cta}`} href={cta.link}>
          {cta.slug}
        </a>
      </div>
      <div
        className={`${styles.Banner__background}`}
        style={{ "--background": backgroundFormat }}
      ></div>
    </section>
  );
};

export default Banner;

Banner.defaultProps = {
  title: "Banner Titulo",
  description: "Banner descripción",
  cta: { slug: "CTA llamativo 👀", link: "#" },
  background: "var(--primary-color)",
};
