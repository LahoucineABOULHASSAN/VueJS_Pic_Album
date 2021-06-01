<template>
  <Main />
</template>
<script>
import { Main } from "./components";

export default {
  components: { Main },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap");
@import url("https://fonts.googleapis.com/css?family=Baloo+Chettan+2&display=swap");
:root {
  --primary: #06aabb;
  --secondary: #494949;
  --yellow: #ffc107;
  --green: #06bb57;
  --red: #f74067;
  --grey: #838282;
  --error: #bb0606;
  --primaryLight: #00bcd4;
  --primaryLighter: #80aab841;
  --primaryDark: #03acac;
  --primaryDarker: #0290a0c9;
  --secondaryLight: #bfbfbfc7;
  --lessLight: #c9c9c928;
  --lessLighter: #ebedef;
  --dark: #292929;
  --light: #ffffffc5;

  /* rating */
  --star-size: 28px;
  --star-color: #ddd;
  --star-background: #ffca1b;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all 0.8s ease-in-out;
}
html {
  scroll-behavior: smooth;
}
#app {
  overflow: hidden;
}
.main-app {
  width: 100%;
  height: auto;
  margin: 0 auto;
  max-width: 1920px;
  min-height: 100vh;
  font-family: "Baloo Chettan 2", sans-serif;
}
section:not(footer section, header section) {
  padding: 2rem 1rem;
}
section:not(.copyrights, footer section, header section) {
  margin-top: 3rem;
}
#about,
#contact-us {
  color: var(--dark);
  background: var(--light);
}
.about,
.contact,
.infos {
  padding: 1rem 2.5rem;
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
a,
li {
  font-family: "Roboto Condensed", sans-serif;
}
.grid {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
}
.grid-2 {
  grid-template-columns: 1fr 1fr;
}
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}
.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.flex-row {
  flex-direction: row;
}
.flex-column {
  flex-direction: column;
}
.btn {
  cursor: pointer;
}
.btn-link {
  color: var(--secondary);
}
.btn-link:hover {
  color: var(--primaryDark);
  border-bottom: 1px solid var(--primaryDark);
}
article div p a,
.doc-intro a,
.doc-inst a {
  color: var(--green);
  text-transform: capitalize;
}
article div p a:hover,
.doc-intro a:hover,
.doc-inst a:hover {
  text-decoration: underline;
}
/* Photo Rating style */
.fa-circle {
  color: #1e90ff;
}
.fa-circle-o {
  color: #5f5f5f;
}
.fa-star {
  color: #f5a134;
}
.fa-star-o {
  color: #5f5f5f;
}
@media screen and (max-width: 640px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  .about,
  .contact,
  .infos {
    padding: 1rem;
  }
}
</style>
