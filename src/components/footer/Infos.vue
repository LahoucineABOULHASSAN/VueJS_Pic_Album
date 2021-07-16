<template>
  <div id="infos" className="infos flex flex-column">
    <div className="grid grid-2">
      <div>
        <h5>About Me</h5>
        <small>
          I'm Lahoucine Aboulhassan, thanks for visiting my app, you can find
          more on
          <a
            className="portfolio"
            href="https://aboulhassan.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            >my portfolio</a
          >.
        </small>
      </div>
      <div>
        <h5>Contact Info</h5>
        <small> <i className="phone volume icon"></i> +212700191477 </small>
        <br />
        <small> <i className="mail icon"></i> em.aboulhassan@gmail.com </small>
      </div>
      <div>
        <h5>visit my projects</h5>
        <a
          className="info-link"
          href="https://coviid19tracker.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Covid Tracker
        </a>
        <a
          className="info-link"
          href="https://clothings.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clothing
        </a>
        <a
          className="info-link"
          href="https://servicepro.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ServicePro
        </a>
        <a
          className="info-link"
          href="https://edupro-vue.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          EduPro
        </a>
      </div>
    </div>
  </div>
</template>
<style>
/* Infos Style */
#infos {
  text-align: left;
}
#infos h5 {
  margin: 1rem 0;
  font-size: 1rem;
  color: var(--primaryLight);
}
#infos div div:hover h5 {
  color: var(--red);
  padding-left: 1rem;
}
#infos .info-link {
  display: block;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--light);
  margin-bottom: 0.4rem;
}
#infos .info-link:hover,
#infos .portfolio:hover {
  text-decoration: underline;
}
#infos .portfolio {
  cursor: pointer;
  color: var(--green);
}
</style>
