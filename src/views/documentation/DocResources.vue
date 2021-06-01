<template>
  <div class="flex flex-column doc doc-res">
    <h2>PicAlbum Resources</h2>
    <p>
      In this paragraph, i'll be sharing all the resource that helped me accomplish this project, and i say 'thank you very much' to everyone participated to build these resource.
    </p>
    <p>
      <ul class="grid grid-4">
        <li v-for="(link,index) in links" :key="index"><a
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          >{{link.val}}</a
        ></li>
      </ul>
    </p>
  </div>
</template>
<script>
export default {
  setup() {
    const links = [
      {url:'https://nodejs.org/en/',val:'node js'},
      {url:'https://vuejs.org/',val:'vue js'},
      {url:'https://www.python.org/',val:'python'},
      {url:'https://flask.palletsprojects.com/',val:'flask'},
      {url:'https://www.postgresql.org/docs/',val:'postgres'},
      {url:'https://firebase.google.com/',val:'firebase'},
      {url:'https://github.com/',val:'github'},
      {url:'https://www.netlify.com/',val:'netlify'},
      {url:'https://www.heroku.com/',val:'heroku'},
      {url:'https://unsplash.com/',val:'unsplash'},
      {url:'https://www.w3schools.com/',val:'w3schools'},
      {url:'https://stackoverflow.com/',val:'stackoverflow'}
    ]
    return{links}
  },
}
</script>
<style>
.doc-res h2 {
  color: var(--primaryLight);
}
.doc-res li{
  cursor: pointer;
  text-align: center;
  text-transform: capitalize;
  background: var(--lessLight);
}
.doc-res li a{
  width: 100%;
  padding: 1rem;
  display: block;
  color: var(--secondary);
}
.doc-res li:hover a{
  color:var(--grey);
  background: var(--primaryLighter);
  box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
}
@media screen and (max-width: 640px) {
  .doc-res .grid-4 {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 340px) {
  .doc-res .grid-4 {
    grid-template-columns: 1fr;
  }
}
</style>
