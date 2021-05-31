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
}
.doc h2 {
  margin-bottom: 2rem;
}
.doc p {
  text-align: justify;
}
</style>
