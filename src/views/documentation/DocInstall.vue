<template>
  <div class="flex flex-column doc doc-inst">
    <h2>Install Packges</h2>
    <p>
      To make your this app run, you must first make sure that
      <a
        href="https://github.com/LahoucineABOULHASSAN/picAlbumAPI"
        target="_blank"
        rel="noopener noreferrer"
        >python 3</a
      >
      is installed, as well as
      <a
        href="https://github.com/LahoucineABOULHASSAN/picAlbumAPI"
        target="_blank"
        rel="noopener noreferrer"
        >Node js</a
      >.
    </p>
    <div class="commands">
      <p class="flex flex-row">
        Run the following command to check if python is installed:<span
          class="command"
          ><i class="icon terminal"></i>python --version</span
        >
      </p>
      <p class="flex flex-row">
        And the next one to check for node js:<span class="command"
          ><i class="icon terminal"></i>npm --version</span
        >
      </p>
    </div>
    <p>
      In the next Lines below, you will get to know how to to install the
      required packages for the API as well as the frontend app.
    </p>
    <div class="doc-info">
      <h4><i class="icon python"></i>Backend with Python 3</h4>
      <br />
      <h5># Python 3 && PostgreSQL</h5>
      <p>
        For the backend server side language i used python, and postgres for the
        database.<br />To Install Python you can check the
        <a
          href="https://docs.python.org/3/using/unix.html#getting-and-installing-the-latest-version-of-python"
          target="_blank"
          rel="noopener noreferrer"
          >python docs.</a
        ><br />
        To install PostgreSQL you can visit
        <a
          href="https://www.postgresql.org/"
          target="_blank"
          rel="noopener noreferrer"
          >the official website.</a
        >
      </p>
      <h5># Key Dependencies</h5>
      <p>
        <a
          href="http://flask.pocoo.org/"
          target="_blank"
          rel="noopener noreferrer"
          >Flask</a
        >: is a lightweight backEnd microservices framework. Flask is required
        to handle requests and responses.<br />
        <a
          href="https://www.sqlalchemy.org/"
          target="_blank"
          rel="noopener noreferrer"
          >SQLAlchemy</a
        >: is the Python SQL toolkit and ORM used ro handle the lightweight
        postgres database. This primarily work in <strong>app.py</strong> and
        can reference <strong>models.py</strong>.<br />
        <a
          href="https://flask-cors.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
          >Flask-CORS</a
        >: is the extension used to handle cross origin requests from the
        frontend server.
      </p>
      <h5># Virtual Enviornment</h5>
      <p>
        I recommend working within a virtual environment whenever using Python
        for projects. This keeps your dependencies for each project separate and
        organaized. Instructions for setting up a virual enviornment for your
        platform can be found
        <a
          href="https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/"
          target="_blank"
          rel="noopener noreferrer"
          >here.</a
        >
      </p>
      <h5># PIP3 Dependencies</h5>
      <p>
        Once you have your virtual environment setup and running, install
        dependencies by naviging to the " <em> /backEnd </em> " directory and
        running:
        <span class="command"
          ><i class="icon terminal"></i>pip3 install -r requirements.txt</span
        >
        This will install all of the required packages included within the
        <strong>requirements.txt</strong> file.
      </p>
      <h5># Database Setup</h5>
      <p>
        This app use a relational database management system which is
        PostgreSQL.<br />
        create a database :
        <span class="command"
          ><i class="icon terminal"></i>createdb -U postgres picalbumdb</span
        >
        Once you create the database, and before you run the app on your
        terminal, run
        <a
          href="https://flask-migrate.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
          >the migration commands</a
        >:<br />
        <span class="command"><i class="icon terminal"></i>flask db init</span>
        <span class="command"
          ><i class="icon terminal"></i>flask db migrate</span
        >
        <span class="command"
          ><i class="icon terminal"></i>flask db upgrade</span
        >
        With Postgres running, restore a database using the
        <strong>picalbumdb.psql</strong> file provided.<br />From the backEnd
        folder in terminal run:
        <span class="command"
          ><i class="icon terminal"></i>psql picalbumdb &lt;
          picalbumdb.pgsql</span
        >
      </p>
    </div>
    <div class="doc-info">
      <h4><i class="icon vuejs"></i>Frontend with Vue JS</h4>
      <br />
      <h5># Node JS && Vue JS</h5>
      <p>
        For the backend server side language i used python, and postgres for the
        database.<br />To Install Node js you can check the
        <a
          href="https://nodejs.org/en/download/"
          target="_blank"
          rel="noopener noreferrer"
          >Node JS.</a
        ><br />
        To install Vue js you can visit
        <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer"
          >their website.</a
        >
      </p>
      <h5># Dependencies</h5>
      <p>
        This project uses NPM to manage software dependencies. NPM Relies on the
        <strong>package.json</strong> file located in the
        <em>/frontEnd</em> directory of the
        <a
          href="https://github.com/LahoucineABOULHASSAN/VueJS_PicAlbum"
          target="_blank"
          rel="noopener noreferrer"
          >app repository</a
        >.<br />
        The required packages of the app listed below:
        <DocJSON :jsonStr="dep" />
        After cloning the repo open your terminal and run the following command:
        <span class="command"
          ><i class="icon terminal"></i>npm install --save</span
        >
        Once everything is correctly installed, you can run the app using:
        <span class="command"><i class="icon terminal"></i>npm run serve</span>
      </p>
      <h5># Virtual Enviornment</h5>
      <p>
        The frontend side uses a <strong>.env</strong> file, to set the url of
        the api, make sure to update the <em>VUE_APP_API_URL</em> key with your
        server side url. And make sure it fits with the api endpoints.
      </p>
    </div>
  </div>
</template>
<script>
import DocJSON from "./DocJSON";
export default {
  components: { DocJSON },
  setup() {
    const dep =
      '{\n   "dependencies":\n\t{\n\t "vue": "^3.0.0",\n\t "axios": "^0.21.1",\n\t "moment": "^2.29.1",\n\t "core-js": "^3.6.5",\n\t "vue-router": "^4.0.0-0",\n\t "highlight.js": "^10.7.2"\n\t}\n}';
    return { dep };
  },
};
</script>
<style>
.doc-inst h2 {
  text-align: center;
  color: var(--green);
}
.doc-inst > * {
  width: 100%;
}
.doc-inst .commands > p {
  margin-top: 2px;
}
.doc-inst p span {
  margin-left: 1rem;
}
.doc-inst p span i.icon {
  font-size: 0.8rem;
  margin-right: 1rem;
}
.command {
  width: auto;
  min-width: 30%;
  padding: 3px 1rem;
  word-spacing: 5px;
  color: var(--grey);
}
.doc-info .command {
  border-left: 2px solid var(--secondary);
}
.doc-info {
  padding: 1.5rem;
  background: var(--light);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.doc-info p {
  margin-left: 5px;
}
.doc-info .command {
  margin: 5px 0;
  display: block;
}
.doc-info h5 {
  margin: 1rem 0;
  padding: 3px;
  color: var(--lessLighter);
  background: var(--secondary);
}
.doc-info:nth-of-type(2n + 0) {
  border-left: 3px solid var(--primaryLight);
}
.doc-info:nth-of-type(2n + 1) {
  border-left: 3px solid var(--green);
}
.doc-info:nth-of-type(2n + 0) > h4 {
  color: var(--primaryLight);
}
.doc-info:nth-of-type(2n + 1) > h4 {
  color: var(--green);
}
</style>
