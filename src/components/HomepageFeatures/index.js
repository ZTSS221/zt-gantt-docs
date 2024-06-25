import styles from "./styles.module.css";

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <p>
            Welcome to the documentation for ztGantt Chart Library. This library
            provides a powerful set of tools and functionalities to create
            interactive Gantt charts for project management. This documentation
            will guide you through the installation process, usage instructions,
            and available features of the library.
          </p>
          {/* <img src="/zt-gantt-docs/gantt-img/zt-gantt-screenshot.png" /> */}
          <iframe height="500" width="100%" src="https://zehntech.github.io/zt-gantt/" />
        </div>
      </div>
    </section>
  );
}
