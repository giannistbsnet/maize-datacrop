import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function HeroBanner(): React.JSX.Element {
  return (
    <div className="hero-banner">
      <div className="hero-banner__content">
        <p className="hero-banner__subtitle">Data Collection Routing &amp; Processing</p>
        <h1 className="hero-banner__title">DataCROP&#8482;</h1>
        <p className="hero-banner__description">
          A configurable framework for real-time data collection, transformation,
          filtering, and management across IoT and cybersecurity domains. Driven by
          configurability, extensibility, dynamic setup, stream handling capabilities
          and Blockchain (Ledger) support.
        </p>
        <div className="hero-banner__buttons">
          <Link className="hero-banner__btn hero-banner__btn--primary" to="/home">
            Overview
          </Link>
          <Link className="hero-banner__btn hero-banner__btn--secondary" to="/Setup">
            Installation &amp; Setup
          </Link>
          <a
            className="hero-banner__btn hero-banner__btn--secondary"
            href="https://github.com/datacrop"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function VersionCards(): React.JSX.Element {
  return (
    <section className="homepage-section">
      <div className="homepage-section__container">
        <h2 className="homepage-section__title">Technologies &amp; Framework</h2>
        <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 1rem', opacity: 0.8 }}>
          DataCROP has been developed and applied in various iterations, within the
          context of various EU projects, with different dependencies.
        </p>
        <div className="version-cards">
          <div className="version-card">
            <div className="version-card__name">DataCROP Barley</div>
            <div className="version-card__version">v1.0 — FAR-EDGE EU Project</div>
            <div className="version-card__description">
              First generation of the DataCROP framework with optional Blockchain support.
            </div>
            <ul className="version-card__tech-list">
              <li>MongoDB</li>
              <li>Apache Kafka</li>
              <li>RabbitMQ</li>
              <li>Kafka Streams</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Hyperledger Fabric</li>
            </ul>
          </div>
          <div className="version-card">
            <div className="version-card__name">DataCROP Farro</div>
            <div className="version-card__version">v2.0 — PROPHESY EU Project</div>
            <div className="version-card__description">
              Second generation adding multi-language algorithm support (Java, Python, R).
            </div>
            <ul className="version-card__tech-list">
              <li>MongoDB</li>
              <li>Apache Kafka</li>
              <li>RabbitMQ</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Java Algorithms</li>
              <li>Python Algorithms</li>
              <li>R Algorithms</li>
            </ul>
          </div>
          <div className="version-card">
            <div className="version-card__name">DataCROP Maize 🌽</div>
            <div className="version-card__version">v3.0 — Under Construction 🚧</div>
            <div className="version-card__description">
              Third generation expanding observability with ELK Stack integration.
            </div>
            <ul className="version-card__tech-list">
              <li>MongoDB</li>
              <li>Apache Kafka</li>
              <li>ELK Stack</li>
              <li>More coming…</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}



function MaturityTimeline(): React.JSX.Element {
  return (
    <section className="homepage-section">
      <div className="homepage-section__container">
        <h2 className="homepage-section__title">Maturity Level / Active Years</h2>
        <div className="trl-timeline">
          <div className="trl-item">
            <span className="trl-badge">TRL 6</span>
            <div className="trl-info">
              <strong>V1.0 — Barley</strong>
              <span>Designed/Developed and demonstrated under the FAR-EDGE (2016–2019) project</span>
            </div>
          </div>
          <div className="trl-item">
            <span className="trl-badge">TRL 6</span>
            <div className="trl-info">
              <strong>V2.0 — Farro</strong>
              <span>Designed/Developed under H2020 PROPHESY (2017–2020). Demonstrated under QU4LITY (2019–2022)</span>
            </div>
          </div>
          <div className="trl-item">
            <span className="trl-badge">TRL 4</span>
            <div className="trl-info">
              <strong>V3.0 — Maize (Under Design/Development)</strong>
              <span>SecureIoT (2018–2021), IoTAC (2020–2023), STAR (2020–2023)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinksSection(): React.JSX.Element {
  return (
    <section className="homepage-section">
      <div className="homepage-section__container">
        <h2 className="homepage-section__title">Links</h2>
        <div className="links-grid">
          <a className="link-card" href="mailto:datacrop@googlegroups.com">
            <span className="link-card__icon">📧</span>
            Contact DataCROP
          </a>
          <a className="link-card" href="mailto:datacrop@googlegroups.com">
            <span className="link-card__icon">🐛</span>
            Report Issues
          </a>
          <a className="link-card" href="https://groups.google.com/forum/#!forum/datacrop" target="_blank" rel="noopener noreferrer">
            <span className="link-card__icon">💬</span>
            DataCROP Forum
          </a>
          <a className="link-card" href="http://www.datacrop.eu/" target="_blank" rel="noopener noreferrer">
            <span className="link-card__icon">🌐</span>
            Website
          </a>
          <a className="link-card" href="https://hub.docker.com/u/datacrop" target="_blank" rel="noopener noreferrer">
            <span className="link-card__icon">🐳</span>
            DockerHub
          </a>
          <a className="link-card" href="https://www.openhub.net/p/datacrop" target="_blank" rel="noopener noreferrer">
            <span className="link-card__icon">📊</span>
            OpenHUB Stats
          </a>
        </div>
      </div>
    </section>
  );
}

function FutureSteps(): React.JSX.Element {
  return (
    <section className="homepage-section">
      <div className="homepage-section__container">
        <h2 className="homepage-section__title">Future / Interest Steps</h2>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <ul style={{ lineHeight: 2, fontSize: '1.05rem' }}>
            <li>Integrate the design/data models/components into one platform/infrastructure independent solution.</li>
            <li>Support additional data collection, data processing and data offering services.</li>
            <li>Offer an intuitive and user-friendly configuration toolbox (UI).</li>
            <li>Offer data visualization mechanisms (UI).</li>
            <li>Blockchain (Hyperledger Fabric) integration supporting the configurations and results of the solution.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
    >
      <HeroBanner />
      <main>
        <VersionCards />
        <MaturityTimeline />
        <FutureSteps />
        <LinksSection />
      </main>
    </Layout>
  );
}
