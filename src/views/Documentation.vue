<template>
  <DocHeader />
  <DocNav @docNav="docCase = $event" />
  <DocAPI v-if="docCase === 'api'" />
  <DocIntro v-if="docCase === 'intro'" />
  <DocInstall v-if="docCase === 'install'" />
  <DocResources v-if="docCase === 'resources'" />
</template>
<script>
import DocNav from "./documentation/DocNav";
import DocAPI from "./documentation/DocAPI";
import DocIntro from "./documentation/DocIntro";
import DocHeader from "./documentation/DocHeader";
import DocInstall from "./documentation/DocInstall";
import DocResources from "./documentation/DocResources";
import { ref } from "vue";
export default {
  components: {
    DocAPI,
    DocNav,
    DocIntro,
    DocHeader,
    DocInstall,
    DocResources,
  },
  setup() {
    const docs = ref([]);
    const docCase = ref("intro");
    return { docs, docCase };
  },
};
</script>
<style>
.doc {
  width: 90%;
  padding: 2rem;
  margin: 2rem auto;
  color: var(--secondary);
  background: var(--lessLighter);
}
.doc > * {
  margin-bottom: 1rem;
  width: 100%;
}
.doc h2 {
  margin-bottom: 2rem;
  text-align: center;
}
.doc p {
  text-align: justify;
}
/* doc infos */
.command {
  width: auto;
  min-width: 30%;
  padding: 3px 1rem;
  word-spacing: 5px;
  color: var(--grey);
  word-wrap: break-word;
}
.doc-info {
  padding: 1.5rem;
  background: var(--light);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.doc-info:hover {
  box-shadow: 0 5px 10px rgb(0 0 0 / 15%);
}
.doc-info .command {
  border-left: 2px solid var(--secondary);
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
.doc-info:nth-of-type(2n + 1) {
  border-left: 3px solid var(--yellow);
}
.doc-info:nth-of-type(2n + 2) {
  border-left: 3px solid var(--primaryLight);
}
.doc-info:nth-of-type(2n + 3) {
  border-left: 3px solid var(--green);
}
.doc-info:nth-of-type(2n + 4) {
  border-left: 3px solid var(--red);
}
.doc-info:nth-of-type(2n + 1) > h4,
.doc-info:nth-of-type(2n + 1) > h4 a {
  color: var(--yellow);
}
.doc-info:nth-of-type(2n + 2) > h4,
.doc-info:nth-of-type(2n + 2) > h4 a {
  color: var(--primaryLight);
}
.doc-info:nth-of-type(2n + 3) > h4,
.doc-info:nth-of-type(2n + 3) > h4 a {
  color: var(--green);
}
.doc-info:nth-of-type(2n + 4) > h4,
.doc-info:nth-of-type(2n + 4) > h4 a {
  color: var(--red);
}
@media screen and (max-width: 640px) {
  .doc {
    width: 95%;
    padding: 2rem 1rem;
  }
  .doc-info {
    padding: 1.5rem 0.8rem;
  }
}
</style>
