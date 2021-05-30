<template>
  <DocHeader />
  <DocNav />
  <Doc v-for="(index, doc) in docs" :key="index" :doc="doc" />
</template>

<script>
import DocHeader from "./documentation/DocHeader";
import DocNav from "./documentation/DocNav";
import Doc from "./documentation/Doc";
import { ref } from "vue";
export default {
  components: {
    DocHeader,
    DocNav,
    Doc,
  },
  setup() {
    const docs = ref([]);
    return { docs };
  },
};
</script>

<style></style>
