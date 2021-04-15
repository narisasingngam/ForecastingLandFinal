import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: "Find reference land position",
    imageUrl: "img/refPic.png",
    description: (
      <>
        Find the reference land position to predict land price in the future.
      </>
    ),
  },
  {
    title: "Find the best explainable model for predict land price",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <>
        Find the explainable model with less than 20% error
      </>
    ),
  },
  {
    title: "Predict land price from reference land with best model",
    imageUrl: "img/knnLand.png",
    description: (
      <>
        Predict the land value in Chatuchak district based on nearest reference land.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Forecasting land price</h1>
          <p className="hero__subtitle">Software Engineering Project</p>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("reflot/")}
              >
                Reference land
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted
                )}
                to={useBaseUrl("parcel/")}
              >
                Parcel land lot
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
